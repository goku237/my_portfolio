"use client";

import { BookOpen, GraduationCap, School, Sparkles } from "lucide-react";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";

const iconFor = (index: number) => [GraduationCap, Sparkles, School, School][index];

export function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="The degrees and certifications that built my technical base."
        />

        <div className="mx-auto max-w-3xl space-y-6">
          {education.map((entry, index) => {
            const Icon = iconFor(index);
            return (
              <Reveal key={`${entry.degree}-${entry.institution}`} delay={index * 0.08}>
                <GlassCard hover className="flex items-start gap-4 p-6 sm:gap-5 sm:p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                    <Icon className="h-6 w-6" />
                  </span>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {entry.degree}
                      </h3>
                      <span className="chip font-mono text-xs">
                        {entry.years}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                      {entry.institution}
                    </p>
                    {entry.score && (
                      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <GraduationCap className="h-3.5 w-3.5" /> Score: {entry.score}
                      </span>
                    )}
                    {entry.detail && (
                      <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        {entry.detail}
                      </p>
                    )}
                    {entry.coursework && entry.coursework.length > 0 && (
                      <div className="mt-3">
                        <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          <BookOpen className="h-3.5 w-3.5" /> Relevant coursework
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {entry.coursework.map((c) => (
                            <span
                              key={c}
                              className="rounded-md bg-slate-900/5 px-2 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
