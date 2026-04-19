"use client";

import { useEffect, useState } from "react";
import {
  getConsultationRequests,
  updateConsultationStatus,
  type ConsultationRequest,
  type LeadStatus,
} from "@/services/leads";

const statusLabels: Record<LeadStatus, string> = {
  new: "Mới",
  qualified: "Đủ điều kiện",
  contacted: "Đã liên hệ",
  proposal_sent: "Đã gửi đề xuất",
  won: "Thành công",
  lost: "Không thành công",
};

const statusColors: Record<LeadStatus, string> = {
  new: "bg-blue-100 text-blue-700",
  qualified: "bg-cyan-100 text-cyan-700",
  contacted: "bg-amber-100 text-amber-700",
  proposal_sent: "bg-purple-100 text-purple-700",
  won: "bg-emerald-100 text-emerald-700",
  lost: "bg-red-100 text-red-700",
};

const allStatuses: LeadStatus[] = ["new", "qualified", "contacted", "proposal_sent", "won", "lost"];

export default function LeadsPage() {
  const [leads, setLeads] = useState<ConsultationRequest[]>([]);
  const [filter, setFilter] = useState<LeadStatus | "all">("all");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<ConsultationRequest | null>(null);

  async function loadLeads() {
    setLoading(true);
    try {
      const data = await getConsultationRequests(
        filter === "all" ? undefined : filter
      );
      setLeads(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLeads();
  }, [filter]);

  async function handleStatusChange(id: string, status: LeadStatus) {
    await updateConsultationStatus(id, { status });
    if (selected?.id === id) {
      setSelected({ ...selected, status });
    }
    loadLeads();
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-on-surface">Quản lý Leads</h1>
          <p className="text-sm text-on-surface-variant mt-1">
            {leads.length} lead{filter !== "all" ? ` (${statusLabels[filter]})` : ""}
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
            filter === "all" ? "bg-primary text-white" : "bg-surface-lowest text-on-surface-variant hover:bg-surface-high shadow-ghost"
          }`}
        >
          Tất cả
        </button>
        {allStatuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              filter === s ? "bg-primary text-white" : "bg-surface-lowest text-on-surface-variant hover:bg-surface-high shadow-ghost"
            }`}
          >
            {statusLabels[s]}
          </button>
        ))}
      </div>

      <div className="flex gap-6">
        {/* Table */}
        <div className="flex-1 rounded-[0.5rem] bg-surface-lowest shadow-ghost overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
            </div>
          ) : leads.length === 0 ? (
            <div className="px-6 py-16 text-center text-sm text-on-surface-variant">
              Không có lead nào.
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-low text-left">
                  <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Tên</th>
                  <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Công ty</th>
                  <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">SĐT</th>
                  <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Trạng thái</th>
                  <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant">Ngày tạo</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => setSelected(lead)}
                    className={`border-t border-surface-low cursor-pointer transition-colors ${
                      selected?.id === lead.id ? "bg-primary/5" : "hover:bg-surface-low/50"
                    }`}
                  >
                    <td className="px-5 py-3">
                      <div className="font-medium text-on-surface">{lead.contact_name}</div>
                      <div className="text-xs text-on-surface-variant">{lead.email}</div>
                    </td>
                    <td className="px-5 py-3 text-on-surface-variant">{lead.company_name}</td>
                    <td className="px-5 py-3 text-on-surface-variant">{lead.phone}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${statusColors[lead.status]}`}>
                        {statusLabels[lead.status]}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-xs text-on-surface-variant">
                      {lead.created_at?.toDate?.()?.toLocaleDateString("vi-VN") || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Detail panel */}
        {selected && (
          <div className="w-80 shrink-0 rounded-[0.5rem] bg-surface-lowest p-6 shadow-ghost self-start sticky top-8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-base font-bold text-on-surface">Chi tiết Lead</h3>
              <button
                onClick={() => setSelected(null)}
                className="text-on-surface-variant hover:text-on-surface"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <div className="text-xs text-on-surface-variant mb-0.5">Họ tên</div>
                <div className="font-medium text-on-surface">{selected.contact_name}</div>
              </div>
              <div>
                <div className="text-xs text-on-surface-variant mb-0.5">Chức danh</div>
                <div className="text-on-surface">{selected.job_title || "—"}</div>
              </div>
              <div>
                <div className="text-xs text-on-surface-variant mb-0.5">Công ty</div>
                <div className="text-on-surface">{selected.company_name}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-on-surface-variant mb-0.5">Email</div>
                  <div className="text-on-surface truncate">{selected.email}</div>
                </div>
                <div>
                  <div className="text-xs text-on-surface-variant mb-0.5">SĐT</div>
                  <div className="text-on-surface">{selected.phone}</div>
                </div>
              </div>
              {selected.factory_scale && (
                <div>
                  <div className="text-xs text-on-surface-variant mb-0.5">Quy mô</div>
                  <div className="text-on-surface">{selected.factory_scale}</div>
                </div>
              )}
              {selected.service_interest?.length > 0 && (
                <div>
                  <div className="text-xs text-on-surface-variant mb-1.5">Dịch vụ quan tâm</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.service_interest.map((s) => (
                      <span key={s} className="rounded-full bg-surface-low px-2.5 py-1 text-[10px] font-medium text-on-surface-variant">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {selected.pain_points?.length > 0 && (
                <div>
                  <div className="text-xs text-on-surface-variant mb-1.5">Vấn đề</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.pain_points.map((p) => (
                      <span key={p} className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-medium text-red-600">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {selected.standards_current?.length > 0 && (
                <div>
                  <div className="text-xs text-on-surface-variant mb-1.5">Chuẩn áp dụng</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.standards_current.map((s) => (
                      <span key={s} className="rounded-full bg-cyan-50 px-2.5 py-1 text-[10px] font-medium text-cyan-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {selected.note && (
                <div>
                  <div className="text-xs text-on-surface-variant mb-0.5">Ghi chú</div>
                  <div className="text-on-surface">{selected.note}</div>
                </div>
              )}
              {selected.utm_source && (
                <div>
                  <div className="text-xs text-on-surface-variant mb-0.5">Nguồn</div>
                  <div className="text-on-surface">{selected.utm_source}{selected.utm_campaign ? ` / ${selected.utm_campaign}` : ""}</div>
                </div>
              )}

              {/* Status update */}
              <div className="pt-3 border-t border-surface-low">
                <div className="text-xs font-semibold text-on-surface-variant mb-2">Cập nhật trạng thái</div>
                <select
                  value={selected.status}
                  onChange={(e) => selected.id && handleStatusChange(selected.id, e.target.value as LeadStatus)}
                  className="w-full rounded-[0.375rem] border border-outline-variant/30 bg-surface-low px-3 py-2 text-sm text-on-surface focus:border-secondary focus:outline-none"
                >
                  {allStatuses.map((s) => (
                    <option key={s} value={s}>
                      {statusLabels[s]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
