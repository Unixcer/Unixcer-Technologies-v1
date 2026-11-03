# Design System & Visual Specification (DESIGN.md)

## 1. Design Philosophy: "Architectural Precision & Deep Tech Elegance"
Unixcer Technologies' brand identity conveys deep technical competence, architectural discipline, and forward-looking AI innovation. The aesthetic avoids amateur neon clutter in favor of an **obsidian dark-first interface** paired with a **crisp, high-contrast light mode**, anchored by a singular **Electric Cobalt** primary accent.

By default, the theme matches the user's operating system setting (`system`), allowing seamless day-to-night transitions.

---

## 2. Color Palette & Design Tokens

### 2.1. Dark Mode Tokens (Primary Brand Canvas)
Dark mode is engineered with deep obsidian tones rather than pure `#000000` to maintain perceptual depth and reduce optical glare:

| Token Name | Hex Code | Role / Usage |
| :--- | :--- | :--- |
| `--bg-base` | `#080B11` | Primary screen canvas background |
| `--bg-surface-1` | `#0E1420` | Secondary surface: Cards, modular sections |
| `--bg-surface-2` | `#151E30` | Tertiary surface: Hover states, modal dialogs, elevated chips |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Standard card borders, structural dividers |
| `--border-focus` | `#3B82F6` | Active input rings, focused links |
| `--accent-primary` | `#3B82F6` | **Electric Cobalt**: Primary CTA buttons, key highlights |
| `--accent-secondary` | `#8B5CF6` | **Cyber Violet**: Subtle glow underlays, secondary gradients |
| `--accent-cyan` | `#06B6D4` | **Precision Cyan**: Micro-accents, status indicators |
| `--text-primary` | `#F8FAFC` | Main headings and high-emphasis typography |
| `--text-secondary` | `#94A3B8` | Body copy, explanatory text, subtitles |
| `--text-muted` | `#64748B` | Footnotes, timestamps, inactive borders |

### 2.2. Light Mode Tokens (Enterprise Daylight Canvas)
Light mode delivers high contrast, clean typography, and subtle card elevations:

| Token Name | Hex Code | Role / Usage |
| :--- | :--- | :--- |
| `--bg-base` | `#F8FAFC` | Primary light background (Slate-50) |
| `--bg-surface-1` | `#FFFFFF` | Card containers, clean white paper surfaces |
| `--bg-surface-2` | `#F1F5F9` | Hover states, pill badges, secondary button backgrounds |
| `--border-subtle` | `#E2E8F0` | Card borders, table dividers |
| `--border-focus` | `#2563EB` | Active focus rings |
| `--accent-primary` | `#2563EB` | Deep Royal Cobalt: Primary CTAs, brand highlights |
| `--accent-secondary` | `#7C3AED` | Royal Purple: Subtle accents |
| `--text-primary` | `#0B1B3D` | Executive navy-black for headings and titles |
| `--text-secondary` | `#475569` | High-readability body copy |
| `--text-muted` | `#64748B` | Muted captions and metadata |

---

## 3. Typography Pairing

Modern, geometric, and highly readable typography loaded via Next.js Google Fonts optimization (`next/font/google`):

### 3.1. Primary Display & Heading Font: **Plus Jakarta Sans**
- **Characteristics**: Crisp geometric curves, tall x-height, contemporary enterprise authority.
- **Weights**: 
  - `font-bold` (700) and `font-extrabold` (800) for H1, H2, and Hero slogans.
  - `font-semibold` (600) for section titles and card headings.

### 3.2. Body & Interface Font: **Inter**
- **Characteristics**: Neutral, highly legible at small sizes, optimal letter spacing for complex technical reading.
- **Weights**:
  - `font-normal` (400) for descriptive paragraphs.
  - `font-medium` (500) for navigation links, labels, and form fields.

### 3.3. Technical & Code Font: **JetBrains Mono**
- **Characteristics**: Developer-focused monospace font with distinctive glyphs.
- **Weights**: `font-mono` (400, 500) for tech stack pills, architecture diagrams, API tags, and terminal blocks.

---

## 4. Spacing, Layout & Responsive Grid

- **Base Rhythm**: 4px / 8px grid system (`gap-4`, `p-6`, `py-16`, `py-24`).
- **Container Maximum Widths**:
  - Standard Content: `max-w-7xl` (`1280px`) centered with `mx-auto px-4 sm:px-6 lg:px-8`.
  - Focused Reading (Blog / Legal): `max-w-4xl` (`896px`).
  - Hero Section: `max-w-7xl` with 12-column asymmetric layout or 50/50 split on desktop.
