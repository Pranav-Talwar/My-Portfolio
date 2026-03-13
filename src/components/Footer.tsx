export default function Footer() {
  return (
    <footer className="bg-[var(--bg-base)] border-t border-[var(--border)] transition-colors duration-300">
      <div className="px-4 md:px-8 py-8 md:py-10 flex flex-col items-center gap-1 text-center">
        <p className="text-xs text-[var(--text-muted)] font-mono">
          © {new Date().getFullYear()} Pranav Talwar.
        </p>
        <p className="text-xs text-[var(--text-muted)] font-mono">
          Built with ❤️
        </p>
      </div>
    </footer>
  );
}
