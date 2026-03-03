import { Mail, Linkedin, Github, ArrowUpRight, FileText } from "lucide-react";

export default function SocialLinksSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)] border-b border-[var(--border)] transition-colors duration-300">
      <div className="divide-y divide-[var(--border)]">
        <a
          href="mailto:talwarpranav929@gmail.com"
          className="flex items-center justify-between p-6 hover:bg-[var(--bg-card)] transition-all duration-200 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a2e] border border-[#1a1a2e] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-[var(--text-heading)]">Email</div>
              <div className="text-xs text-[var(--text-muted)] font-mono">
                talwarpranav929@gmail.com
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[var(--text-heading)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </a>
        <a
          href="https://www.linkedin.com/in/pranav-talwar1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-6 hover:bg-[var(--bg-card)] transition-all duration-200 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0077b5] text-white flex items-center justify-center shadow-sm border border-transparent group-hover:scale-110 transition-transform duration-200">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-[var(--text-heading)]">LinkedIn</div>
              <div className="text-xs text-[var(--text-muted)] font-mono">
                pranav-talwar1
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[var(--text-heading)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </a>
      </div>
      <div className="divide-y divide-[var(--border)]">
        <a
          href="https://github.com/Pranav-Talwar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-6 hover:bg-[var(--bg-card)] transition-all duration-200 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#24292e] text-white flex items-center justify-center shadow-sm border border-transparent group-hover:scale-110 transition-transform duration-200">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-[var(--text-heading)]">GitHub</div>
              <div className="text-xs text-[var(--text-muted)] font-mono">
                Pranav-Talwar
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[var(--text-heading)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </a>
        <a
          href="#"
          className="flex items-center justify-between p-6 hover:bg-[var(--bg-card)] transition-all duration-200 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--text-faint)] text-white flex items-center justify-center shadow-sm border border-transparent group-hover:scale-110 transition-transform duration-200">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-[var(--text-heading)]">Resume</div>
              <div className="text-xs text-[var(--text-muted)] font-mono">
                Google Drive
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[var(--text-heading)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </a>
      </div>
    </section>
  );
}
