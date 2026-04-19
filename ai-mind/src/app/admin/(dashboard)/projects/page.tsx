"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createProject, updateProject, type Project } from "@/services/content";
import { collection, getDocs, orderBy, query, doc, deleteDoc } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

const emptyProject: Omit<Project, "id" | "created_at" | "updated_at"> = {
  title: "", slug: "", client_alias: "", sector: "dược phẩm",
  problem_statement: "", intervention_summary: "", services_used: [],
  result_metrics: [], testimonial_quote: "", cover_image_url: "",
  publish_status: "draft",
};

export default function ProjectsPage() {
  const [items, setItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Project> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const db = getDb();
      const snap = await getDocs(query(collection(db, "projects"), orderBy("created_at", "desc")));
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Project));
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
        await createProject(editing as Omit<Project, "id" | "created_at" | "updated_at">);
      } else if (editing.id) {
        const { id, created_at, ...data } = editing as Project;
        await updateProject(editing.id, data);
      }
      setEditing(null); setIsNew(false); load();
    } catch (err) { console.error(err); alert("Lỗi khi lưu."); }
    finally { setSaving(false); }
  }

  async function handleDelete(id: string) {
    if (!confirm("Xác nhận xóa dự án này?")) return;
    const db = getDb();
    await deleteDoc(doc(db, "projects", id));
    load();
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-on-surface">Dự án / Case Study</h1>
          <p className="text-sm text-on-surface-variant mt-1">{items.length} dự án</p>
        </div>
        <button onClick={() => { setEditing({ ...emptyProject }); setIsNew(true); }} className="inline-flex items-center gap-2 rounded-[0.375rem] bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          Thêm dự án
        </button>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 bg-black/40">
          <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[0.5rem] bg-surface-lowest p-8 shadow-ghost-lg">
            <h2 className="font-display text-lg font-bold text-on-surface mb-6">{isNew ? "Thêm dự án" : "Chỉnh sửa dự án"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Tên dự án *</label>
                  <input required value={editing.title || ""} onChange={(e) => setEditing({ ...editing, title: e.target.value, ...(isNew ? { slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-") } : {}) })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Khách hàng (ẩn danh)</label>
                  <input value={editing.client_alias || ""} onChange={(e) => setEditing({ ...editing, client_alias: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Bài toán ban đầu</label>
                <textarea rows={3} value={editing.problem_statement || ""} onChange={(e) => setEditing({ ...editing, problem_statement: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Giải pháp triển khai</label>
                <textarea rows={3} value={editing.intervention_summary || ""} onChange={(e) => setEditing({ ...editing, intervention_summary: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Chỉ số kết quả (mỗi dòng 1 mục)</label>
                <textarea rows={3} value={editing.result_metrics?.join("\n") || ""} onChange={(e) => setEditing({ ...editing, result_metrics: e.target.value.split("\n").filter(Boolean) })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Trích dẫn khách hàng</label>
                <textarea rows={2} value={editing.testimonial_quote || ""} onChange={(e) => setEditing({ ...editing, testimonial_quote: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Lĩnh vực</label>
                  <input value={editing.sector || ""} onChange={(e) => setEditing({ ...editing, sector: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Trạng thái</label>
                  <select value={editing.publish_status || "draft"} onChange={(e) => setEditing({ ...editing, publish_status: e.target.value as Project["publish_status"] })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none">
                    <option value="draft">Nháp</option>
                    <option value="published">Xuất bản</option>
                    <option value="archived">Lưu trữ</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-surface-low">
                <button type="button" onClick={() => { setEditing(null); setIsNew(false); }} className="rounded-[0.375rem] px-5 py-2.5 text-sm font-medium text-on-surface-variant hover:bg-surface-low">Hủy</button>
                <button type="submit" disabled={saving} className="rounded-[0.375rem] bg-primary px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-50">{saving ? "Đang lưu..." : "Lưu"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="rounded-[0.5rem] bg-surface-lowest shadow-ghost overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20"><div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" /></div>
        ) : items.length === 0 ? (
          <div className="px-6 py-16 text-center text-sm text-on-surface-variant">Chưa có dự án nào.</div>
        ) : (
          <table className="w-full text-sm">
            <thead><tr className="bg-surface-low text-left">
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Tên</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Khách hàng</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Lĩnh vực</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Trạng thái</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant text-right">Thao tác</th>
            </tr></thead>
            <tbody>
              {items.map((p) => (
                <tr key={p.id} className="border-t border-surface-low hover:bg-surface-low/50">
                  <td className="px-5 py-3 font-medium text-on-surface">{p.title}</td>
                  <td className="px-5 py-3 text-on-surface-variant">{p.client_alias || "—"}</td>
                  <td className="px-5 py-3 text-on-surface-variant">{p.sector}</td>
                  <td className="px-5 py-3"><span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${p.publish_status === "published" ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"}`}>{p.publish_status === "published" ? "Xuất bản" : p.publish_status === "archived" ? "Lưu trữ" : "Nháp"}</span></td>
                  <td className="px-5 py-3 text-right">
                    <button onClick={() => { setEditing(p); setIsNew(false); }} className="text-xs font-medium text-secondary hover:underline mr-3">Sửa</button>
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
