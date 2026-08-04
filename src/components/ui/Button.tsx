import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  external,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    variant === "primary" ? "btn-primary" : "btn-ghost",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
