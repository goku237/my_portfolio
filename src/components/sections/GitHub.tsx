"use client";

import { useEffect, useState } from "react";
import {
  ExternalLink,
  Eye,
  GitFork,
  Star,
  Users,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
};

type GitHubData = {
  user: {
    login: string;
    name: string | null;
    avatar_url: string;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
  };
  languages: { name: string; count: number }[];
  featured: Repo[];
};

const langColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Prolog: "#74283c",
  C: "#555555",
  Vue: "#41b883",
};

function Skeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="glass animate-pulse rounded-2xl p-6">
        <div className="h-20 w-20 rounded-2xl bg-slate-900/10 dark:bg-white/10" />
        <div className="mt-4 h-5 w-1/2 rounded bg-slate-900/10 dark:bg-white/10" />
        <div className="mt-2 h-3 w-3/4 rounded bg-slate-900/5 dark:bg-white/5" />
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[...Array(3)].map((_, i) => (
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

export function GitHubSection() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((json) => {
        if (json.error) throw new Error(json.error);
        setData(json);
      })
      .catch(() => setError(true));
  }, []);

  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${siteConfig.githubUsername}&theme=transparent&ring=38bdf8&fire=6366f1&currStreakLabel=0ea5e9&sideNums=64748b&sideLabels=94a3b8&dates=94a3b8`;
  const statUrl = `https://github-readme-stats.vercel.app/api?username=${siteConfig.githubUsername}&show_icons=true&theme=transparent&hide_border=true&icon_color=0ea5e9&title_color=0ea5e9&text_color=64748b`;

  return (
    <section id="github" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="GitHub"
          title="My open-source footprint"
          description="Live stats pulled straight from my GitHub profile."
        />

        {error ? (
          <Reveal>
            <div className="glass mx-auto max-w-lg rounded-2xl p-8 text-center">
              <GithubIcon className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-600" />
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                Couldn&apos;t reach the GitHub API right now. Visit{" "}
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-600 dark:text-brand-400"
                >
                  github.com/{siteConfig.githubUsername}
                </a>{" "}
                to explore my work.
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
                    src={data.user.avatar_url}
                    alt={data.user.login}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-2xl ring-2 ring-brand-400/50"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {data.user.name ?? data.user.login}
                    </h3>
                    <p className="font-mono text-sm text-brand-600 dark:text-brand-400">
                      @{data.user.login}
                    </p>
                    {data.user.bio && (
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {data.user.bio}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    { label: "Repos", value: data.user.public_repos, icon: GithubIcon },
                    { label: "Followers", value: data.user.followers, icon: Users },
                    { label: "Following", value: data.user.following, icon: Eye },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-slate-900/5 bg-white/50 p-3 dark:border-white/5 dark:bg-white/5"
                    >
                      <stat.icon className="mx-auto h-4 w-4 text-brand-500" />
                      <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full"
                >
                  <GithubIcon className="h-4 w-4" /> Visit GitHub Profile
                </a>
              </div>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.08}>
                <div className="glass rounded-2xl p-6">
                  <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
                    Most used languages
                  </h4>
                  <div className="space-y-3">
                    {data.languages.slice(0, 6).map((lang) => {
                      const total = data.languages.reduce(
                        (acc, l) => acc + l.count,
                        0
                      );
                      const pct = Math.round((lang.count / total) * 100);
                      return (
                        <div key={lang.name}>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-200">
                              <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{
                                  background: langColors[lang.name] ?? "#64748b",
                                }}
                              />
                              {lang.name}
                            </span>
                            <span className="font-mono text-slate-400">
                              {pct}%
                            </span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/10">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${pct}%`,
                                background:
                                  langColors[lang.name] ?? "#64748b",
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        )}

        {data && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.featured.map((repo, index) => (
              <Reveal key={repo.name} delay={(index % 3) * 0.06}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                      {repo.name}
                    </h4>
                    <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-brand-500" />
                  </div>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {repo.description ??
                      repo.homepage ??
                      "Explore the repository for details."}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            background: langColors[repo.language] ?? "#64748b",
                          }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
