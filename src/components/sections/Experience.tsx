"use client";

import { BadgeCheck, Building2, CalendarDays, ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Internships that shaped how I build"
          description="Hands-on roles across full-stack development and machine learning."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-400/60 via-brand-500/30 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const open = openIndex === index;
              return (
                <Reveal key={exp.company} delay={index * 0.08} className="relative pl-14">
                  <span className="absolute left-5 top-5 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-400 bg-white shadow-md dark:bg-[#060a17]">
                    {exp.current && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand-400/50" />
                    )}
                  </span>

                  <GlassCard className="overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(open ? null : index)}
                      aria-expanded={open}
                      className="w-full p-5 text-left sm:p-6"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                              <Building2 className="h-5 w-5" />
                            </span>
                            <div>
                              <h3 className="font-semibold text-slate-900 dark:text-white">
                                {exp.company}
                              </h3>
                              <p className="text-sm text-brand-600 dark:text-brand-400">
                                {exp.role}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="chip">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {exp.duration}
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                          <div className="border-t border-slate-900/5 px-5 pb-6 pt-4 sm:px-6 dark:border-white/5">
                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                              {exp.summary}
                            </p>

                            <h4 className="mt-5 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                              Responsibilities
                            </h4>
                            <ul className="space-y-1.5">
                              {exp.responsibilities.map((r) => (
                                <li
                                  key={r}
                                  className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                                  {r}
                                </li>
                              ))}
                            </ul>

                            <h4 className="mt-5 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                              Highlights
                            </h4>
                            <ul className="space-y-1.5">
                              {exp.achievements.map((a) => (
                                <li
                                  key={a}
                                  className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                                >
                                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                                  {a}
                                </li>
                              ))}
                            </ul>

                            <div className="mt-5 flex flex-wrap gap-2">
                              {exp.tech.map((t) => (
                                <span key={t} className="chip">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
