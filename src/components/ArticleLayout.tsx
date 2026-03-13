import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import BlogTOC from "@/components/BlogTOC";
import type { TOCItem } from "@/types";

interface ArticleLayoutProps {
  /** Rendered inside <header> after the back link */
  header: ReactNode;
  /** Main article body */
  children: ReactNode;
  /** TOC items for the sidebar */
  toc: TOCItem[];
  /** Optional extra sidebar section (e.g. project links for case studies) */
  sidebarExtra?: ReactNode;
  /** "Next" link shown at the bottom of the sidebar */
  next: { href: string; title: string } | null;
  /** Back-navigation href and label (e.g. "/projects", "Projects") */
  backHref: string;
  backLabel: string;
}

export default function ArticleLayout({
  header,
  children,
  toc,
  sidebarExtra,
  next,
  backHref,
  backLabel,
}: ArticleLayoutProps) {
  return (
    <>
      <ReadingProgress />
      <NavBar />

      {/* ── Header ── */}
      <header className="px-4 md:px-8 pt-8 md:pt-12 pb-8 border-b border-[var(--border)] transition-colors duration-300">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest hover:text-[var(--text-heading)] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
          {backLabel}
        </Link>

        {header}
      </header>

      {/* ── Body: article + sidebar ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] lg:items-start transition-colors duration-300">

        {/* Article */}
        <article className="px-4 md:px-8 pt-10 pb-16 border-b lg:border-b-0 lg:border-r border-[var(--border)] min-w-0">
          {children}
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block px-6 py-8 sticky top-14 md:top-16 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-8">

            {/* TOC */}
            {toc.length > 0 && (
              <div>
                <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
                  Contents
                </p>
                <BlogTOC items={toc} />
              </div>
            )}

            {/* Optional extra section (project links, etc.) */}
            {sidebarExtra && (
              <div className="pt-6 border-t border-[var(--border)] flex flex-col gap-3">
                <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
                  Project
                </p>
                {sidebarExtra}
              </div>
            )}

            {/* Next link */}
            {next && (
              <div className="pt-6 border-t border-[var(--border)]">
                <p className="text-[11px] font-mono text-emerald-500 uppercase tracking-widest mb-3">
                  Next
                </p>
                <Link
                  href={next.href}
                  className="text-xs font-semibold text-[var(--text-heading)] hover:text-emerald-500 transition-colors leading-snug block group"
                >
                  <span>{next.title}</span>
                  <ArrowUpRight className="inline-block w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            )}

          </div>
        </aside>
      </div>

      {/* ── Bottom bar ── */}
      <div className="px-4 md:px-8 py-5 md:py-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors duration-300">
        <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
          Thanks for reading
        </p>
        <Link
          href={backHref}
          className="px-4 py-2 border border-[var(--border)] rounded-lg text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-[var(--border-alt)] transition-colors"
        >
          Back to {backLabel}
        </Link>
      </div>

      <Footer />
    </>
  );
}
