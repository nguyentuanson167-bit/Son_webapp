import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Blog | AI MIND",
  description:
    "Kiến thức chuyên sâu về AI, Agentic AI, GMP, ISO và chuyển đổi số cho doanh nghiệp dược phẩm.",
};

const posts = [
  {
    slug: "agentic-ai-cho-doanh-nghiep-duoc",
    title: "Agentic AI cho doanh nghiệp Dược: từ trợ lý sang nhân viên số",
    excerpt:
      "Agentic AI không chỉ trả lời câu hỏi &mdash; nó chủ động thực thi các quy trình: soạn thảo SOP, kiểm tra hồ sơ lô, xử lý CAPA tự động. Đây là bước tiến quan trọng cho nhà máy dược muốn số hóa thực sự.",
    category: "Agentic AI",
    readTime: "6 phút đọc",
    date: "20/04/2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-surface pt-28 pb-20">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
              Blog
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">
              Kiến thức AI &amp; GMP/ISO cho ngành Dược
            </h1>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Các bài viết chuyên sâu về AI, Agentic AI, tự động hóa quy trình và ứng dụng thực
              tế cho doanh nghiệp dược phẩm.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-[0.5rem] bg-surface-lowest p-6 lg:p-8 shadow-ghost hover:shadow-ghost-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 ring-1 ring-primary/10 px-3 py-1 mb-4">
                  <span className="text-[0.7rem] font-semibold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-display text-xl lg:text-2xl font-bold text-on-surface mb-3 tracking-tight leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p
                  className="text-sm text-on-surface-variant leading-relaxed mb-5"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
