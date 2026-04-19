"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const navGroups = [
  {
    label: "Tổng quan",
    items: [
      {
        label: "Dashboard",
        href: "/admin",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Kinh doanh",
    items: [
      {
        label: "Leads",
        href: "/admin/leads",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87" />
            <path d="M16 3.13a4 4 0 010 7.75" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Nội dung",
    items: [
      {
        label: "Dịch vụ",
        href: "/admin/services",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
          </svg>
        ),
      },
      {
        label: "Dự án",
        href: "/admin/projects",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
            <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
          </svg>
        ),
      },
      {
        label: "Đào tạo",
        href: "/admin/training",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
          </svg>
        ),
      },
      {
        label: "Blog",
        href: "/admin/blog",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        ),
      },
      {
        label: "FAQ",
        href: "/admin/faq",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        ),
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user, role, signOut } = useAuth();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-60 bg-primary flex flex-col z-40">
      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-2">
        <div className="h-8 w-8 rounded-[0.375rem] bg-secondary flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#041534" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <div>
          <div className="font-display text-sm font-bold text-white">AI MIND</div>
          <div className="text-[10px] text-white/40">Admin Panel</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-2">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-5">
            <div className="px-3 mb-2 text-[10px] font-semibold text-white/30 uppercase tracking-wider">
              {group.label}
            </div>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const active =
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-[0.375rem] px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/50 hover:bg-white/5 hover:text-white/80"
                    }`}
                  >
                    <span className={active ? "text-secondary" : ""}>{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
            {user?.email?.[0]?.toUpperCase() || "A"}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-white truncate">{user?.email}</div>
            <div className="text-[10px] text-white/40 capitalize">{role || "user"}</div>
          </div>
        </div>
        <button
          onClick={signOut}
          className="w-full flex items-center gap-2 rounded-[0.375rem] px-3 py-2 text-xs font-medium text-white/40 hover:bg-white/5 hover:text-white/70 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Đăng xuất
        </button>
      </div>
    </aside>
  );
}
