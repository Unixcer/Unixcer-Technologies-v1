# Production Deployment & Domain Configuration Guide (DEPLOYMENT.md)

This guide provides end-to-end instructions for deploying the **Unixcer Technologies** platform on Vercel's zero-budget free tier, maintaining compatibility with the existing `https://unixcertech.vercel.app` URL, and subsequently binding a purchased custom domain with seamless 308 redirects and DNS records.

---

## 1. Zero-Budget Infrastructure Architecture

The entire stack is designed to operate 100% on free-tier services:
- **Hosting & Edge CDN**: Vercel Hobby Plan (\$0/month)
- **Transactional Email / Lead Notifications**: Resend Free Tier (3,000 emails/month, 100 emails/day)
- **Lead Discovery Scheduling**: Cal.com Free Tier or Calendly Free
- **Analytics & Observability**: Vercel Web Analytics & Speed Insights Free Tier
- **SSL / TLS Encryption**: Automated free certificates via Let's Encrypt / Vercel Edge

---

## 2. Environment Variables Configuration

The application relies on dynamic configuration to ensure that swapping domains requires **zero code changes**:

### 2.1. Required Environment Variables

| Variable Name | Required | Default / Staging Value | Production Value (Custom Domain) | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | **Yes** | `https://unixcertech.vercel.app` | `https://unixcer.com` (or purchased domain) | Drives canonical meta tags, XML sitemap generation, OpenGraph URLs, and structured data |
| `RESEND_API_KEY` | Optional | *(Empty in local dev)* | `re_123456789...` | API key from [Resend.com](https://resend.com) for sending form lead notification emails |
| `CONTACT_RECEIVER_EMAIL` | Optional | `unixcertech.in@gmail.com` | `unixcertech.in@gmail.com` | Email address where form inquiries and project quote requests are dispatched |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Optional | *(Leave blank to bypass)* | Cloudflare Turnstile public key | Client-side CAPTCHA spam protection |
| `TURNSTILE_SECRET_KEY` | Optional | *(Leave blank to bypass)* | Cloudflare Turnstile secret | Server-side token verification |

> **Development Mode Behavior**: When `RESEND_API_KEY` is not provided, the edge route handlers (`/api/contact` and `/api/quote`) will log the submitted form payloads to the console and return a successful JSON response (`{ success: true, simulated: true }`) so that local testing never fails.

---

## 3. Scenario A: Running on `unixcertech.vercel.app` (Current Live Site)

Follow these steps to deploy the modernized Next.js application while preserving the currently live Vercel URL and all existing routes (`/founders`, `/projects` redirected to `/work`, etc.):

### Step 1: Connect GitHub Repository to Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** → **Project**.
3. Select your repository: `Unixcer/Unixcer-Technologies-v1` (or your root repository).
4. Configure Project Settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or the folder where the Next.js app lives)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### Step 2: Configure Environment Variables in Vercel
1. Expand the **Environment Variables** section.
2. Add:
   - `NEXT_PUBLIC_SITE_URL` = `https://unixcertech.vercel.app`
   - `CONTACT_RECEIVER_EMAIL` = `unixcertech.in@gmail.com`
   - `RESEND_API_KEY` = `[Your Resend API key if created]`
3. Click **Deploy**.

### Step 3: Verify Existing Routes
Once the build completes, test that all existing bookmarks remain fully functional:
- `https://unixcertech.vercel.app/` (New interactive Next.js home)
- `https://unixcertech.vercel.app/founders` (Maintains founder profiles)
- `https://unixcertech.vercel.app/projects` (Redirects automatically or maps to `/work`)
- `https://unixcertech.vercel.app/sitemap.xml` (Dynamically generated)

---

## 4. Scenario B: Attaching a Purchased Custom Domain

When you acquire a custom domain (e.g., `unixcer.com` or `unixcertech.com`) from any registrar (GoDaddy, Namecheap, Google Domains / Squarespace, Hostinger, Cloudflare), follow this exact protocol to attach it without downtime.

### Step 1: Add Custom Domain in Vercel
1. In the Vercel Dashboard, open your project.
2. Navigate to **Settings** → **Domains**.
3. In the input box, enter your purchased domain:
   - Example: `unixcer.com`
4. Click **Add**.
5. Vercel will prompt you to add both the apex domain (`unixcer.com`) and the subdomain (`www.unixcer.com`). Select the recommended option:
   - **Redirect `unixcer.com` to `www.unixcer.com`** (or vice versa according to preference).

