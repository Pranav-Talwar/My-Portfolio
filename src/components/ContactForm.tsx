"use client";

import { useCallback, useEffect, useState } from "react";
import { Send, Mail, Github, Linkedin, Instagram, FileText } from "lucide-react";

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/Denver",
      });

    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="text-sm text-[var(--text-secondary)]">
      Time for me:{" "}
      <span className="font-semibold text-[var(--text-heading)] font-mono">{time}</span>
    </p>
  );
}

const inputClass =
  "w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-heading)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 hover:border-[var(--border-alt)] transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — replace with actual API call
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  }, []);

  return (
    <section id="contact" className="border-b border-[var(--border)] transition-colors duration-300">
      {/* Sticky header */}
      <div className="px-4 md:px-8 py-5 md:py-6 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40 backdrop-blur-xl transition-colors duration-300">
        <h2 className="text-lg font-semibold text-[var(--text-heading)]">Get in touch</h2>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">

        {/* Left — contact info */}
        <div className="px-4 md:px-8 py-8 flex flex-col gap-8">

          {/* Live clock */}
          <LiveClock />

          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Email</p>
            <a
              href="mailto:talwarpranav929@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 shrink-0 text-[var(--text-faint)] group-hover:text-emerald-500 transition-colors" />
              talwarpranav929@gmail.com
            </a>
          </div>

          {/* Resume */}
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Resume</p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors group"
            >
              <FileText className="w-3.5 h-3.5 shrink-0 text-[var(--text-faint)] group-hover:text-emerald-500 transition-colors" />
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Socials</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/Pranav-Talwar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors group"
              >
                <Github className="w-3.5 h-3.5 shrink-0 text-[var(--text-faint)] group-hover:text-emerald-500 transition-colors" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-talwar1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors group"
              >
                <Linkedin className="w-3.5 h-3.5 shrink-0 text-[var(--text-faint)] group-hover:text-emerald-500 transition-colors" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/pranavtalwar0_0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors group"
              >
                <Instagram className="w-3.5 h-3.5 shrink-0 text-[var(--text-faint)] group-hover:text-emerald-500 transition-colors" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="px-4 md:px-8 py-8">
          <p className="text-sm font-semibold text-[var(--text-heading)] mb-6">Reach out:</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className={inputClass}
            />

            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your email address"
              className={inputClass}
            />

            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Message"
              className={`${inputClass} resize-none`}
            />

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--text-heading)] text-[var(--bg-surface)] text-sm font-semibold rounded-lg hover:opacity-85 active:scale-[0.97] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
              {status === "sent" && (
                <span className="text-xs text-emerald-500 shrink-0">Sent!</span>
              )}
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
