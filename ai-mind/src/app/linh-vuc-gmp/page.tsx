import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Lĩnh vực GMP | AI MIND",
  description:
    "Dịch vụ tư vấn, đào tạo và số hóa hệ thống GMP cho nhà máy dược: WHO-GMP, EU-GMP, PIC/S. Kết hợp AI để audit-ready 24/7.",
};

const scopes = [
  {
    title: "Tư vấn triển khai & nâng cấp GMP",
    description:
      "Xây dựng hệ thống tài liệu, quy trình, hồ sơ thẩm định đạt chuẩn WHO-GMP, EU-GMP, PIC/S cho nhà máy dược phẩm, thực phẩm chức năng.",
  },
  {
    title: "Gap Assessment & chuẩn bị thanh tra",
    description:
      "Đánh giá hiện trạng so với checklist thanh tra, lập CAPA, mô phỏng audit và chuẩn bị hồ sơ trả lời trước khi đón đoàn thanh tra.",
  },
  {
    title: "Số hóa hồ sơ lô & SOP bằng AI",
    description:
      "Triển khai AI soát lỗi batch record, rà soát mâu thuẫn SOP, theo dõi CAPA tự động &mdash; giảm khối lượng thủ công mà vẫn giữ audit trail.",
  },
  {
    title: "Đào tạo GMP kết hợp AI cho đội vận hành",
    description:
      "Chương trình đào tạo chuyên sâu cho QA/QC, Production, IT &mdash; giúp đội nội bộ vận hành GMP + AI đúng chuẩn, không phụ thuộc vendor.",
  },
];

const standards = ["WHO-GMP", "EU-GMP", "PIC/S GMP", "GMP thực phẩm chức năng", "GMP mỹ phẩm"];

export default function GMPPage() {
  return (
    <>
      <Header />
      <main className="bg-surface pt-28 pb-20">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
            Lĩnh vực GMP
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mb-6 tracking-tight leading-[1.15]">
            GMP thực chiến cho nhà máy dược: từ tuân thủ đến{" "}
            <span className="text-primary">vận hành thông minh</span>
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
            AI MIND tư vấn và đồng hành triển khai GMP cho các nhà máy dược phẩm Việt Nam &mdash;
            từ xây dựng hệ thống tài liệu chuẩn quốc tế đến số hóa quy trình, giảm áp lực thanh
            tra và giải phóng thời gian cho đội QA/QC.
          </p>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-[0.5rem] bg-surface-lowest p-8 lg:p-10 shadow-ghost">
            <h2 className="font-display text-xl font-bold text-on-surface mb-4 tracking-tight">
              Vì sao GMP vẫn là bài toán khó với nhiều nhà máy dược?
            </h2>
            <p className="text-[0.95rem] text-on-surface-variant leading-relaxed mb-4">
              Mỗi đợt thanh tra GMP đòi hỏi hàng nghìn trang hồ sơ, hàng trăm SOP, batch record,
              kết quả validation, hồ sơ CAPA. Đội QA/QC thường mất 30&ndash;60% thời gian cho
              công việc đối chiếu, check chữ ký, format &mdash; phần việc lẽ ra máy có thể làm.
            </p>
            <p className="text-[0.95rem] text-on-surface-variant leading-relaxed">
              AI MIND không chỉ giúp doanh nghiệp đạt chuẩn GMP, mà còn thiết kế quy trình sao
              cho trạng thái{" "}
              <strong className="text-on-surface">&ldquo;audit-ready&rdquo;</strong> được duy trì
              liên tục, không phải chạy nước rút mỗi lần có đoàn thanh tra.
            </p>
          </div>
        </section>

        {/* Scope */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              Phạm vi dịch vụ GMP
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {scopes.map((item) => (
              <div
                key={item.title}
                className="rounded-[0.5rem] bg-surface-lowest p-6 lg:p-7 shadow-ghost hover:shadow-ghost-lg transition-all duration-300"
              >
                <h3 className="font-display text-lg font-bold text-on-surface mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p
                  className="text-sm text-on-surface-variant leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Standards */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-[0.5rem] bg-primary-container p-8 lg:p-10 shadow-ghost-lg">
            <h2 className="font-display text-xl font-bold text-white mb-5 tracking-tight text-center">
              Chuẩn GMP chúng tôi hỗ trợ
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {standards.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-surface mb-4 tracking-tight">
            Nhà máy bạn đang ở đâu trên hành trình GMP?
          </h2>
          <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
            Đặt lịch Gap Assessment miễn phí để chuyên gia AI MIND đánh giá hiện trạng và đề xuất
            lộ trình triển khai phù hợp nhất cho doanh nghiệp.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-[0.375rem] bg-primary px-6 py-3.5 text-sm font-bold text-white hover:scale-[1.02] transition-transform duration-200 shadow-ghost"
          >
            Đặt lịch tư vấn GMP miễn phí
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
