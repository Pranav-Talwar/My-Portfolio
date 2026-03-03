"use client";

import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-10 h-10 bg-[var(--text-heading)] text-[var(--bg-surface)] rounded-lg flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 z-40 cursor-pointer"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
