import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bảo mật dữ liệu | AI MIND",
  description:
    "Cam kết bảo mật dữ liệu của AI MIND trong tư vấn, đào tạo và triển khai AI GMP/ISO cho doanh nghiệp dược phẩm.",
};

export default function DataProtectionPage() {
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
              Bảo mật dữ liệu
            </h1>
            <p className="text-sm text-on-surface-variant">
              Cập nhật lần cuối: 20/04/2026
            </p>
          </header>

          <div className="space-y-8 text-[0.95rem] leading-relaxed text-on-surface-variant">
            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                1. Cam kết bảo mật
              </h2>
              <p>
                AI MIND hiểu rằng dữ liệu của doanh nghiệp dược phẩm &mdash; đặc biệt là SOP,
                batch record, CAPA, kết quả kiểm tra, hồ sơ thanh tra &mdash; là tài sản nhạy
                cảm và chịu điều chỉnh chặt chẽ bởi GMP, ISO, và các quy định ngành. Chúng tôi
                cam kết bảo vệ các dữ liệu này với tiêu chuẩn cao nhất trong mọi giai đoạn:
                khảo sát, triển khai, vận hành, và chuyển giao.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                2. Nguyên tắc xử lý dữ liệu
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-on-surface">Mục đích rõ ràng</strong>: dữ liệu chỉ được dùng cho mục đích đã thỏa thuận trong hợp đồng.</li>
                <li><strong className="text-on-surface">Tối thiểu hóa</strong>: chỉ thu thập và xử lý những gì cần thiết cho kết quả đã cam kết.</li>
                <li><strong className="text-on-surface">Phân quyền theo vai trò</strong>: nhân sự chỉ tiếp cận dữ liệu trong phạm vi công việc.</li>
                <li><strong className="text-on-surface">Kiểm soát truy cập</strong>: xác thực đa lớp, ghi nhật ký (audit log) mọi thao tác thay đổi.</li>
                <li><strong className="text-on-surface">Mã hóa</strong>: dữ liệu được mã hóa cả khi lưu trữ và khi truyền tải.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                3. Hạ tầng kỹ thuật
              </h2>
              <p>
                Các hệ thống AI/Automation triển khai cho khách hàng được host trên hạ tầng cloud
                đạt các chứng nhận bảo mật quốc tế:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>Google Cloud / Firebase: SOC 2 Type II, ISO 27001, ISO 27017, ISO 27018, GDPR.</li>
                <li>Vercel: SOC 2 Type II, HIPAA eligible (khi có yêu cầu).</li>
                <li>Khi khách hàng yêu cầu, chúng tôi có thể triển khai trên hạ tầng on-premise hoặc private cloud riêng.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                4. Sử dụng AI có trách nhiệm
              </h2>
              <p>
                Khi tích hợp các mô hình AI (LLM) vào quy trình GMP:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>Không dùng dữ liệu nội bộ của khách hàng để huấn luyện mô hình bên thứ ba trừ khi có sự đồng ý rõ ràng bằng văn bản.</li>
                <li>Mọi gợi ý từ AI được đánh dấu rõ là đầu ra máy và cần có sự rà soát của người có chuyên môn trước khi đưa vào hồ sơ GMP chính thức.</li>
                <li>Luôn giữ vết dữ liệu (data lineage) để đảm bảo khả năng truy vết theo yêu cầu thanh tra.</li>
                <li>Không để AI thay thế quyết định chuyên môn của QA/QC, validation, hoặc QP.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                5. Thỏa thuận bảo mật (NDA)
              </h2>
              <p>
                Trước mọi buổi khảo sát chi tiết, AI MIND và khách hàng sẽ ký NDA song phương quy
                định rõ phạm vi dữ liệu được chia sẻ, thời hạn bảo mật, và trách nhiệm của các bên.
                Toàn bộ nhân sự AI MIND tham gia dự án đều ký cam kết bảo mật nội bộ với cùng mức
                ràng buộc.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                6. Xử lý sự cố bảo mật
              </h2>
              <p>
                Nếu có sự cố liên quan đến dữ liệu của khách hàng (rò rỉ, truy cập trái phép, mất
                mát), AI MIND cam kết:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>Thông báo cho khách hàng trong vòng 24 giờ kể từ khi phát hiện.</li>
                <li>Cung cấp báo cáo phân tích nguyên nhân gốc và phương án khắc phục.</li>
                <li>Phối hợp với các bên để giảm thiểu tác động và ngăn ngừa tái diễn.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                7. Chuyển giao và xóa dữ liệu
              </h2>
              <p>
                Khi kết thúc dự án, AI MIND sẽ chuyển giao toàn bộ tài sản dữ liệu cho khách hàng
                theo thỏa thuận. Dữ liệu lưu trữ tại AI MIND sẽ được xóa an toàn trong thời hạn
                quy định, trừ khi pháp luật yêu cầu lưu giữ lâu hơn.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                8. Liên hệ
              </h2>
              <p>
                Mọi câu hỏi về bảo mật dữ liệu vui lòng liên hệ: <a href="mailto:contact@aimind.vn" className="text-primary font-semibold hover:underline">contact@aimind.vn</a> &bull; <a href="tel:0358558804" className="text-primary font-semibold hover:underline">035 855 8804</a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
