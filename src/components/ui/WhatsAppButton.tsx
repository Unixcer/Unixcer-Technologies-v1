'use client';

import * as React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export function WhatsAppButton() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Direct WhatsApp Chat with an Engineer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline font-semibold">Chat with Us</span>
      </a>
    </aside>
  );
}

