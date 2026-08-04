import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-3 sm:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      <span className="chip text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
        {eyebrow}
      </span>
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
