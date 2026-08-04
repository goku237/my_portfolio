"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { scrollToId } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "#home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-900/5 bg-white/70 backdrop-blur-xl dark:border-white/5 dark:bg-[#060a17]/70"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToId("home")}
            className="group flex items-center gap-2.5"
            aria-label="Go to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-600 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition-transform group-hover:rotate-6">
              GM
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-slate-900 sm:block dark:text-white">
              Gokul<span className="text-gradient">.dev</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToId(link.href.slice(1))}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.href
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-brand-500/10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden !px-4 !py-2 sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-slate-700 backdrop-blur lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="glass-strong fixed inset-x-4 top-20 z-50 rounded-2xl p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => scrollToId(link.href.slice(1)), 10);
                  }}
                  className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-brand-500/10 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
