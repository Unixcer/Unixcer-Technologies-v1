import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-blue-500/20">
        
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase">
            Start Your Next Sprint
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to Build Systems That Accelerate Your Growth?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Discuss your technical requirements directly with our lead architects. Receive an honest architectural roadmap, estimated milestones, and a transparent quote within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-100 shadow-xl hover:scale-105 transition-all"
            >
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Request a Project Quote</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-600/80 hover:bg-emerald-600 border border-emerald-400/30 shadow-lg hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-8 text-xs font-mono text-slate-400 flex flex-wrap justify-center gap-6">
            <span>✓ Zero Obligation Review</span>
            <span>✓ Mutual NDA on Request</span>
            <span>✓ 100% Code & IP Transfer</span>
          </div>
        </div>

      </div>
    </section>
  );
}

