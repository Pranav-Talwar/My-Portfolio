
const skillGroups = [
  { category: "Languages", skills: "Typescript, Python, C#" },
  { category: "Frameworks", skills: "React, Next, Node, Django" },
  { category: "Data", skills: "PostgreSQL, Prisma, Supabase" },
];


export default function AboutSection() {
  return (
    <section className="border-b border-[var(--border)] transition-colors duration-300">
      {/* Header */}
      <div className="px-4 md:px-8 py-6 md:py-8 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40 backdrop-blur-xl transition-colors duration-300">
        <h2 className="text-2xl font-bold text-[var(--text-heading)]">About Me</h2>
      </div>

      {/* Body — top: bio | edu+skills */}
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
        {/* Left — bio */}
        <div className="md:w-[55%] px-4 md:px-8 py-6 md:py-10">
          <p className="text-[var(--text-secondary)] text-sm md:text-[15px] leading-relaxed">
            I&apos;m a Computer Science student passionate about building things
            that live on the internet. My journey into development started when I
            realized I could create tools that actually help people.
            <br /><br />
            I focus on creating performant applications with great user
            experiences; whether it&apos;s a hackathon project or a production
            system, I approach every challenge with curiosity.
            <br /><br />
            In my spare time I usually play chess, practise mindfulness, keep a
            journal, and watch movies.
          </p>
        </div>

        {/* Right — education + skills */}
        <div className="md:w-[45%] px-4 md:px-8 py-6 md:py-10 flex flex-col gap-8 md:gap-10">
          {/* Education */}
          <div>
            <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Education
            </p>
            <div className="border border-[var(--border)] rounded-lg p-4 bg-[var(--bg-card)] hover:border-[var(--border-alt)] transition-colors duration-200">
              <p className="text-sm font-bold text-[var(--text-heading)]">Computer Science Diploma</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Red Deer Polytechnic</p>
              <p className="text-xs text-[var(--text-faint)] font-mono mt-0.5">2024 — 2025</p>
            </div>
          </div>

          {/* Skills grid */}
          <div>
            <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Core Skills
            </p>
            <div className="flex flex-col">
              {skillGroups.map((group, i) => (
                <div key={group.category}>
                  {i > 0 && <hr className="border-[var(--border)]" />}
                  <p className="py-3 text-xs text-[var(--text-secondary)] font-mono leading-relaxed">
                    {group.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}

