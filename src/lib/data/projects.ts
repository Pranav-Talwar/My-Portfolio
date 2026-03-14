import type { Project, PinnedProject, LabProject, SideProject } from "@/types";

// ─── Home Page — Featured Work ────────────────────────────────────────────────

export const featuredProjects: Project[] = [
  {
    imgSrc: "/projects/Cosounds.png",
    title: "CoSounds - Personalized Collective Adaptive Soundscapes",
    status: "live",
    challenge:
      "High-friction feedback loops lead to participation failure. The system operates as an anonymous, failing to account for the distinct identities and needs of the occupants.",
    solution:
      " A single-gesture NFC intent layer with individual preference vectors built per student, feeding into collective aggregation, balancing them across everyone in the space.",
    techStack: ["React", "TypeScript", "Python", "Supabase", "NFC"],
    links: [
      { href: "/projects/cosounds", label: "View Details", type: "primary" },
    ],
  },
  {
    imgSrc: "/projects/Testing Dashboard.png",
    title: "Para-Athlete Equipment Testing Dashboard",
    status: "live",
    challenge:
      "Para-athletes have 2\u00D7 the injury rate partly because equipment is fitted by feel, not data.",
    solution:
      "A platform to run motion-sensor tests and log athlete movement data and feedback \u2014 replacing guesswork with evidence.",
    techStack: ["React", "TypeScript", "D3.js", "Express", "PostgreSQL"],
    links: [
      {
        href: "/projects/para-athlete-testing",
        label: "View Details",
        type: "primary",
      },
    ],
  },
];

// ─── Projects Page — Pinned / Featured Work ───────────────────────────────────

export const pinnedProjects: PinnedProject[] = [
  {
    image: "/projects/Cosounds1.png",
    alt: "CoSounds Project",
    title: "CoSounds",
    description:
      "Adaptive soundscape system for shared study spaces. One NFC tap connects you to the room\u2019s ML-driven audio \u2014 anonymous, frictionless, continuous.",
    tags: ["Web", "UX", "NFC", "ML", "Research"],
    github: "https://github.com/Pranav-Talwar/CoSounds",
    caseStudy: "/projects/cosounds",
    starred: true,
  },
  {
    image: "/projects/Testing Dashboard.png",
    alt: "Para-Athlete Equipment Testing Dashboard",
    title: "Para-Athlete Testing Dashboard",
    description:
      "Real-time performance dashboard for para-athlete equipment testing \u2014 tracking biomechanical data with precision and accessibility.",
    tags: ["React", "SQL", "Data Handling"],
    github: "#",
    caseStudy: "/projects/para-athlete-testing",
    starred: true,
  },
];

// ─── Projects Page — XtapX Lab Research ──────────────────────────────────────

export const labProjects: LabProject[] = [
  {
    title: "Bluetooth Presence Detection System",
    description:
      "Real-time Bluetooth detection via Raspberry Pi, gated by NFC tap consent.",
    tags: ["Hardware"],
    github: "https://github.com/xtapx-labs/Presence-Detection-System",
    caseStudy: "/projects/cosounds-bluetooth-backend",
    starred: true,
  },
  {
    title: "Social Engineering Vulnerabilities in NFC Interaction Systems",
    description:
      "Analysis of social engineering vulnerabilities in NFC-based interaction systems.",
    tags: ["Research"],
    github: "https://github.com/xtapx-labs/UX-Security-Paradox",
    caseStudy: "#",
  },
  {
    title: "Personality-Guided Soundscapes in Shared Spaces",
    description:
      "Consent-first ambient intelligence using NFC taps and ML to generate adaptive soundscapes.",
    tags: ["ML", "UX"],
    github: "https://github.com/xtapx-labs/Ambient-Intelligent-Soundscapes",
    caseStudy: "#",
  },
  {
    title: "Physical Product Authentication and Provenance",
    description:
      "Authentication for physical products via NFC chips generating unique cryptographic signatures per tap.",
    tags: ["Web App"],
    github: "https://github.com/Pranav-Talwar/TapProof",
    caseStudy: "#",
  },
];

// ─── Projects Page — Side Projects ───────────────────────────────────────────

export const sideProjects: SideProject[] = [
  {
    image: "/projects/side/Coverxcover.png",
    title: "CoverXCover",
    description: "Book tracking & review app",
    tags: ["React", "Spring Boot", "MySQL"],
    href: "https://github.com/Pranav-Talwar/CoverXCover",
  },
  {
    image: "/projects/side/Maple.png",
    title: "MapleMigrant",
    description: "Blogging platform for Canadian immigrants",
    tags: ["Hono", "Prisma", "Zod"],
    href: "https://maple-migrant.pranavtalwar.ca/",
    live: true,
  },
  {
    image: "/projects/side/CampusUnify.png",
    title: "CampusUnify",
    description: "Campus-centric social platform",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    href: "https://github.com/Pranav-Talwar/CampusUnify",
  },
  {
    image: "/projects/side/MrRead.png",
    title: "Mr.ReadMe",
    description: "GitHub profile editor",
    tags: ["TipTap", "React", "Jotai"],
    href: "https://github.com/Pranav-Talwar/Markdown-Editor",
  },
  {
    image: "/projects/side/Calmy.png",
    title: "Calmy",
    description: "Productivity and wellness app",
    tags: ["C#", ".NET", "MongoDB"],
    href: "https://github.com/Pranav-Talwar/Calmy-Focus-App",
  },
  {
    image: "/projects/side/Mindora.png",
    title: "Mindora",
    description: "Your second brain app for content",
    tags: ["TypeScript", "MongoDB", "TailwindCSS"],
    href: "https://github.com/Pranav-Talwar/Mindora",
  },
];
