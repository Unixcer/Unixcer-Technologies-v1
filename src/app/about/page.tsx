import { constructMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Shield, Sparkles, Code2, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export const metadata = constructMetadata({
  title: 'About Our Engineering Culture',
  description:
    'Learn about Unixcer Technologies: our architectural principles, engineering manifesto, and commitment to zero technical debt.',
  path: '/about',
});

export default function AboutPage() {
  const principles = [
    {
      icon: Code2,
      title: 'Craft Over Bureaucracy',
      description:
        'We believe superior software is created by skilled engineers writing strictly typed, well-architected code, not by layers of non-technical project coordinators.',
    },
    {
      icon: Shield,
      title: '100% Code & IP Transfer',
      description:
        'You own everything we build for you from the ground up: repository commits, infrastructure scripts, and design tokens. Zero proprietary vendor lock-in.',
    },
    {
      icon: Sparkles,
      title: 'Pragmatic AI Integration',
      description:
        'We do not chase transient AI hype. We build robust, domain-bounded machine learning and RAG systems that demonstrably automate real business workflows.',
    },
    {
      icon: Users,
      title: 'Radical Engineering Transparency',
      description:
        'Weekly video demonstrations, accessible GitHub PRs, clear task tracking, and direct Slack/WhatsApp communication channels with your lead engineers.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
      
      {/* Header */}
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
          About {siteConfig.name}
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          We Build Digital Systems That Last.
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          Founded in Solapur, Maharashtra, Unixcer Technologies was established on a singular premise: emerging startups and scaling enterprises deserve Silicon Valley grade engineering without agency bureaucracy or inflated overhead.
        </p>
      </div>

      {/* Manifesto Box */}
      <div className="rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white p-8 sm:p-14 lg:p-16 border border-blue-500/20 shadow-2xl space-y-6">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-400">
          The Engineering Manifesto
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold leading-snug max-w-3xl">
          "Software architecture should be resilient, transparent, and built to withstand 100x user growth from Day 1."
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
          Too many technology consultancies prioritize billable hours over architectural longevity. At Unixcer Technologies, we measure success by the performance benchmarks of the software we ship: sub-second load times, mathematical accessibility, zero regression bugs, and operational autonomy for our clients.
        </p>
      </div>

      {/* 4 Core Principles */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Our Core Operating Principles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            How we maintain unmatched engineering standards across every engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 backdrop-blur-md p-8 sm:p-10 space-y-4 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {principle.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Closing Callout */}
      <div className="rounded-3xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Looking for a Dedicated Engineering Partner?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Meet our technical founders or schedule a discovery session to evaluate your product roadmap.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0">
          <Link
            href="/founders"
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-white dark:bg-[#0e1420] border border-slate-200 dark:border-white/10 shadow-sm hover:bg-slate-50 transition-colors"
          >
            <span>Meet The Founders</span>
          </Link>
          <Link
            href="/contact#quote"
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md inline-flex items-center gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}

