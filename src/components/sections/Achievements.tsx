"use client";

import { BadgeCheck, Blocks, Bot, Globe, Rocket, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

const icons = [Rocket, Bot, BadgeCheck, Blocks, Globe, Trophy];

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones I'm proud of"
          description="Hackathons, certifications, community work and the wins that keep me motivated."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.08}>
                <TiltCard maxTilt={8}>
                  <div className="glass group flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-brand-400/40">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/15 to-accent-500/15 text-brand-600 transition-transform duration-300 group-hover:scale-110 dark:text-brand-400">
                        <Icon className="h-5 w-5" />
                      </span>
                      <Trophy className="h-5 w-5 text-amber-400/70" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                      {item.meta}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
