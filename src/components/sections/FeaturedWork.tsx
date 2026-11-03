import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import { TiltCard } from '@/components/motion/TiltCard';
import { MotionFade } from '@/components/motion/MotionFade';

export function FeaturedWork() {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <MotionFade direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
            Proven Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real architectural challenges solved with modern code, scalable databases, and applied AI.
          </p>
        </div>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors shrink-0"
        >
          <span>View All Case Studies</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </MotionFade>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featured.map((project, idx) => (
          <MotionFade key={project.slug} direction="up" delay={idx * 0.1}>
            <TiltCard className="h-full rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 backdrop-blur-md p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                    Verified Case Study
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                  {project.summary}
                </p>

                {/* Key Outcome Highlights */}
                <div className="space-y-2 mb-6">
                  {project.outcomes.slice(0, 2).map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Read Full Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform hover:translate-x-1" />
                </Link>
              </div>
            </TiltCard>
          </MotionFade>
        ))}
      </div>
    </section>
  );
}
