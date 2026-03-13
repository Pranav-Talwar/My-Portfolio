# Design Audit — mg-portfolio
**Date:** 2026-03-08
**Scope:** All components in `src/components/` + `src/app/`
STATUS fIXED
---

## Implied Design System (derived from code)

| Token | Value |
|-------|-------|
| Spacing grid | 4px base (Tailwind defaults) |
| Accent color | `emerald-500` / `#22c55e` |
| Card radius | Undefined — alternates between `rounded-lg` and `rounded-xl` |
| Depth model | Borders-only (no shadow declarations) |
| Typography scale | Tailwind default + off-scale hardcoded values (`text-[15px]`, `text-[11px]`) |
| Color system | CSS custom properties via `--bg-*`, `--text-*`, `--border*` |

---

## Violations

### 1. Hardcoded Colors — Not in Design System

| File | Line | Issue |
|------|------|-------|
| `SocialLinksSection.tsx` | 12 | `bg-[#1a1a2e]` (email icon) — navy orphan, unrelated to any token |
| `SocialLinksSection.tsx` | 31 | `bg-[#0077b5]` (LinkedIn) — brand hardcode, undocumented |
| `SocialLinksSection.tsx` | 52 | `bg-[#24292e]` (GitHub) — brand hardcode, undocumented |
| `globals.css` | 61 | `background-color: #22c55e; color: #000` in `::selection` — should reference token |
| `globals.css` | 79–81 | `rgba(34, 197, 94, ...)` in `@keyframes pulse-green` — hardcoded accent |
| `globals.css` | 75 | `border-color: #22c55e` in `.cursor-blink` — hardcoded accent |
| `projects/page.tsx` | 308 | `bg-green-900/80 border-green-800 text-green-400` (LIVE badge) — uses `green-*` not `emerald-*` |

**Verdict:** The accent color appears as both `emerald-500`, `#22c55e`, `rgba(34,197,94,...)`, and `green-*`. These all resolve to visually similar greens but different scales. Pick one token.

---

### 2. Status Badge — Three Incompatible Implementations

| File | Implementation | Shape |
|------|---------------|-------|
| `ProjectCardFull.tsx` | **Not rendered** — `status` field exists in `Project` interface, never shown | — |
| `ProjectListCard.tsx` | Pill with dot: `bg-emerald-500/10 border-emerald-500/20 text-emerald-400` | Rounded-full pill |
| `projects/page.tsx` (side) | `bg-green-900/80 border-green-800 text-green-400` text badge | Small rounded |

Three components, three approaches for the same information. `ProjectCardFull` ignores status entirely even though both featured projects are "live."

---

### 3. Typography — Off-Scale Values

| File | Line | Value | Issue |
|------|------|-------|-------|
| `AboutSection.tsx` | 25 | `text-[15px]` | Off Tailwind scale (between `text-sm`=14px and `text-base`=16px) |
| `ProjectCardFull.tsx` | 109 | `text-[15px]` | Same off-scale value, different component |
| `ProjectCardFull.tsx` | 38 | `text-base md:text-lg` | Card title uses base/lg |
| `ProjectListCard.tsx` | 79 | `text-3xl font-bold` | Project list title — largest heading on page, bigger than the page h1 |
| `projects/page.tsx` | 127 | `text-2xl md:text-3xl` | Page h1 same size as section h2s — no hierarchy between page title and section titles |

---

### 4. Border Radius — No Declared Rule

| Context | Radius Used |
|---------|------------|
| Showcase image wrapper | `rounded-xl` |
| Education card | `rounded-lg` |
| Social icon squares | `rounded-lg` |
| XtapX logo | `rounded-xl` |
| Form inputs | `rounded-lg` |
| Tech tags | `rounded` (4px) |
| Project list card | `rounded-lg` (outer), `rounded-md` (inner image) |
| Featured project card | `rounded-xl` (outer), `rounded-lg` (inner image) |

**Verdict:** Cards alternate between `rounded-lg` and `rounded-xl` with no structural reason. Should be: one radius for cards, one for interactive controls (inputs, buttons, tags), one for image insets.

---

### 5. Section Sticky Headers — Identical Treatment, No Hierarchy

All three main sections use the exact same classes with no differentiation:

```
px-4 md:px-8 py-6 md:py-8 border-b border-[var(--border)]
bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40
backdrop-blur-xl transition-colors duration-300
```

