const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Tuân thủ GMP/ISO",
    description:
      "Tự động hóa ban sáo, cập nhật và giám sát trạng thái tuân thủ 24/7. Hỗ trợ theo chuẩn quốc tế.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Vận hành tự động hóa 60%",
    description:
      "Giảm thiểu thao tác nhập liệu và vô lý quy trình lặp lại, giải phóng các AI agent chuyên biệt.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: "Giữ tuân thủ lợi thế",
    description:
      "Biến chi phí đầu tư lên tuân thủ trở thành sự khác biệt cạnh tranh bền vững trên thị trường dược.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-20 sm:py-28 bg-surface-low" id="value">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight leading-tight">
            AI Mind kết hợp chuyên môn GMP/ISO và công nghệ AI để giải quyết cả{" "}
            <span className="text-secondary-dim">3 bài toán</span> cùng lúc
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="text-center group">
              <div className="mx-auto mb-6 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
