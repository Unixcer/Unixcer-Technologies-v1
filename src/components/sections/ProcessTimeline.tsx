import * as React from 'react';
import { Search, PenTool, Code2, Rocket, HeartHandshake } from 'lucide-react';

export function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      icon: Search,
      phase: 'DISCOVER & MAP',
      headline: 'Architectural Discovery',
      description:
        'We unpack your business requirements, evaluate existing data schemas, map user personas, and establish non-negotiable performance benchmarks to produce a comprehensive technical specification.',
    },
    {
      num: '02',
      icon: PenTool,
      phase: 'DESIGN & PROTOTYPE',
      headline: 'Component Architecture',
      description:
        'We build interactive high-fidelity prototypes in Figma, define tokenized Tailwind design systems, and model normalized relational/vector databases before writing production code.',
    },
    {
      num: '03',
      icon: Code2,
      phase: 'AGILE ENGINEERING',
      headline: 'Two-Week Sprints',
      description:
        'Iterative development with strict TypeScript typing, continuous integration (CI) test suites, and live staging previews where you test new capabilities every two weeks.',
    },
    {
      num: '04',
      icon: Rocket,
      phase: 'DEPLOY & HARDEN',
      headline: 'Zero-Downtime Rollout',
      description:
        'Vulnerability scanning, automated load testing, WCAG AA accessibility compliance verification, and zero-downtime deployment on resilient cloud edge networks.',
    },
    {
      num: '05',
      icon: HeartHandshake,
      phase: 'EVOLVE & SUPPORT',
      headline: 'Continuous Scaling',
      description:
        'Initial 30-day post-launch warranty followed by proactive observability telemetry, automated dependency upgrades, and iterative feature scaling as your business expands.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
          Proven Methodology
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          The 5-Stage Engineering Lifecycle
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
          A transparent, predictable process engineered to eliminate surprises and technical debt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="relative rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 backdrop-blur-md p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-black text-slate-300 dark:text-slate-700 group-hover:text-blue-500 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 block">
                  {step.phase}
                </span>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  {step.headline}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

