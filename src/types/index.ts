// ─── Project Types ───────────────────────────────────────────────────────────

/** Full project card used on the home page featured section */
export interface Project {
  imgSrc: string;
  title: string;
  status: "live" | "soon" | null;
  challenge: string;
  solution: string;
  note?: string;
  techStack: string[];
  links: { href: string; label: string; type: "primary" | "secondary" }[];
}

/** Pinned / featured project card on the projects listing page */
export interface PinnedProject {
  image: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  caseStudy: string;
  starred?: boolean;
}

/** Lab research project row */
export interface LabProject {
  title: string;
  description: string;
  tags: string[];
  github: string;
  caseStudy: string;
  starred?: boolean;
}

/** Side project card on the projects listing page */
export interface SideProject {
  image: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  live?: boolean;
}

// ─── Writing Types ────────────────────────────────────────────────────────────

/** Blog post metadata used on the writings listing and detail pages */
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  href?: string;
}

// ─── UI Types ─────────────────────────────────────────────────────────────────

/** Table-of-contents item used by BlogTOC */
export interface TOCItem {
  id: string;
  label: string;
}
