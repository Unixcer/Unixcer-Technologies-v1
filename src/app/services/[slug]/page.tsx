import { notFound } from 'next/navigation';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { servicesData } from '@/data/servicesData';
import { ArrowLeft, ArrowRight, CheckCircle2, PackageCheck, AlertCircle, Sparkles, Globe, Smartphone, Server, Bot, Cloud, Palette } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Server,
  Bot,
  Cloud,
  Palette,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return constructMetadata({
    title: `${service.title} — Services`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || Globe;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
      
      {/* Back button */}
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 hover:text-blue-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Services Catalog</span>
      </Link>

      {/* Hero Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              DISCIPLINE SPECIFICATION
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {service.title}
            </h1>
          </div>
        </div>

        <p className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 leading-relaxed">
          {service.tagline}
        </p>

        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {service.summary}
        </p>
      </div>

      {/* Problem vs Solution Split Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-3xl bg-rose-500/5 border border-rose-500/20 p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-500">
            <AlertCircle className="w-4 h-4" />
            <span>The Industry Bottleneck</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Why Legacy Methods Fail
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {service.problem}
          </p>
        </div>

        <div className="rounded-3xl bg-emerald-500/5 border border-emerald-500/20 p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-500">
            <Sparkles className="w-4 h-4" />
            <span>The Unixcer Standard</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Our Architectural Approach
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {service.solution}
          </p>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Core Capabilities & Specializations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Strip */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
          Technologies Used for this Service
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {service.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-2xl text-xs font-mono font-bold bg-white dark:bg-[#0e1420] text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Client Deliverables */}
      <div className="rounded-3xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <PackageCheck className="w-4 h-4" />
          <span>Handover Specifications</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Concrete Deliverables You Receive
        </h3>
        <ul className="space-y-3">
          {service.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Closing CTA */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">
            Ready to Scope Your {service.shortTitle} Project?
          </h3>
          <p className="text-sm text-blue-100 max-w-xl">
            Schedule a technical consultation directly with our lead architects to receive an architectural estimate.
          </p>
        </div>
        <Link
          href={`/contact?service=${service.slug}#quote`}
          className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 bg-white hover:bg-slate-50 transition-colors shadow-md shrink-0"
        >
          <span>Request a Quote</span>
        </Link>
      </div>

    </div>
  );
}

