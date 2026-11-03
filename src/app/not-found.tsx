import Link from 'next/link';
import { Home, ArrowLeft, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-xl w-full text-center space-y-8">
        
        {/* Monospace Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-widest">
          <span>Error 404 • Resource Not Found</span>
        </div>

        {/* Big Glitch / Heading */}
        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            The architectural endpoint or page you requested does not exist or has been relocated.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-500/20"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/10 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Support</span>
          </Link>
        </div>

        {/* Helpful links */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500">
          <p className="mb-3 font-semibold text-slate-600 dark:text-slate-400">Popular Destinations:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="hover:text-blue-500 underline underline-offset-4">Services</Link>
            <Link href="/work" className="hover:text-blue-500 underline underline-offset-4">Case Studies</Link>
            <Link href="/founders" className="hover:text-blue-500 underline underline-offset-4">Founders</Link>
            <Link href="/contact" className="hover:text-blue-500 underline underline-offset-4">Request a Quote</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

