import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    slug: "tu-van-gmp-iso",
    title: "Tư vấn triển khai GMP/ISO kết hợp AI",
    description: "Số hóa tài liệu, chuẩn hóa quy trình, đào tạo vận hành GMP/ISO với sự hỗ trợ của AI.",
    type: "Tư vấn",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    metrics: ["70% giảm thời gian", "100% pass rate"],
  },
  {
    slug: "ai-automation",
    title: "Xây dựng hệ thống AI & Automation nhà máy Dược",
    description: "Triển khai AI Agents, SOP Chatbot, Dashboard chất lượng thời gian thực cho nhà máy dược.",
    type: "Automation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    metrics: ["60% tự động hóa", "3x phát hiện sớm"],
  },
  {
    slug: "dao-tao-ai-gmp-iso",
    title: "Đào tạo nội bộ AI GMP/ISO",
    description: "Chương trình đào tạo chuyên sâu giúp đội ngũ nhà máy tự tin vận hành AI trong môi trường GMP/ISO.",
    type: "Đào tạo",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      </svg>
    ),
    metrics: ["100% đạt chuẩn", "30 ngày hỗ trợ"],
  },
  {
    slug: "gap-assessment",
    title: "Đánh giá hiện trạng (Gap Assessment)",
    description: "Đánh giá toàn diện khoảng cách giữa hiện trạng và yêu cầu GMP/ISO, đề xuất lộ trình số hóa phù hợp.",
    type: "Đánh giá",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    metrics: ["2-3 tuần", "100% coverage"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-gradient pt-28 pb-16 sm:pt-36 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Giải pháp AI MIND
              </h1>
              <p className="text-base text-white/70 leading-relaxed">
                Bộ dịch vụ toàn diện cho doanh nghiệp dược: từ tư vấn GMP/ISO, đào tạo nội bộ đến xây dựng hệ thống AI & Automation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/giai-phap/${svc.slug}`}
                  className="group rounded-[0.5rem] bg-surface-lowest p-8 shadow-ghost hover:shadow-ghost-lg hover:-translate-y-0.5 transition-all flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-11 w-11 rounded-[0.375rem] bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {svc.icon}
                    </div>
                    <span className="rounded-full bg-surface-low px-3 py-1 text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">
                      {svc.type}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
                    {svc.description}
                  </p>
                  <div className="flex items-center gap-4">
                    {svc.metrics.map((m) => (
                      <span key={m} className="text-xs font-semibold text-secondary">{m}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                    Tìm hiểu thêm
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
