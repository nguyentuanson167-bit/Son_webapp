"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createTrainingProgram, updateTrainingProgram, type TrainingProgram } from "@/services/content";
import { collection, getDocs, orderBy, query, doc, deleteDoc } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

const emptyProgram: Omit<TrainingProgram, "id" | "created_at" | "updated_at"> = {
  title: "", slug: "", audience: [], delivery_mode: "onsite",
  duration_hours: 8, module_outline: [], learning_outcomes: [],
  standards_covered: [], is_featured: false, is_published: false,
};

const audienceOptions = ["QA/QC", "Production", "IT/Automation", "Management"];
const deliveryLabels = { onsite: "Tại chỗ", online: "Trực tuyến", hybrid: "Kết hợp" };

export default function TrainingPage() {
  const [items, setItems] = useState<TrainingProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<TrainingProgram> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const db = getDb();
      const snap = await getDocs(query(collection(db, "training_programs"), orderBy("created_at", "desc")));
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as TrainingProgram));
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  function toggleAudience(val: string) {
    const arr = editing?.audience || [];
    setEditing({ ...editing, audience: arr.includes(val) ? arr.filter((a) => a !== val) : [...arr, val] });
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);
    try {
      if (isNew) {
        await createTrainingProgram(editing as Omit<TrainingProgram, "id" | "created_at" | "updated_at">);
      } else if (editing.id) {
        const { id, created_at, ...data } = editing as TrainingProgram;
        await updateTrainingProgram(editing.id, data);
      }
      setEditing(null); setIsNew(false); load();
    } catch (err) { console.error(err); alert("Lỗi khi lưu."); }
    finally { setSaving(false); }
  }

  async function handleDelete(id: string) {
    if (!confirm("Xác nhận xóa chương trình này?")) return;
    const db = getDb();
    await deleteDoc(doc(db, "training_programs", id));
    load();
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-on-surface">Chương trình đào tạo</h1>
          <p className="text-sm text-on-surface-variant mt-1">{items.length} chương trình</p>
        </div>
        <button onClick={() => { setEditing({ ...emptyProgram }); setIsNew(true); }} className="inline-flex items-center gap-2 rounded-[0.375rem] bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          Thêm chương trình
        </button>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 bg-black/40">
          <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[0.5rem] bg-surface-lowest p-8 shadow-ghost-lg">
            <h2 className="font-display text-lg font-bold text-on-surface mb-6">{isNew ? "Thêm chương trình" : "Chỉnh sửa"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Tên chương trình *</label>
                  <input required value={editing.title || ""} onChange={(e) => setEditing({ ...editing, title: e.target.value, ...(isNew ? { slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-") } : {}) })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">Hình thức</label>
                    <select value={editing.delivery_mode || "onsite"} onChange={(e) => setEditing({ ...editing, delivery_mode: e.target.value as TrainingProgram["delivery_mode"] })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none">
                      {Object.entries(deliveryLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">Giờ</label>
                    <input type="number" value={editing.duration_hours ?? 8} onChange={(e) => setEditing({ ...editing, duration_hours: Number(e.target.value) })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-2">Đối tượng</label>
                <div className="flex flex-wrap gap-2">
                  {audienceOptions.map((opt) => (
                    <button key={opt} type="button" onClick={() => toggleAudience(opt)} className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${editing.audience?.includes(opt) ? "bg-primary text-white" : "bg-surface-low text-on-surface-variant"}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Nội dung module (mỗi dòng 1 module)</label>
                <textarea rows={4} value={editing.module_outline?.join("\n") || ""} onChange={(e) => setEditing({ ...editing, module_outline: e.target.value.split("\n").filter(Boolean) })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Kết quả đầu ra (mỗi dòng 1 mục)</label>
                <textarea rows={3} value={editing.learning_outcomes?.join("\n") || ""} onChange={(e) => setEditing({ ...editing, learning_outcomes: e.target.value.split("\n").filter(Boolean) })} className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none" />
              </div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={editing.is_published ?? false} onChange={(e) => setEditing({ ...editing, is_published: e.target.checked })} className="h-4 w-4 rounded" />
                  <span className="text-sm text-on-surface">Xuất bản</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={editing.is_featured ?? false} onChange={(e) => setEditing({ ...editing, is_featured: e.target.checked })} className="h-4 w-4 rounded" />
                  <span className="text-sm text-on-surface">Nổi bật</span>
                </label>
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
          <div className="px-6 py-16 text-center text-sm text-on-surface-variant">Chưa có chương trình nào.</div>
        ) : (
          <table className="w-full text-sm">
            <thead><tr className="bg-surface-low text-left">
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Tên</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Đối tượng</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Hình thức</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Giờ</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Trạng thái</th>
              <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant text-right">Thao tác</th>
            </tr></thead>
            <tbody>
              {items.map((p) => (
                <tr key={p.id} className="border-t border-surface-low hover:bg-surface-low/50">
                  <td className="px-5 py-3 font-medium text-on-surface">{p.title}</td>
                  <td className="px-5 py-3 text-on-surface-variant text-xs">{p.audience?.join(", ") || "—"}</td>
                  <td className="px-5 py-3 text-on-surface-variant">{deliveryLabels[p.delivery_mode]}</td>
                  <td className="px-5 py-3 text-on-surface-variant">{p.duration_hours}h</td>
                  <td className="px-5 py-3"><span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${p.is_published ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"}`}>{p.is_published ? "Xuất bản" : "Nháp"}</span></td>
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
