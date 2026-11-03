import { constructMetadata } from '@/lib/seo';
import { servicesData } from '@/data/servicesData';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, Smartphone, Server, Bot, Cloud, Palette } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Server,
  Bot,
  Cloud,
  Palette,
};

export const metadata = constructMetadata({
  title: 'Engineering Disciplines & Services',
  description:
    'Comprehensive overview of Unixcer Technologies engineering capabilities: Web Development, Mobile Apps, Backend & Microservices, AI/GenAI Solutions, Cloud/DevOps, and UI/UX Design.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
          Capabilities Catalog
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Disciplined Engineering for High-Growth Ventures
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          We combine cutting-edge frameworks with rigorous software architecture. Every solution is delivered with strictly typed source code, automated CI/CD pipelines, and 100% intellectual property ownership transfer.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-16">
        {servicesData.map((service, idx) => {
          const Icon = iconMap[service.iconName] || Globe;
          return (
            <article
              key={service.slug}
              id={service.slug}
              className="rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 backdrop-blur-md p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Left Overview Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">
                        Discipline 0{idx + 1}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {service.summary}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Core Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md"
                    >
                      <span>Explore Deliverables & Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Problem & Capabilities Column */}
                <div className="lg:col-span-7 space-y-8 bg-slate-50/50 dark:bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-white/5">
                  
                  {/* Problem vs Solution */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 mb-1">
                        The Challenge We Solve
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {service.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500 mb-1">
                        Our Architectural Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {service.solution}
                      </p>
                    </div>
                  </div>

                  {/* Capabilities Checklist */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                      Key Client Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
}

