import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Về chúng tôi | AI MIND",
  description:
    "AI MIND - đơn vị tư vấn, đào tạo và triển khai AI GMP/ISO cho doanh nghiệp dược Việt Nam. Kết hợp chuyên môn chất lượng và công nghệ AI hiện đại.",
};

const values = [
  {
    title: "Chuyên môn ngành dược",
    description:
      "Đội ngũ có nền tảng GMP, ISO và quản lý chất lượng thực tế tại nhà máy dược &mdash; không lý thuyết suông.",
  },
  {
    title: "Công nghệ AI thực dụng",
    description:
      "Triển khai AI Agents, SOP Chatbot, Automation workflow giải quyết vấn đề cụ thể chứ không chạy theo trào lưu.",
  },
  {
    title: "Tuân thủ trước, tự động hóa sau",
    description:
      "Mọi giải pháp AI đều tôn trọng nguyên tắc GMP/ISO, đảm bảo khả năng truy vết và kiểm tra theo chuẩn.",
  },
  {
    title: "Đồng hành bền vững",
    description:
      "Xây dựng năng lực nội bộ cho khách hàng tự vận hành &mdash; không tạo ra sự phụ thuộc công nghệ.",
  },
];

const milestones = [
  {
    year: "10+ năm",
    label: "Kinh nghiệm GMP/ISO",
    description: "Tham gia triển khai, đánh giá và thanh tra tại nhiều nhà máy dược trong nước.",
  },
  {
    year: "60%",
    label: "Mức tự động hóa trung bình",
    description: "Các quy trình vận hành thủ công được tự động hóa sau khi áp dụng giải pháp.",
  },
  {
    year: "100%",
    label: "Dự án tuân thủ",
    description: "Mọi giải pháp AI được thiết kế đảm bảo khả năng audit và truy vết.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="bg-surface pt-28 pb-20">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
            Về AI MIND
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mb-6 tracking-tight leading-[1.15]">
            Cầu nối giữa <span className="text-primary">tuân thủ GMP/ISO</span> và{" "}
            <span className="text-secondary-dim">AI thực chiến</span> cho ngành dược
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            AI MIND được thành lập bởi những người trực tiếp làm trong ngành dược phẩm, thấu hiểu
            áp lực thanh tra, khối lượng hồ sơ GMP và khó khăn khi doanh nghiệp muốn số hóa mà
            không biết bắt đầu từ đâu.
          </p>
        </section>

        {/* Founder */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-[0.5rem] bg-surface-lowest p-8 lg:p-12 shadow-ghost">
            <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
              <div className="shrink-0">
                <div className="h-40 w-40 lg:h-48 lg:w-48 rounded-[0.5rem] overflow-hidden ring-2 ring-primary/10">
                  <Image
                    src="/son-nguyen-avatar.jpg"
                    alt="Son Nguyen - Founder & Chief Expert"
                    width={192}
                    height={192}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                  Founder & Chief Expert
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-on-surface mb-2 tracking-tight">
                  Son Nguyen
                </h2>
                <p className="text-sm text-on-surface-variant mb-5">
                  Founder & Chief Expert GMP/ISO &mdash; hơn 10 năm trong ngành dược
                </p>
                <blockquote className="text-[0.95rem] text-on-surface-variant leading-relaxed italic border-l-2 border-secondary/40 pl-5 mb-5">
                  &ldquo;Tôi đã chứng kiến quá nhiều doanh nghiệp dược mất hàng trăm giờ mỗi
                  tháng cho các quy trình thủ công chỉ vì chưa có lộ trình số hóa đúng. AI MIND
                  ra đời để thu hẹp khoảng cách giữa chuyên môn chất lượng và công nghệ &mdash;
                  giúp doanh nghiệp tuân thủ tốt hơn bằng cách làm việc thông minh hơn.&rdquo;
                </blockquote>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Hành trình nghề nghiệp của Son gắn với các dự án triển khai GMP/ISO, đánh giá
                  nội bộ, đào tạo QA/QC và chuyển đổi số tại nhiều nhà máy dược. Đây là lý do
                  AI MIND không chỉ cung cấp công cụ AI mà còn đảm bảo mọi giải pháp đều đứng
                  vững trước thanh tra và phù hợp với văn hóa vận hành dược phẩm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              Giá trị cốt lõi
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[0.5rem] bg-surface-lowest p-6 shadow-ghost hover:shadow-ghost-lg transition-shadow duration-300"
              >
                <h3 className="font-display text-base font-bold text-on-surface mb-3">
                  {v.title}
                </h3>
                <p
                  className="text-sm text-on-surface-variant leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: v.description }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-[0.5rem] bg-primary-container p-8 lg:p-12 shadow-ghost-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-10 tracking-tight text-center">
              Con số đại diện
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-secondary mb-2">
                    {m.year}
                  </div>
                  <div className="text-sm font-semibold text-white mb-2">{m.label}</div>
                  <p className="text-xs text-white/60 leading-relaxed max-w-xs mx-auto">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-surface mb-4 tracking-tight">
            Cùng đồng hành xây dựng nhà máy dược vận hành thông minh hơn
          </h2>
          <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
            Đặt lịch tư vấn miễn phí với đội ngũ chuyên gia AI MIND để thảo luận lộ trình số hóa
            phù hợp cho doanh nghiệp bạn.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-[0.375rem] bg-primary px-6 py-3.5 text-sm font-bold text-white hover:scale-[1.02] transition-transform duration-200 shadow-ghost"
          >
            Đặt lịch tư vấn miễn phí
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
