
import { GraduationCap } from "lucide-react";
import ReactQueryIcon from "@/components/icons/ReactQueryIcon";
import {
  SiTypescript,
  SiPython,
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDjango,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
} from "@icons-pack/react-simple-icons";

const skills = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python",     icon: SiPython,     color: "#3776AB" },
  { name: "C#",         icon: SiDotnet,     color: "#512BD4" },
  { name: "React",      icon: SiReact,      color: "#61DAFB" },
  { name: "Next.js",    icon: SiNextdotjs,  color: "#ffffff" },
  { name: "Node.js",    icon: SiNodedotjs,  color: "#339933" },
  { name: "Django",     icon: SiDjango,     color: "#092E20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma",     icon: SiPrisma,     color: "#ffffff" },
  { name: "Supabase",       icon: SiSupabase,   color: "#3FCF8E" },
];

export default function AboutSection() {
  return (
    <section className="border-b border-[var(--border)] transition-colors duration-300">
      {/* Header — desktop only (sticky split) */}
      <div className="hidden md:grid border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-16 z-40 backdrop-blur-xl transition-colors duration-300 grid-cols-[2fr_3fr] divide-x divide-[var(--border)]">
        <div className="px-8 py-6">
          <h2 className="text-lg font-semibold text-[var(--text-heading)]">Education</h2>
        </div>
        <div className="px-8 py-6">
          <h2 className="text-lg font-semibold text-[var(--text-heading)]">Core Skills</h2>
        </div>
      </div>

      {/* Body — education left | skills right */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">

        {/* Left — education */}
        <div className="bg-[var(--bg-card)]">
          {/* Mobile sticky heading */}
          <div className="md:hidden sticky top-14 z-40 border-b border-[var(--border)] bg-[var(--bg-surface)] backdrop-blur-xl px-4 py-4">
            <h2 className="text-lg font-semibold text-[var(--text-heading)]">Education</h2>
          </div>
          <div className="px-4 md:px-8 py-6 md:py-10 flex flex-col gap-3">
            <p className="text-[11px] font-mono text-[var(--text-faint)] uppercase tracking-widest">2024 — 2025</p>
            <div className="flex items-start gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-[var(--text-heading)] leading-snug">Computer Programming Diploma</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Red Deer Polytechnic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — skills */}
        <div>
          {/* Mobile sticky heading */}
          <div className="md:hidden sticky top-14 z-40 border-b border-[var(--border)] bg-[var(--bg-surface)] backdrop-blur-xl px-4 py-4">
            <h2 className="text-lg font-semibold text-[var(--text-heading)]">Core Skills</h2>
          </div>
          <div className="px-4 md:px-8 py-6 md:py-10">
          <div className="flex flex-wrap gap-2">
            {skills.map(({ name, icon: Icon, color }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-xs font-mono text-[var(--text-secondary)] hover:border-[var(--border-alt)] transition-colors duration-200"
              >
                <Icon size={13} style={{ color, flexShrink: 0 }} />
                {name}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-xs font-mono text-[var(--text-secondary)] hover:border-[var(--border-alt)] transition-colors duration-200">
              <ReactQueryIcon size={13} />
              TanStack Query
            </span>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
}
