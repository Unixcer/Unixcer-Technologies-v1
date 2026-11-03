import { constructMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/siteConfig';

export const metadata = constructMetadata({
  title: 'Privacy Policy',
  description: `Privacy policy and client data handling practices for ${siteConfig.name}.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
      
      <div className="space-y-4 pb-8 border-b border-slate-200/80 dark:border-white/10">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Legal & Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-sm font-mono text-slate-500">
          Last Updated: November 2026 • Effective Immediately
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-8">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Introduction</h2>
          <p>
            {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal information you share with us through our website ({siteConfig.baseUrl}) and communication channels.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
          <p>We collect only the information voluntarily provided when you submit a project inquiry or contact us:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Contact Coordinates</strong>: Full name, business email address, and telephone/WhatsApp number.</li>
            <li><strong>Project Specifications</strong>: Scope descriptions, estimated budgets, launch timelines, and technical requirements.</li>
            <li><strong>Technical Telemetry</strong>: Basic non-identifying telemetry (browser user agent, referrer URL) strictly for security and site reliability.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. How We Use Your Information</h2>
          <p>Your information is used exclusively to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Deliver technical feasibility evaluations, architectural blueprints, and milestone quotes.</li>
            <li>Coordinate discovery sessions and respond to direct technical inquiries.</li>
            <li>Fulfil contractual milestone commitments and provide post-launch maintenance.</li>
          </ul>
          <p className="font-semibold text-slate-900 dark:text-white">
            We do not sell, rent, monetize, or disclose your contact information or proprietary project briefs to third-party advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Confidentiality & Non-Disclosure</h2>
          <p>
            All architectural diagrams, data models, source code repositories, and commercial concepts exchanged during discovery or development are treated as strictly confidential. Mutual Non-Disclosure Agreements (NDAs) are gladly executed upon request prior to detailed scoping.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Direct Inquiries & Data Rights</h2>
          <p>
            If you wish to update, review, or delete your contact records from our inquiry archives, please email our leadership team at{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-500 underline">
              {siteConfig.contact.email}
            </a>.
          </p>
        </section>

      </div>

    </div>
  );
}

