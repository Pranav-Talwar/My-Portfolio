"use client";

import type { TOCItem } from "@/types";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function BlogTOC({ items }: { items: TOCItem[] }) {
  const active = useActiveSection(items);

  return (
    <nav className="flex flex-col gap-3">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`text-xs leading-snug transition-colors duration-200 ${
            active === item.id
              ? "text-emerald-500 font-medium"
              : "text-[var(--text-secondary)] hover:text-[var(--text-heading)]"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
