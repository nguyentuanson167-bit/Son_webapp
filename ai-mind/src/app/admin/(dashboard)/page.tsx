"use client";

import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { getDb } from "@/lib/firebase";
import type { ConsultationRequest, LeadStatus } from "@/services/leads";

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

interface Stats {
  totalLeads: number;
  newLeads: number;
  qualifiedLeads: number;
  proposals: number;
  wonDeals: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalLeads: 0,
    newLeads: 0,
    qualifiedLeads: 0,
    proposals: 0,
    wonDeals: 0,
  });
  const [recentLeads, setRecentLeads] = useState<ConsultationRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const db = getDb();
        const leadsRef = collection(db, "consultation_requests");

        // Get all leads
        const allSnap = await getDocs(query(leadsRef, orderBy("created_at", "desc")));
        const allLeads = allSnap.docs.map((d) => ({ id: d.id, ...d.data() }) as ConsultationRequest);

        setStats({
          totalLeads: allLeads.length,
          newLeads: allLeads.filter((l) => l.status === "new").length,
          qualifiedLeads: allLeads.filter((l) => l.status === "qualified").length,
          proposals: allLeads.filter((l) => l.status === "proposal_sent").length,
          wonDeals: allLeads.filter((l) => l.status === "won").length,
        });

        // Recent 5
        const recentSnap = await getDocs(
          query(leadsRef, orderBy("created_at", "desc"), limit(5))
        );
        setRecentLeads(
          recentSnap.docs.map((d) => ({ id: d.id, ...d.data() }) as ConsultationRequest)
        );
      } catch (err) {
        console.error("Dashboard load error:", err);
      } finally {
        setLoading(false);
      }
    }
    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const statCards = [
    { label: "Tổng leads", value: stats.totalLeads, color: "text-primary" },
    { label: "Lead mới", value: stats.newLeads, color: "text-blue-600" },
    { label: "Đủ điều kiện", value: stats.qualifiedLeads, color: "text-cyan-600" },
    { label: "Đề xuất đã gửi", value: stats.proposals, color: "text-purple-600" },
    { label: "Thành công", value: stats.wonDeals, color: "text-emerald-600" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-on-surface">Dashboard</h1>
        <p className="text-sm text-on-surface-variant mt-1">Tổng quan hệ thống AI Mind CMS</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {statCards.map((s) => (
          <div key={s.label} className="rounded-[0.5rem] bg-surface-lowest p-5 shadow-ghost">
            <div className="text-xs font-medium text-on-surface-variant mb-2">{s.label}</div>
            <div className={`font-display text-3xl font-bold ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Funnel visual */}
      <div className="rounded-[0.5rem] bg-surface-lowest p-6 shadow-ghost mb-8">
        <h2 className="font-display text-base font-bold text-on-surface mb-5">Lead Funnel</h2>
        <div className="flex items-end gap-3 h-32">
          {[
            { label: "Mới", count: stats.newLeads, color: "bg-blue-400" },
            { label: "Qualified", count: stats.qualifiedLeads, color: "bg-cyan-400" },
            { label: "Đề xuất", count: stats.proposals, color: "bg-purple-400" },
            { label: "Won", count: stats.wonDeals, color: "bg-emerald-400" },
          ].map((bar) => {
            const maxH = Math.max(stats.totalLeads, 1);
            const pct = Math.max((bar.count / maxH) * 100, 8);
            return (
              <div key={bar.label} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs font-bold text-on-surface">{bar.count}</span>
                <div
                  className={`w-full rounded-t-[0.375rem] ${bar.color} transition-all duration-500`}
                  style={{ height: `${pct}%` }}
                />
                <span className="text-[10px] text-on-surface-variant">{bar.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent leads */}
      <div className="rounded-[0.5rem] bg-surface-lowest shadow-ghost overflow-hidden">
        <div className="px-6 py-4 flex items-center justify-between">
          <h2 className="font-display text-base font-bold text-on-surface">Leads gần đây</h2>
          <a href="/admin/leads" className="text-xs font-medium text-secondary hover:underline">
            Xem tất cả
          </a>
        </div>

        {recentLeads.length === 0 ? (
          <div className="px-6 py-10 text-center text-sm text-on-surface-variant">
            Chưa có lead nào. Leads sẽ xuất hiện khi khách hàng gửi form tư vấn.
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-low text-left">
                <th className="px-6 py-3 text-xs font-semibold text-on-surface-variant">Tên</th>
                <th className="px-6 py-3 text-xs font-semibold text-on-surface-variant">Công ty</th>
                <th className="px-6 py-3 text-xs font-semibold text-on-surface-variant">Dịch vụ</th>
                <th className="px-6 py-3 text-xs font-semibold text-on-surface-variant">Trạng thái</th>
                <th className="px-6 py-3 text-xs font-semibold text-on-surface-variant">Ngày</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="border-t border-surface-low hover:bg-surface-low/50 transition-colors">
                  <td className="px-6 py-3 font-medium text-on-surface">{lead.contact_name}</td>
                  <td className="px-6 py-3 text-on-surface-variant">{lead.company_name}</td>
                  <td className="px-6 py-3 text-on-surface-variant max-w-[200px] truncate">
                    {lead.service_interest?.join(", ") || "—"}
                  </td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${statusColors[lead.status]}`}>
                      {statusLabels[lead.status]}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-on-surface-variant text-xs">
                    {lead.created_at?.toDate?.()?.toLocaleDateString("vi-VN") || "—"}
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
