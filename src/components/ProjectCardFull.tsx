import { ArrowUpRight } from "lucide-react";

export interface Project {
  imgSrc: string;
  title: string;
  status: "live" | "soon" | null;
  challenge: string;
  solution: string;
  note?: string;
  techStack: string[];
  links: { href: string; label: string; type: "primary" | "secondary" }[];
}

export default function ProjectCardFull({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const primaryLink = project.links.find((l) => l.type === "primary");

  return (
    <a href={primaryLink?.href ?? "#"} className="group/card block border-b border-[var(--border)] transition-colors duration-300 cursor-pointer">
      <div className="p-4 sm:p-6 md:p-10 flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Image + Tech Stack */}
        <div className="w-full md:w-[50%] shrink-0">
          <div className="group/img relative rounded-xl overflow-hidden border border-[var(--border)]">
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded-md border border-white/10">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  project.status === "live"
                    ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                    : project.status === "soon"
                      ? "bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]"
                      : "bg-neutral-500"
                }`}
              />
              <span className="text-[11px] font-mono text-white/70">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
            <div className="bg-[linear-gradient(135deg,var(--showcase-from),var(--showcase-to))] p-4 md:p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full rounded-lg shadow-xl transition-[filter] duration-150 group-hover/img:blur-[3px]"
              />
            </div>
            {/* Pop overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/30 transition-colors duration-150 z-20">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center scale-0 group-hover/img:scale-100 opacity-0 group-hover/img:opacity-100 shadow-[0_4px_24px_rgba(0,0,0,0.25)] [transition:all_200ms_cubic-bezier(0.34,1.56,0.64,1)]">
                <ArrowUpRight className="w-6 h-6 text-neutral-900" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Tech stack below image */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[10px] font-mono text-[var(--text-secondary)] hover:border-[var(--border-alt)] hover:text-[var(--text-heading)] transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-[50%] flex flex-col justify-between">
          <div>
            {/* Title */}
            <div className="mb-4">
              <h3 className="text-xl  text-[var(--text-heading)] leading-snug" style={{ fontFamily: "var(--font-syne)" } }>
                {project.title}
              </h3>
            </div>

            {project.note && (
              <p className="text-xs text-[var(--text-muted)] italic mb-4">
                {project.note}
              </p>
            )}

            {/* Challenge */}
            <div className="mb-5">
              <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-2">
                Problem
              </div>
              <p className="text-sm text-[var(--text-body)] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mt-5">
              <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-2">
                Solution
              </div>
              <p className="text-sm text-[var(--text-body)] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Bottom: links */}
          <div className="flex items-center gap-5 mt-5">
            {project.links.map((link, i) => (
              <span
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = link.href;
                }}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 ${
                  link.type === "primary"
                    ? "text-[var(--text-heading)] group-hover/card:text-emerald-500"
                    : "text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                }`}
              >
                {link.label}
                {link.type === "primary" && (
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform duration-200" />
                )}
                {link.type !== "primary" && (
                  <ArrowUpRight className="w-3.5 h-3.5" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
