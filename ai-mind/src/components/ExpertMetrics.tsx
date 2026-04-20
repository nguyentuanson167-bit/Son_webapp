import Image from "next/image";

export default function ExpertMetrics() {
  return (
    <section className="py-20 sm:py-28 bg-surface" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          {/* Expert Profile */}
          <div className="rounded-[0.5rem] bg-surface-lowest p-8 lg:p-10 shadow-ghost">
            <div className="flex items-start gap-6 mb-6">
              {/* Avatar */}
              <div className="shrink-0 h-24 w-24 rounded-full overflow-hidden ring-2 ring-primary/10">
                <Image
                  src="/son-nguyen-avatar.jpg"
                  alt="Son Nguyen - Founder & Chief Expert"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                  Founder & Chief Expert
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface">
                  Son Nguyen
                </h3>
                <p className="text-sm text-on-surface-variant mt-1">
                  Founder & Chief Expert GMP/ISO
                </p>
              </div>
            </div>

            <blockquote className="text-sm text-on-surface-variant leading-relaxed italic mb-8 border-l-2 border-secondary/30 pl-4">
              &ldquo;Chúng tôi không chỉ giúp doanh nghiệp dược đạt chuẩn — chúng tôi xây dựng năng lực nội bộ để doanh nghiệp tự vận hành hệ thống AI GMP/ISO một cách tự tin và bền vững.&rdquo;
            </blockquote>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="font-display text-3xl font-bold text-primary">10+</div>
                <div className="text-xs text-on-surface-variant mt-1">Năm kinh nghiệm</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">60%</div>
                <div className="text-xs text-on-surface-variant mt-1">Tiến bộ số hóa trung bình</div>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="rounded-[0.5rem] bg-primary-container p-8 lg:p-10 shadow-ghost-lg">
            <h3 className="font-display text-xl font-bold text-white mb-8">
              Hiệu quả thực tế
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-5xl font-extrabold text-secondary">70%</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Giảm thời gian chuẩn bị hồ sơ GMP tại các nhà máy đã triển khai
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-5xl font-extrabold text-secondary">100%</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Các luồng công việc GMP được tự động hóa và số hóa theo chuẩn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
