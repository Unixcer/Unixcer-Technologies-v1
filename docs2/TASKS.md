# Implementation Roadmap & Task Checklist (TASKS.md)

This checklist tracks the implementation of Unixcer Technologies' company website modernization. Each task represents a verifiable engineering milestone.

---

## Phase 1: Planning, Documentation & Approval (COMPLETED)
- [x] **Task 1.1: Workspace Inspection & Analysis**
  - [x] Inspect existing `Unixcer-Technologies-v1` codebase, package dependencies, assets, and routes.
  - [x] Identify genuine founder data, contacts, and real projects.
  - [x] Formulate 5-line executive inspection report.
- [x] **Task 1.2: Architecture & Product Documentation**
  - [x] Author `docs/PRD.md` (goals, client personas, route sitemap, metrics).
  - [x] Author `docs/DESIGN.md` (color palette, design tokens, type pairing, components, 3D concept).
  - [x] Author `docs/ARCHITECTURE.md` (SSOT config, directory structure, SSG strategy, performance budget).
  - [x] Author `docs/CONTENT.md` (complete outcome-focused copy, services, projects, founders, FAQs, blog posts).
  - [x] Author `docs/TASKS.md` (ordered execution checklist for Phases 2–6).
  - [x] Author `docs/DEPLOYMENT.md` (Vercel deployment, env vars, custom domain DNS mapping, launch checklist).
- [x] **Task 1.3: User Review & Milestone Approval**
  - [x] Present inspection findings and documentation suite to user.
  - [x] User gave explicit approval to proceed with execution.

---

## Phase 2: Foundation & Core Infrastructure (COMPLETED)
- [x] **Task 2.1: Next.js + TypeScript + Tailwind Setup**
  - [x] Initialize Next.js 15 App Router project with TypeScript and Tailwind CSS.
  - [x] Configure `tsconfig.json` with strict type checking, `baseUrl: "."`, and clean `@/*` path aliases.
  - [x] Configure `next.config.mjs` with security headers, redirects (`/projects` -> `/work`), and Webpack `@/*` aliases.
  - [x] Install essential dependencies (`lucide-react`, `framer-motion`, `next-themes`, `zod`, `react-hook-form`, `three`, `@react-three/fiber`, `@react-three/drei`).
- [x] **Task 2.2: Single Source of Truth Configuration Layer**
  - [x] Create `src/config/siteConfig.ts` with master brand variables, contact details, social URLs, and nav schemas.
  - [x] Implement data models (`src/data/servicesData.ts`, `src/data/projectsData.ts`, `src/data/foundersData.ts`, `src/data/faqData.ts`, `src/data/blogPosts.ts`).
  - [x] Verified that modifying `siteConfig.name` automatically propagates across metadata, navbar, footer, JSON-LD, and pages.
- [x] **Task 2.3: Theme Engine & Layout Components**
  - [x] Setup `next-themes` ThemeProvider in `src/app/layout.tsx` (defaulting to `system` mode).
  - [x] Build glassmorphic sticky `Navbar` with brand logo, nav links, Theme Toggle (System/Dark/Light), and "Get a Quote" CTA.
  - [x] Build responsive `MobileNav` slide-over menu with accessible keyboard focus trap.
  - [x] Build comprehensive `Footer` consuming `siteConfig` (address, phone numbers, email, copyright year, legal links).
  - [x] Build custom `not-found.tsx` (404) with high-trust design and helpful quick links.
- [x] **Task 2.4: SEO & Metadata Infrastructure**
  - [x] Implement dynamic root metadata generator utilizing `process.env.NEXT_PUBLIC_SITE_URL`.
  - [x] Implement dynamic `src/app/sitemap.ts` (XML sitemap) generating all static and dynamic routes.
  - [x] Implement dynamic `src/app/robots.ts` with crawl rules and sitemap pointer.
  - [x] Implement JSON-LD Structured Data (`Organization` & `WebSite` schema) injected into root layout.
  - [x] Configure OpenGraph preview card metadata.
