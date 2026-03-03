import { ArrowUpRight } from "lucide-react";

export interface ProjectListItem {
  href: string;
  imageSrc: string;
  imageAlt: string;
  status: "in-progress" | "completed" | "archive";
  year: string;
  title: string;
  description: string;
  tags: string[];
}

const statusStyles: Record<
  ProjectListItem["status"],
  { bg: string; dot: string; text: string; label: string }
> = {
  "in-progress": {
    bg: "bg-blue-500/10 border-blue-500/20",
    dot: "bg-blue-500",
    text: "text-blue-400",
    label: "In Progress",
  },
  completed: {
    bg: "bg-emerald-500/10 border-emerald-500/20",
    dot: "bg-emerald-500",
    text: "text-emerald-400",
    label: "Completed",
  },
  archive: {
    bg: "bg-neutral-500/10 border-neutral-500/20",
    dot: "bg-neutral-500",
    text: "text-neutral-400",
    label: "Archive",
  },
};

export default function ProjectListCard({
  project,
}: {
  project: ProjectListItem;
}) {
  const style = statusStyles[project.status];

  return (
    <a href={project.href} className="project-card group block relative">
      <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center transition-colors group-hover:bg-[var(--bg-card)]/60">
        {/* Image */}
        <div className="w-full md:w-2/5 rounded-lg overflow-hidden border border-[var(--border)] relative">
          <div className="bg-[linear-gradient(135deg,var(--showcase-from),var(--showcase-to))] p-3 md:p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imageSrc}
              className="project-image w-full rounded-md shadow-xl transition-transform duration-500 ease-out"
              alt={project.imageAlt}
            />
          </div>
        </div>

        {/* Details */}
        <div className="w-full md:w-3/5 space-y-5">
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-2 px-2.5 py-1 rounded-full border ${style.bg}`}
            >
              <div className={`w-1 h-1 rounded-full ${style.dot}`} />
              <span
                className={`text-[9px] font-bold ${style.text} tracking-wider uppercase`}
              >
                {style.label}
              </span>
            </div>
            <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
              {project.year}
            </span>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[var(--text-heading)] mb-2 group-hover:translate-x-1 transition-transform inline-flex items-center gap-3">
              {project.title}
              <ArrowUpRight className="w-5 h-5 text-[var(--text-faint)] opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] font-mono text-[var(--text-secondary)] hover:border-[var(--border-alt)] hover:text-[var(--text-heading)] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
