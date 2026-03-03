"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg-nav)] backdrop-blur-xl border-b border-[var(--border)] transition-colors duration-300">
      <div className="px-4 md:px-8 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-mono font-bold text-xl tracking-tight text-[var(--text-heading)] hover:text-[var(--text-secondary)] transition-colors"
          >
            Pranav Talwar
          </Link>
        
        </div>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-4 md:gap-6 text-sm font-medium text-[var(--text-secondary)]">
          <Link
            href="/projects"
            className={`relative transition-colors duration-200 hover:text-[var(--text-heading)] after:absolute after:bottom-[-2px] after:left-0 after:h-px after:bg-[var(--text-heading)] after:transition-all after:duration-200 ${
              pathname === "/projects"
                ? "text-[var(--text-heading)] after:w-full"
                : "after:w-0 hover:after:w-full"
            }`}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="relative transition-colors duration-200 hover:text-[var(--text-heading)] after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-[var(--text-heading)] after:transition-all after:duration-200 hover:after:w-full"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="relative transition-colors duration-200 hover:text-[var(--text-heading)] after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-[var(--text-heading)] after:transition-all after:duration-200 hover:after:w-full"
          >
            Contact
          </Link>
          <div className="h-4 w-px bg-[var(--border-alt)] mx-1" />
          <button
            onClick={toggleTheme}
            className="hover:text-[var(--text-heading)] transition-colors duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-[var(--border)] px-4 py-4 flex flex-col gap-4 text-sm font-medium text-[var(--text-secondary)] bg-[var(--bg-surface)]">
          <Link
            href="/projects"
            onClick={() => setMenuOpen(false)}
            className={`transition-colors ${
              pathname === "/projects"
                ? "text-[var(--text-heading)]"
                : "hover:text-[var(--text-heading)]"
            }`}
          >
            Projects
          </Link>
          <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-[var(--text-heading)] transition-colors">
            Blog
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[var(--text-heading)] transition-colors">
            Contact
          </Link>
          <button
            onClick={() => { toggleTheme(); setMenuOpen(false); }}
            className="flex items-center gap-2 hover:text-[var(--text-heading)] transition-colors text-left cursor-pointer"
          >
            {theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
