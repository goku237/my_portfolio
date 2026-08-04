"use client";

import { Award, BadgeCheck, CalendarDays, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & courses completed"
          description="Proof of my commitment to continuous learning across AI, data and Web3."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.1}>
              <TiltCard maxTilt={8}>
                <div className="glass relative flex h-full flex-col rounded-2xl p-6 sm:p-7">
                  <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-gradient-to-br from-brand-400/10 to-accent-500/10" />
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-accent-600 text-white shadow-lg shadow-brand-500/30">
                    <Award className="h-6 w-6" />
                  </span>

                  <h3 className="mt-5 font-semibold leading-snug text-slate-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                    <BadgeCheck className="h-4 w-4" />
                    {cert.org}
                  </p>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {cert.blurb}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-900/5 pt-4 dark:border-white/5">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                      <CalendarDays className="h-3.5 w-3.5" /> {cert.year}
                    </span>
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 transition hover:text-brand-700 dark:text-brand-400"
                      >
                        View credential <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-emerald-500">
                        ● Verified
                      </span>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
