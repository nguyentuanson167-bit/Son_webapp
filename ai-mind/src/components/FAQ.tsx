"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Quy mô doanh nghiệp nào phù hợp?",
    answer:
      "AI MIND phục vụ các doanh nghiệp dược từ quy mô vừa (50+ nhân sự) đến lớn, có hệ thống GMP/ISO đang vận hành hoặc đang chuẩn bị triển khai. Chúng tôi cũng hỗ trợ các nhà máy đang mở rộng dây chuyền hoặc chuẩn bị cho đợt thanh tra mới.",
  },
  {
    question: "Có ảnh hưởng đến hoạt động sản xuất khi triển khai GMP/ISO không?",
    answer:
      "Không. Quy trình triển khai của AI MIND được thiết kế để không làm gián đoạn sản xuất. Chúng tôi triển khai theo module, bắt đầu từ các quy trình phụ trợ trước khi tích hợp vào dây chuyền chính. Đội ngũ được đào tạo song song với quá trình vận hành.",
  },
  {
    question: "Bao lâu thì thấy được kết quả?",
    answer:
      "Thông thường sau 4-8 tuần triển khai giai đoạn đầu, doanh nghiệp đã thấy được cải thiện rõ rệt trong quản lý hồ sơ và tốc độ xử lý tài liệu. Sau 3-6 tháng, hệ thống AI automation vận hành ổn định và các chỉ số tuân thủ được cải thiện đáng kể.",
  },
  {
    question: "Chi phí đầu tư ban đầu như thế nào?",
    answer:
      "Chi phí phụ thuộc vào quy mô nhà máy, số lượng chuẩn áp dụng và mức độ tự động hóa mong muốn. Buổi tư vấn miễn phí sẽ giúp đánh giá chính xác phạm vi và đưa ra đề xuất ngân sách phù hợp. Chúng tôi cam kết ROI rõ ràng cho từng giai đoạn.",
  },
  {
    question: "Dữ liệu của chúng tôi có an toàn không?",
    answer:
      "Bảo mật dữ liệu là ưu tiên hàng đầu. Toàn bộ dữ liệu được mã hóa end-to-end, lưu trữ trên hạ tầng đám mây đạt chuẩn ISO 27001. Chúng tôi ký NDA trước khi bắt đầu, và không chia sẻ bất kỳ thông tin nào của khách hàng với bên thứ ba.",
  },
  {
    question: "AI Mind hỗ trợ sau triển khai thế nào?",
    answer:
      "Chúng tôi cung cấp gói đồng hành vận hành bao gồm: giám sát hệ thống, cập nhật mô hình AI theo thay đổi quy định, đào tạo bổ sung cho nhân sự mới, và tư vấn mở rộng khi doanh nghiệp scale up. Đội ngũ hỗ trợ luôn sẵn sàng trong giờ làm việc.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-surface-low" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
            Câu hỏi thường gặp
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="rounded-[0.5rem] bg-surface-lowest shadow-ghost overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-display text-sm sm:text-base font-semibold text-on-surface pr-4">
                  {item.question}
                </span>
                <svg
                  className={`shrink-0 w-5 h-5 text-on-surface-variant transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
