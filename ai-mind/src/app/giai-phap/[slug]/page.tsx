"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceBySlug, type Service } from "@/services/services";

// Fallback static services for when Firebase is not configured
const staticServices: Record<string, Service> = {
  "tu-van-gmp-iso": {
    title: "Tư vấn triển khai GMP/ISO kết hợp AI",
    slug: "tu-van-gmp-iso",
    short_description: "Số hóa tài liệu, chuẩn hóa quy trình, đào tạo vận hành GMP/ISO với sự hỗ trợ của AI.",
    long_description: "AI MIND giúp doanh nghiệp dược xây dựng hệ thống tài liệu GMP/ISO đạt chuẩn quốc tế, đồng thời tích hợp AI để tự động hóa các quy trình soát xét, phân loại deviation và theo dõi CAPA. Đội ngũ chuyên gia với kinh nghiệm thực chiến tại các nhà máy dược sẽ đồng hành cùng doanh nghiệp từ đánh giá hiện trạng đến vận hành ổn định.",
    service_type: "consulting",
    target_roles: ["Giám đốc nhà máy", "Trưởng phòng QA/QC", "QA Compliance", "Production Manager"],
    standards_supported: ["GMP WHO", "EU GMP", "PIC/S GMP", "ISO 9001", "ISO 13485"],
    deliverables: [
      "Hệ thống tài liệu GMP/ISO chuẩn hóa",
      "AI soát lỗi tài liệu và phân loại deviation tự động",
      "Quy trình CAPA tracking bằng AI",
      "Trạng thái audit-ready liên tục 24/7",
      "Đào tạo nội bộ AI GMP/ISO cho đội vận hành",
      "Báo cáo tuân thủ real-time dashboard",
    ],
    outcomes: [
      "Giảm 70% thời gian chuẩn bị hồ sơ thanh tra",
      "100% hồ sơ đạt chuẩn từ lần nộp đầu tiên",
      "Loại bỏ hoàn toàn lỗi ghi chép thủ công lặp lại",
      "Đội ngũ tự tin vận hành hệ thống AI GMP/ISO",
    ],
    featured_metrics: ["70% giảm thời gian", "100% pass rate", "Zero lỗi thủ công"],
    thumbnail_url: "",
    cta_primary: "Đặt lịch tư vấn GMP/ISO",
    cta_secondary: "Tải checklist đánh giá miễn phí",
    is_published: true,
  },
  "ai-automation": {
    title: "Xây dựng hệ thống AI & Automation nhà máy Dược",
    slug: "ai-automation",
    short_description: "Triển khai AI Agents, SOP Chatbot, Dashboard chất lượng thời gian thực cho nhà máy dược.",
    long_description: "Dịch vụ xây dựng hệ thống AI & Automation toàn diện cho nhà máy dược, từ AI Agents xử lý hồ sơ tự động, chatbot nội bộ hỗ trợ tra cứu SOP, đến dashboard giám sát chất lượng real-time. Hệ thống được thiết kế để tích hợp seamless vào quy trình vận hành hiện tại mà không làm gián đoạn sản xuất.",
    service_type: "automation",
    target_roles: ["IT/Automation Manager", "Giám đốc nhà máy", "Trưởng phòng sản xuất", "QA Manager"],
    standards_supported: ["GMP WHO", "EU GMP", "ISO 9001"],
    deliverables: [
      "AI Agents xử lý hồ sơ batch record tự động",
      "SOP Chatbot nội bộ tra cứu quy trình 24/7",
      "Dashboard giám sát chất lượng thời gian thực",
      "Workflow automation cho chuỗi sản xuất",
      "Hệ thống cảnh báo sớm deviation & OOS",
      "Tích hợp với hệ thống ERP/MES hiện tại",
    ],
    outcomes: [
      "Tự động hóa 60% quy trình vận hành lặp lại",
      "Giảm 80% thời gian tra cứu SOP",
      "Phát hiện deviation sớm hơn 3x so với thủ công",
      "ROI dương trong vòng 6 tháng triển khai",
    ],
    featured_metrics: ["60% tự động hóa", "80% nhanh hơn", "3x phát hiện sớm"],
    thumbnail_url: "",
    cta_primary: "Đặt lịch tư vấn AI & Automation",
    cta_secondary: "Xem demo hệ thống",
    is_published: true,
  },
  "dao-tao-ai-gmp-iso": {
    title: "Đào tạo nội bộ AI GMP/ISO",
    slug: "dao-tao-ai-gmp-iso",
    short_description: "Chương trình đào tạo chuyên sâu giúp đội ngũ nhà máy tự tin vận hành AI trong môi trường GMP/ISO.",
    long_description: "Chương trình đào tạo được thiết kế riêng cho từng vai trò trong nhà máy dược: QA/QC, Production, IT/Automation và Management. Nội dung kết hợp lý thuyết GMP/ISO với thực hành AI, giúp đội ngũ hiểu cách ứng dụng AI an toàn và hiệu quả trong môi trường tuân thủ nghiêm ngặt.",
    service_type: "training",
    target_roles: ["QA/QC", "Production", "IT/Automation", "Management"],
    standards_supported: ["GMP WHO", "EU GMP", "PIC/S GMP", "ISO 9001", "ISO 13485"],
    deliverables: [
      "Chương trình đào tạo theo vai trò (QA/QC, Production, IT, Management)",
      "Tài liệu hướng dẫn AI GMP/ISO chuẩn hóa",
      "Bài tập thực hành trên hệ thống thực tế",
      "Chứng nhận hoàn thành đào tạo",
      "Hỗ trợ sau đào tạo trong 30 ngày",
      "Đánh giá năng lực trước và sau đào tạo",
    ],
    outcomes: [
      "Đội ngũ tự tin sử dụng AI trong quy trình GMP/ISO",
      "Giảm dependency vào vendor bên ngoài",
      "Nâng cao năng lực số hóa nội bộ bền vững",
      "100% nhân sự đạt chuẩn kiến thức sau đào tạo",
    ],
    featured_metrics: ["100% đạt chuẩn", "4-16h đào tạo", "30 ngày hỗ trợ"],
    thumbnail_url: "",
    cta_primary: "Đăng ký đào tạo",
    cta_secondary: "Xem lịch đào tạo",
    is_published: true,
  },
  "gap-assessment": {
    title: "Đánh giá hiện trạng (Gap Assessment)",
    slug: "gap-assessment",
    short_description: "Đánh giá toàn diện khoảng cách giữa hiện trạng và yêu cầu GMP/ISO, đề xuất lộ trình số hóa phù hợp.",
    long_description: "Dịch vụ Gap Assessment giúp doanh nghiệp dược hiểu rõ vị trí hiện tại trong hành trình tuân thủ GMP/ISO và xác định chính xác những khoảng trống cần khắc phục. Chuyên gia AI MIND sẽ đánh giá toàn diện quy trình, tài liệu, hệ thống IT và năng lực nhân sự, từ đó đề xuất lộ trình triển khai AI + GMP/ISO phù hợp nhất.",
    service_type: "assessment",
    target_roles: ["Giám đốc nhà máy", "Trưởng phòng QA/QC", "IT Manager", "Chuyển đổi số"],
    standards_supported: ["GMP WHO", "EU GMP", "PIC/S GMP", "ISO 9001", "ISO 13485"],
    deliverables: [
      "Báo cáo Gap Analysis chi tiết theo từng chuẩn",
      "Ma trận đánh giá quy trình hiện tại",
      "Đề xuất lộ trình triển khai 3-6-12 tháng",
      "Ước lượng ngân sách và ROI dự kiến",
      "Bản đồ ưu tiên: quick wins vs long-term",
    ],
    outcomes: [
      "Hiểu rõ 100% khoảng cách tuân thủ",
      "Có lộ trình số hóa rõ ràng với timeline cụ thể",
      "Ước lượng ROI chính xác cho từng giai đoạn",
    ],
    featured_metrics: ["2-3 tuần đánh giá", "100% coverage", "Lộ trình 12 tháng"],
    thumbnail_url: "",
    cta_primary: "Đặt lịch đánh giá miễn phí",
    cta_secondary: "Tìm hiểu quy trình",
    is_published: true,
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getServiceBySlug(slug);
        setService(data || staticServices[slug] || null);
      } catch {
        // Firebase not configured — use static fallback
        setService(staticServices[slug] || null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
        </div>
      </>
    );
  }

  if (!service) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center pt-16 px-4">
          <h1 className="font-display text-2xl font-bold text-on-surface mb-2">Không tìm thấy dịch vụ</h1>
          <p className="text-sm text-on-surface-variant mb-6">Dịch vụ này không tồn tại hoặc chưa được xuất bản.</p>
          <a href="/giai-phap" className="text-sm font-medium text-secondary hover:underline">Xem tất cả giải pháp</a>
        </div>
        <Footer />
      </>
    );
  }

  const serviceTypeLabel: Record<string, string> = {
    consulting: "Tư vấn", training: "Đào tạo", assessment: "Đánh giá",
    automation: "Automation", retainer: "Đồng hành",
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-gradient pt-28 pb-16 sm:pt-36 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  {serviceTypeLabel[service.service_type] || "Dịch vụ"}
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
                {service.short_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="inline-flex items-center justify-center gap-2 rounded-[0.375rem] bg-secondary px-6 py-3.5 text-sm font-bold text-on-secondary hover:scale-[1.02] transition-transform">
                  {service.cta_primary}
                </a>
                {service.cta_secondary && (
                  <a href="#details" className="inline-flex items-center justify-center gap-2 rounded-[0.375rem] border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors">
                    {service.cta_secondary}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 sm:py-20 bg-surface" id="details">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-on-surface mb-6">Tổng quan dịch vụ</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">
                  {service.long_description}
                </p>

                {service.target_roles?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Phù hợp với</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.target_roles.map((role) => (
                        <span key={role} className="rounded-full bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.standards_supported?.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Chuẩn hỗ trợ</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.standards_supported.map((std) => (
                        <span key={std} className="rounded-full bg-secondary/10 px-3.5 py-1.5 text-xs font-medium text-cyan-700">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Metrics sidebar */}
              {service.featured_metrics?.length > 0 && (
                <div className="rounded-[0.5rem] bg-primary-container p-8 shadow-ghost-lg self-start">
                  <h3 className="font-display text-lg font-bold text-white mb-6">Chỉ số nổi bật</h3>
                  <div className="space-y-6">
                    {service.featured_metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#50d9fe" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-white">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        {service.deliverables?.length > 0 && (
          <section className="py-16 sm:py-20 bg-surface-low">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl font-bold text-on-surface mb-10 text-center">
                Bạn sẽ nhận được gì?
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="rounded-[0.5rem] bg-surface-lowest p-6 shadow-ghost group hover:shadow-ghost-lg hover:-translate-y-0.5 transition-all">
                    <div className="h-10 w-10 rounded-full bg-tertiary/10 flex items-center justify-center mb-4 group-hover:bg-tertiary/20 transition-colors">
                      <span className="font-display text-sm font-bold text-tertiary">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-sm font-medium text-on-surface leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Outcomes */}
        {service.outcomes?.length > 0 && (
          <section className="py-16 sm:py-20 bg-surface">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center mb-10">
                <h2 className="font-display text-2xl font-bold text-on-surface mb-3">Kết quả kỳ vọng</h2>
                <p className="text-sm text-on-surface-variant">Các kết quả được đo lường và cam kết dựa trên kinh nghiệm triển khai thực tế.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
                {service.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-[0.5rem] bg-surface-lowest p-5 shadow-ghost">
                    <div className="shrink-0 h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#50d9fe" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-sm text-on-surface leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 sm:py-20 cta-gradient" id="contact-form">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Bắt đầu với {service.title}
            </h2>
            <p className="text-sm text-white/60 mb-8">
              Liên hệ đội ngũ chuyên gia AI MIND để được tư vấn miễn phí và nhận đề xuất phù hợp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact-form" className="inline-flex items-center justify-center gap-2 rounded-[0.375rem] bg-secondary px-8 py-4 text-sm font-bold text-on-secondary hover:scale-[1.02] transition-transform">
                {service.cta_primary}
              </a>
              <a href="/" className="inline-flex items-center justify-center gap-2 rounded-[0.375rem] border border-white/20 px-8 py-4 text-sm font-semibold text-white hover:bg-white/5 transition-colors">
                Quay lại trang chủ
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
