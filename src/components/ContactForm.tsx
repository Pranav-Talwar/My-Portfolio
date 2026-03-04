"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — replace with actual API call
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="border-b border-[var(--border)] transition-colors duration-300">
      {/* Header */}
      {/* Header */}
      <div className="px-4 md:px-8 py-6 md:py-8 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40 backdrop-blur-xl transition-colors duration-300">
        <h2 className="text-2xl font-bold text-[var(--text-heading)] text-center">Get in touch</h2>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="px-4 md:px-8 py-6 md:py-10 flex flex-col gap-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-heading)] placeholder:text-[var(--text-faint)] font-mono focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 hover:border-[var(--border-alt)] transition-colors"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-heading)] placeholder:text-[var(--text-faint)] font-mono focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 hover:border-[var(--border-alt)] transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="What's on your mind?"
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-heading)] placeholder:text-[var(--text-faint)] font-mono resize-none focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 hover:border-[var(--border-alt)] transition-colors"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-heading)] text-[var(--bg-surface)] text-sm font-semibold rounded-lg hover:opacity-85 active:scale-[0.97] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
            <span className="text-xs text-emerald-500 font-mono">
              Message sent successfully!
            </span>
          )}
        </div>
      </form>
    </section>
  );
}
