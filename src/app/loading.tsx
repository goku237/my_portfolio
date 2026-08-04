export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5 px-5">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-brand-400/20 border-t-brand-500" />
      <p className="text-sm font-medium tracking-wide text-slate-400 dark:text-slate-500">
        Loading…
      </p>
    </div>
  );
}
