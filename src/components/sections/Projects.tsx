"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  Lightbulb,
  Layers,
  Wrench,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { allProjects, featuredProjects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost !px-4 !py-2 text-xs"
        >
          <GithubIcon className="h-3.5 w-3.5" /> Source Code
        </a>
      )}
    </div>
  );
}

function FeaturedMockup({ project }: { project: Project }) {
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-brand-400/25 to-accent-500/25 blur-xl" />
      <div className="glass-strong relative overflow-hidden rounded-2xl">
        <div className="flex items-center gap-1.5 border-b border-slate-900/5 px-4 py-3 dark:border-white/5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 rounded-md bg-slate-900/5 px-2 py-0.5 font-mono text-[10px] text-slate-400 dark:bg-white/5 dark:text-slate-500">
            {project.name.toLowerCase().replace(/\s+/g, "-")}.app
          </span>
        </div>
        <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-brand-100 via-white to-accent-100 p-6 dark:from-brand-500/10 dark:via-[#0c1428] dark:to-accent-500/10">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 text-3xl shadow-xl shadow-brand-500/20 backdrop-blur dark:bg-white/10">
              {project.emoji}
            </div>
            <p className="mt-4 font-mono text-sm font-semibold text-slate-600 dark:text-slate-300">
              {project.tagline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal delay={0.05}>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className={cn("order-2", flip ? "lg:order-1" : "lg:order-2")}>
          <TiltCard maxTilt={6}>
            <FeaturedMockup project={project} />
          </TiltCard>
        </div>

        <div
          className={cn(
            "order-1 space-y-5",
            flip ? "lg:order-2" : "lg:order-1"
          )}
        >
          <div>
            <span className="chip text-[11px] font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              {project.category} · {project.year}
            </span>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              {project.name}
            </h3>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              <Layers className="h-3.5 w-3.5" /> Architecture
            </h4>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.architecture}
            </p>
          </div>

          {project.challenge && (
            <div className="flex items-start gap-2.5 rounded-xl border border-accent-500/15 bg-accent-500/5 p-3.5">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <strong className="font-semibold text-slate-800 dark:text-slate-100">
                  Challenge solved:{" "}
                </strong>
                {project.challenge}
              </p>
            </div>
          )}

          <div>
            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              <Wrench className="h-3.5 w-3.5" /> Built with
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  );
}

function ProjectGridCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="glass group flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-brand-400/40"
    >
      <div className="mb-4 flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/15 to-accent-500/15 text-xl">
          {project.emoji}
        </span>
        <span className="chip text-[10px] font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {project.category}
        </span>
      </div>

      <h3 className="font-semibold text-slate-900 dark:text-white">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {project.tagline} — {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-md bg-slate-900/5 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="rounded-md bg-slate-900/5 px-2 py-0.5 text-[11px] text-slate-400 dark:bg-white/5 dark:text-slate-500">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <div className="mt-5 flex items-center gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} demo`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 transition hover:text-brand-700 dark:text-brand-400"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} on GitHub`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            <GithubIcon className="h-3.5 w-3.5" /> Code
          </a>
        )}
        {!project.github && !project.demo && (
          <span className="text-xs text-slate-400 dark:text-slate-500">
            Academic project
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="A selection of projects I'm proud of — each one solving a real problem with modern tooling."
        />

        <div className="space-y-20 sm:space-y-28">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <div>
          <div className="mb-10 flex items-center gap-3">
            <FolderGit2 className="h-6 w-6 text-brand-500" />
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              More experiments
            </h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project, index) => (
              <Reveal key={project.name} delay={(index % 3) * 0.07}>
                <ProjectGridCard project={project} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="text-center">
            <a
              href="https://github.com/goku237"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View all on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
