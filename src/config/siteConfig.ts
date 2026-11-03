import { SiteConfig } from '@/types';

/**
 * SINGLE SOURCE OF TRUTH (SSOT) FOR UNIXCER TECHNOLOGIES
 * 
 * Update your company name, brand aliases, contact information,
 * social links, or URLs here. Every component, metadata generator,
 * OpenGraph tag, JSON-LD schema, footer, and navigation menu
 * consumes from this configuration.
 */
export const siteConfig: SiteConfig = {
  // Brand Identity
  name: 'Unixcer Technologies',
  shortName: 'Unixcer',
  legalName: 'Unixcer Technologies',
  tagline: 'Engineering the Intelligent Enterprise',
  description:
    'Unixcer Technologies builds high-availability web applications, scalable backend microservices, modern mobile apps, and enterprise AI/GenAI solutions with production-grade engineering.',
  
  // Dynamic Base URL - Controlled via environment variable for zero-friction domain swaps
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://unixcertech.vercel.app',

  // Contact Details
  contact: {
    phonePrimary: '+91 91754 82748',
    phoneSecondary: '+91 93713 23603',
    email: 'unixcertech.in@gmail.com',
    address: 'Unixcer Technologies, Solapur, Maharashtra, India - 413001',
    whatsappNumber: '919175482748',
    whatsappUrl:
      'https://wa.me/919175482748?text=Hello%20Unixcer%20Technologies,%20I%20would%20like%20to%20discuss%20a%20project.',
    calComUrl: 'https://cal.com/unixcer/discovery', // [REPLACE: Optional booking link]
    officeHours: 'Mon - Sat: 9:30 AM - 7:30 PM IST',
  },

  // Social Channels & Repositories
  socials: {
    github: 'https://github.com/Unixcer',
    linkedin: 'https://linkedin.com/company/unixcer', // [REPLACE: Optional company LinkedIn]
    twitter: 'https://x.com/unixcer', // [REPLACE: Optional Twitter]
  },

  // Primary Navigation
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Founders', href: '/founders' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  // Footer Categorized Links
  footerServices: [
    { label: 'Web Applications', href: '/services/web-development' },
    { label: 'Mobile Apps', href: '/services/mobile-apps' },
    { label: 'Backend & Microservices', href: '/services/backend-microservices' },
    { label: 'AI & GenAI Solutions', href: '/services/ai-genai-solutions' },
    { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
    { label: 'UI/UX Product Design', href: '/services/ui-ux-design' },
  ],

  footerCompany: [
    { label: 'About Us', href: '/about' },
    { label: 'Founders', href: '/founders' },
    { label: 'Case Studies', href: '/work' },
    { label: 'Engineering Blog', href: '/blog' },
    { label: 'Careers & Internships', href: '/careers' },
  ],

  footerLegal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

