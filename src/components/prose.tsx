import type { ReactNode } from "react";
import { ImageIcon } from "lucide-react";

export function HeroImage({ caption, date }: { caption: string; date?: string }) {
  return (
    <div className="w-full mb-12 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)]">
      <div className="w-full aspect-video bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-base)] to-[var(--bg-card)] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />
        <div className="relative flex flex-col items-center gap-3 text-[var(--text-faint)]">
          <ImageIcon className="w-10 h-10" strokeWidth={1.5} />
          <span className="text-xs font-mono tracking-widest uppercase">{caption}</span>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-[var(--border)] flex items-center justify-between">
        <span className="text-[11px] font-mono text-[var(--text-muted)]">{caption}</span>
        {date && <span className="text-[11px] font-mono text-emerald-500">{date}</span>}
      </div>
    </div>
  );
}

export function Figure({ name, caption }: { name: string; caption: string }) {
  return (
    <figure className="my-10">
      <div className="w-full rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)]">
        <div className="w-full aspect-[2/1] bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-base)]/80 to-[var(--bg-card)] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(16,185,129,0.06)_0%,transparent_60%)]" />
          <div className="relative flex flex-col items-center gap-3 text-[var(--text-faint)]">
            <ImageIcon className="w-9 h-9" strokeWidth={1.5} />
            <span className="text-xs font-mono tracking-widest uppercase">{name}</span>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs font-mono text-[var(--text-muted)] text-center">
        {caption}
      </figcaption>
    </figure>
  );
}

export function StatGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-3 gap-4 my-8">{children}</div>;
}

export function Stat({
  value,
  label,
  sub,
  accent,
}: {
  value: string;
  label: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]/40 text-center">
      <p className={`text-2xl font-bold mb-1 ${accent ? "text-emerald-500" : "text-[var(--text-heading)]"}`}>
        {value}
      </p>
      <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">{label}</p>
      {sub && <p className="text-[10px] text-[var(--text-faint)] mt-1">{sub}</p>}
    </div>
  );
}

export function H2({
  id,
  children,
  noTopMargin,
}: {
  id: string;
  children: ReactNode;
  noTopMargin?: boolean;
}) {
  return (
    <h2
      id={id}
      className={`text-xl font-bold text-[var(--text-heading)] ${noTopMargin ? "mt-2" : "mt-14"} mb-5 scroll-mt-24 pb-3 border-b border-[var(--border)]/60`}
    >
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-5">
      {children}
    </p>
  );
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="font-mono text-sm bg-[var(--bg-card)] text-emerald-500 px-1.5 py-0.5 rounded border border-[var(--border)]">
      {children}
    </code>
  );
}

export function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 md:p-6 my-8 overflow-x-auto">
      <pre className="font-mono text-sm text-[var(--text-secondary)] leading-relaxed">
        {children}
      </pre>
    </div>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-emerald-500 pl-5 my-8 py-1 bg-emerald-950/20 rounded-r-lg">
      <p className="text-base text-[var(--text-secondary)] leading-relaxed italic">
        {children}
      </p>
    </div>
  );
}

export function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="text-base font-semibold text-[var(--text-heading)] mt-8 mb-3 scroll-mt-24"
    >
      {children}
    </h3>
  );
}

export function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-sm text-[var(--text-heading)] font-medium">{value}</p>
    </div>
  );
}
