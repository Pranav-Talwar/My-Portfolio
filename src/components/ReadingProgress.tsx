"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ReadingProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-0.5 z-9999 transition-[width] duration-100 ease-linear"
      style={{ width: `${progress}%`, backgroundColor: "var(--accent)" }}
    />
  );
}
