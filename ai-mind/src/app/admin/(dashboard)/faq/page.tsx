"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  getActiveFaqItems,
  saveFaqItem,
  updateFaqItem,
  deleteFaqItem,
  type FaqItem,
  type FaqCategory,
} from "@/services/content";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

const categoryLabels: Record<FaqCategory, string> = {
  pricing: "Chi phí",
  scope: "Phạm vi",
  security: "Bảo mật",
  implementation: "Triển khai",
  training: "Đào tạo",
};

export default function FaqPage() {
  const [items, setItems] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<FaqItem> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const db = getDb();
      const snap = await getDocs(query(collection(db, "faq_items"), orderBy("sort_order", "asc")));
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as FaqItem));
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  function startNew() {
    setEditing({ question: "", answer: "", category: "scope", target_page: "home", sort_order: items.length, is_active: true });
    setIsNew(true);
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);
    try {
      if (isNew) {
        await saveFaqItem(editing as Omit<FaqItem, "id" | "created_at" | "updated_at">);
      } else if (editing.id) {
        const { id, created_at, ...data } = editing as FaqItem;
        await updateFaqItem(editing.id, data);
      }
      setEditing(null); setIsNew(false);
      load();
    } catch (err) { console.error(err); alert("Lỗi khi lưu."); }
    finally { setSaving(false); }
  }

  async function handleDelete(id: string) {
    if (!confirm("Xác nhận xóa FAQ này?")) return;
    await deleteFaqItem(id);
    load();
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-on-surface">Câu hỏi thường gặp</h1>
          <p className="text-sm text-on-surface-variant mt-1">{items.length} câu hỏi</p>
        </div>
        <button onClick={startNew} className="inline-flex items-center gap-2 rounded-[0.375rem] bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          Thêm FAQ
        </button>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 bg-black/40">
          <div className="w-full max-w-lg rounded-[0.5rem] bg-surface-lowest p-8 shadow-ghost-lg">
            <h2 className="font-display text-lg font-bold text-on-surface mb-6">{isNew ? "Thêm FAQ" : "Chỉnh sửa FAQ"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Câu hỏi *</label>
                <input required value={editing.question || ""} onChange={(e) => setEditing({ ...editing, question: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Câu trả lời *</label>
                <textarea required rows={4} value={editing.answer || ""} onChange={(e) => setEditing({ ...editing, answer: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Danh mục</label>
                  <select value={editing.category || "scope"} onChange={(e) => setEditing({ ...editing, category: e.target.value as FaqCategory })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none">
                    {Object.entries(categoryLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Trang</label>
                  <select value={editing.target_page || "home"} onChange={(e) => setEditing({ ...editing, target_page: e.target.value })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none">
                    {["home", "service", "standard", "contact"].map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Thứ tự</label>
                  <input type="number" value={editing.sort_order ?? 0} onChange={(e) => setEditing({ ...editing, sort_order: Number(e.target.value) })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
                </div>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={editing.is_active ?? true} onChange={(e) => setEditing({ ...editing, is_active: e.target.checked })} className="h-4 w-4 rounded" />
                <span className="text-sm text-on-surface">Hiển thị</span>
              </label>
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
          <div className="px-6 py-16 text-center text-sm text-on-surface-variant">Chưa có FAQ nào.</div>
        ) : (
          <table className="w-full text-sm">
            <thead><tr className="bg-surface-low text-left">
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant w-8">#</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Câu hỏi</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Danh mục</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Trang</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Trạng thái</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant text-right">Thao tác</th>
            </tr></thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t border-surface-low hover:bg-surface-low/50">
                  <td className="px-5 py-3 text-on-surface-variant">{item.sort_order}</td>
                  <td className="px-5 py-3 font-medium text-on-surface max-w-[300px] truncate">{item.question}</td>
                  <td className="px-5 py-3"><span className="rounded-full bg-surface-low px-2.5 py-0.5 text-[10px] font-semibold text-on-surface-variant">{categoryLabels[item.category]}</span></td>
                  <td className="px-5 py-3 text-on-surface-variant text-xs">{item.target_page}</td>
                  <td className="px-5 py-3"><span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${item.is_active ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"}`}>{item.is_active ? "Hiển thị" : "Ẩn"}</span></td>
                  <td className="px-5 py-3 text-right">
                    <button onClick={() => { setEditing(item); setIsNew(false); }} className="text-xs font-medium text-secondary hover:underline mr-3">Sửa</button>
                    <button onClick={() => item.id && handleDelete(item.id)} className="text-xs font-medium text-red-500 hover:underline">Xóa</button>
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
