import Link from "next/link";

const footerLinks = {
  "Tuân thủ": [
    { label: "ISO 9001", href: "#" },
    { label: "ISO 13485", href: "#" },
    { label: "Hướng dẫn GMP", href: "#" },
    { label: "Tài liệu", href: "#" },
  ],
  "Công ty": [
    { label: "Về chúng tôi", href: "#" },
    { label: "Giải pháp", href: "#solutions" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
  ],
  "Pháp lý": [
    { label: "Chính sách bảo mật", href: "#" },
    { label: "Điều khoản dịch vụ", href: "#" },
    { label: "Bảo mật dữ liệu", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-1.5 mb-4">
              <div className="h-7 w-7 rounded-[0.375rem] bg-secondary flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#041534" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-white">AI MIND</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              Cung cấp giải pháp tư vấn GMP/ISO và xây dựng hệ thống AI cho doanh nghiệp dược phẩm Việt Nam.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/40">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                1900 XXXX XXX
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                contact@aimind.vn
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; 2024 AI Mind Consulting. Bảo lưu mọi quyền. Đối tác chứng nhận GMP &amp; ISO.
          </p>
        </div>
      </div>
    </footer>
  );
}