### Step 2: Configure DNS Records at Your Domain Registrar
Log in to your domain registrar's DNS Management dashboard and add the following two authoritative records:

| Record Type | Name / Host | Target / Value | TTL | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` (or leave empty) | `76.76.21.21` | Automatic / 300s | Points apex domain to Vercel's global Anycast IP |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Automatic / 300s | Directs www traffic to Vercel's DNS router |

> **Cloudflare DNS Note**: If managing DNS via Cloudflare, ensure the Proxy status is set to **DNS Only** (Grey Cloud) during initial certificate issuance, or configure SSL/TLS encryption mode to **Full (Strict)**.

### Step 3: Update `NEXT_PUBLIC_SITE_URL` in Vercel
1. In Vercel, navigate to **Settings** → **Environment Variables**.
2. Locate `NEXT_PUBLIC_SITE_URL`.
3. Update its value from `https://unixcertech.vercel.app` to your new production domain:
   - Example: `https://www.unixcer.com`
4. Trigger a redeploy (Go to **Deployments** → Click three dots on the latest commit → **Redeploy**).

### Step 4: Automatic Vercel 308 Redirects
- Once the custom domain is active, Vercel automatically routes the legacy `unixcertech.vercel.app` URL to your custom domain with a `308 Permanent Redirect`.
- All incoming links and search engine rankings will be preserved and redirected seamlessly.

---

## 5. Free Transactional Email Setup with Resend

To receive email notifications whenever a prospect fills out the **Contact Form** or **Request a Quote** calculator:

1. Sign up for a free account at [Resend.com](https://resend.com).
2. Go to **API Keys** → Click **Create API Key** (Permissions: Full Access).
3. Copy the key (format: `re_xxxxxxxxxxxx`).
4. In your Vercel Project Settings, add `RESEND_API_KEY = re_xxxxxxxxxxxx`.
5. *(Optional for custom domain)*: In Resend, go to **Domains** → Click **Add Domain** (e.g. `mail.unixcer.com`), add the 3 DKIM/SPF DNS records provided by Resend to verify your domain. This allows outgoing emails to originate from `inquiries@unixcer.com` rather than `onboarding@resend.dev`.

---

## 6. Pre-Launch Quality & Verification Checklist

Before publishing the final site to clients or public directories, complete this verification checklist:

### 6.1. Single Source of Truth Audit
- [ ] Changing `name` in `src/config/siteConfig.ts` correctly updates title tags, navbar, footer, OpenGraph, and JSON-LD schema.
- [ ] Phone numbers (`+91 91754 82748`, `+91 93713 23603`) and email (`unixcertech.in@gmail.com`) display accurately.
- [ ] Solapur, Maharashtra address displays correctly in footer and structured data.

### 6.2. Visual & Theming Audit
- [ ] Dark mode renders with obsidian canvas (`#080B11`) and high legibility.
- [ ] Light mode renders with crisp daylight slate (`#F8FAFC`) and high contrast.
- [ ] System theme mode correctly matches OS preferences on initial load.
- [ ] Theme toggle seamlessly switches between System, Dark, and Light without page flicker.

### 6.3. Interactive 3D & Performance
- [ ] Hero 3D scene loads smoothly on desktop at 60fps.
- [ ] Device pixel ratio (DPR) is capped at 1.5 to prevent GPU thermal throttling.
- [ ] Mobile devices (< 768px) and devices requesting `prefers-reduced-motion` cleanly display the lightweight animated gradient/SVG fallback.
- [ ] Mobile Lighthouse audit yields a score of 90+ on Performance, Accessibility, Best Practices, and SEO.

### 6.4. Functional Testing
- [ ] Navigation links smoothly route to all pages: Home, Services, Work, Founders, About, Blog, Careers, Contact, Privacy, Terms.
- [ ] Contact form validates inputs (name, email, message length) with clear visual error states.
- [ ] "Request a Quote" form submits service type, budget bracket, timeline, and description.
- [ ] WhatsApp button opens direct WhatsApp chat (`wa.me/919175482748`) with pre-filled message.
- [ ] Custom 404 page displays gracefully when navigating to invalid URLs.

### 6.5. SEO & Social Previews
- [ ] OpenGraph image (`/og-image.png`) resolves properly on WhatsApp, LinkedIn, and Twitter preview tools.
- [ ] Dynamic `sitemap.xml` lists all core pages and dynamic service/work/blog slugs.
- [ ] Dynamic `robots.txt` disallows `/api/` and links to `/sitemap.xml`.
- [ ] Google Rich Results test validates JSON-LD `Organization` schema.

