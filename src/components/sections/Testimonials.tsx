"use client";

import { MessageCircleHeart, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say about working with me"
          description="Recommendations from mentors, managers and collaborators."
        />

        {testimonials.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, index) => (
              <Reveal key={t.name} delay={index * 0.1}>
                <TiltCard maxTilt={6}>
                  <figure className="glass relative h-full rounded-2xl p-7">
                    <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-500/15" />
                    <blockquote className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-accent-600 text-sm font-bold text-white">
                        {t.initials}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {t.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {t.role}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="glass mx-auto max-w-xl rounded-2xl p-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                <MessageCircleHeart className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-semibold text-slate-900 dark:text-white">
                Recommendations are on LinkedIn
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                My professional recommendations live on my LinkedIn profile. I
                always welcome feedback from the teams I work with — feel free
                to connect and say hi.
              </p>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-6"
              >
                View LinkedIn Recommendations
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
