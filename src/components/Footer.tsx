import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-base)] border-t border-[var(--border)] transition-colors duration-300">
      <div className="px-4 md:px-8 py-8 md:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left */}
        <div>
          <p className="text-xs text-[var(--text-muted)] font-mono">
            © {new Date().getFullYear()} Pranav Talwar. Built with precision.
          </p>
        </div>

        {/* Right — social icons */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:talwarpranav929@gmail.com"
            className="text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:scale-110 transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Pranav-Talwar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:scale-110 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-talwar1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
