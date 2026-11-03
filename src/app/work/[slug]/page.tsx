import { notFound } from 'next/navigation';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { projectsData } from '@/data/projectsData';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Sparkles, Layers, ExternalLink } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.title} — Case Study`,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
      
      {/* Back button */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 hover:text-blue-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Case Studies</span>
      </Link>

      {/* Header */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
          {project.category}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 leading-relaxed">
          {project.subtitle}
        </p>

        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Challenge vs Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-3xl bg-rose-500/5 border border-rose-500/20 p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-500">
            <AlertCircle className="w-4 h-4" />
            <span>The Challenge</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Operational Roadblocks
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.challenge}
          </p>
        </div>

        <div className="rounded-3xl bg-emerald-500/5 border border-emerald-500/20 p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-500">
            <Sparkles className="w-4 h-4" />
            <span>The Unixcer Architecture</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Engineered Solution
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Measured Impact & Outcomes */}
      <div className="rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Measured Outcomes & System Impact
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.outcomes.map((outcome, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
          Architecture & Technology Stack
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-2xl text-xs font-mono font-bold bg-white dark:bg-[#0e1420] text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div className="rounded-3xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Layers className="w-4 h-4" />
          <span>Core Deliverables</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          System Artifacts Built
        </h3>
        <ul className="space-y-3">
          {project.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Box */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">
            Have a Similar Problem to Solve?
          </h3>
          <p className="text-sm text-blue-100 max-w-xl">
            Let's discuss how we can architect a high-throughput, low-maintenance platform for your business.
          </p>
        </div>
        <Link
          href="/contact#quote"
          className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 bg-white hover:bg-slate-50 transition-colors shadow-md shrink-0"
        >
          <span>Request a Project Quote</span>
        </Link>
      </div>

    </div>
  );
}

