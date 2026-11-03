export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  address: string;
  whatsappNumber: string;
  whatsappUrl: string;
  calComUrl?: string;
  officeHours: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  legalName: string;
  tagline: string;
  description: string;
  baseUrl: string;
  contact: ContactInfo;
  socials: SocialLinks;
  navLinks: NavLink[];
  footerServices: NavLink[];
  footerCompany: NavLink[];
  footerLegal: NavLink[];
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  coreSkills: string[];
  otherSkills: string[];
  avatarUrl?: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Queue Management' | 'AI / ML' | 'Web App' | 'Enterprise ERP' | 'E-Commerce';
  summary: string;
  challenge: string;
  solution: string;
  techStack: string[];
  deliverables: string[];
  outcomes: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ServiceOffering {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  capabilities: string[];
  techStack: string[];
  deliverables: string[];
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Pricing' | 'Technology';
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  content: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  projectDescription: string;
  honeypot?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  honeypot?: string;
}

