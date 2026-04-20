import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "AI Automation | AI MIND",
  description:
    "Xây dựng hệ thống AI Agents, SOP Chatbot, workflow automation và dashboard chất lượng real-time cho nhà máy dược &mdash; tích hợp an toàn với quy trình GMP.",
};

const solutions = [
  {
    title: "AI Agents xử lý hồ sơ",
    description:
      "Agent đọc batch record, đối chiếu spec, phát hiện bất thường và tạo ticket cho QA &mdash; giải phóng hàng trăm giờ công kiểm tra thủ công mỗi tháng.",
  },
  {
    title: "SOP Chatbot nội bộ",
    description:
      "Nhân viên sản xuất hỏi SOP bằng ngôn ngữ tự nhiên &mdash; chatbot tra cứu đúng phiên bản, trích dẫn điều khoản, không cần mở hàng chục file PDF.",
  },
  {
    title: "Workflow automation CAPA & Deviation",
    description:
      "Tự động phân loại deviation, mapping với SOP liên quan, nhắc lịch effectiveness check và tổng hợp hồ sơ CAPA theo định dạng chuẩn thanh tra.",
  },
  {
    title: "Dashboard chất lượng real-time",
    description:
      "Bảng điều khiển hiển thị KPI chất lượng, OOS, deviation, OEE theo thời gian thực &mdash; lãnh đạo nhà máy ra quyết định nhanh, không đợi báo cáo tuần.",
  },
  {
    title: "Tích hợp ERP / MES / LIMS",
    description:
      "Kết nối hệ thống AI với ERP, MES, LIMS hiện có qua API &mdash; không thay thế hệ thống cũ, chỉ bổ sung lớp thông minh phía trên.",
  },
  {
    title: "Computer Vision cho dây chuyền",
    description:
      "Giám sát nhãn, mã lô, rò rỉ, dị vật trên dây chuyền đóng gói bằng camera AI &mdash; phát hiện lỗi trước khi sản phẩm tới tay người tiêu dùng.",
  },
];

const principles = [
  "Validation theo chuẩn GAMP 5 cho mọi hệ thống AI tham gia vào quyết định GMP",
  "Human-in-the-loop cho các điểm ra quyết định có tác động đến hồ sơ chính thức",
  "Audit trail đầy đủ: mỗi quyết định của AI đều ghi nguồn dữ liệu, thời điểm, logic",
  "Giới hạn quyền truy cập theo nguyên tắc least-privilege cho từng agent",
];

export default function AIAutomationPage() {
  return (
    <>
      <Header />
      <main className="bg-surface pt-28 pb-20">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
            AI Automation
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mb-6 tracking-tight leading-[1.15]">
            Tự động hóa các luồng công việc{" "}
            <span className="text-primary">thủ công</span> trong nhà máy Dược
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
            AI MIND xây dựng hệ thống AI Agents, chatbot, workflow automation và dashboard
            real-time cho nhà máy dược &mdash; an toàn, tuân thủ GMP, và có thể triển khai
            từng module thay vì phải thay đổi toàn hệ thống.
          </p>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-[0.5rem] bg-surface-lowest p-8 lg:p-10 shadow-ghost">
            <h2 className="font-display text-xl font-bold text-on-surface mb-4 tracking-tight">
              AI Automation không phải là thay thế con người
            </h2>
            <p className="text-[0.95rem] text-on-surface-variant leading-relaxed mb-4">
              Trong một nhà máy dược điển hình, QA/QC đang dành phần lớn thời gian cho công việc
              lặp lại: đối chiếu số liệu, check format, ghi chép bằng tay, copy-paste từ hệ thống
              này sang hệ thống khác. Đây không phải công việc đòi hỏi chuyên môn &mdash; nhưng lại
              đang chiếm nguồn lực quý nhất của nhà máy.
            </p>
            <p className="text-[0.95rem] text-on-surface-variant leading-relaxed">
              AI Automation giúp chuyển phần việc đó sang máy, để con người tập trung vào phân
              tích, ra quyết định và cải tiến quy trình &mdash; những việc AI chưa thể thay thế.
            </p>
          </div>
        </section>

        {/* Solutions */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              6 giải pháp AI Automation cho nhà máy Dược
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div
                key={s.title}
                className="rounded-[0.5rem] bg-surface-lowest p-6 shadow-ghost hover:shadow-ghost-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-display text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-on-surface mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-[0.5rem] bg-primary-container p-8 lg:p-12 shadow-ghost-lg">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6 tracking-tight text-center">
              Nguyên tắc triển khai an toàn
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {principles.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="shrink-0 h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#50d9fe" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-surface mb-4 tracking-tight">
            Bắt đầu với 1 use case &mdash; mở rộng khi thấy kết quả
          </h2>
          <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
            Chúng tôi khuyến nghị triển khai AI Automation theo module nhỏ, đo kết quả trong
            4&ndash;8 tuần, rồi mở rộng ra các quy trình khác. Đặt lịch tư vấn để cùng xác định
            use case phù hợp cho nhà máy bạn.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-[0.375rem] bg-primary px-6 py-3.5 text-sm font-bold text-white hover:scale-[1.02] transition-transform duration-200 shadow-ghost"
          >
            Đặt lịch tư vấn AI Automation
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