- **Breakpoints**:
  - `sm`: `640px` (Smartphones horizontal)
  - `md`: `768px` (Tablets / split grids)
  - `lg`: `1024px` (Small laptops / 3-column bento grids)
  - `xl`: `1280px` (Desktop layout)
  - `2xl`: `1536px` (Widescreen displays)

---

## 5. UI Component Specifications

### 5.1. Glassmorphic Navigation Bar
- **Behavior**: Sticky top position (`sticky top-0 z-50`), backdrop blur (`backdrop-blur-md bg-white/80 dark:bg-[#080B11]/80`).
- **Left**: Dynamic company brand from `siteConfig.ts` with brand mark and subtitle.
- **Center**: Navigation links (`Home`, `Services`, `Work`, `Founders`, `About`, `Blog`, `Contact`) with active state indicator.
- **Right**:
  - **Theme Toggle**: Dropdown / cycle button (System / Dark / Light) with smooth icon transitions.
  - **"Get a Quote" CTA**: Prominent pill button with gradient hover and micro-glow.
- **Mobile Menu**: Fullscreen slide-over drawer with accessible ARIA focus trap and smooth entry animation.

### 5.2. Bento Grid Service Cards
- Border treatment: 1px subtle border with dynamic gradient hover tracking (`border-slate-200 dark:border-white/10 hover:border-blue-500/50`).
- Corner radius: `rounded-2xl` (`16px`) for clean modern feel.
- Inner elements: Category badge, iconography, concise problem/solution copy, tech stack chip strip, and "Explore Service" link with animated directional arrow.

### 5.3. Founder Profile Cards
- Respects existing v1 leadership information for **Murlikrishna Naral** and **Saiprasad Gortyal**.
- Includes:
  - Role badge (e.g., "Founder & Full Stack Developer")
  - High-impact name typography
  - Core Tech Stack badge cluster
  - Additional Expertise summary
  - Direct links to GitHub and LinkedIn profiles

### 5.4. High-Trust Engineering Process Timeline
- 5-step structured linear progression: `DISCOVER` → `DESIGN & ARCHITECT` → `AGILE DEVELOP` → `ZERO-DOWNTIME DEPLOY` → `CONTINUOUS SUPPORT`.
- Step index counters (`01`, `02`, etc.) in `JetBrains Mono`.
- Connecting gradient line with responsive vertical orientation on mobile.

---

## 6. Motion & Animation Rules (Framer Motion)

### 6.1. Guiding Principles
- **Subtlety Over Spectacle**: Animations must guide the user's eye and reward interaction, never delay page comprehension.
- **Strict Performance Limits**: Max 300ms duration for micro-interactions; max 600ms for section entrances.
- **Scroll Reveal Policy**: All scroll animations use `{ once: true, margin: "-100px" }` so components do not re-trigger when scrolling back up.

### 6.2. Motion Presets
```ts
// Section Fade-Up
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } 
  }
};

// Stagger Container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};
```

### 6.3. Accessibility (Reduced Motion)
- Every animation respects `prefers-reduced-motion: reduce`.
- If reduced motion is requested, opacity fades immediately to 1 and transforms (`y`, `scale`) are disabled.

---

## 7. Interactive 3D Concept (React Three Fiber & Drei)

### 7.1. Concept: "The Neural Architecture Lattice"
- A lightweight, procedural 3D geometric cluster representing scalable microservices and AI nodes.
- Interconnected nodes (icosahedrons and points) connected with subtle dynamic neon line segments.
- The entire lattice gently rotates on an idle axis and responds with subtle parallax inclination to the user's cursor pointer coordinates.

### 7.2. Technical Constraints & Budgets
- **Bundle Weight**: Under 150 KB. Zero external 5MB GLTF/GLB downloads; all geometry is created procedurally with standard Three.js primitives (`<sphereGeometry />`, `<lineSegments />`, `<points />`).
- **Framerate Budget**: Locked 60fps on modern laptops; Device Pixel Ratio (DPR) capped at `Math.min(window.devicePixelRatio, 1.5)`.
- **Dynamic Loading**: Imported with `next/dynamic(() => import('./Scene3D'), { ssr: false })` wrapped in a lightweight `<Suspense>` boundary.
- **Low-Power & Mobile Fallback**: On devices with screen width `< 768px` or when GPU hardware acceleration is disabled, render a high-performance CSS gradient orb with an SVG mesh overlay that consumes 0% GPU battery.

