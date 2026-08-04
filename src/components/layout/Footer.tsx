"use client";

import { ArrowUp, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { navLinks, siteConfig } from "@/data/site";
import { scrollToId } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-900/5 py-12 dark:border-white/5">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-600 text-sm font-bold text-white">
                GM
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                Gokul<span className="text-gradient">.dev</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Full Stack Developer & data science enthusiast building fast,
              accessible products that feel premium.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToId(link.href.slice(1))}
                    className="text-sm text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-400"
              >
                <Mail className="h-4 w-4" /> {siteConfig.email}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-400"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-400"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {siteConfig.location}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-900/5 pt-6 sm:flex-row dark:border-white/5">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js,
            Tailwind & Framer Motion.
          </p>
          <button
            onClick={() => scrollToId("home")}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-xs font-medium text-slate-600 backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-400"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
