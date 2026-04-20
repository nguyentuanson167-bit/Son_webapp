import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Điều khoản dịch vụ | AI MIND",
  description:
    "Điều khoản sử dụng dịch vụ tư vấn, đào tạo và triển khai AI GMP/ISO của AI MIND.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="bg-surface pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
              Pháp lý
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface mb-4 tracking-tight">
              Điều khoản dịch vụ
            </h1>
            <p className="text-sm text-on-surface-variant">
              Cập nhật lần cuối: 20/04/2026
            </p>
          </header>

          <div className="space-y-8 text-[0.95rem] leading-relaxed text-on-surface-variant">
            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                1. Phạm vi áp dụng
              </h2>
              <p>
                Điều khoản này áp dụng cho mọi tương tác giữa AI MIND và khách hàng sử dụng
                website, tài liệu, dịch vụ tư vấn GMP/ISO, đào tạo, và triển khai hệ thống AI/
                Automation cho doanh nghiệp dược. Khi sử dụng dịch vụ của chúng tôi, bạn đồng ý
                tuân thủ đầy đủ các điều khoản dưới đây.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                2. Các dịch vụ cung cấp
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Tư vấn triển khai GMP/ISO kết hợp AI.</li>
                <li>Đào tạo AI GMP/ISO cho QA/QC, Production, IT và Management.</li>
                <li>Xây dựng hệ thống AI Agents, SOP Chatbot, Dashboard, Automation cho nhà máy dược.</li>
                <li>Đánh giá hiện trạng (Gap Assessment) và lập lộ trình số hóa.</li>
                <li>Gói đồng hành và hỗ trợ sau triển khai.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                3. Quy trình hợp tác
              </h2>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Tư vấn sơ bộ miễn phí sau khi khách hàng gửi yêu cầu qua website hoặc hotline.</li>
                <li>Ký thỏa thuận bảo mật (NDA) trước khi khảo sát hiện trạng chi tiết.</li>
                <li>Đề xuất giải pháp, báo giá và thống nhất hợp đồng dịch vụ.</li>
                <li>Triển khai theo các mốc đã chốt, có báo cáo định kỳ.</li>
                <li>Nghiệm thu, chuyển giao, đào tạo vận hành và bàn giao bảo hành.</li>
              </ol>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                4. Trách nhiệm của khách hàng
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Cung cấp thông tin đầy đủ, trung thực phục vụ đánh giá và triển khai.</li>
                <li>Tuân thủ thanh toán và các cam kết đã ký.</li>
                <li>Tôn trọng quyền sở hữu trí tuệ của AI MIND đối với tài liệu đào tạo, template quy trình, công cụ phần mềm nội bộ.</li>
                <li>Không sử dụng tài liệu của AI MIND để cạnh tranh trực tiếp hoặc chia sẻ công khai khi chưa có sự đồng ý bằng văn bản.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                5. Trách nhiệm của AI MIND
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Cung cấp dịch vụ đúng phạm vi, tiến độ và chất lượng đã thỏa thuận.</li>
                <li>Bảo mật tuyệt đối thông tin và tài liệu nội bộ của khách hàng.</li>
                <li>Đội ngũ tư vấn có chuyên môn phù hợp với GMP, ISO và AI cho ngành dược.</li>
                <li>Hỗ trợ khắc phục các lỗi phát sinh trong thời gian bảo hành đã thỏa thuận.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                6. Giới hạn trách nhiệm
              </h2>
              <p>
                AI MIND không chịu trách nhiệm cho các quyết định kinh doanh, thanh tra hoặc pháp
                lý của khách hàng dựa trên nội dung tư vấn/đào tạo của chúng tôi. Mọi kết luận về
                tính tuân thủ GMP/ISO chính thức cần được phê duyệt bởi cơ quan chứng nhận có
                thẩm quyền. AI MIND không cam kết thay thế đánh giá chuyên môn cuối cùng từ phía
                doanh nghiệp và các bên chứng nhận.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                7. Sử dụng AI một cách có trách nhiệm
              </h2>
              <p>
                Các công cụ AI mà AI MIND triển khai được thiết kế để hỗ trợ con người, không
                thay thế đánh giá chuyên môn của QA/QC và các chuyên gia GMP/ISO. Khách hàng có
                trách nhiệm rà soát, xác nhận và chịu trách nhiệm cuối cùng về các đầu ra do AI
                tạo ra trong quy trình GMP chính thức của mình.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                8. Giải quyết tranh chấp
              </h2>
              <p>
                Mọi tranh chấp sẽ được giải quyết trước hết qua thương lượng thiện chí. Nếu không
                đạt được thỏa thuận, tranh chấp sẽ được giải quyết tại Tòa án có thẩm quyền tại
                Việt Nam theo pháp luật Việt Nam hiện hành.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                9. Liên hệ
              </h2>
              <p>
                Email: <a href="mailto:contact@aimind.vn" className="text-primary font-semibold hover:underline">contact@aimind.vn</a><br />
                Hotline: <a href="tel:0358558804" className="text-primary font-semibold hover:underline">035 855 8804</a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