- [x] **Task 2.5: Asset Migration & Optimization**
  - [x] Migrate and organize brand logos and icons into `public/brand/` and `public/images/`.
- [x] **Phase 2 Verification Gate**: Run `npm run build` cleanly with 0 errors (compiled in 7.7s, total first-load JS: 103 kB).

---

## Phase 3: Core Pages & Dynamic Routes (COMPLETED)
- [x] **Task 3.1: Home Page (`/`)**
  - [x] Build Hero section with animated typography, value badges, and dynamic CTA buttons.
  - [x] Build Value Proposition strip (Architectural Rigor, Applied AI, Direct Senior Collaboration).
  - [x] Build Services Grid preview with bento cards and interactive hover states.
  - [x] Build 5-Stage Engineering Process timeline with step counters and responsive connectors.
  - [x] Build Tech Stack strip featuring 12 core battle-tested technologies.
  - [x] Build Featured Work case study cards (`EzTurn`, `DigiU`, `ShareMyRide`).
  - [x] Build Outcome-Focused FAQ accordion.
  - [x] Build Final Conversion Banner with dual CTA (Project Quote + WhatsApp).
- [x] **Task 3.2: Services Catalog & Deep Dives (`/services` and `/services/[slug]`)**
  - [x] Build `/services` overview catalog with capability highlights and deliverables.
  - [x] Build dynamic `/services/[slug]` route with `generateStaticParams()` for all 6 core services.
- [x] **Task 3.3: Case Studies & Engineering Portfolio (`/work` and `/work/[slug]`)**
  - [x] Build `/work` portfolio showcase with verified case studies.
  - [x] Implement case studies with `generateStaticParams()` for `ezturn`, `digiu`, `sharemyride`.
- [x] **Task 3.4: About Us & Founders (`/about` and `/founders`)**
  - [x] Build `/founders` page (maintaining backwards compatibility with existing live route).
  - [x] Build `/about` page highlighting company ethos, engineering manifesto, and quality standards.
- [x] **Task 3.5: Technical Blog (`/blog` and `/blog/[slug]`)**
  - [x] Build `/blog` listing page with reading time, author tags, and metadata.
  - [x] Implement dynamic `/blog/[slug]` route with `generateStaticParams()` for starter articles.
- [x] **Task 3.6: Careers, Contact, Privacy & Terms**
  - [x] Build `/careers` page with culture pillars and proactive intake channels.
  - [x] Build `/contact` page with embedded tabbed quote calculator and general inquiry forms.
  - [x] Build `/privacy` (Privacy Policy) and `/terms` (Terms of Service) pages.
  - [x] Implement Edge API route handlers `/api/quote` and `/api/contact` with spam honeypot.
- [x] **Phase 3 Verification Gate**: All 28 pages pre-rendered statically at build time; `npm run build` completed with 0 errors.

---

## Phase 4: 3D Visualization & Restrained Motion (COMPLETED)
- [x] **Task 4.1: React Three Fiber Setup & Optimization**
  - [x] Implement procedural 3D Neural Lattice component (`src/components/3d/NeuralLattice.tsx`) with 0 external MB downloads.
  - [x] Configure low-power parameters: DPR clamped to `[1, 1.5]`, `gl={{ powerPreference: 'low-power', antialias: true, alpha: true }}`.
  - [x] Implement interactive cursor parallax reactivity using `pointer` lerping in `useFrame()`.
- [x] **Task 4.2: Dynamic Loading & Graceful Fallbacks**
  - [x] Dynamically import 3D canvas with `next/dynamic(..., { ssr: false, loading: () => <HeroFallback /> })`.
  - [x] Implement high-performance CSS gradient orb / SVG mesh fallback (`HeroFallback.tsx`) for mobile screens (< 768px), low-power devices, and `prefers-reduced-motion`.
