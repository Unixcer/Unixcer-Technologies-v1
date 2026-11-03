import * as React from 'react';

export function TechStackMarquee() {
  const technologies = [
    { name: 'Next.js 15', category: 'Frontend / Edge' },
    { name: 'React 19', category: 'UI Library' },
    { name: 'TypeScript', category: 'Type Safety' },
    { name: 'Java Spring Boot', category: 'Enterprise Backend' },
    { name: 'Python & FastAPI', category: 'AI Inference' },
    { name: 'PostgreSQL', category: 'Relational DB' },
    { name: 'Redis', category: 'Distributed Cache' },
    { name: 'LangChain & LlamaIndex', category: 'RAG Framework' },
    { name: 'Docker & Kubernetes', category: 'Containerization' },
    { name: 'Apache Kafka', category: 'Event Streaming' },
    { name: 'Tailwind CSS', category: 'Design Tokens' },
    { name: 'AWS & GCP', category: 'Cloud Infrastructure' },
  ];

  return (
    <section className="border-y border-slate-200/80 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.01] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-xs font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
          Battle-Tested Technical Stack
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-6xl mx-auto px-4">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white dark:bg-[#0e1420] border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-blue-500/40 hover:scale-105 transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
              {tech.name}
            </span>
            <span className="hidden sm:inline text-[10px] font-mono text-slate-400 dark:text-slate-500 border-l border-slate-200 dark:border-white/10 pl-2">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

