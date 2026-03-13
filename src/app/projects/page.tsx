import Image from "next/image";
import { Github, ArrowUpRight, Pin } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { pinnedProjects, labProjects, sideProjects } from "@/lib/data/projects";

/* ─── Page ─── */

export default function ProjectsPage() {
  return (
    <>
      <NavBar />

      {/* ── Header ── */}
      <header className="px-4 md:px-8 py-10 md:py-12 border-b border-[var(--border)] bg-[var(--bg-base)] transition-colors duration-300">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] tracking-tight mb-4">
          Projects
        </h1>
        <p className="text-[var(--text-secondary)] text-sm max-w-md leading-relaxed">
         My work and projects spanning across different technologies and domains.
        </p>
      </header>

      {/* ── Section 01 — Featured Work ── */}
      <section className="border-b border-[var(--border)] transition-colors duration-300">
        <div className="px-4 md:px-8 py-6 md:py-8 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40 backdrop-blur-xl transition-colors duration-300">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)]">Featured Work</h2>
        </div>

        <div className="px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pinnedProjects.map((project) => (
              <a
                key={project.title}
                href={project.caseStudy}
                className="group/card cursor-pointer transition-all duration-300 bg-[var(--bg-card)] rounded-xl p-3"
              >
                {/* Image in gradient showcase */}
                <div className="group/img aspect-video overflow-hidden relative rounded-xl border border-[var(--border)] bg-[linear-gradient(135deg,var(--showcase-from),var(--showcase-to))]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover rounded-md transition-[filter] duration-150 group-hover/img:blur-[3px]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority
                  />
                  {/* Pop overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/30 transition-colors duration-150">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center scale-0 group-hover/img:scale-100 opacity-0 group-hover/img:opacity-100 shadow-[0_4px_24px_rgba(0,0,0,0.25)] [transition:all_200ms_cubic-bezier(0.34,1.56,0.64,1)]">
                      <ArrowUpRight className="w-4 h-4 text-neutral-900" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
                {/* Title + arrow */}
                <div className="flex items-start justify-between gap-2 pt-3">
                  <h4 className="text-base font-semibold text-[var(--text-heading)] leading-snug flex items-center gap-1.5">
                    {project.starred && <Pin className="w-3.5 h-3.5 text-emerald-500 shrink-0 rotate-45" />}
                    {project.title}
                  </h4>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-[var(--text-faint)] group-hover/card:text-emerald-500 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-200 mt-0.5" />
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[10px] font-mono text-[var(--text-secondary)] hover:border-[var(--border-alt)] hover:text-[var(--text-heading)] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 02 — XtapX Labs ── */}
      <section className="border-b border-[var(--border)] transition-colors duration-300">
        <div className="px-4 md:px-8 py-5 md:py-6 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40 backdrop-blur-xl transition-colors duration-300">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-[var(--text-heading)]">Currently working on</h2>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
          </div>
        </div>

        <div className="px-4 md:px-8 py-6 flex flex-col gap-6">

          {/* XtapX header */}
          <div className="flex items-center gap-4">
            <Image
              src="/projects/xtapx.jpg"
              alt="XtapX Labs"
              width={56}
              height={56}
              className="rounded-xl object-cover shrink-0"
            />
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-[var(--text-heading)] mb-0.5">XtapX Labs</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Applied research lab advancing NFC technology for secure, context-aware interactions.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors mt-1"
              >
                <Github className="w-3 h-3" /> GitHub Org
              </a>
            </div>
          </div>

          {/* 2×2 card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {labProjects.map((project) => (
              <a
                key={project.title}
                href={project.caseStudy !== "#" ? project.caseStudy : project.github}
                target={project.caseStudy !== "#" ? undefined : "_blank"}
                rel={project.caseStudy !== "#" ? undefined : "noopener noreferrer"}
                className="group/card flex flex-col gap-3 p-5 bg-[var(--bg-card)] rounded-xl border border-[var(--border)] hover:border-[var(--border-alt)] transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-semibold text-[var(--text-heading)] leading-snug flex items-center gap-1.5">
                    {project.starred && <Pin className="w-3.5 h-3.5 text-emerald-500 shrink-0 rotate-45" />}
                    {project.title}
                  </h4>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-[var(--text-faint)] group-hover/card:text-emerald-500 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-200 mt-0.5" />
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[10px] font-mono text-[var(--text-secondary)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
      <section className="border-b border-[var(--border)] transition-colors duration-300">
        <div className="px-4 md:px-8 py-5 md:py-6 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40 backdrop-blur-xl transition-colors duration-300">
          <h2 className="text-lg font-semibold text-[var(--text-heading)]">Side Projects</h2>
        </div>

        <div className="px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-8">
          {sideProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/side cursor-pointer transition-all duration-300 bg-[var(--bg-card)] rounded-xl p-3"
            >
              {/* Image */}
              <div className="group/img aspect-[5/3] overflow-hidden relative rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-[filter] duration-150 group-hover/img:blur-[3px]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                {/* Pop overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/30 transition-colors duration-150">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center scale-0 group-hover/img:scale-100 opacity-0 group-hover/img:opacity-100 shadow-[0_4px_24px_rgba(0,0,0,0.25)] [transition:all_200ms_cubic-bezier(0.34,1.56,0.64,1)]">
                    <ArrowUpRight className="w-4 h-4 text-neutral-900" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              {/* Title + arrow */}
              <div className="flex items-start justify-between gap-2 pt-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-semibold text-[var(--text-heading)] leading-snug">{project.title}</h4>
                  {project.live && (
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                      Live
                    </span>
                  )}
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[var(--text-faint)] group-hover/side:text-emerald-500 group-hover/side:translate-x-0.5 group-hover/side:-translate-y-0.5 transition-all duration-200 mt-0.5" />
              </div>
              {/* Description */}
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed pt-1">{project.description}</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[10px] font-mono text-[var(--text-secondary)] hover:border-[var(--border-alt)] hover:text-[var(--text-heading)] transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
