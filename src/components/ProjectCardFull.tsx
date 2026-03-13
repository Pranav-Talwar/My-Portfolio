import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";

// Re-export so existing imports from this module keep working
export type { Project };

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
  const secondaryLinks = project.links.filter((l) => l.type === "secondary");

  // Determine if the card is an odd index (e.g., 2nd card) to alternate layout
  const isOdd = index % 2 !== 0;

  return (
    <a
      href={primaryLink?.href ?? "#"}
      className="group/card block border-b border-[var(--border)] transition-colors duration-300 cursor-pointer"
    >
      <div className="p-4 sm:p-6 md:p-10">
        
        {/* Title */}
        <div className="w-full mb-4">
          <h3 className="text-base md:text-lg font-bold text-[var(--text-heading)] tracking-tight flex items-center gap-3">
            <span className="text-emerald-500 font-mono text-sm font-normal">
              {String(index + 1).padStart(2, "0")}.
            </span>
            <span>{project.title}</span>
          </h3>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

          {/* Row 1 Content: Image */}
          <div className={`group/img relative rounded-xl overflow-hidden h-fit ${isOdd ? 'md:order-2' : 'md:order-1'}`}>
            <div className="bg-[linear-gradient(135deg,var(--showcase-from),var(--showcase-to))]">
              <Image
                src={project.imgSrc}
                alt={project.title}
                width={800}
                height={500}
                className="w-full rounded-lg shadow-xl transition-[filter] duration-150 group-hover/img:blur-[3px]"
                style={{ height: "auto" }}
                priority={index === 0}
              />
            </div>
            {/* Pop overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/30 transition-colors duration-150 z-20">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center scale-0 group-hover/img:scale-100 opacity-0 group-hover/img:opacity-100 shadow-[0_4px_24px_rgba(0,0,0,0.25)] [transition:all_200ms_cubic-bezier(0.34,1.56,0.64,1)]">
                <ArrowRight className="w-6 h-6 text-neutral-900" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Row 1 Content: Problem + Solution */}
          <div className={`flex flex-col justify-center gap-6 ${isOdd ? 'md:order-1' : 'md:order-2'}`}>
            <div>
              <div className="text-[11px] font-mono font-bold text-emerald-500 uppercase tracking-widest mb-2">
                Problem
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <div className="text-[11px] font-mono font-bold text-emerald-500 uppercase tracking-widest mb-2">
                Solution
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.solution}
              </p>
            </div>
           
          </div>

          {/* Row 2 Content: Tags */}
          <div className={`flex flex-wrap gap-2 content-start ${isOdd ? 'md:order-4' : 'md:order-3'}`}>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[10px] font-mono text-[var(--text-secondary)] hover:border-[var(--border-alt)] hover:text-[var(--text-heading)] transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Row 2 Content: Case study / links */}
          <div className={`flex flex-col gap-3 justify-start ${isOdd ? 'md:order-3' : 'md:order-4'}`}>
            {project.links.map((link, i) => (
              <span
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = link.href;
                }}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 w-fit ${
                  link.type === "primary"
                    ? "text-emerald-500 hover:text-emerald-400"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-heading)]"
                }`}
              >
                {link.label}
                <ArrowRight
                  className={`w-4 h-4.5  ${link.type === "primary" ? "group-hover/card:translate-x-1 transition-transform duration-200" : ""}`}
                />
              </span>
            ))}
          </div>

        </div>
      </div>
    </a>
  );
}
