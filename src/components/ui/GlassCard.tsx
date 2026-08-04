import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl",
        hover &&
          "transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-[0_24px_60px_-20px_rgba(56,130,246,0.4)]",
        className
      )}
    >
      {children}
    </div>
  );
}
