"use client";

import {
  Award,
  Briefcase,
  GraduationCap,
  Languages,
  MapPin,
  Target,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Counter } from "@/components/ui/Counter";

const quickFacts = [
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE · SRM University" },
  { icon: Briefcase, label: "Experience", value: "3 Internships (Full Stack & ML)" },
  { icon: MapPin, label: "Location", value: "Chennai, India" },
  { icon: Languages, label: "Languages", value: "English · Hindi · Tamil · German" },
];

const interests = [
  "Full Stack Web Development",
  "Artificial Intelligence",
  "Machine Learning",
  "Web3 & Smart Contracts",
  "Open Source",
  "Product Design",
];

const stats = [
  { value: 20, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "", label: "Internships" },
  { value: 4, suffix: "", label: "Languages Spoken" },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who loves the full stack — and the brain behind it"
          description="Student by day, builder by night. I turn ideas into polished, working products."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            <GlassCard className="p-6 sm:p-8">
              <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                <Zap className="h-4 w-4 text-brand-500" /> Quick Facts
              </h3>
              <ul className="space-y-4">
                {quickFacts.map((fact) => (
                  <li key={fact.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <fact.icon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                        {fact.label}
                      </p>
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                        {fact.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                <Target className="h-4 w-4 text-brand-500" /> What I&apos;m Into
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="chip">
                    {interest}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              <p>
                I&apos;m a Computer Science undergraduate at{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  SRM University, Chennai
                </strong>{" "}
                and a self-driven full stack developer. My journey started with
                small projects and quickly grew into a 20+ project portfolio
                spanning web applications, AI/ML models and even Stacks
                blockchain dApps.
              </p>
              <p>
                Through internships at{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Labmentix
                </strong>
                ,{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Unified Mentor
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Pinnacle Labs
                </strong>
                , I learned what it takes to ship real software — from designing
                REST APIs and data schemas to crafting interfaces people enjoy
                using.
              </p>
              <p>
                My goal is to build products that are{" "}
                <em className="text-brand-600 not-italic font-medium dark:text-brand-400">
                  fast, accessible and genuinely useful
                </em>{" "}
                — and to keep levelling up in AI and data science along the way.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <Award className="h-4 w-4 text-brand-500" />
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Career objective:{" "}
                  <span className="text-slate-700 dark:text-slate-200">
                    a full stack / data engineering role where I can grow into a
                    senior engineer.
                  </span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-900/5 bg-white/50 p-4 text-center backdrop-blur dark:border-white/5 dark:bg-white/5"
                  >
                    <p className="text-2xl font-bold text-gradient">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
