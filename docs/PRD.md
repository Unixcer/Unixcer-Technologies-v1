# Product Requirements Document (PRD)

## Project Overview
- **Product Name**: Unixcer Technologies Enterprise Website
- **Entity**: Unixcer Technologies (Emerging IT Services & Engineering Consultancy)
- **Primary Domain (Current Live)**: `https://unixcertech.vercel.app`
- **Dynamic Canonical URL**: Controlled via `process.env.NEXT_PUBLIC_SITE_URL`
- **Budget**: \$0.00 (Zero budget constraint — 100% Vercel Hobby Free Tier & Free Tier SaaS)
- **Status**: Production Refactor & Modernization

---

## 1. Executive Summary & Goals
Unixcer Technologies is an emerging, agile technology consultancy and development studio specializing in Web Applications, Mobile Engineering, Backend & Microservices, AI/GenAI Solutions, Cloud/DevOps, and UI/UX Design.

### Core Objectives
1. **Elevate Brand Caliber**: Create an authoritative, polished digital presence comparable to top-tier global engineering firms (e.g., Vercel, Linear, Stripe, Thoughtworks), establishing immediate credibility for prospective clients.
2. **Drive Inbound Conversions**: Provide frictionless pathways for prospects to request quotes, schedule technical discovery calls, or initiate direct contact via WhatsApp/Email.
3. **Single Source of Truth (SSOT)**: Architect all business information (company legal name, brand name, contact numbers, email, addresses, founder bios, services, project portfolio) into a single configuration module (`siteConfig.ts` & data models) so any corporate change requires updating only one file.
4. **Zero-Cost Infrastructure**: Leverage Next.js App Router Static Site Generation (SSG) with Vercel hosting, edge form handlers with Resend free tier, and Cal.com / WhatsApp direct integrations.
5. **Radical Honesty**: Zero fabricated client logos, fake metrics, or artificial testimonials. Only genuine founders, verified technical capabilities, and real client/showcase projects, using clear `[REPLACE: ...]` markers for any user-supplied business specifics.

---

## 2. Target Client Personas

### Persona A: Early-Stage Startup Founder / Non-Technical CTO
- **Profile**: Building high-velocity MVPs, seeking a technical partner to build web/mobile applications, integrate GenAI capabilities, or design an intuitive product interface.
- **Pain Points**: Limited budget, fear of technical debt, inability to vet engineering quality, need for rapid time-to-market.
- **What Converts Them**: Transparent engineering process, modern interactive tech showcase, clear deliverables, rapid WhatsApp contact channel, and starter project pricing tiers.

### Persona B: SME Business Leader / Operations Director
- **Profile**: Managing growing regional or digital businesses needing custom ERP solutions, e-commerce platforms, workflow automation, or database migrations.
- **Pain Points**: Outgrown spreadsheets or off-the-shelf software, clunky interfaces, manual errors, lack of technical support.
- **What Converts Them**: Demonstrable problem-solving architecture, clear case studies (EzTurn, DigiU), transparent timeline estimates, and enterprise reliability without enterprise price tags.

### Persona C: Enterprise & BFSI Technical Lead / Innovation Head
- **Profile**: Evaluating third-party agile engineering teams for specialized microservices, AI integrations, data pipelines, or frontend modernization.
- **Pain Points**: Security risks, code quality standards, vendor lock-in, poor architectural hygiene, scalability bottlenecks.
- **What Converts Them**: Clean microservices architecture, modern TypeScript/Next.js stack, strict adherence to security headers, data compliance readiness, and deep-dive technical blogs.

---

## 3. Complete Sitemap & Route Architecture

