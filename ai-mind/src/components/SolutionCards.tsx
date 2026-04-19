export default function SolutionCards() {
  return (
    <section className="py-20 sm:py-28 bg-surface" id="solutions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1: GMP/ISO Consulting */}
          <div className="rounded-[0.5rem] bg-surface-lowest p-8 lg:p-10 shadow-ghost flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-10 w-10 rounded-[0.375rem] bg-primary/5 flex items-center justify-center text-primary">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Dịch vụ 01</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface mb-4 leading-snug">
                Tư vấn triển khai GMP/ISO kết hợp AI
              </h3>

              <ul className="space-y-3 mb-8">
                {[
                  "Thiết lập hệ thống tài liệu chuẩn GMP/ISO đạt yêu cầu kiểm tra",
                  "AI hỗ trợ soát lỗi tài liệu, phân loại deviation và CAPA tự động",
                  "Đào tạo nội bộ AI GMP/ISO cho đội QA/QC và vận hành",
                  "Xây dựng trạng thái audit-ready liên tục thay vì chuẩn bị theo đợt",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <svg className="shrink-0 mt-0.5 text-tertiary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-[0.375rem] border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all duration-200 w-full sm:w-auto"
            >
              Đặt lịch tư vấn GMP/ISO
            </a>
          </div>

          {/* Card 2: AI & Automation */}
          <div className="rounded-[0.5rem] hero-gradient p-8 lg:p-10 shadow-ghost-lg flex flex-col justify-between relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <svg viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke="#50d9fe" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" stroke="#50d9fe" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" stroke="#50d9fe" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="20" stroke="#50d9fe" strokeWidth="0.5" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={angle}
                    x1="100"
                    y1="100"
                    x2={100 + 80 * Math.cos((angle * Math.PI) / 180)}
                    y2={100 + 80 * Math.sin((angle * Math.PI) / 180)}
                    stroke="#50d9fe"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-10 w-10 rounded-[0.375rem] bg-white/10 flex items-center justify-center text-secondary">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="14" x2="23" y2="14" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="14" x2="4" y2="14" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Dịch vụ 02</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                Xây dựng hệ thống AI & Automation nhà máy Dược
              </h3>

              <ul className="space-y-3 mb-8">
                {[
                  "Triển khai AI Agents xử lý hồ sơ tự động",
                  "Số hóa quy trình vận hành SOP bằng Chatbot nội bộ",
                  "Hệ thống Dashboard giám sát chất lượng thời gian thực",
                  "Tích hợp workflow automation cho toàn bộ chuỗi sản xuất",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <svg className="shrink-0 mt-0.5 text-secondary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 rounded-[0.375rem] bg-secondary px-6 py-3 text-sm font-bold text-on-secondary hover:scale-[1.02] transition-transform duration-200 w-full sm:w-auto"
            >
              Đặt lịch tư vấn AI & Automation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
