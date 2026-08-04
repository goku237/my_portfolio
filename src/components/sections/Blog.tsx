"use client";

import { CalendarDays, Clock3, Lock, PenLine } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Blog() {
  return (
    <section id="blog" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="Blog"
          title="Notes from the build"
          description="Short write-ups on the lessons, tools and tech I'm exploring. New posts landing soon."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.08}>
              <article
                className={cn(
                  "glass group flex h-full flex-col rounded-2xl p-6 transition-all duration-300",
                  post.published
                    ? "hover:-translate-y-1 hover:border-brand-400/40"
                    : "opacity-80"
                )}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl">{post.emoji}</span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide",
                      post.published
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : "bg-slate-500/10 text-slate-500 dark:text-slate-400"
                    )}
                  >
                    {post.published ? (
                      <PenLine className="h-3 w-3" />
                    ) : (
                      <Lock className="h-3 w-3" />
                    )}
                    {post.published ? "Published" : "Coming soon"}
                  </span>
                </div>

                <h3 className="font-semibold leading-snug text-slate-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center gap-4 border-t border-slate-900/5 pt-4 text-xs text-slate-400 dark:border-white/5 dark:text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" /> {post.readTime}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Want me to write about a topic?{" "}
            <a
              href="#contact"
              className="font-semibold text-brand-600 transition hover:text-brand-700 dark:text-brand-400"
            >
              Let me know
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
