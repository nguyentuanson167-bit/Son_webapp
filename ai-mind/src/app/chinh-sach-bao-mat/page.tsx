import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chính sách bảo mật | AI MIND",
  description:
    "Chính sách bảo mật của AI MIND - cam kết bảo vệ thông tin cá nhân và dữ liệu của khách hàng doanh nghiệp dược phẩm.",
};

export default function PrivacyPolicyPage() {
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
              Chính sách bảo mật
            </h1>
            <p className="text-sm text-on-surface-variant">
              Cập nhật lần cuối: 20/04/2026
            </p>
          </header>

          <div className="space-y-8 text-[0.95rem] leading-relaxed text-on-surface-variant">
            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                1. Giới thiệu
              </h2>
              <p>
                AI MIND (&ldquo;chúng tôi&rdquo;) cam kết bảo vệ quyền riêng tư và thông tin cá nhân của
                khách hàng, đối tác và người dùng website khi sử dụng dịch vụ tư vấn, đào tạo và
                triển khai AI GMP/ISO cho doanh nghiệp dược. Chính sách này mô tả cách chúng tôi
                thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu của bạn.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                2. Thông tin chúng tôi thu thập
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Thông tin liên hệ: họ tên, chức danh, email, số điện thoại, tên công ty.</li>
                <li>Thông tin doanh nghiệp: lĩnh vực hoạt động, quy mô, chuẩn đang áp dụng (GMP, ISO), mức độ số hóa hiện tại.</li>
                <li>Nội dung pain point và nhu cầu dịch vụ bạn chia sẻ qua form liên hệ.</li>
                <li>Dữ liệu kỹ thuật: địa chỉ IP, trình duyệt, thiết bị, nguồn truy cập (UTM) phục vụ phân tích và tối ưu trải nghiệm.</li>
                <li>Trong phạm vi dự án tư vấn/triển khai: tài liệu SOP, hồ sơ quy trình do khách hàng cung cấp theo thỏa thuận bảo mật (NDA) riêng.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                3. Mục đích sử dụng
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Phản hồi yêu cầu tư vấn, đặt lịch làm việc, cung cấp báo giá và tài liệu liên quan.</li>
                <li>Thực hiện dịch vụ tư vấn, đào tạo, triển khai AI/Automation theo hợp đồng.</li>
                <li>Gửi thông tin về dịch vụ, chương trình đào tạo, nội dung chuyên môn GMP/ISO (khi có sự đồng ý).</li>
                <li>Phân tích hiệu quả website và cải thiện chất lượng dịch vụ.</li>
                <li>Tuân thủ nghĩa vụ pháp lý khi có yêu cầu từ cơ quan có thẩm quyền.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                4. Chia sẻ dữ liệu
              </h2>
              <p>
                AI MIND KHÔNG bán, cho thuê hoặc trao đổi thông tin cá nhân của bạn với bên thứ ba
                cho mục đích tiếp thị. Chúng tôi chỉ chia sẻ dữ liệu trong các trường hợp:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>Với nhà cung cấp hạ tầng kỹ thuật (Google Firebase, Vercel, Google Workspace) để vận hành website và CRM nội bộ, theo các cam kết bảo mật của các nhà cung cấp này.</li>
                <li>Khi có sự đồng ý rõ ràng từ bạn.</li>
                <li>Khi có yêu cầu hợp lệ từ cơ quan nhà nước có thẩm quyền.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                5. Lưu trữ và bảo mật
              </h2>
              <p>
                Dữ liệu được lưu trữ trên hạ tầng cloud đạt chuẩn (Google Firebase &mdash; SOC 2,
                ISO 27001, GDPR). Truy cập được kiểm soát theo vai trò (admin, consultant, sales).
                Các tài liệu nhạy cảm của khách hàng trong dự án triển khai được lưu trong môi
                trường cách ly theo từng dự án và tuân thủ thỏa thuận bảo mật song phương.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                6. Quyền của bạn
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu cá nhân.</li>
                <li>Rút lại sự đồng ý nhận thông tin tiếp thị bất cứ lúc nào.</li>
                <li>Yêu cầu giải thích về cách dữ liệu của bạn được sử dụng.</li>
              </ul>
              <p className="mt-3">
                Để thực hiện các quyền trên, liên hệ: <a href="mailto:contact@aimind.vn" className="text-primary font-semibold hover:underline">contact@aimind.vn</a> hoặc hotline <a href="tel:0358558804" className="text-primary font-semibold hover:underline">035 855 8804</a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-on-surface mb-3">
                7. Thay đổi chính sách
              </h2>
              <p>
                AI MIND có thể cập nhật chính sách bảo mật này tùy theo thay đổi pháp luật hoặc
                quy trình nội bộ. Các thay đổi trọng yếu sẽ được thông báo qua website hoặc email
                trước khi có hiệu lực.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
