"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useTypewriter } from "@/hooks/useTypewriter";
import { scrollToId } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

const socials = [
  { label: "GitHub", href: siteConfig.github, icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

const floatingBadges = [
  { label: "React", className: "left-[8%] top-[18%]", delay: 0 },
  { label: "Python", className: "right-[6%] top-[24%]", delay: 1.2 },
  { label: "Node.js", className: "left-[12%] bottom-[22%]", delay: 2.1 },
  { label: "Next.js", className: "right-[10%] bottom-[16%]", delay: 0.6 },
  { label: "AI/ML", className: "right-[26%] top-[6%]", delay: 1.8 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const typed = useTypewriter(siteConfig.roles);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <motion.div style={{ y }} className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 flex flex-col items-start lg:order-1">
          <Reveal delay={0.05}>
            <span className="chip !px-4 !py-1.5 text-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand-500" />
              Open to internships & opportunities
            </span>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
              Hi, I&apos;m <span className="text-gradient">Gokul</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 flex min-h-[2.5rem] items-center text-lg font-medium text-slate-600 sm:text-2xl dark:text-slate-300">
              <span className="mr-2 h-6 w-1 rounded-full bg-gradient-to-b from-brand-400 to-accent-500" />
              <span>{typed}</span>
              <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-brand-500" />
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400">
              {siteConfig.bio}
            </p>
          </Reveal>

          <Reveal delay={0.36} className="mt-5">
            <span className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4 text-brand-500" />
              {siteConfig.location}
            </span>
          </Reveal>

          <Reveal delay={0.44} className="mt-8">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <button
                onClick={() => scrollToId("contact")}
                className="btn-ghost"
              >
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.52} className="mt-8">
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/60 text-slate-600 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand-400/50 hover:text-brand-600 hover:shadow-lg hover:shadow-brand-500/20 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand-400 via-brand-500/50 to-accent-500 opacity-70 blur-2xl animate-gradient-x" />
              <div className="relative h-64 w-64 overflow-hidden rounded-[2.25rem] border-2 border-white/60 bg-white/40 backdrop-blur sm:h-80 sm:w-80 dark:border-white/10 dark:bg-white/5">
                <Image
                  src={siteConfig.avatar}
                  alt={`${siteConfig.name} avatar`}
                  width={320}
                  height={320}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-[2.25rem] ring-1 ring-inset ring-slate-900/5 dark:ring-white/10" />
            </motion.div>

            <div className="absolute -inset-6 -z-10 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0_60%,rgba(56,189,248,0.35)_100%)] opacity-40" />

            {floatingBadges.map((badge) => (
              <motion.span
                key={badge.label}
                className={`absolute ${badge.className} chip animate-float-slow !bg-white/80 dark:!bg-slate-900/70`}
                style={{ animationDelay: `${badge.delay}s` }}
              >
                {badge.label}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-300 p-1.5 dark:border-slate-600"
        >
          <motion.span className="h-2 w-1 rounded-full bg-brand-400" />
        </motion.div>
      </div>
    </section>
  );
}
