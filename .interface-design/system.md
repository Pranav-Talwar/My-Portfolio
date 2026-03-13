# mg-portfolio Design System
**Direction:** Terminal / cold workbench — precision over warmth.
**Stack:** Next.js + Tailwind · Inter (sans) + JetBrains Mono · CSS custom properties

---

## Color Tokens

All colors reference CSS custom properties. Never use hardcoded hex values or Tailwind palette colors — except for brand-mandated icon backgrounds (LinkedIn, GitHub).

```css
/* Backgrounds */
--bg-base:      #050505   /* deepest bg, footer, behind container */
--bg-surface:   #0a0a0a   /* page bg, sticky section headers */
--bg-card:      #111111   /* card bg, hover states */
--bg-nav:       rgba(10,10,10,0.9) /* navbar w/ blur */

/* Borders */
--border:       #1a1a1a   /* primary border (dominant) */
--border-alt:   #262626   /* hover border, active border */

/* Text hierarchy */
--text-heading: #ffffff   /* headings, primary labels */
--text-secondary:#a3a3a3  /* body copy, descriptions, tags at rest */
--text-muted:   #737373   /* category labels, metadata */
--text-faint:   #525252   /* icons at rest, placeholders */

/* Accent */
--accent:       #22c55e   /* emerald. Use var(--accent), never #22c55e directly */

/* Image showcase */
--showcase-from: #1a1a1a
--showcase-to:   #141414
```

