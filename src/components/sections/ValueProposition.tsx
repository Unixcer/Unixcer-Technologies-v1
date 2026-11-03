import * as React from 'react';
import { Layers, Bot, Users2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function ValueProposition() {
  const pillars = [
    {
      icon: Layers,
      color: 'blue',
      eyebrow: 'ARCHITECTURAL RIGOR',
      title: 'Engineered for Scale, Not Just Initial Launch',
      description:
        'We decouple complex systems into modular, strictly typed codebases with automated CI/CD and comprehensive unit test coverage. Your software runs fast on Day 1 and stays rock-solid when your user base scales 100x.',
      linkText: 'Explore Engineering Approach',
      linkHref: '/about',
    },
    {
      icon: Bot,
      color: 'purple',
      eyebrow: 'APPLIED AI & AUTOMATION',
      title: 'Practical Intelligence Tied to Business Revenue',
      description:
        'We move beyond generic API wrappers to build domain-bounded RAG pipelines, custom vector search stores, and autonomous task agents that integrate directly into your internal databases with enterprise data privacy.',
      linkText: 'Explore AI Capabilities',
      linkHref: '/services/ai-genai-solutions',
    },
    {
      icon: Users2,
      color: 'indigo',
      eyebrow: 'DIRECT SENIOR PARTNERSHIP',
      title: 'Work Directly with Senior Architects & Founders',
      description:
        'Zero layers of junior developers or non-technical account managers. You collaborate in rapid two-week agile sprints directly with hands-on systems architects who take personal ownership of your product success.',
      linkText: 'Meet The Leadership',
      linkHref: '/founders',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
          Why Unixcer Technologies
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          A High-Throughput Engineering Partner
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
          We bridge the gap between ambitious product vision and resilient, production-grade cloud architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="group relative rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-2 block">
                  {pillar.eyebrow}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-100 dark:border-white/5">
                <Link
                  href={pillar.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

