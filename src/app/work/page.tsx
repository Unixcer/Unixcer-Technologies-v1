import { constructMetadata } from '@/lib/seo';
import { projectsData } from '@/data/projectsData';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Engineering Portfolio & Case Studies',
  description:
    'Explore production case studies from Unixcer Technologies: real-time queuing systems, AI digital twin frameworks, and scalable geolocation web apps.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
          Engineering Portfolio
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Real Architectures. Measurable Impact.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          We build robust digital solutions that automate operations, eliminate physical queues, and integrate applied intelligence. Explore our verified engineering case studies below.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <article
            key={project.slug}
            className="group rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 backdrop-blur-md p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1.5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                  Verified Case Study
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h2>

              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-4">
                {project.subtitle}
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                {project.summary}
              </p>

              {/* Outcomes list */}
              <div className="space-y-2 mb-6">
                {project.outcomes.map((outcome, oIdx) => (
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
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}

