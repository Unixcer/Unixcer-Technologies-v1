'use client';

import * as React from 'react';
import { Bot, X, Send, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
  actionLink?: string;
  actionText?: string;
}

export function AIAssistantModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: `Hello! I am Unixcer's automated architectural assistant. I can answer questions about our engineering capabilities, pricing models, founders, or help you submit a project specification.`,
    },
  ]);

  const quickPrompts = [
    'What services do you offer?',
    'Who owns the source code?',
    'What are typical project timelines?',
    'How do I get a quote?',
  ];

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const lower = userText.toLowerCase();
    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: userText }];

    let reply: ChatMessage;

    if (lower.includes('service') || lower.includes('offer') || lower.includes('build')) {
      reply = {
        sender: 'ai',
        text: 'Unixcer Technologies provides 6 core disciplines: Custom Web Applications (Next.js/React), Cross-Platform Mobile Apps (React Native/Flutter), Distributed Backend & Microservices (Spring Boot/Python), AI & GenAI RAG Pipelines, Cloud & DevOps (Docker/AWS), and UI/UX Design Systems.',
        actionLink: '/services',
        actionText: 'View All Service Specs',
      };
    } else if (lower.includes('owner') || lower.includes('ip') || lower.includes('code') || lower.includes('license')) {
      reply = {
        sender: 'ai',
        text: '100% of all intellectual property, source code repositories, design tokens, and documentation belong to you upon settlement of project milestones. Zero vendor lock-in.',
        actionLink: '/about',
        actionText: 'Read Our Manifesto',
      };
    } else if (lower.includes('time') || lower.includes('duration') || lower.includes('long') || lower.includes('weeks')) {
      reply = {
        sender: 'ai',
        text: 'A focused MVP or full-stack web application typically ships in 4 to 8 weeks. Larger enterprise microservices or custom AI integrations range from 8 to 16 weeks, broken into 2-week agile sprints.',
        actionLink: '/contact#quote',
        actionText: 'Estimate Your Timeline',
      };
    } else if (lower.includes('founder') || lower.includes('who') || lower.includes('team') || lower.includes('murlikrishna') || lower.includes('saiprasad')) {
      reply = {
        sender: 'ai',
        text: 'Unixcer was founded by Murlikrishna Naral (Lead Systems Architect & Full Stack Developer) and Saiprasad Gortyal (Co-Founder & Data Systems Architect) in Solapur, Maharashtra.',
        actionLink: '/founders',
        actionText: 'View Founder Profiles',
      };
    } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote') || lower.includes('budget') || lower.includes('rate')) {
      reply = {
        sender: 'ai',
        text: 'We provide fixed-price milestone contracts for defined scopes, and dedicated sprint retainers for evolving products. Our rates are significantly more competitive than traditional software agencies while maintaining Silicon Valley caliber standards.',
        actionLink: '/contact#quote',
        actionText: 'Request a Detailed Quote',
      };
    } else {
      reply = {
        sender: 'ai',
        text: `Thank you for asking! For specific project requirements, we recommend speaking directly with our lead architects or dropping a quick note on WhatsApp.`,
        actionLink: siteConfig.contact.whatsappUrl,
        actionText: 'Chat on WhatsApp',
      };
    }

    setMessages([...newMessages, reply]);
    setInput('');
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <aside aria-label="AI Assistant" className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Open AI Engineering Assistant"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Bot className="w-5 h-5" />
          <span className="hidden sm:inline font-semibold">AI Assistant</span>
        </button>
      </aside>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[540px] rounded-3xl bg-white dark:bg-[#0e1420] border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="p-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  Unixcer AI Assistant
                </span>
                <span className="text-[10px] font-mono text-emerald-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Online • Instant Reply
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="p-4 flex-grow overflow-y-auto space-y-3 max-h-72 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-white/5 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.actionLink && (
                  <a
                    href={msg.actionLink}
                    className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-blue-500 hover:underline"
                  >
                    <span>{msg.actionText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="px-4 py-2 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-1.5">
            {quickPrompts.slice(0, 2).map((prompt, pIdx) => (
              <button
                key={pIdx}
                type="button"
                onClick={() => handleSend(prompt)}
                className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-blue-500/10 hover:text-blue-500 transition"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, pricing..."
              className="flex-grow px-3 py-2 rounded-xl text-xs bg-white dark:bg-[#0e1420] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}

