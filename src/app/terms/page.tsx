import { constructMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/siteConfig';

export const metadata = constructMetadata({
  title: 'Terms of Service',
  description: `Terms of service and engineering engagement principles for ${siteConfig.name}.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
      
      <div className="space-y-4 pb-8 border-b border-slate-200/80 dark:border-white/10">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Legal & Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="text-sm font-mono text-slate-500">
          Last Updated: November 2026 • Effective Immediately
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-8">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Engagement Framework</h2>
          <p>
            These Terms govern the software engineering, architectural consulting, and digital development services provided by {siteConfig.name}. Individual projects are executed under mutually signed Statements of Work (SOW) detailing scope, sprint milestones, deliverables, and payment schedules.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Intellectual Property & Code Ownership</h2>
          <p>
            Upon receipt of milestone payments as defined in the applicable SOW, <strong>100% of all intellectual property, source code, design systems, and documentation created specifically for the client is transferred exclusively to the client</strong>. {siteConfig.name} retains no proprietary claim or runtime licensing entitlement over custom client deliverables.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Warranty & Defect Remediation</h2>
          <p>
            Every custom platform shipped by {siteConfig.name} includes an initial 30-calendar-day warranty commencing on the official production deployment date. During this warranty window, our engineering team remediates any functional defects or regressions deviating from the agreed specification at zero additional cost.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Governing Jurisdiction</h2>
          <p>
            These terms and any resulting commercial contracts are governed by and construed in accordance with the laws of India, with exclusive jurisdiction in the courts of Solapur, Maharashtra.
          </p>
        </section>

      </div>

    </div>
  );
}

