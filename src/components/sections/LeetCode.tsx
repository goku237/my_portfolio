"use client";

import { useEffect, useState } from "react";
import { Award, Code2, ExternalLink, Target, Trophy } from "lucide-react";
import { LeetCodeIcon } from "@/components/ui/BrandIcons";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type LeetCodeData = {
  username: string;
  realName: string | null;
  ranking: number | null;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
};

const difficulty = {
  easy: { color: "#22c55e", label: "Easy" },
  medium: { color: "#f59e0b", label: "Medium" },
  hard: { color: "#ef4444", label: "Hard" },
} as const;

function Skeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="glass animate-pulse rounded-2xl p-6">
        <div className="h-20 w-20 rounded-2xl bg-slate-900/10 dark:bg-white/10" />
        <div className="mt-4 h-5 w-1/2 rounded bg-slate-900/10 dark:bg-white/10" />
        <div className="mt-2 h-3 w-3/4 rounded bg-slate-900/5 dark:bg-white/5" />
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="h-14 rounded-xl bg-slate-900/5 dark:bg-white/5"
            />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="glass h-44 animate-pulse rounded-2xl bg-slate-900/5 dark:bg-white/5" />
        <div className="grid gap-4 sm:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="glass h-32 animate-pulse rounded-2xl bg-slate-900/5 dark:bg-white/5"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function LeetCode() {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then((json) => {
        if (json.error) throw new Error(json.error);
        setData(json);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <section id="leetcode" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="LeetCode"
          title="Sharpening my problem-solving skills"
          description="Daily data structures & algorithms practice — live stats from my LeetCode profile."
        />

        {error ? (
          <Reveal>
            <div className="glass mx-auto max-w-lg rounded-2xl p-8 text-center">
              <LeetCodeIcon className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-600" />
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                Couldn&apos;t reach the LeetCode API right now. Visit{" "}
                <a
                  href={siteConfig.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-600 dark:text-brand-400"
                >
                  leetcode.com/u/{siteConfig.leetcodeUsername}
                </a>{" "}
                to check out my solved problems.
              </p>
            </div>
          </Reveal>
        ) : !data ? (
          <Skeleton />
        ) : (
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="glass h-full rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <Image
                    src={siteConfig.avatar}
                    alt={data.username}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-2xl ring-2 ring-brand-400/50"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {data.realName ?? data.username}
                    </h3>
                    <p className="font-mono text-sm text-brand-600 dark:text-brand-400">
                      @{data.username}
                    </p>
                    {data.ranking != null && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Award className="h-3.5 w-3.5 text-amber-500" />
                        Global rank #{data.ranking.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-xl border border-slate-900/5 bg-white/50 p-3 dark:border-white/5 dark:bg-white/5">
                    <Target className="mx-auto h-4 w-4 text-brand-500" />
                    <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                      {data.totalSolved}
                    </p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500">
                      Problems solved
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-900/5 bg-white/50 p-3 dark:border-white/5 dark:bg-white/5">
                    <Trophy className="mx-auto h-4 w-4 text-amber-500" />
                    <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                      {data.easySolved + data.mediumSolved + data.hardSolved}
                    </p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500">
                      All-time submissions
                    </p>
                  </div>
                </div>

                <a
                  href={siteConfig.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full"
                >
                  <LeetCodeIcon className="h-4 w-4" /> Visit LeetCode Profile
                </a>
              </div>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.08}>
                <div className="glass rounded-2xl p-6">
                  <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
                    Solved by difficulty
                  </h4>
                  <div className="space-y-4">
                    {(
                      [
                        { key: "easy", solved: data.easySolved },
                        { key: "medium", solved: data.mediumSolved },
                        { key: "hard", solved: data.hardSolved },
                      ] as const
                    ).map(({ key, solved }) => {
                      const pct = data.totalSolved
                        ? Math.round((solved / data.totalSolved) * 100)
                        : 0;
                      return (
                        <div key={key}>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-200">
                              <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{ background: difficulty[key].color }}
                              />
                              {difficulty[key].label}
                            </span>
                            <span className="font-mono text-slate-400">
                              {solved} · {pct}%
                            </span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/10">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${pct}%`,
                                background: difficulty[key].color,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="glass flex items-start gap-3 rounded-2xl p-5">
                  <Code2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    Consistently grinding data structures, algorithms and
                    problem-solving on LeetCode to stay sharp and interview
                    ready. Explore my{" "}
                    <a
                      href={siteConfig.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-brand-600 hover:underline dark:text-brand-400"
                    >
                      solutions <ExternalLink className="h-3 w-3" />
                    </a>
                    .
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
