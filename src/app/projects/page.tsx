"use client";

import { Github, ArrowUpRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

/* ─── Data ─── */

const pinnedProjects = [
  {
    image: "/projects/Cosounds1.png",
    alt: "CoSounds Project",
    title: "CoSounds",
    description:
      "Adaptive soundscape system for shared study spaces. One NFC tap connects you to the room\u2019s ML-driven audio \u2014 anonymous, frictionless, continuous.",
    tags: ["Web", "UX", "NFC", "ML","Research"],
    github: "https://github.com/Pranav-Talwar/CoSounds",
    caseStudy: "#",
  },
  {
    image: "/projects/Testing Dashboard.png",
    alt: "Para-Athlete Testing Dashboard",
    title: "Para-Athlete Testing",
    description:
      "Real-time performance dashboard for para-athlete equipment testing — tracking biomechanical data with precision and accessibility.",
    tags: ["React", "SQL", "Data Handling"],
    github: "#",
    caseStudy: "#",
  },
];

const labProjects = [
  {
    title: "Bluetooth Presence Detection System",
    description:
      "Extension of CoSounds replacing timer-based presence with real-time Bluetooth detection via Raspberry Pi, gated by NFC tap consent.",
    github: "https://github.com/xtapx-labs/Presence-Detection-System",
    caseStudy: "#",
  },
  {
    title: "UX-Security Paradox",
    description:
      "Analysis of social engineering vulnerabilities in NFC-based interaction systems.",
    github: "https://github.com/xtapx-labs/UX-Security-Paradox",
    caseStudy: "#",
  },
  {
    title: "Ambient Intelligent Soundscapes",
    description:
      "Consent-first ambient intelligence using NFC taps and ML to generate adaptive soundscapes.",
    github: "https://github.com/xtapx-labs/Ambient-Intelligent-Soundscapes",
    caseStudy: "#",
  },
  {
    title: "TapProof",
    description:
      "Authentication for physical products via NFC chips generating unique cryptographic signatures per tap.",
    github: "https://github.com/Pranav-Talwar/TapProof",
    caseStudy: "#",
  },
];

interface SideProject {
  image: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  live?: boolean;
}

const sideProjects: SideProject[] = [
  {
    image: "/projects/side/Coverxcover.png",
    title: "CoverXCover",
    description: "Book tracking & review app",
    tags: ["React", "Spring Boot", "MySQL"],
    href: "https://github.com/Pranav-Talwar/CoverXCover",
  },
  {
    image: "/projects/side/Maple.png",
    title: "MapleMigrant",
    description: "Blogging platform for Canadian immigrants",
    tags: ["Hono", "Prisma", "Zod"],
    href: "https://maple-migrant.pranavtalwar.ca/",
    live: true,
  },
  {
    image: "/projects/side/CampusUnify.png",
    title: "CampusUnify",
    description: "Campus-centric social platform",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    href: "https://github.com/Pranav-Talwar/CampusUnify",
  },
  {
    image: "/projects/side/MrRead.png",
    title: "Mr.ReadMe",
    description: "GitHub profile editor",
    tags: ["TipTap", "React", "Jotai"],
    href: "https://github.com/Pranav-Talwar/Markdown-Editor",
  },
  {
    image: "/projects/side/Calmy.png",
    title: "Calmy",
    description: "Productivity and wellness app",
    tags: ["C#", ".NET", "MongoDB"],
    href: "https://github.com/Pranav-Talwar/Calmy-Focus-App",
  },
  {
    image: "/projects/side/Mindora.png",
    title: "Mindora",
    description: "Your second brain app for content",
    tags: ["TypeScript", "MongoDB", "TailwindCSS"],
    href: "https://github.com/Pranav-Talwar/Mindora",
  },
];

/* ─── Page ─── */

export default function ProjectsPage() {
  return (
    <>
      <NavBar />

      {/* ── Header ── */}
      <header className="px-4 md:px-8 py-10 md:py-12 border-b border-[var(--border)] transition-colors duration-300">
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
          <h2 className="text-2xl font-bold text-[var(--text-heading)] text-center">Featured Work</h2>
        </div>

        <div className="px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pinnedProjects.map((project) => (
              <a
                key={project.title}
                href={project.caseStudy}
                className="group/card cursor-pointer transition-all duration-300"
              >
                {/* Image in gradient showcase */}
                <div className="group/img aspect-video overflow-hidden relative rounded-xl border border-[var(--border)]">
                  <div className="w-full h-full bg-[linear-gradient(135deg,var(--showcase-from),var(--showcase-to))] flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover rounded-md transition-[filter] duration-150 group-hover/img:blur-[3px]"
                    />
                  </div>
                  {/* Pop overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/30 transition-colors duration-150">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center scale-0 group-hover/img:scale-100 opacity-0 group-hover/img:opacity-100 shadow-[0_4px_24px_rgba(0,0,0,0.25)] [transition:all_200ms_cubic-bezier(0.34,1.56,0.64,1)]">
                      <ArrowUpRight className="w-4 h-4 text-neutral-900" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
                {/* Title + arrow */}
                <div className="flex items-start justify-between gap-2 pt-3">
                  <h4 className="text-base font-semibold text-[var(--text-heading)] leading-snug">{project.title}</h4>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-[var(--text-faint)] group-hover/card:text-emerald-500 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-200 mt-0.5" />
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[10px] font-mono text-[var(--text-secondary)]">
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
        <div className="px-4 md:px-8 py-6 md:py-8 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40 backdrop-blur-xl transition-colors duration-300">
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-2xl font-bold text-[var(--text-heading)]">Currently working on</h2>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
          </div>
        </div>

        <div className="px-4 md:px-8 py-8">
        {/* Header row: logo left, text right */}
        <div className="flex flex-row items-start gap-6 mb-8">
          {/* Logo */}
          <div className="shrink-0">
            <a
              href="#"
              className="group/logo relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border border-[var(--border)] block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/xtapx.jpg"
                alt="XtapX Labs"
                className="w-full h-full object-cover transition-all duration-300 group-hover/logo:blur-[2px]"
              />
              {/* GitHub overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/logo:bg-black/50 transition-all duration-300">
                <Github className="w-7 h-7 text-white opacity-0 group-hover/logo:opacity-100 scale-75 group-hover/logo:scale-100 transition-all duration-300" strokeWidth={2.5} />
              </div>
            </a>
          </div>

          <div className="flex-1 flex flex-col justify-between" style={{minHeight: '6rem'}}>
            <div>
              <h3 className="text-xl font-bold text-[var(--text-heading)] mb-2">XtapX Labs</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                An applied research lab advancing NFC technology to enable secure,
                context-aware interactions between physical objects and digital
                systems.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-all duration-200 w-fit"
            >
              <Github className="w-3.5 h-3.5" /> GitHub Org
            </a>
          </div>
        </div>

        {/* Projects heading */}
        <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
          Projects
        </p>

        <div className="flex flex-col gap-4">
          {/* Lab project list */}
          <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden">
            {labProjects.map((project, i) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 hover:bg-[var(--bg-card)] transition-colors group/row cursor-pointer block ${
                  i < labProjects.length - 1
                    ? "border-b border-[var(--border)]"
                    : ""
                }`}
              >
                <div className="flex flex-row items-center justify-between mb-2 gap-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-[var(--text-heading)]">
                      {project.title}
                    </h4>
                  </div>
                  <span className="inline-flex items-center text-[var(--text-muted)] group-hover/row:text-emerald-500 transition-all duration-200 shrink-0">
                    <ArrowUpRight className="w-5 h-5 group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5 transition-transform duration-200" />
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
        </div>
      </section>
      <section className="border-b border-[var(--border)] transition-colors duration-300">
        <div className="px-4 md:px-8 py-6 md:py-8 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40 backdrop-blur-xl transition-colors duration-300">
          <h2 className="text-2xl font-bold text-[var(--text-heading)] text-center">Side Projects</h2>
        </div>

        <div className="px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sideProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/side cursor-pointer transition-all duration-300"
            >
              {/* Image */}
              <div className="group/img aspect-[5/3] overflow-hidden relative rounded-xl border border-[var(--border)]">
                <div className="w-full h-full bg-[linear-gradient(135deg,var(--showcase-from),var(--showcase-to))] flex items-center justify-center p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-md transition-[filter] duration-150 group-hover/img:blur-[3px]"
                  />
                </div>
                {/* Pop overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/30 transition-colors duration-150">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center scale-0 group-hover/img:scale-100 opacity-0 group-hover/img:opacity-100 shadow-[0_4px_24px_rgba(0,0,0,0.25)] [transition:all_200ms_cubic-bezier(0.34,1.56,0.64,1)]">
                    <ArrowUpRight className="w-4 h-4 text-neutral-900" strokeWidth={2.5} />
                  </div>
                </div>
                {project.live && (
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-green-900/80 border border-green-800 text-[8px] font-bold text-green-400 z-10">
                    LIVE
                  </span>
                )}
              </div>
              {/* Title + arrow */}
              <div className="flex items-start justify-between gap-2 pt-3">
                <h4 className="text-base font-semibold text-[var(--text-heading)] leading-snug">{project.title}</h4>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[var(--text-faint)] group-hover/side:text-emerald-500 group-hover/side:translate-x-0.5 group-hover/side:-translate-y-0.5 transition-all duration-200 mt-0.5" />
              </div>
              {/* Description */}
              <p className="text-xs text-[var(--text-faint)] leading-relaxed pt-1">{project.description}</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[10px] font-mono text-[var(--text-secondary)]">
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
