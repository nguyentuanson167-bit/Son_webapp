import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI MIND | Đào tạo, Tư vấn & Triển khai AI GMP/ISO cho Nhà máy Dược",
  description:
    "AI MIND giúp doanh nghiệp dược triển khai GMP/ISO đạt chuẩn, đồng thời tự động hóa 60% quy trình vận hành bằng AI. Tư vấn miễn phí ngay.",
  keywords: [
    "AI GMP",
    "AI ISO",
    "GMP automation",
    "ISO digitization",
    "nhà máy dược",
    "tư vấn GMP",
    "đào tạo AI",
    "tự động hóa dược phẩm",
  ],
  openGraph: {
    title: "AI MIND | AI GMP/ISO cho Nhà máy Dược",
    description:
      "Giảm hàng trăm giờ xử lý hồ sơ GMP thủ công. Tự động hóa 60% quy trình vận hành.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${jakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
