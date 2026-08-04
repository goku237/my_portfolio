"use client";

import { motion } from "framer-motion";

type SkillBarProps = {
  name: string;
  level: number;
  note?: string;
  index: number;
};

export function SkillBar({ name, level, note, index }: SkillBarProps) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="font-medium text-slate-800 dark:text-slate-200">
          {name}
          {note ? (
            <span className="ml-2 text-xs font-normal text-slate-400 dark:text-slate-500">
              {note}
            </span>
          ) : null}
        </span>
        <span className="font-mono text-xs text-brand-600 dark:text-brand-400">
          {level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-accent-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, delay: 0.08 * index, ease: [0.21, 0.47, 0.32, 0.98] }}
        />
      </div>
    </div>
  );
}
