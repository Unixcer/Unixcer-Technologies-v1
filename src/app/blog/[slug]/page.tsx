import { notFound } from 'next/navigation';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { blogPosts } from '@/data/blogPosts';
import { ArrowLeft, Clock, User, Share2, ArrowRight } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return constructMetadata({
    title: `${post.title} — Engineering Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
      
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 hover:text-blue-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Engineering Blog</span>
      </Link>

      {/* Header */}
      <header className="space-y-6 pb-8 border-b border-slate-200/80 dark:border-white/10">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-blue-500" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">{post.author}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>{post.readTime}</span>
          </div>
          <span>•</span>
          <span>Published {post.date}</span>
        </div>
      </header>

      {/* Body Copy */}
      <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed space-y-6 whitespace-pre-line">
        {post.content}
      </div>

      {/* Closing Callout Banner */}
      <div className="rounded-3xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 mt-16">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Need an Objective Architectural Review?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg">
            Consult directly with {post.author} and the Unixcer Technologies systems team before your next release cycle.
          </p>
        </div>
        <Link
          href="/contact#quote"
          className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md inline-flex items-center gap-2 shrink-0"
        >
          <span>Request Technical Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </article>
  );
}

