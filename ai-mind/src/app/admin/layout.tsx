import { AuthProvider } from "@/contexts/AuthContext";

export const metadata = {
  title: "AI MIND Admin",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
