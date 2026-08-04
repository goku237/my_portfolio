"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";

const contactCards = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: siteConfig.linkedinShort,
    href: siteConfig.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: `github.com/${siteConfig.githubUsername}`,
    href: siteConfig.github,
    icon: GithubIcon,
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: undefined,
    icon: MapPin,
  },
];

type FormState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const emailjsConfigured = Boolean(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    if (!name || !email || !subject || !message) {
      setErrorMsg("Please fill in all fields before sending.");
      setState("error");
      return;
    }

    if (emailjsConfigured) {
      setState("sending");
      try {
        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            template_params: { name, email, subject, message },
          }),
        });
        if (!res.ok) throw new Error("EmailJS request failed");
        setState("success");
        form.reset();
      } catch {
        setErrorMsg(
          "Something went wrong sending your message. Please email me directly instead."
        );
        setState("error");
      }
    } else {
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;
      setState("success");
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a role, project or idea in mind? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              {contactCards.map((card) => (
                <GlassCard key={card.label} hover className="p-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                      <card.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                        {card.label}
                      </p>
                      {card.href ? (
                        <a
                          href={card.href}
                          target={
                            card.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            card.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="truncate text-sm font-semibold text-slate-800 transition hover:text-brand-600 dark:text-slate-100 dark:hover:text-brand-400"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                          {card.value}
                        </p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}

              <GlassCard className="p-5">
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Currently open to <strong className="text-slate-700 dark:text-slate-200">full-stack internships</strong> and
                  part-time development work. I usually reply within 24 hours.
                </p>
              </GlassCard>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="input-glass"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="input-glass"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="input-glass"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your role, project or idea…"
                    className="input-glass resize-none"
                  />
                </div>

                {state === "error" && (
                  <p className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                    {errorMsg}
                  </p>
                )}
                {state === "success" && (
                  <p className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    {emailjsConfigured
                      ? "Message sent! I'll get back to you soon."
                      : "Thanks! Your email app should have opened — hit send to finish."}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {state === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