**Token usage rules:**
- `--text-body` (#d4d4d4) — defined but retire it. Use `--text-secondary` for body copy.
- `--accent` — always use the variable. Never `emerald-500`, `#22c55e`, or `rgba(34,197,94,...)` inline.
- `emerald-*` Tailwind classes are acceptable for colored text (`text-emerald-500`, `text-emerald-400`) and tinted surfaces (`bg-emerald-500/10`, `border-emerald-500/20`) where semantic meaning is explicit.
- `green-*` (not emerald) — do not use. Wrong scale.

---

## Typography

### Font Roles

| Font | Variable | Role |
|------|----------|------|
| JetBrains Mono | `font-mono` | Brand/identity, category labels, data values |
| Inter | `font-sans` (default) | Headers, body text, UI feedback |

**Mono is for data and identity — not for UI strings.**

```
font-mono  →  nav logo, hero h1, category labels (11px caps),
              email addresses, handles, dates, tech tags, year stamps

font-sans  →  section h2s, body paragraphs, form inputs,
              button labels, success/error messages
```

### Type Scale

| Size | Class | Weight | Font | Usage |
|------|-------|--------|------|-------|
| 10px | `text-[10px]` | `font-bold` | mono | Status badge labels, year tags, tech tags |
| 11px | `text-[11px]` | `font-mono font-bold` | mono | Category labels (UPPERCASE + tracking-widest) |
| 12px | `text-xs` | — | sans | Metadata, small descriptions, form labels (with mono override) |
| 14px | `text-sm` | — | sans | Body text, nav links, card descriptions |
| 16px | `text-base` | `font-semibold` | sans | Card titles |
| 18px | `text-lg` | `font-semibold` | sans | Secondary section headers |
| 20px | `text-xl` | `font-bold` | mono | Nav logo, org titles |
| responsive | `text-2xl md:text-3xl` | `font-bold` | sans | Primary section headers (Featured Work) |
| responsive | `text-2xl sm:text-3xl md:text-5xl` | `font-bold` | mono | Hero h1 |

### Category Label Pattern

Every section sub-label (Bio, Education, Core Skills, Projects):

```tsx
<p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
  Label
</p>
```

---

## Spacing

**Base unit:** 4px (Tailwind default)

**Scale in use:** 4, 8, 12, 16, 20, 24, 32, 40

### Horizontal Padding (universal)
```
px-4 md:px-8   — all sections, headers, content areas
```

### Section Header Padding

| Header type | Padding | h2 size |
|-------------|---------|---------|
| Primary (Featured Work) | `py-6 md:py-8` | `text-2xl md:text-3xl font-bold` |
| Secondary (all others) | `py-5 md:py-6` | `text-lg font-semibold` |

### Gaps

| Gap | Value | Usage |
|-----|-------|-------|
| `gap-2` | 8px | Tag clusters |
| `gap-3` | 12px | Icon + label pairs, header inline groups |
| `gap-4` | 16px | Nav items, footer icons, form grid |
| `gap-5` | 20px | Card grids |
| `gap-6` | 24px | Content column gaps, row spacing |
| `gap-8` | 32px | Large block separation |

### Common Margins

```
mb-2   — tight: title → sub-label
mb-4   — standard: category label → content
mb-6   — section-level separation
```

---

## Border Radius

One rule per context. Never mix:

| Context | Class | Value |
|---------|-------|-------|
| Tags / chips | `rounded` | 4px |
| Controls: inputs, buttons, education card, social icon squares | `rounded-lg` | 8px |
| Image containers, project card wrappers, XtapX logo | `rounded-xl` | 12px |
| Status badges, ping dot | `rounded-full` | — |
| Image insets (inside containers) | `rounded-md` or `rounded-lg` | 6/8px |

---

## Depth

**Strategy: Borders-only.**

```
border border-[var(--border)]       — primary separation
border border-[var(--border-alt)]   — hover / emphasis
backdrop-blur-xl                    — sticky headers only
shadow-2xl shadow-black/20          — layout container only (layout.tsx)
shadow-xl                           — image insets only (decorative)
```

Do not add `box-shadow` to cards, rows, or interactive elements. Hover is communicated via `bg-[var(--bg-card)]` background shift, border color change, and transform.

---

## Component Patterns

### Section Header (sticky)

```tsx
<div className="px-4 md:px-8 py-5 md:py-6 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-14 md:top-16 z-40 backdrop-blur-xl transition-colors duration-300">
  <h2 className="text-lg font-semibold text-[var(--text-heading)]">Section Name</h2>
</div>
```

Primary variant (Featured Work only):
```tsx
py-6 md:py-8  /  text-2xl md:text-3xl font-bold
```

### Tech Tag

```tsx
<span className="px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[10px] font-mono text-[var(--text-secondary)] hover:border-[var(--border-alt)] hover:text-[var(--text-heading)] transition-colors">
  Tag
</span>
```

All tags use `px-2.5 py-1` and `bg-[var(--bg-surface)]`.

### Status Badge

```tsx
<div className="flex items-center gap-2 px-2.5 py-1 rounded-full border bg-emerald-500/10 border-emerald-500/20">
  <div className="w-1 h-1 rounded-full bg-emerald-500" />
  <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">Label</span>
</div>
```

Three status colors: `emerald` (completed/live), `blue` (in-progress), `neutral` (archive).

### Social Link Row

```tsx
<a className="flex items-center justify-between p-6 hover:bg-[var(--bg-card)] transition-all duration-200 group">
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-alt)] text-[var(--text-heading)] flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="font-semibold text-[var(--text-heading)]">Label</div>
      <div className="text-xs text-[var(--text-muted)] font-mono">handle or address</div>
    </div>
  </div>
  <ArrowUpRight className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[var(--text-heading)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
</a>
```

Brand-colored icon backgrounds (LinkedIn `#0077b5`, GitHub `#24292e`) are acceptable exceptions — documented, not extended.

### Image Showcase Container

```tsx
<div className="group/img relative rounded-xl overflow-hidden border border-[var(--border)]">
  <div className="bg-[linear-gradient(135deg,var(--showcase-from),var(--showcase-to))] p-4">
    <img className="... transition-[filter] duration-150 group-hover/img:blur-[3px]" />
  </div>
  {/* Pop overlay */}
  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/30 transition-colors duration-150">
    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center scale-0 group-hover/img:scale-100 opacity-0 group-hover/img:opacity-100 shadow-[0_4px_24px_rgba(0,0,0,0.25)] [transition:all_200ms_cubic-bezier(0.34,1.56,0.64,1)]">
      <ArrowUpRight className="w-4 h-4 text-neutral-900" strokeWidth={2.5} />
    </div>
  </div>
</div>
```

### Primary Button

```tsx
<button className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-heading)] text-[var(--bg-surface)] text-sm font-semibold rounded-lg hover:opacity-85 active:scale-[0.97] transition-all duration-200 disabled:opacity-50 cursor-pointer">
  Label <Icon className="w-3.5 h-3.5" />
</button>
```

### Live / Ping Indicator

```tsx
<span className="relative flex h-2.5 w-2.5">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
</span>
```

---

## Motion

```
transition-colors duration-200    — color-only changes (text, border, bg)
transition-colors duration-300    — theme-wide transitions
transition-all duration-200       — multi-property (hover rows, icon scale)
transition-transform duration-200 — translate-only (arrows, title shift)
transition-[filter] duration-150  — image blur (fast intentional)

hover:scale-110                   — icon squares on hover
active:scale-[0.97]               — button press
group-hover:translate-x-0.5 -translate-y-0.5  — ArrowUpRight on all external links
[transition:all_200ms_cubic-bezier(0.34,1.56,0.64,1)]  — spring pop overlay
```

No animation for layout changes. No `transition-all` on sections.

---

## Layout

```
Container:  max-w-4xl mx-auto border-x border-[var(--border)]
            min-h-screen bg-[var(--bg-surface)]
            shadow-2xl shadow-black/20

NavBar:     sticky top-0 z-50 h-14 md:h-16
Sticky headers: top-14 md:top-16 z-40

Grid (cards):     grid-cols-1 sm:grid-cols-2 gap-5
Grid (form):      grid-cols-1 sm:grid-cols-2 gap-4
Split (about):    md:w-[55%] + md:w-[45%] divide-x
```

---

## Known Issues (dont fix)

| Issue | File | Fix |
|-------|------|-----|
| `zoom: 90%` global hack | `globals.css` | Remove; fix sizing at source if needed |
