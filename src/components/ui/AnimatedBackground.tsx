export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-transparent to-transparent dark:from-brand-500/[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.06)_0,transparent_65%)]" />

      <div className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-brand-300/30 blur-3xl animate-blob dark:bg-brand-500/10" />
      <div
        className="absolute right-[-8rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-400/25 blur-3xl animate-blob dark:bg-accent-500/10"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="absolute bottom-[-10rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-sky-200/40 blur-3xl animate-blob dark:bg-sky-500/10"
        style={{ animationDelay: "-10s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
      />
    </div>
  );
}