```
/
├── /                              # Home Page (Hero 3D, Value Prop, Services, Process, Tech Stack, Featured Work, FAQ, CTA)
├── /services                      # Comprehensive Services Catalog
│   ├── /services/web-development          # Custom Web Apps, SPAs, High-Performance Portals
│   ├── /services/mobile-apps              # Cross-Platform iOS & Android Engineering
│   ├── /services/backend-microservices    # Scalable APIs, Distributed Systems, Event-Driven Logic
│   ├── /services/ai-genai-solutions       # LLM Integration, Fine-Tuning, RAG, Predictive Systems
│   ├── /services/cloud-devops             # CI/CD, Containerization, Infrastructure as Code, Cloud Migration
│   └── /services/ui-ux-design             # Product Design Systems, Interactive Prototypes, UX Audits
├── /work                          # Engineering Portfolio & Case Studies
│   ├── /work/ezturn                       # Smart Queue Management & Predictive Analytics
│   ├── /work/digiu                        # Human Digital Twins AI Framework & Fine-Tuned LLMs
│   └── /work/sharemyride                  # Scalable Ride-Sharing & Geolocation Web App
├── /founders                      # Leadership Profiles & Core Engineering Specialties (Backward-compatible route)
├── /about                         # Mission, Architectural Ethos, Engineering Culture
├── /blog                          # Insights, Engineering Best Practices, GenAI Research (MDX)
│   ├── /blog/building-production-ready-llm-applications
│   └── /blog/microservices-architecture-best-practices
├── /careers                       # Open Roles, Internship Opportunities & Resume Submission
├── /contact                       # Contact Form, "Request a Quote" Calculator, Calendly Link, Direct WhatsApp
├── /privacy                       # Data Privacy Policy
├── /terms                         # Terms of Service & Client Engagement
├── /sitemap.xml                   # Dynamic XML Sitemap (driven by NEXT_PUBLIC_SITE_URL)
├── /robots.txt                    # Search Engine Directives
└── /api                           # Edge Route Handlers
    ├── /api/contact               # Validated contact form submission (Resend integration)
    └── /api/quote                 # Structured project quote estimation submission
```

---

## 4. Key Functional Requirements

### 4.1. Single Source of Truth (`src/config/siteConfig.ts`)
- Changing the company name in `siteConfig.ts` (`name: "Unixcer Technologies"`, `shortName: "Unixcer"`) MUST automatically update:
  - Header branding and mobile menus
  - Footer copyright and organization tags
  - Document `<title>` templates and meta descriptions
  - Open Graph tags and Twitter Cards
  - JSON-LD Structured Data (`Organization`, `WebSite`)
  - Contact details, legal pages, and email notification headers

### 4.2. Dual Theme Engine (Dark-First with System Alignment)
- Dark mode is the primary aesthetic signature (deep obsidian surfaces, glowing subtle blue/violet accents).
- High-contrast, clean light mode for daytime enterprise readability.
- Aligned to `system` preferences by default using `next-themes` (zero flash of unstyled content / FOUC).
- Instant, persistent manual toggle button in the navigation bar.

### 4.3. Restrained Interactive 3D Hero
- Interactive 3D scene built with React Three Fiber (`@react-three/fiber` and `@react-three/drei`).
- Procedurally generated floating geometric lattice / network matrix reacting subtly to cursor pointer coordinates.
- Dynamically imported with `ssr: false` and lazy-loaded.
- Geometry strictly under 200 KB with device pixel ratio capped at `[1, 1.5]` to avoid GPU throttling.
- Graceful CSS/SVG animated gradient fallback on mobile devices, low-power mode, or when `prefers-reduced-motion` is active.

### 4.4. Lead Capture & Quote Request
- Interactive **"Request a Quote"** tab and **Contact Form**:
  - Service selection (Web, Mobile, Backend, AI/GenAI, DevOps, UI/UX)
  - Estimated budget range & expected launch timeline
  - Project brief text
  - Form validation with Zod + React Hook Form
  - Spam deterrence via honeypot field and Cloudflare Turnstile token validation
  - API Route Handler with Resend free tier email delivery
- Direct **WhatsApp Click-to-Chat** floating pill & navbar button with pre-filled message.
- Optional Cal.com/Calendly modal or direct booking URL.

### 4.5. SEO & Social Sharing
- Strict dynamic canonical URL generation utilizing `process.env.NEXT_PUBLIC_SITE_URL`.
- OpenGraph and Twitter card previews generated for every page.
- Schema.org JSON-LD `Organization` and `WebSite` metadata on every page.
- Automated `sitemap.xml` and `robots.txt` dynamic generation.

---

## 5. Non-Functional & Success Metrics
- **Performance**: 90+ Lighthouse score on mobile and 95+ on desktop.
- **Accessibility**: WCAG 2.1 AA compliance (proper contrast ratios, full keyboard focus outlines, ARIA roles, semantic landmarks).
- **Core Web Vitals**:
  - LCP (Largest Contentful Paint) < 2.0s
  - CLS (Cumulative Layout Shift) < 0.05
  - FID / INP (Interaction to Next Paint) < 100ms
- **Responsiveness**: Pixel-perfect layout from 320px mobile screens to 4K ultra-wide displays.
- **Zero Console Errors**: Clean Next.js build with zero hydration mismatches.

