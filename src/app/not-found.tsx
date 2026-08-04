import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-5 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-accent-500/20 text-4xl font-extrabold text-brand-500">
        404
      </div>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Page not found
      </h1>
      <p className="max-w-md text-sm text-slate-500 dark:text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </div>
  );
}
