import { z } from 'zod';

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name cannot exceed 100 characters.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid business email address.' }),
  phone: z
    .string()
    .max(25, { message: 'Phone number cannot exceed 25 characters.' })
    .optional()
    .or(z.literal('')),
  serviceType: z.enum([
    'web-development',
    'mobile-apps',
    'backend-microservices',
    'ai-genai-solutions',
    'cloud-devops',
    'ui-ux-design',
  ]),
  budgetRange: z.string().min(1, { message: 'Please select a budget range.' }),
  timeline: z.string().min(1, { message: 'Please select an expected timeline.' }),
  message: z
    .string()
    .min(10, { message: 'Please provide at least 10 characters describing your project goals.' })
    .max(3000, { message: 'Project description cannot exceed 3000 characters.' }),
  honeypot: z.string().optional(),
});

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name cannot exceed 100 characters.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .max(25, { message: 'Phone number cannot exceed 25 characters.' })
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(3000, { message: 'Message cannot exceed 3000 characters.' }),
  honeypot: z.string().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type NewsletterValues = z.infer<typeof newsletterSchema>;

