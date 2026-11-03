'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Cpu, RefreshCw, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { Hero3DContainer } from '@/components/3d/Hero3DContainer';
import { MotionFade } from '@/components/motion/MotionFade';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background ambient light orbs */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] overflow-hidden opacity-35 dark:opacity-20">
        <div className="absolute -top-[300px] left-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-[140px]" />
        <div className="absolute -top-[200px] right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical 2-Column Desktop Grid with 3D Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Text Column (7 cols) */}
          <MotionFade direction="up" className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10 backdrop-blur-md text-blue-700 dark:text-blue-300 text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span>Next-Generation Software Engineering Studio</span>
            </div>

            {/* Slogan Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Engineering the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                Intelligent Enterprise
              </span>{' '}
              with Speed & Precision.
            </h1>

            {/* Narrative Subtitle */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact#quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Case Studies</span>
              </Link>
            </div>

          </MotionFade>

          {/* Right 3D Column (5 cols) */}
          <MotionFade direction="up" delay={0.2} className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[460px] aspect-square rounded-3xl bg-slate-100/50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 p-2 shadow-2xl backdrop-blur-md">
              <Hero3DContainer />
            </div>
          </MotionFade>

        </div>

        {/* Trust Guarantees Strip */}
        <MotionFade direction="up" delay={0.3}>
          <div className="pt-10 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                <Cpu className="w-3.5 h-3.5" />
                <span>Architecture</span>
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                Zero Technical Debt
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>Ownership</span>
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                100% Code & IP Transfer
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Methodology</span>
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                Agile 2-Week Sprints
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Warranty</span>
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                30-Day Launch Guarantee
              </div>
            </div>
          </div>
        </MotionFade>

      </div>
    </section>
  );
}
