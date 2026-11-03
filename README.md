# 🚀 Unixcer Technologies — Official Platform

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![React Three Fiber](https://img.shields.io/badge/Three.js-R3F-black?style=flat-square&logo=three.js)](https://r3f.docs.pmnd.rs/)
[![License](https://img.shields.io/badge/License-Proprietary-cyan?style=flat-square)](#)
[![Live Site](https://img.shields.io/badge/Live-unixcertech.vercel.app-emerald?style=flat-square&logo=vercel)](https://unixcertech.vercel.app)

The official high-performance, modern company platform for **Unixcer Technologies** — an IT startup delivering full-stack web development, cross-platform mobile apps, cloud-native microservices, AI/GenAI agent workflows, DevOps infrastructure, and human-centered UI/UX design.

---

## 📖 For Co-Founders & Contributors: Getting Started

If you are accustomed to Vite or traditional React single-page apps (SPAs), welcome to **Next.js 15 (App Router)**! 

Next.js provides **Server-Side Generation (SSG)**, built-in SEO optimization, automated image handling, and backend **Route Handlers** (API endpoints) in a unified TypeScript codebase.

### ⚙️ Prerequisites
Ensure your machine has:
- **Node.js**: `v18.18.0` or higher (`v20.x` LTS recommended) — Check with `node -v`
- **npm**: `v9.x` or higher — Check with `npm -v`
- **Git**

---

### 💻 Command Reference

Run all commands from inside the project directory:

```bash
cd Unixcer-Technologies-v1
```

| Action | Command | What it does |
| :--- | :--- | :--- |
| **Install Packages** | `npm install` | Installs all required packages and dependencies. |
| **Start Local Dev Server** | `npm run dev` | Boots the local development server at **`http://localhost:3000`** with Fast Refresh. |
| **Run Typecheck & Build** | `npm run build` | Compiles the entire site, verifies TypeScript types, and pre-renders all 29 static pages + 3 API routes. |
| **Run Production Server** | `npm run start` | Serves the compiled production build locally on port 3000. |
| **Run Linter** | `npm run lint` | Checks code formatting and catches syntax/import errors. |

> 💡 **Dev Tip:** Next.js uses port **`3000`** by default (unlike Vite's 5173). Visit [http://localhost:3000](http://localhost:3000) in your browser once `npm run dev` is running.

---

## ✨ Features & Architecture Built Into This Project

This codebase was engineered to feel like a top-tier software company while adhering strictly to a **$0 budget** (free hosting on Vercel + free-tier APIs).

### 1. 🌐 Single Source of Truth (SSOT) Architecture
* **Change it once, update everywhere**: All company information (brand name, email, Solapur phone numbers, address, social links, founder bios, and services) is centrally maintained in:
  - `src/config/siteConfig.ts`
  - `src/data/*.ts`
* You **never** need to search through JSX/TSX files to change phone numbers or text.

### 2. 🎨 Obsidian Dark & Daylight Slate Dual Theme
* **Dark-First Aesthetic**: Obsidian canvas (`#080b11`), slate borders, and electric cyan/emerald accents.
* **Light Mode**: Crisp Daylight Slate (`#f8fafc`) with deep charcoal typography.
* **System Default**: Defaults automatically to the user's OS preference (`system`), switchable via the navbar theme toggle.

### 3. 🪐 Interactive 3D Neural Lattice Hero (React Three Fiber)
* Floating procedural 3D geometric network cluster built in `src/components/3d/NeuralLattice.tsx`.
* **Zero external 3D model downloads** (0 MB model payload; procedural Three.js buffers).
* Mouse cursor parallax reactivity.
* **Low-Power Capping**: Device Pixel Ratio (DPR) is clamped to `1.5` to prevent battery drain and thermal throttling.
* **Graceful Fallbacks**: Mobile screens (`< 768px`) and devices requesting `prefers-reduced-motion` cleanly render a lightweight SVG/CSS animated mesh fallback (`HeroFallback.tsx`).

### 4. 💼 Complete 32-Route Architecture (100% Pre-rendered SSG)
* **Core Pages**:
  - `/` — Animated Hero with 3D canvas, Value Proposition, Services Grid, Interactive Process Timeline, Tech Stack Marquee, Featured Work, FAQ accordion, and Final CTA Banner.
  - `/about` — Mission, vision, company values, and Solapur engineering coordinates.
  - `/founders` — Executive profiles for Murlikrishna Naral & Saiprasad Gortyal (preserves existing live route).
  - `/careers` — Open roles, internship tracks, and values.
  - `/privacy` & `/terms` — Trust and compliance documentation.
* **Services Engine (6 dedicated subpages)**:
  - `/services` (Catalog)
  - `/services/web-development`
  - `/services/mobile-apps`
  - `/services/backend-microservices`
  - `/services/ai-genai-solutions`
  - `/services/cloud-devops`
  - `/services/ui-ux-design`
* **Real Portfolio Work**:
  - `/work`
  - `/work/ezturn` — Real-world project case study.
  - `/work/digiu` — Real-world project case study.
  - `/work/sharemyride` — Real-world project case study.
  - *(Legacy `/projects` route automatically 308-redirects to `/work`)*.
* **Technical Blog (2 starter articles)**:
  - `/blog`
  - `/blog/building-production-ready-llm-applications`
  - `/blog/microservices-architecture-best-practices`

### 5. 🎯 Lead Generation & Communications Suite
* **Tabbed Inquiries & "Request a Quote" Calculator** (`/contact`):
  - Interactive budget brackets (`<$2,500`, `$2,500 - $5,000`, `$5,000 - $15,000`, `$15,000+`).
  - Pre-selected service via URL parameter (e.g. `/contact?service=ai-genai-solutions#quote`).
  - Strict Zod schema validation (`src/lib/validation.ts`).
  - Hidden honeypot anti-spam defense (`website` field).
* **Direct Communication**:
  - **WhatsApp Live**: Floating click-to-chat button with pre-filled greeting targeting `+91 91754 82748`.
  - **Cal.com Integration**: Direct 15/30-minute discovery booking.
* **Free-Tier AI Client Assistant** (`AIAssistantModal.tsx`):
  - Floating assistant modal providing instant responses on services, turnaround times, and pricing guidance with **0 API cost**.
* **Edge Route Handlers**:
  - `POST /api/quote` & `POST /api/contact` — Dispatches notification emails via Resend (with console logging fallback).
  - `POST /api/newsletter` — Newsletter subscription handler.
  - Sliding-window IP rate limiting (`src/lib/rateLimit.ts` — max 6 requests/minute/IP).

### 6. 🚀 SEO & Security Headers
* Dynamic XML Sitemap (`/sitemap.xml`) generated automatically at build time.
* Dynamic Robots configuration (`/robots.txt`).
* Schema.org JSON-LD `Organization` and `WebSite` metadata.
* Comprehensive HTTP security headers in `next.config.mjs` (HSTS, X-Frame-Options DENY, XSS-Protection, nosniff, Referrer-Policy).

---

## 📂 Project Directory Structure

```text
Unixcer-Technologies-v1/
├── docs/                       # Project specifications & architecture docs
│   ├── PRD.md                  # Product Requirements Document
│   ├── DESIGN.md               # Design tokens, palette & motion guidelines
│   ├── ARCHITECTURE.md         # Rendering strategy, data flow & security
│   ├── CONTENT.md              # All approved page copy & headlines
│   ├── TASKS.md                # Phase-by-phase completion checklist
│   └── DEPLOYMENT.md           # Vercel & custom domain DNS configuration
├── public/                     # Static files (images, icons, favicons)
│   ├── brand/                  # Logo SVGs & emblems
│   └── images/                 # Project & founder assets
├── src/
│   ├── app/                    # Next.js App Router (Pages & API Routes)
│   │   ├── api/                # Backend Edge Route Handlers
│   │   │   ├── contact/route.ts
│   │   │   ├── newsletter/route.ts
│   │   │   └── quote/route.ts
│   │   ├── about/page.tsx
│   │   ├── blog/               # Blog catalog + [slug] dynamic routes
│   │   ├── careers/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── founders/page.tsx
│   │   ├── services/           # Services catalog + [slug] dynamic routes
│   │   ├── work/               # Work portfolio + [slug] dynamic routes
│   │   ├── layout.tsx          # Root layout (Theme, Navbar, Footer, AI Modal)
│   │   ├── page.tsx            # Main Home page
│   │   ├── sitemap.ts          # Dynamic XML sitemap
│   │   └── robots.ts           # Dynamic robots.txt
│   ├── components/             # Reusable UI components
│   │   ├── 3d/                 # R3F Neural Lattice & fallback components
│   │   ├── layout/             # Navbar, Footer, WhatsApp floating button
│   │   ├── motion/             # Framer Motion scroll reveals & tilt cards
│   │   ├── sections/           # Modular Home page sections
│   │   └── ui/                 # Forms, modals, newsletter, AI assistant
│   ├── config/
│   │   └── siteConfig.ts       # ⭐️ SINGLE SOURCE OF TRUTH (All company data)
│   ├── data/                   # Structured data stores
│   │   ├── blogPosts.ts        # Blog articles
│   │   ├── faqData.ts          # Frequently Asked Questions
│   │   ├── foundersData.ts     # Murlikrishna & Saiprasad bios and socials
│   │   ├── projectsData.ts     # EzTurn, DigiU, ShareMyRide details
│   │   └── servicesData.ts     # 6 core services and deliverable specs
│   ├── lib/                    # Utilities, validation schemas, email dispatcher
│   └── types/                  # TypeScript interface definitions
├── next.config.mjs             # Next.js build config, redirects & security headers
├── package.json
└── tsconfig.json
```

---

## 🛠 How to Update Website Content (For Non-Engineers)

To update any content on the website, edit the corresponding file in `src/data/` or `src/config/`:

| What you want to change | File to edit |
| :--- | :--- |
| **Company Name, Phone, Email, Address, Socials** | [`src/config/siteConfig.ts`](src/config/siteConfig.ts) |
| **Founder Bios, Titles, or LinkedIn/GitHub Links** | [`src/data/foundersData.ts`](src/data/foundersData.ts) |
| **Projects / Portfolio Case Studies** | [`src/data/projectsData.ts`](src/data/projectsData.ts) |
| **Services, Offerings, or Deliverables** | [`src/data/servicesData.ts`](src/data/servicesData.ts) |
| **Add a New Blog Post** | [`src/data/blogPosts.ts`](src/data/blogPosts.ts) |
| **Add or Update FAQ Questions** | [`src/data/faqData.ts`](src/data/faqData.ts) |

---

## 🔐 Environment Variables

Create a `.env.local` file in the root for local testing (optional):

```env
# Base URL for canonical tags, sitemap, and Open Graph (No trailing slash)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Transactional email receiver for quote and contact submissions
CONTACT_RECEIVER_EMAIL=unixcertech.in@gmail.com

# Optional: Resend API key for sending live transactional emails (free tier at resend.com)
# When omitted, route handlers log submissions to the console and return success.
RESEND_API_KEY=
```

---

## 🚀 Deployment to Vercel

The website is currently deployed at:
**[https://unixcertech.vercel.app](https://unixcertech.vercel.app)**

### Automated Deployments
Every `git push origin main` triggers an automatic preview and production deployment on Vercel.

### Attaching a Custom Domain (e.g. `unixcer.com`)
When ready to attach your purchased custom domain:
1. Go to your **Vercel Project Dashboard** → **Settings** → **Domains**.
2. Add your domain (e.g., `unixcer.com`).
3. Add these two DNS records at your registrar:
   - **A Record**: `@` $\rightarrow$ `76.76.21.21`
   - **CNAME Record**: `www` $\rightarrow$ `cname.vercel-dns.com`
4. Set the Vercel Environment Variable:
   - `NEXT_PUBLIC_SITE_URL` = `https://www.unixcer.com`
5. Vercel automatically issues a free SSL/TLS certificate and redirects `unixcertech.vercel.app` to your new domain.

For full step-by-step details, consult [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

## 👥 Engineering & Leadership

- **Murlikrishna Naral** — Co-Founder & Technical Architect
- **Saiprasad Gortyal** — Co-Founder & Systems Strategist
- **Headquarters**: Solapur, Maharashtra, India
- **Inquiries**: [unixcertech.in@gmail.com](mailto:unixcertech.in@gmail.com) | +91 91754 82748 / +91 93713 23603

---

*Built with precision by the Unixcer Technologies Engineering Team.*
