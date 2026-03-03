import { RefObject } from "react";
import ProjectCardFull, { Project } from "./ProjectCardFull";

const projects: Project[] = [
  {
    imgSrc: "/projects/Cosounds.png",
    title: "CoSounds - Personalized Collective Adaptive Soundscapes",
    status: "live",
    challenge:
      "Students won\u2019t fill out surveys while studying. Feedback never happened. One NFC tap connects you to the room\u2019s adaptive soundscapes.",
    solution:
      "An ML model learns preferences in real-time and balances them across everyone in the space \u2014 anonymous, frictionless, continuous.",
    techStack: ["React", "TypeScript", "Python", "Supabase", "NFC"],
    links: [
      { href: "#", label: "Case Study", type: "primary" },
    ],
  },
  {
    imgSrc: "/projects/Testing Dashboard.png",
    title: "Para-Athlete Equipment Testing Dashboard",
    status: "live",
    challenge:
      "Para-athletes have 2\u00D7 the injury rate partly because equipment is fitted by feel, not data. Coaches had no tooling.",
    solution:
      "A platform for Paralympic coaches to run motion-sensor tests and log athlete feedback \u2014 replacing guesswork with evidence.",
    techStack: ["React", "TypeScript", "D3.js", "Express", "PostgreSQL"],
    links: [
      { href: "#", label: "Case Study", type: "primary" },
    ],
  },
];

interface ProjectsSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export default function ProjectsSection({ sectionRef }: ProjectsSectionProps) {
  return (
    <section id="projects" ref={sectionRef}>
      <div className="px-4 md:px-8 py-6 md:py-8 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40 backdrop-blur-xl transition-colors duration-300">
        <h2 className="text-2xl font-bold text-[var(--text-heading)]">Featured Work</h2>
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
