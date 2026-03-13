import { RefObject } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectCardFull from "./ProjectCardFull";
import { featuredProjects as projects } from "@/lib/data/projects";

interface ProjectsSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export default function ProjectsSection({ sectionRef }: ProjectsSectionProps) {
  return (
    <section id="projects" ref={sectionRef}>
      <div className="px-4 md:px-8 py-6 md:py-8 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40 backdrop-blur-xl transition-colors duration-300 flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)]">Featured Work</h2>
        <a
          href="/projects"
          className="inline-flex items-center gap-1 text-[12px] md:text-sm text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors group "
        >
          View All<span className="hidden md:inline"> Projects</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div>
        {projects.map((project, index) => (
          <ProjectCardFull
            key={index}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
