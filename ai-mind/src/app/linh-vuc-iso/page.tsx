import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Lĩnh vực ISO | AI MIND",
  description:
    "Tư vấn triển khai hệ thống quản lý chất lượng ISO 9001, ISO 13485, ISO 22000, ISO 27001. Kết hợp AI để số hóa hồ sơ và duy trì tuân thủ liên tục.",
};

const standards = [
  {
    code: "ISO 9001",
    title: "Hệ thống quản lý chất lượng",
    description:
      "Nền tảng QMS cho mọi doanh nghiệp sản xuất và dịch vụ. AI MIND tư vấn triển khai, đánh giá nội bộ và duy trì chứng nhận ISO 9001 theo phiên bản mới nhất.",
  },
  {
    code: "ISO 13485",
    title: "Thiết bị y tế",
    description:
      "Quản lý chất lượng dành riêng cho nhà sản xuất thiết bị y tế &mdash; từ kiểm soát thiết kế, rủi ro lâm sàng đến hồ sơ kỹ thuật CE/FDA.",
  },
  {
    code: "ISO 22000 / HACCP",
    title: "An toàn thực phẩm",
    description:
      "Hệ thống quản lý an toàn thực phẩm cho nhà máy thực phẩm chức năng, sản phẩm dinh dưỡng &mdash; tích hợp HACCP và FSSC 22000.",
  },
  {
    code: "ISO 27001",
    title: "An toàn thông tin",
    description:
      "Quản lý an toàn thông tin cho doanh nghiệp số hóa &mdash; đặc biệt quan trọng khi dữ liệu sản xuất, hồ sơ GMP được lưu trữ trên cloud.",
  },
];

const services = [
  "Đánh giá hiện trạng so với chuẩn ISO mục tiêu",
  "Xây dựng hệ thống tài liệu, SOP, hướng dẫn công việc",
  "Đào tạo nhận thức ISO cho toàn bộ cấp bậc nhân sự",
  "Đánh giá nội bộ (Internal Audit) định kỳ",
  "Chuẩn bị hồ sơ và đồng hành đánh giá chứng nhận",
  "Duy trì hệ thống giữa các kỳ tái đánh giá",
];

export default function ISOPage() {
  return (
    <>
      <Header />
      <main className="bg-surface pt-28 pb-20">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
            Lĩnh vực ISO
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mb-6 tracking-tight leading-[1.15]">
            Hệ thống ISO không còn là{" "}
            <span className="text-primary">gánh nặng hồ sơ</span>
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
            AI MIND triển khai ISO 9001, ISO 13485, ISO 22000, ISO 27001 cho doanh nghiệp dược,
            thiết bị y tế và thực phẩm chức năng &mdash; kết hợp AI để tài liệu luôn được cập
            nhật, hồ sơ luôn sẵn sàng cho audit.
          </p>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-[0.5rem] bg-surface-lowest p-8 lg:p-10 shadow-ghost">
            <h2 className="font-display text-xl font-bold text-on-surface mb-4 tracking-tight">
              ISO là hệ thống, không phải bộ giấy tờ
            </h2>
            <p className="text-[0.95rem] text-on-surface-variant leading-relaxed mb-4">
              Nhiều doanh nghiệp triển khai ISO chỉ để có chứng chỉ treo tường &mdash; rồi bỏ
              quên cho đến đợt tái đánh giá tiếp theo. AI MIND thiết kế hệ thống ISO sao cho
              tài liệu sống cùng quy trình thực tế: SOP được cập nhật khi quy trình thay đổi,
              hồ sơ được tạo tự động, đánh giá nội bộ không còn là thủ tục đối phó.
            </p>
            <p className="text-[0.95rem] text-on-surface-variant leading-relaxed">
              Kết quả là chi phí duy trì giảm, rủi ro mất chứng nhận giảm, và quan trọng nhất &mdash;
              hệ thống ISO thực sự tạo ra giá trị cho vận hành thay vì chỉ là gánh nặng hành chính.
            </p>
          </div>
        </section>

        {/* Standards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              Chuẩn ISO chúng tôi hỗ trợ
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {standards.map((s) => (
              <div
                key={s.code}
                className="rounded-[0.5rem] bg-surface-lowest p-6 lg:p-7 shadow-ghost hover:shadow-ghost-lg transition-all duration-300"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 ring-1 ring-primary/10 px-3 py-1 mb-4">
                  <span className="text-[0.7rem] font-semibold text-primary uppercase tracking-wider">
                    {s.code}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-on-surface mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p
                  className="text-sm text-on-surface-variant leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-[0.5rem] bg-primary-container p-8 lg:p-12 shadow-ghost-lg">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6 tracking-tight text-center">
              Gói dịch vụ ISO trọn gói
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {services.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="shrink-0 h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#50d9fe" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-surface mb-4 tracking-tight">
            Đang chuẩn bị chứng nhận ISO hoặc tái đánh giá?
          </h2>
          <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
            Đội ngũ AI MIND có thể đánh giá hệ thống hiện tại và đề xuất lộ trình số hóa giúp
            duy trì ISO bền vững, giảm 50% công sức chuẩn bị audit.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-[0.375rem] bg-primary px-6 py-3.5 text-sm font-bold text-white hover:scale-[1.02] transition-transform duration-200 shadow-ghost"
          >
            Đặt lịch tư vấn ISO miễn phí
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
