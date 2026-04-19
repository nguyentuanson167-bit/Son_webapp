const painPoints = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Hồ sơ GMP/ISO ngập đầu",
    description:
      "Quản lý hàng ngàn trang tài liệu cùng quy trình ký duyệt thủ công tốn thời gian.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Thanh tra tuân thủ là nỗi lo",
    description:
      "Áp lực lớn mỗi kỳ thanh tra vì thiếu trạng thái sẵn sàng kiểm tra theo thời gian thực.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Quy trình thủ công, dễ sai sót",
    description:
      "Ghi chép lặp lại bằng tay dẫn đến chậm phản hồi, sai sót và phụ thuộc mạnh vào con người.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Muốn số hóa nhưng không biết bắt đầu từ đâu",
    description:
      "Thiếu lộ trình rõ ràng về việc nên ưu tiên GMP, ISO, AI hay Automation trước.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 sm:py-28 bg-surface" id="pain-points">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
            Những thách thức đang kìm hãm{" "}
            <span className="text-primary">doanh nghiệp Dược</span> của bạn
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="group rounded-[0.5rem] bg-surface-lowest p-8 shadow-ghost hover:shadow-ghost-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="mb-5 inline-flex items-center justify-center h-12 w-12 rounded-[0.375rem] bg-surface-low text-primary">
                {point.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
