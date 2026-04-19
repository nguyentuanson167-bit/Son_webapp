export default function ClosingCTA() {
  return (
    <section className="relative py-20 sm:py-28 cta-gradient overflow-hidden" id="contact">
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.03]" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/[0.05]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
          Doanh nghiệp Dược của bạn xứng đáng vận hành thông minh hơn
        </h2>

        <p className="text-base text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
          Đừng để quy trình thủ công kìm hãm sự tăng trưởng. Hãy để AI Mind đồng hành cùng bạn trên hành trình số hóa GMP.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center gap-2 rounded-[0.375rem] bg-secondary px-8 py-4 text-sm font-bold text-on-secondary hover:scale-[1.02] transition-transform duration-200"
          >
            Tư vấn miễn phí ngay
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center gap-2 rounded-[0.375rem] border border-white/20 px-8 py-4 text-sm font-semibold text-white hover:bg-white/5 transition-colors duration-200"
          >
            Tìm hiểu thêm giải pháp
          </a>
        </div>
      </div>
    </section>
  );
}
