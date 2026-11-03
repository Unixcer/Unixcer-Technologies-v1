import * as React from 'react';
import Link from 'next/link';
import { Globe, Smartphone, Server, Bot, Cloud, Palette, ArrowRight } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { TiltCard } from '@/components/motion/TiltCard';
import { MotionFade } from '@/components/motion/MotionFade';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Server,
  Bot,
  Cloud,
  Palette,
};

export function ServicesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <MotionFade direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
            Core Disciplines
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Every solution is engineered with strict typing, clean design tokens, and high-availability cloud architecture.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors shrink-0"
        >
          <span>View All Service Specs</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </MotionFade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, idx) => {
          const IconComponent = iconMap[service.iconName] || Globe;
          return (
            <MotionFade key={service.slug} direction="up" delay={idx * 0.08}>
              <TiltCard className="h-full rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 backdrop-blur-md p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 font-bold">
                      SPEC 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal line-clamp-3">
                    {service.summary}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {service.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-full text-[10px] font-mono text-slate-400">
                        +{service.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>Explore Deliverables</span>
                    <ArrowRight className="w-4 h-4 transition-transform hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </MotionFade>
          );
        })}
      </div>
    </section>
  );
}