```
h2 className="text-2xl font-bold text-[var(--text-heading)] text-center"
```

- `ProjectsSection` — "Featured Work"
- `AboutSection` — "About Me"
- `ContactForm` — "Get in touch"

"Featured Work" is the most important section on the page; it should not look identical to "Get in touch."

Additionally, `ContactForm.tsx` line 23-24 has `{/* Header */}` comment written **twice** in a row.

---

### 6. Interactive States — Inconsistent Hover Patterns

| Component | Tag Hover |
|-----------|-----------|
| `ProjectCardFull.tsx` | Tech tags have **no hover state** |
| `ProjectListCard.tsx` | Tags have `hover:border-[var(--border-alt)] hover:text-[var(--text-heading)]` |
| `projects/page.tsx` | Tags have **no hover state** |

Cards behave differently depending on which component rendered them.

---

### 7. Spacing — Off-Grid Values

| File | Line | Value | Issue |
|------|------|-------|-------|
| `ProjectCardFull.tsx` | 70 | `mt-[-2px]` | Negative margin fudge, off 4px grid |
| `ProjectCardFull.tsx` | 78 | `mt-[-2px]` | Same hack, repeated |
| `projects/page.tsx` tags | ~173 | `gap-1.5` = 6px | Off 4px grid; rest of codebase uses `gap-2` (8px) for tags |

---

### 8. "View Details" CTA — Invisible at Rest

`ProjectCardFull.tsx` line 110–113:
```
text-[var(--text-muted)] group-hover/card:text-emerald-500
```

The primary call-to-action on a featured project card rests at `--text-muted` (~`#737373`). It only becomes legible when the entire card is hovered. The link is functionally invisible at rest.

Compare: `ProjectListCard.tsx` renders an `ArrowUpRight` that fades in on hover — also invisible at rest, but at least the title is clearly clickable. `ProjectCardFull` has neither.

---

### 9. Global Zoom Hack

`globals.css` line 44:
```css
zoom: 90%;
```

This shrinks the entire viewport by 10% to compensate for elements feeling too large. It is not a design decision — it is a workaround. It distorts all spacing, font sizes, and touch targets non-uniformly across browsers (`zoom` is not a standard CSS property for this use case).

---

### 10. `align-left` — Dead Class

`ProjectCardFull.tsx` line 37:
```html
<div className="w-full mb-4 align-left">
```

`align-left` is not a Tailwind utility. It compiles to nothing. The div is left-aligned by default (block element). This class has no effect and should be removed.

---

### 11. Email Icon — Border Inconsistency

`SocialLinksSection.tsx`:
- Email icon container: `border border-[#1a1a2e]` (navy border matching navy background — invisible)
- LinkedIn: `border border-transparent`
- GitHub: `border border-transparent`
- Resume: `border border-transparent`

Email is the only icon with a visible border, but it's the same color as the background so it renders as no border. Inconsistent and non-functional.

---

## Summary

| Category | Violations |
|----------|-----------|
| Hardcoded colors | 7 |
| Status badge divergence | 3 implementations |
| Off-scale typography | 5 |
| Border radius without rule | 8 contexts |
| Section header monotony | 3 sections |
| Tag hover state gaps | 2 components |
| Off-grid spacing | 3 |
| Invisible primary CTA | 1 |
| Global zoom hack | 1 |
| Dead CSS class | 1 |
| Icon border inconsistency | 1 |

**Total: 32 violations across 9 files**

---

## Recommended Fixes (Priority Order)

1. **Define a design token for the accent** — one variable for emerald/green, referenced everywhere
2. **Decide one card radius** — `rounded-xl` for cards, `rounded-lg` for controls
3. **Build a single `StatusBadge` component** — used in `ProjectCardFull`, `ProjectListCard`, and side projects
4. **Make the "View Details" CTA visible at rest** — `text-emerald-500` not `text-muted`
5. **Remove `zoom: 90%`** — fix underlying sizing if needed
6. **Remove `mt-[-2px]` fudges** — use proper spacing
7. **Fix `align-left` dead class** — remove it
8. **Unify tag hover states** — add to `ProjectCardFull` and `projects/page.tsx` tags
9. **Differentiate section headers** — "Featured Work" should not look like "Get in touch"
10. **Replace hardcoded brand icon colors** — use `bg-[var(--bg-card)]` with a consistent icon color approach
