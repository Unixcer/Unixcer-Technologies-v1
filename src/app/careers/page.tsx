import { constructMetadata } from '@/lib/seo';
import { Mail, MessageCircle, Sparkles, Terminal, Code2, Users2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export const metadata = constructMetadata({
  title: 'Careers & Engineering Internships',
  description:
    'Join Unixcer Technologies: build high-throughput full-stack systems, modern AI applications, and distributed microservices with zero bureaucracy.',
  path: '/careers',
});

export default function CareersPage() {
  const pillars = [
    {
      icon: Terminal,
      title: 'Code Over Bureaucracy',
      description:
        'We don’t believe in endless alignment meetings or bloated documentation. We measure engineering excellence by working, strictly typed software and clean architecture.',
    },
    {
      icon: Sparkles,
      title: 'Applied AI & Modern Stacks',
      description:
        'Active immersion in Next.js 15, Spring Boot, Python, LangChain, PyTorch, and Docker. You work on real client problems, not obsolete legacy tech.',
    },
    {
      icon: Users2,
      title: 'Direct Founder Mentorship',
      description:
        'Collaborate side-by-side with our technical founders. You learn how to architect distributed backends, negotiate client milestones, and ship to production.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
          Join The Collective
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Build What's Next with Unixcer Technologies
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          We are an agile collective of curious software engineers, architects, and product designers committed to engineering discipline, continuous growth, and craft.
        </p>
      </div>

      {/* Culture Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 backdrop-blur-md p-8 sm:p-10 space-y-4 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Status Box: Proactive Internship / Hiring */}
      <div className="rounded-3xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
          Currently Curating Future Roles & Internships
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          No Active Vacancies Today, But We Always Welcome High-Caliber Builders
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Are you passionate about full-stack Java/React engineering, Python data science pipelines, or modern AI agents? Drop your GitHub portfolio or resume for consideration in our upcoming project cohorts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={`mailto:${siteConfig.contact.email}?subject=Proactive%20Application%20-%20Engineering%20Role`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Submit Resume via Email</span>
          </a>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}

