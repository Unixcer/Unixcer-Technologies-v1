import { constructMetadata } from '@/lib/seo';
import { foundersData } from '@/data/foundersData';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export const metadata = constructMetadata({
  title: 'Engineering Leadership & Founders',
  description:
    'Meet the systems architects and full-stack engineering leadership behind Unixcer Technologies: Murlikrishna Naral and Saiprasad Gortyal.',
  path: '/founders',
});

export default function FoundersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
          Technical Leadership
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Active Architects, Not Middle Managers
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          At Unixcer Technologies, our founders are hands-on engineers who write production code, design distributed schemas, and directly guide every client engagement.
        </p>
      </div>

      {/* Founder Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {foundersData.map((founder) => (
          <article
            key={founder.id}
            className="group relative rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 backdrop-blur-md p-8 sm:p-12 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1.5"
          >
            <div>
              {/* Top Accent & Role */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  {founder.role}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span>{founder.location}</span>
                </div>
              </div>

              {/* Name */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                {founder.name}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-normal">
                {founder.bio}
              </p>

              {/* Core Tech Stack */}
              <div className="mb-8 space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Core Engineering Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {founder.coreSkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Extended Technical Arsenal */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Extended Technical Arsenal
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {founder.otherSkills.map((skill, oIdx) => (
                    <span
                      key={oIdx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Strip */}
            <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={founder.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${founder.name} GitHub`}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={founder.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${founder.name} LinkedIn`}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
              >
                <span>Collaborate Directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}

