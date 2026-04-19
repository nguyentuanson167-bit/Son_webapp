"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  getPublishedServices,
  createService,
  updateService,
  deleteService,
  type Service,
  type ServiceType,
} from "@/services/services";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

const serviceTypeLabels: Record<ServiceType, string> = {
  consulting: "Tư vấn",
  training: "Đào tạo",
  assessment: "Đánh giá",
  automation: "Automation",
  retainer: "Đồng hành",
};

const emptyService: Omit<Service, "id" | "created_at" | "updated_at"> = {
  title: "",
  slug: "",
  short_description: "",
  long_description: "",
  service_type: "consulting",
  target_roles: [],
  standards_supported: [],
  deliverables: [],
  outcomes: [],
  featured_metrics: [],
  thumbnail_url: "",
  cta_primary: "Đặt lịch tư vấn",
  cta_secondary: "",
  is_published: false,
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Service | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);

  async function loadServices() {
    setLoading(true);
    try {
      const db = getDb();
      const snap = await getDocs(query(collection(db, "services"), orderBy("created_at", "desc")));
      setServices(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Service));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadServices(); }, []);

  function startNew() {
    setEditing({ ...emptyService } as Service);
    setIsNew(true);
  }

  function startEdit(svc: Service) {
    setEditing({ ...svc });
    setIsNew(false);
  }

  function cancelEdit() {
    setEditing(null);
    setIsNew(false);
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);
    try {
      if (isNew) {
        const { id, ...data } = editing;
        await createService(data as Omit<Service, "id" | "created_at" | "updated_at">);
      } else if (editing.id) {
        const { id, created_at, ...data } = editing;
        await updateService(editing.id, data);
      }
      cancelEdit();
      loadServices();
    } catch (err) {
      console.error(err);
      alert("Lỗi khi lưu dịch vụ.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Xác nhận xóa dịch vụ này?")) return;
    await deleteService(id);
    loadServices();
  }

  function updateEditing<K extends keyof Service>(key: K, value: Service[K]) {
    if (!editing) return;
    setEditing({ ...editing, [key]: value });
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-on-surface">Dịch vụ</h1>
          <p className="text-sm text-on-surface-variant mt-1">{services.length} dịch vụ</p>
        </div>
        <button
          onClick={startNew}
          className="inline-flex items-center gap-2 rounded-[0.375rem] bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Thêm dịch vụ
        </button>
      </div>

      {/* Editor modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 bg-black/40">
          <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[0.5rem] bg-surface-lowest p-8 shadow-ghost-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-bold text-on-surface">
                {isNew ? "Thêm dịch vụ mới" : "Chỉnh sửa dịch vụ"}
              </h2>
              <button onClick={cancelEdit} className="text-on-surface-variant hover:text-on-surface">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Tên dịch vụ *</label>
                  <input
                    required
                    value={editing.title}
                    onChange={(e) => {
                      updateEditing("title", e.target.value);
                      if (isNew) updateEditing("slug", e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
                    }}
                    className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Slug</label>
                  <input
                    value={editing.slug}
                    onChange={(e) => updateEditing("slug", e.target.value)}
                    className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">Loại dịch vụ</label>
                  <select
                    value={editing.service_type}
                    onChange={(e) => updateEditing("service_type", e.target.value as ServiceType)}
                    className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none"
                  >
                    {Object.entries(serviceTypeLabels).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end pb-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editing.is_published}
                      onChange={(e) => updateEditing("is_published", e.target.checked)}
                      className="h-4 w-4 rounded border-outline-variant text-secondary focus:ring-secondary"
                    />
                    <span className="text-sm text-on-surface">Xuất bản</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Mô tả ngắn</label>
                <textarea
                  rows={2}
                  value={editing.short_description}
                  onChange={(e) => updateEditing("short_description", e.target.value)}
                  className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Mô tả chi tiết</label>
                <textarea
                  rows={4}
                  value={editing.long_description}
                  onChange={(e) => updateEditing("long_description", e.target.value)}
                  className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Đầu ra chính (mỗi dòng 1 mục)
                </label>
                <textarea
                  rows={3}
                  value={editing.deliverables?.join("\n") || ""}
                  onChange={(e) => updateEditing("deliverables", e.target.value.split("\n").filter(Boolean))}
                  className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Kết quả cam kết (mỗi dòng 1 mục)
                </label>
                <textarea
                  rows={3}
                  value={editing.outcomes?.join("\n") || ""}
                  onChange={(e) => updateEditing("outcomes", e.target.value.split("\n").filter(Boolean))}
                  className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">CTA chính</label>
                  <input
                    value={editing.cta_primary}
                    onChange={(e) => updateEditing("cta_primary", e.target.value)}
                    className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">CTA phụ</label>
                  <input
                    value={editing.cta_secondary}
                    onChange={(e) => updateEditing("cta_secondary", e.target.value)}
                    className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm focus:border-secondary focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-surface-low">
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="rounded-[0.375rem] px-5 py-2.5 text-sm font-medium text-on-surface-variant hover:bg-surface-low transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-[0.375rem] bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors disabled:opacity-50"
                >
                  {saving ? "Đang lưu..." : "Lưu"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="rounded-[0.5rem] bg-surface-lowest shadow-ghost overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
          </div>
        ) : services.length === 0 ? (
          <div className="px-6 py-16 text-center text-sm text-on-surface-variant">
            Chưa có dịch vụ nào. Nhấn &quot;Thêm dịch vụ&quot; để bắt đầu.
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-low text-left">
                <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Tên</th>
                <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Loại</th>
                <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Trạng thái</th>
                <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {services.map((svc) => (
                <tr key={svc.id} className="border-t border-surface-low hover:bg-surface-low/50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="font-medium text-on-surface">{svc.title}</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">{svc.short_description}</div>
                  </td>
                  <td className="px-5 py-3">
                    <span className="rounded-full bg-surface-low px-2.5 py-0.5 text-[10px] font-semibold text-on-surface-variant">
                      {serviceTypeLabels[svc.service_type]}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                      svc.is_published ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"
                    }`}>
                      {svc.is_published ? "Đã xuất bản" : "Nháp"}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button
                      onClick={() => startEdit(svc)}
                      className="text-xs font-medium text-secondary hover:underline mr-3"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => svc.id && handleDelete(svc.id)}
                      className="text-xs font-medium text-red-500 hover:underline"
                    >
                      Xóa
                    </button>
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
