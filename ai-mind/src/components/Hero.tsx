export default function Hero() {
  return (
    <section className="relative hero-gradient-light pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23041534' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 ring-1 ring-primary/10 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-dim animate-pulse" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Chuyên gia GMP/ISO + AI
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-on-surface mb-6">
              Doanh nghiệp Dược của bạn đang{" "}
              <span className="text-secondary-dim">mất hàng trăm giờ</span>{" "}
              mỗi tháng cho các luồng công việc thủ công?
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-xl mb-10">
              AI MIND giúp doanh nghiệp dược triển khai GMP/ISO đạt chuẩn, đồng thời tự động hóa khoảng{" "}
              <span className="text-primary font-semibold">60%</span> các quy trình vận hành bằng AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[0.375rem] bg-primary px-6 py-3.5 text-sm font-bold text-white hover:scale-[1.02] transition-transform duration-200 shadow-ghost"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đặt lịch tư vấn AI & Automation
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-[0.375rem] border border-primary/20 bg-white px-6 py-3.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors duration-200"
              >
                Tư vấn triển khai GMP/ISO
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <p className="mt-6 text-xs text-on-surface-variant/70">
              Miễn phí tư vấn sơ bộ cho doanh nghiệp dược đang cần chuyển đổi GMP/ISO &amp; AI automation.
            </p>
          </div>

          {/* Right visual - Dashboard mockup */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-[0.5rem] bg-white border border-slate-100 p-6 shadow-ghost-lg">
              {/* Mock dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-tertiary" />
                  <span className="text-xs font-semibold text-on-surface">Bảng Dashboard hiệu suất</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </div>
              </div>

              {/* Mock chart area */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-[0.375rem] bg-surface p-3">
                    <div className="text-xs text-on-surface-variant mb-1">Tuân thủ SOP</div>
                    <div className="text-xl font-bold text-tertiary-dim">98.5%</div>
                  </div>
                  <div className="rounded-[0.375rem] bg-surface p-3">
                    <div className="text-xs text-on-surface-variant mb-1">Hồ sơ số hóa</div>
                    <div className="text-xl font-bold text-secondary-dim">2,847</div>
                  </div>
                  <div className="rounded-[0.375rem] bg-surface p-3">
                    <div className="text-xs text-on-surface-variant mb-1">Thời gian giảm</div>
                    <div className="text-xl font-bold text-primary">60%</div>
                  </div>
                </div>

                {/* Mock bar chart */}
                <div className="rounded-[0.375rem] bg-surface p-4">
                  <div className="text-xs text-on-surface-variant mb-3">Tiến độ tuân thủ theo tháng</div>
                  <div className="flex items-end gap-2 h-24">
                    {[40, 55, 45, 65, 70, 60, 78, 85, 88, 92, 95, 98].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm" style={{
                        height: `${h}%`,
                        background: i >= 9 ? '#4edea3' : i >= 6 ? '#3bc4e8' : 'rgba(4, 21, 52, 0.1)',
                      }} />
                    ))}
                  </div>
                </div>

                {/* Mock task list */}
                <div className="space-y-2">
                  {[
                    { label: "Soạn thảo, kiểm tra quy trình, quy định, kiểm tra hồ sơ lô tự động", status: "done" },
                    { label: "Hàng trăm workflow tự động cho Doanh nghiệp Dược", status: "progress" },
                    { label: "Xử lý hồ sơ khắc phục thanh tra, CAPA tự động", status: "pending" },
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-[0.375rem] bg-surface px-3 py-2">
                      <div className={`h-2 w-2 rounded-full ${
                        task.status === "done" ? "bg-tertiary" :
                        task.status === "progress" ? "bg-secondary-dim" : "bg-slate-300"
                      }`} />
                      <span className="text-xs text-on-surface-variant flex-1">{task.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-[0.375rem] bg-tertiary px-4 py-2 shadow-ghost">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#041534" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="text-xs font-bold text-on-secondary">AI-Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
