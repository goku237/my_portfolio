"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

const grid = [
  { label: "React", size: "text-4xl", className: "sm:col-span-2" },
  { label: "Python", size: "text-3xl" },
  { label: "Next.js", size: "text-5xl" },
  { label: "TypeScript", size: "text-3xl" },
  { label: "Node.js", size: "text-4xl" },
  { label: "Tailwind", size: "text-2xl" },
  { label: "MongoDB", size: "text-3xl" },
  { label: "SQL", size: "text-4xl" },
  { label: "Firebase", size: "text-3xl" },
  { label: "AI / ML", size: "text-5xl" },
  { label: "Docker", size: "text-3xl" },
  { label: "Web3", size: "text-4xl" },
];

export function TechStack() {
  return (
    <section id="techstack" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies I work with"
          description="An ever-growing stack I reach for when building for the web."
        />

        <Reveal>
          <div className="mb-10">
            <Marquee />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid auto-rows-[5rem] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {grid.map((tech) => (
              <motion.div
                key={tech.label}
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`glass flex items-center justify-center rounded-2xl ${tech.className}`}
              >
                <span
                  className={`${tech.size} font-bold tracking-tight text-gradient`}
                >
                  {tech.label}
                </span>
              </motion.div>
            ))}
            <div className="glass flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-600">
              <Sparkles className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">
                And counting…
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
