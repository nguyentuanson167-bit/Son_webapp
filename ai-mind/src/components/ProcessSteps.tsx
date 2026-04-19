const steps = [
  {
    number: "1",
    title: "Tư vấn miễn phí",
    description:
      "Chia sẻ hiện trạng và vấn đề. Nhận đánh giá ứng dụng AI trong 30 phút.",
  },
  {
    number: "2",
    title: "Đánh giá & Đề xuất",
    description:
      "Xây dựng lộ trình triển khai cụ thể dựa trên hiện trạng GMP/ISO của doanh nghiệp.",
  },
  {
    number: "3",
    title: "Triển khai & Đào tạo",
    description:
      "Cài đặt giải pháp và hướng dẫn đội ngũ vận hành thành thạo với AI.",
  },
  {
    number: "4",
    title: "Vận hành & Hỗ trợ",
    description:
      "Bảo trì hệ thống và đào tạo nâng cao liên tục cho đội ngũ AI nội bộ.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 sm:py-28 bg-surface-low" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
            4 bước để chuyển đổi
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[1px] bg-outline-variant/40" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {/* Step number */}
              <div className="mx-auto mb-6 relative">
                <div className="h-20 w-20 mx-auto rounded-full bg-surface-lowest shadow-ghost flex items-center justify-center group-hover:shadow-ghost-lg transition-all duration-300 relative z-10">
                  <span className="font-display text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-base font-bold text-on-surface mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
