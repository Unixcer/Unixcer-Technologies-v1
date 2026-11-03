import { constructMetadata } from '@/lib/seo';
import { blogPosts } from '@/data/blogPosts';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Engineering Blog & Research Insights',
  description:
    'Deep dives into production LLM architectures, distributed microservices, event streaming, and modern cloud systems from Unixcer Technologies.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
          Engineering Insights
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Architectural Perspectives & Systems Research
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Technical dispatches, post-mortems, and architectural best practices written by the engineers and founders at Unixcer Technologies.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-3xl bg-white/70 dark:bg-[#0e1420]/70 border border-slate-200/80 dark:border-white/10 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1.5"
          >
            <div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  <span>{post.readTime}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-500" />
                  <span>{post.author}</span>
                </span>
                <span>•</span>
                <span>{post.date}</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-white/5">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}

