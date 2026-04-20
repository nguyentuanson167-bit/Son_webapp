import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Agentic AI cho doanh nghiệp Dược | AI MIND",
  description:
    "Agentic AI không chỉ trả lời câu hỏi - nó chủ động thực thi quy trình: soạn thảo SOP, kiểm tra hồ sơ lô, xử lý CAPA tự động cho nhà máy dược.",
};

export default function AgenticAIPostPage() {
  return (
    <>
      <Header />
      <main className="bg-surface pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Quay lại Blog
            </Link>
          </div>

          <header className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 ring-1 ring-primary/10 px-3 py-1 mb-4">
              <span className="text-[0.7rem] font-semibold text-primary uppercase tracking-wider">
                Agentic AI
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-on-surface mb-5 tracking-tight leading-[1.15]">
              Agentic AI cho doanh nghiệp Dược: từ trợ lý sang nhân viên số
            </h1>
            <div className="flex items-center gap-4 text-sm text-on-surface-variant">
              <span>20/04/2026</span>
              <span>&bull;</span>
              <span>6 phút đọc</span>
              <span>&bull;</span>
              <span>Son Nguyen</span>
            </div>
          </header>

          <div className="prose-content space-y-6 text-[0.95rem] leading-[1.75] text-on-surface-variant">
            <p className="text-lg text-on-surface font-medium leading-relaxed">
              Trong 2 năm qua, các công ty dược đã nghe nhiều về AI như một trợ lý thông minh:
              hỏi đáp về SOP, tóm tắt tài liệu, gợi ý phân loại lỗi. Nhưng bước tiến thực sự đang
              diễn ra là <strong className="text-primary">Agentic AI</strong> &mdash; thế hệ AI có
              khả năng chủ động thực thi các chuỗi hành động để hoàn thành một quy trình nghiệp
              vụ, chứ không chỉ trả lời câu hỏi.
            </p>

            <section>
              <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4 tracking-tight">
                Agentic AI là gì?
              </h2>
              <p>
                Hiểu đơn giản, Agentic AI là hệ thống AI được thiết kế để:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li><strong className="text-on-surface">Hiểu mục tiêu</strong> của người dùng hoặc quy trình.</li>
                <li><strong className="text-on-surface">Lên kế hoạch</strong> các bước cần làm để đạt mục tiêu.</li>
                <li><strong className="text-on-surface">Tự thực thi</strong> từng bước thông qua công cụ (tools): đọc/ghi tài liệu, truy vấn cơ sở dữ liệu, gọi API hệ thống nội bộ.</li>
                <li><strong className="text-on-surface">Tự kiểm tra và điều chỉnh</strong> khi gặp kết quả không như mong đợi.</li>
                <li><strong className="text-on-surface">Báo cáo minh bạch</strong> toàn bộ quyết định và hành động để người có thẩm quyền rà soát.</li>
              </ul>
              <p>
                Nói cách khác, một Agent AI hoạt động gần giống một nhân viên số &mdash; có nhiệm
                vụ rõ ràng, có công cụ, và có khả năng tự hoàn tất công việc thay vì chỉ ngồi
                chờ câu hỏi.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4 tracking-tight">
                Vì sao ngành Dược là nơi Agentic AI tạo ra giá trị rõ nhất?
              </h2>
              <p>
                Doanh nghiệp dược đang có 4 đặc điểm khiến Agentic AI trở nên đặc biệt phù hợp:
              </p>
              <ol className="list-decimal list-inside space-y-3 ml-2 mt-3">
                <li>
                  <strong className="text-on-surface">Khối lượng tài liệu khổng lồ</strong>: SOP,
                  batch record, hồ sơ thẩm định, CAPA, hồ sơ thanh tra. Chỉ riêng một lô sản xuất
                  đã có thể sinh ra hàng trăm trang ghi chép.
                </li>
                <li>
                  <strong className="text-on-surface">Quy trình lặp lại, có chuẩn rõ ràng</strong>:
                  đúng ưu thế để AI học và thực thi &mdash; GMP, ISO đã có chuẩn hóa đầy đủ.
                </li>
                <li>
                  <strong className="text-on-surface">Áp lực tuân thủ theo thời gian thực</strong>:
                  thanh tra, hậu kiểm có thể đến bất kỳ lúc nào, đòi hỏi trạng thái &ldquo;audit-
                  ready&rdquo;.
                </li>
                <li>
                  <strong className="text-on-surface">Thiếu hụt nhân lực chất lượng</strong>:
                  QA/QC có chuyên môn sâu là nguồn lực quý, không nên dùng cho việc copy-paste,
                  check format, đối chiếu số.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4 tracking-tight">
                3 use case Agentic AI thực tế cho nhà máy Dược
              </h2>

              <div className="rounded-[0.5rem] bg-surface-lowest p-6 shadow-ghost mt-4">
                <h3 className="font-display text-lg font-bold text-primary mb-2">
                  1. Agent soạn thảo và rà soát SOP/quy trình
                </h3>
                <p className="text-sm">
                  Thay vì biên tập viên GMP ngồi viết nháp SOP từ đầu, một Agent có thể: tham
                  chiếu template theo chuẩn đang áp dụng, sinh bản nháp, đối chiếu với các SOP
                  liên quan để phát hiện mâu thuẫn, gợi ý nơi cần ký duyệt. Chuyên gia chỉ cần
                  rà soát bản nháp đã có cấu trúc đúng chuẩn.
                </p>
              </div>

              <div className="rounded-[0.5rem] bg-surface-lowest p-6 shadow-ghost mt-4">
                <h3 className="font-display text-lg font-bold text-primary mb-2">
                  2. Agent kiểm tra hồ sơ lô tự động
                </h3>
                <p className="text-sm">
                  Agent đọc batch record, đối chiếu các trường bắt buộc, chữ ký, timestamp, giá
                  trị nằm trong khoảng spec. Khi phát hiện điểm bất thường, Agent tạo ticket
                  chuyển cho QA phụ trách và đính kèm bằng chứng. Hồ sơ nào sạch được đẩy thẳng
                  vào kho lưu trữ, không cần QA review thủ công từng trang.
                </p>
              </div>

              <div className="rounded-[0.5rem] bg-surface-lowest p-6 shadow-ghost mt-4">
                <h3 className="font-display text-lg font-bold text-primary mb-2">
                  3. Agent xử lý CAPA và hậu kiểm thanh tra
                </h3>
                <p className="text-sm">
                  Khi có finding từ thanh tra, Agent: phân loại mức độ, mapping với SOP liên quan,
                  đề xuất hành động khắc phục dựa trên lịch sử CAPA của nhà máy, nhắc lịch
                  effectiveness check, và tự động tổng hợp bộ hồ sơ trả lời thanh tra theo định
                  dạng chuẩn.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4 tracking-tight">
                Nguyên tắc triển khai an toàn
              </h2>
              <p>
                Agentic AI không được thay thế con người trong các điểm ra quyết định cuối cùng.
                Khi AI MIND triển khai Agentic AI cho khách hàng dược, chúng tôi luôn tuân thủ 4
                nguyên tắc:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li><strong className="text-on-surface">Human-in-the-loop</strong> cho mọi quyết định ảnh hưởng đến hồ sơ GMP chính thức.</li>
                <li><strong className="text-on-surface">Minh bạch dấu vết</strong> &mdash; Agent ghi lại đầy đủ mỗi quyết định, nguồn dữ liệu, bản ghi audit trail sẵn sàng cho thanh tra.</li>
                <li><strong className="text-on-surface">Giới hạn công cụ</strong> &mdash; Agent chỉ được truy cập đúng phạm vi dữ liệu và hành động cần thiết.</li>
                <li><strong className="text-on-surface">Validation như phần mềm GMP</strong> &mdash; Agent được validate như bất kỳ hệ thống computerized nào theo chuẩn GAMP 5.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-on-surface mt-8 mb-4 tracking-tight">
                Kết luận
              </h2>
              <p>
                Agentic AI là bước nhảy thực chất so với các chatbot AI đơn thuần. Với một nhà
                máy dược có hàng trăm quy trình thủ công, mỗi Agent được triển khai đúng có thể
                giải phóng hàng trăm giờ công mỗi tháng cho đội ngũ chuyên môn &mdash; đồng thời
                giảm sai sót thao tác lặp lại, tăng độ sẵn sàng thanh tra.
              </p>
              <p>
                Câu hỏi không còn là &ldquo;AI có thay thế QA không&rdquo;, mà là &ldquo;QA của
                bạn đang dành bao nhiêu phần trăm thời gian cho công việc đáng ra Agent nên làm
                thay?&rdquo;.
              </p>
            </section>

            <div className="mt-12 rounded-[0.5rem] bg-primary-container p-8 text-center">
              <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">
                Muốn đánh giá Agentic AI phù hợp cho nhà máy bạn?
              </h3>
              <p className="text-sm text-white/70 mb-6 max-w-md mx-auto leading-relaxed">
                Đặt lịch tư vấn miễn phí với chuyên gia AI MIND để cùng phân tích use case cụ thể
                và lộ trình triển khai an toàn.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-[0.375rem] bg-secondary px-6 py-3 text-sm font-bold text-on-secondary hover:scale-[1.02] transition-transform duration-200"
              >
                Đặt lịch tư vấn miễn phí
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
