"use client";

import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { SkillBar } from "@/components/ui/SkillBar";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit"
          description="A blend of languages, frameworks and AI tooling I use to go from idea to shipped product."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <Reveal key={category.title} delay={(catIndex % 2) * 0.08}>
              <GlassCard hover className="h-full p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                    <category.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      {category.blurb}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      note={skill.note}
                      index={index}
                    />
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
