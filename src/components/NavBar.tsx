"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function NavBar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg-nav)] backdrop-blur-xl border-b border-[var(--border)] transition-colors duration-300">
      <div className="px-4 md:px-8 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-mono font-bold text-xl tracking-tight text-[var(--text-heading)] hover:text-[var(--text-secondary)] transition-colors"
          >
            <span className="hidden sm:inline">Pranav Talwar</span>
            <span className="inline sm:hidden">pt</span>
          </Link>
        </div>

        {/* Nav links - always visible */}
        <div className="flex items-center gap-4 md:gap-6 text-sm font-medium text-[var(--text-secondary)]">
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
      </div>
    </nav>
  );
}
