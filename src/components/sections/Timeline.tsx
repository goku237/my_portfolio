"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Brain,
  Code2,
  Link2,
  University,
  Rocket,
} from "lucide-react";
import { timeline } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<string, typeof Code2> = {
  "graduation-cap": GraduationCap,
  brain: Brain,
  code: Code2,
  chain: Link2,
  university: University,
  rocket: Rocket,
};

export function Timeline() {
  return (
    <section id="timeline" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="My Journey"
          title="The road so far"
          description="From my first lines of code to shipping full-stack products — here's how I got here."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-400 via-brand-500/50 to-accent-500 sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((entry, index) => {
              const Icon = iconMap[entry.icon] ?? Code2;
              const leftSide = index % 2 === 0;
              return (
                <div
                  key={entry.title}
                  className={`relative flex sm:w-1/2 ${
                    leftSide
                      ? "sm:pr-10 sm:text-right"
                      : "sm:ml-auto sm:pl-10"
                  } pl-12 sm:pl-0`}
                >
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-brand-400 to-accent-500 text-white shadow-lg shadow-brand-500/30 sm:h-9 sm:w-9 ${
                      leftSide
                        ? "left-4 -translate-x-1/2 sm:left-auto sm:-right-[4.5rem] sm:translate-x-0"
                        : "left-4 -translate-x-1/2 sm:-left-[4.5rem] sm:translate-x-0"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.span>

                  <Reveal delay={0.05} className="flex-1">
                    <div className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40">
                      <div className="mb-1 flex items-center gap-2 sm:justify-end sm:flex-row-reverse">
                        <span className="font-mono text-xs text-brand-600 dark:text-brand-400">
                          {entry.period}
                        </span>
                        {entry.current && (
                          <span className="rounded-full bg-brand-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                            Now
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {entry.title}
                      </h3>
                      <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                        {entry.subtitle}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        {entry.description}
                      </p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
