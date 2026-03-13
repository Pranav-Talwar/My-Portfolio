"use client";

import { useCallback, useEffect, useState } from "react";
import type { TOCItem } from "@/types";

/**
 * Tracks which section is currently in view based on scroll position.
 * Returns the id of the active TOC item.
 *
 * @param items    - Array of { id, label } TOC items
 * @param threshold - Pixels from the top at which a section becomes "active" (default 140)
 */
export function useActiveSection(
  items: TOCItem[],
  threshold = 140
): string {
  const [active, setActive] = useState(items[0]?.id ?? "");

  const onScroll = useCallback(() => {
    let current = items[0]?.id ?? "";
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el && el.getBoundingClientRect().top <= threshold) {
        current = item.id;
      }
    }
    setActive(current);
  }, [items, threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return active;
}
