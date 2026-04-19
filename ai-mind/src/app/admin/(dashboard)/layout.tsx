import AdminGuard from "@/components/admin/AdminGuard";
import Sidebar from "@/components/admin/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-surface">
        <Sidebar />
        <main className="ml-60 min-h-screen">
          <div className="p-8">{children}</div>
        </main>
      </div>
    </AdminGuard>
  );
}
