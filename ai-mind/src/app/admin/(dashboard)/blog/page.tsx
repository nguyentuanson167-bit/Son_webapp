"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPost, publishPost, type BlogPost } from "@/services/content";
import { collection, getDocs, orderBy, query, doc, deleteDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

const emptyPost: Omit<BlogPost, "id" | "created_at" | "updated_at"> = {
  title: "", slug: "", excerpt: "", content_markdown: "",
  cover_image_url: "", author_name: "", category_ids: [],
  tag_list: [], related_service_ids: [], related_standard_ids: [],
  reading_time_min: 5, publish_status: "draft", is_featured: false,
  seo_title: "", seo_description: "", canonical_url: "",
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const db = getDb();
      const snap = await getDocs(query(collection(db, "blog_posts"), orderBy("created_at", "desc")));
      setPosts(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as BlogPost));
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);
    try {
      if (isNew) {
        await createPost(editing as Omit<BlogPost, "id" | "created_at" | "updated_at">);
      } else if (editing.id) {
        const db = getDb();
        const { id, created_at, ...data } = editing as BlogPost;
        await updateDoc(doc(db, "blog_posts", editing.id), { ...data, updated_at: serverTimestamp() });
      }
      setEditing(null); setIsNew(false); load();
    } catch (err) { console.error(err); alert("Lỗi khi lưu."); }
    finally { setSaving(false); }
  }

  async function handlePublish(id: string) {
    await publishPost(id);
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Xác nhận xóa bài viết này?")) return;
    const db = getDb();
    await deleteDoc(doc(db, "blog_posts", id));
    load();
  }

  const statusLabel = (s: string) => s === "published" ? "Xuất bản" : s === "scheduled" ? "Lên lịch" : s === "archived" ? "Lưu trữ" : "Nháp";
  const statusColor = (s: string) => s === "published" ? "bg-emerald-100 text-emerald-700" : s === "scheduled" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600";

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-on-surface">Blog</h1>
          <p className="text-sm text-on-surface-variant mt-1">{posts.length} bài viết</p>
        </div>
        <button onClick={() => { setEditing({ ...emptyPost }); setIsNew(true); }} className="inline-flex items-center gap-2 rounded-[0.375rem] bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          Viết bài mới
        </button>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-6 bg-black/40">
          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[0.5rem] bg-surface-lowest p-8 shadow-ghost-lg">
            <h2 className="font-display text-lg font-bold text-on-surface mb-6">{isNew ? "Bài viết mới" : "Chỉnh sửa bài viết"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Tiêu đề *</label>
                  <input required value={editing.title || ""} onChange={(e) => setEditing({ ...editing, title: e.target.value, ...(isNew ? { slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-") } : {}) })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Tác giả</label>
                  <input value={editing.author_name || ""} onChange={(e) => setEditing({ ...editing, author_name: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Mô tả ngắn</label>
                <textarea rows={2} value={editing.excerpt || ""} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Nội dung (Markdown)</label>
                <textarea rows={12} value={editing.content_markdown || ""} onChange={(e) => setEditing({ ...editing, content_markdown: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm font-mono focus:border-secondary focus:outline-none resize-y" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Tags (phẩy cách)</label>
                  <input value={editing.tag_list?.join(", ") || ""} onChange={(e) => setEditing({ ...editing, tag_list: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Thời gian đọc (phút)</label>
                  <input type="number" value={editing.reading_time_min ?? 5} onChange={(e) => setEditing({ ...editing, reading_time_min: Number(e.target.value) })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">SEO Title</label>
                  <input value={editing.seo_title || ""} onChange={(e) => setEditing({ ...editing, seo_title: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">SEO Description</label>
                <textarea rows={2} value={editing.seo_description || ""} onChange={(e) => setEditing({ ...editing, seo_description: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none" />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={editing.is_featured ?? false} onChange={(e) => setEditing({ ...editing, is_featured: e.target.checked })} className="h-4 w-4 rounded" />
                <span className="text-sm text-on-surface">Bài nổi bật</span>
              </label>
              <div className="flex justify-end gap-3 pt-4 border-t border-surface-low">
                <button type="button" onClick={() => { setEditing(null); setIsNew(false); }} className="rounded-[0.375rem] px-5 py-2.5 text-sm font-medium text-on-surface-variant hover:bg-surface-low">Hủy</button>
                <button type="submit" disabled={saving} className="rounded-[0.375rem] bg-primary px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-50">{saving ? "Đang lưu..." : "Lưu nháp"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="rounded-[0.5rem] bg-surface-lowest shadow-ghost overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20"><div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" /></div>
        ) : posts.length === 0 ? (
          <div className="px-6 py-16 text-center text-sm text-on-surface-variant">Chưa có bài viết nào.</div>
        ) : (
          <table className="w-full text-sm">
            <thead><tr className="bg-surface-low text-left">
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Tiêu đề</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Tác giả</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Tags</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Trạng thái</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant text-right">Thao tác</th>
            </tr></thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-t border-surface-low hover:bg-surface-low/50">
                  <td className="px-5 py-3">
                    <div className="font-medium text-on-surface">{p.title}</div>
                    <div className="text-xs text-on-surface-variant mt-0.5 truncate max-w-[300px]">{p.excerpt}</div>
                  </td>
                  <td className="px-5 py-3 text-on-surface-variant">{p.author_name || "—"}</td>
                  <td className="px-5 py-3 text-on-surface-variant text-xs">{p.tag_list?.slice(0, 3).join(", ") || "—"}</td>
                  <td className="px-5 py-3"><span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${statusColor(p.publish_status)}`}>{statusLabel(p.publish_status)}</span></td>
                  <td className="px-5 py-3 text-right space-x-2">
                    <button onClick={() => { setEditing(p); setIsNew(false); }} className="text-xs font-medium text-secondary hover:underline">Sửa</button>
                    {p.publish_status !== "published" && p.id && (
                      <button onClick={() => handlePublish(p.id!)} className="text-xs font-medium text-emerald-600 hover:underline">Xuất bản</button>
                    )}
                    <button onClick={() => p.id && handleDelete(p.id)} className="text-xs font-medium text-red-500 hover:underline">Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