- [x] **Task 4.3: Framer Motion Interactions**
  - [x] Implement `MotionFade` scroll reveal component with `{ once: true, margin: '-50px' }` and automatic `useReducedMotion()` fallback.
  - [x] Implement `TiltCard` restrained 3D perspective hover micro-interaction (max 6-degree tilt) for services and project cards.
- [x] **Phase 4 Verification Gate**: `npm run build` passed cleanly with 0 errors; total first-load JS for home page with 3D is only **161 kB**; all other routes stay at **103 - 112 kB**.

---

## Phase 5: Lead Generation, Quote Form & Integrations (COMPLETED)
- [x] **Task 5.1: Interactive "Request a Quote" & Contact Forms**
  - [x] Polish Zod validation schemas for contact and quote submissions (`src/lib/validation.ts`).
  - [x] Support pre-selected service query parameters (`/contact?service=web-development#quote`).
  - [x] Interactive tab switching (General Inquiries vs. Detailed Project Quote).
  - [x] Honeypot spam defense (`website` hidden field) and inline client feedback modal.
- [x] **Task 5.2: Backend Edge Route Handlers**
  - [x] Next.js Route Handlers in `/api/contact`, `/api/quote`, and `/api/newsletter`.
  - [x] Resend transactional email client (`src/lib/email.ts`) with HTML templates and resilient fallback console logging.
  - [x] In-memory sliding-window rate limiting (`src/lib/rateLimit.ts` - 6 requests / minute / IP).
- [x] **Task 5.3: Direct Communication Channels & AI Assistant**
  - [x] WhatsApp floating click-to-chat button with pre-filled greeting and dynamic phone from SSOT.
  - [x] Cal.com / Calendly direct appointment scheduling links with pre-configured meeting durations.
  - [x] Newsletter subscription form integrated into the global footer.
  - [x] Free-tier interactive AI Client Assistant Modal (`AIAssistantModal.tsx`) answering inquiries on services, tech stack, and estimations.
- [x] **Phase 5 Verification Gate**: Build passed cleanly with 0 errors across all 29 static pages + 3 server API routes.

---

## Phase 6: Quality Assurance, Performance & Deployment (COMPLETED)
- [x] **Task 6.1: Accessibility, Theme Contrast & Responsive Polish**
  - [x] WCAG AA compliance verified across both Dark Obsidian (`#080b11`) and Daylight Slate (`#f8fafc`).
  - [x] Keyboard focus visible rings, semantic landmarks (`header`, `main`, `footer`, `nav`), and alt tags across all imagery.
- [x] **Task 6.2: Security Headers & Production Optimization**
  - [x] Complete HTTP security headers configured in `next.config.mjs` (HSTS, X-Frame-Options DENY, XSS-Protection, nosniff, Referrer-Policy).
  - [x] Automated 308 redirect from legacy `/projects` to `/work`.
  - [x] Lightweight asset bundling (home page 161 kB total first load JS, subpages 103-107 kB).
- [x] **Task 6.3: DEPLOYMENT.md Complete Verification & Launch Checklist**
  - [x] Vercel Hobby tier zero-budget deployment documentation.
  - [x] Step-by-step custom domain integration with authoritative DNS entries (`A` record `76.76.21.21` and `CNAME` `cname.vercel-dns.com`).
  - [x] Dynamic domain switching via `NEXT_PUBLIC_SITE_URL` env variable with automatic 308 redirects from `unixcertech.vercel.app`.
- [x] **Task 6.4: Consolidated User Placeholders & Final Handover**
  - [x] Centralized Single Source of Truth verified in `src/config/siteConfig.ts` and `src/data/*.ts`.
  - [x] Explicit placeholder inventory compiled for easy customization.
- [x] **Phase 6 Verification Gate**: Full Next.js production build succeeds with 0 errors across all 29 static pages and 3 edge API endpoints.
