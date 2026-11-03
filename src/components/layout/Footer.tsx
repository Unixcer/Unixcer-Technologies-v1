import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { NewsletterForm } from '@/components/ui/NewsletterForm';

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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070b14] text-slate-300 border-t border-slate-800/80 overflow-hidden">
      {/* Decorative gradient glow at top of footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 p-1 flex items-center justify-center">
                <Image
                  src="/brand/logo.png"
                  alt={`${siteConfig.name} logo`}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                {siteConfig.shortName.toUpperCase()}
                <span className="text-blue-500 ml-1">.</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.tagline}. High-availability web platforms, distributed microservices, and bespoke AI/GenAI solutions built with architectural precision.
            </p>

            <div className="pt-2 max-w-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Engineering Dispatches
              </span>
              <NewsletterForm />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/50 text-emerald-400 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Engineering Disciplines */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-xs text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Coordinates */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white mb-4">
              Contact
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{siteConfig.contact.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <div className="flex flex-col">
                <a href={`tel:${siteConfig.contact.phonePrimary}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phonePrimary}
                </a>
                <a href={`tel:${siteConfig.contact.phoneSecondary}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phoneSecondary}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors truncate">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Zero vendor lock-in.
          </p>

          <div className="flex items-center gap-6">
            {siteConfig.footerLegal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-slate-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
