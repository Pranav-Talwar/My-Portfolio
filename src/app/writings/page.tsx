import { ArrowUpRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/data/writings";

/* ─── Page ─── */

export default function WritingsPage() {
  return (
    <>
      <NavBar />

      {/* Header */}
      <header className="px-4 md:px-8 py-10 md:py-12 border-b border-[var(--border)] bg-[var(--bg-base)] transition-colors duration-300">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] tracking-tight mb-4">
          Writings
        </h1>
        <p className="text-[var(--text-secondary)] text-sm max-w-md leading-relaxed">
          Writing on systems, NFC, UX research, and things I learned the hard way.
        </p>
      </header>

      {/* Post list */}
      <section className="border-b border-[var(--border)] transition-colors duration-300">
        <div className="flex flex-col divide-y divide-[var(--border)]">
          {posts.map((post) => {
            const href = post.href ?? `/writings/${post.slug}`;
            const isExternal = href.startsWith("http");

            return (
            <a
              key={post.slug}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group px-4 md:px-8 py-6 md:py-8 hover:bg-[var(--bg-card)] transition-colors duration-200 block"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
                  {post.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--border-alt)]" />
                <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
                  {post.readTime}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold text-[var(--text-heading)] leading-snug mb-2 group-hover:text-emerald-500 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {post.description}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[var(--text-faint)] group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-0.5" />
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[10px] font-mono text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
