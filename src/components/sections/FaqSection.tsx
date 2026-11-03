'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '@/data/faqData';

export function FaqSection() {
  const [openId, setOpenId] = React.useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
          Frequently Asked Questions
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Straightforward Answers
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base">
          Transparent terms on intellectual property, agile milestones, pricing structures, and post-launch maintenance.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-[#0e1420]/70 backdrop-blur-md overflow-hidden transition-all duration-200 shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

