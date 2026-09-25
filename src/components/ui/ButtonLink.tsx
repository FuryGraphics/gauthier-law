import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide transition-colors duration-200";

// Primary = gold fill with deep-navy text (#141A2C). The brief's navy #202A44 on
// gold is only 3.8:1; the deeper navy clears WCAG AA (4.6:1) at body sizes.
const VARIANTS = {
  primary: "bg-gold text-navy-deep hover:bg-gold-light",
  outline: "border border-gold/70 text-bone hover:border-gold-light hover:bg-gold/10",
} as const;

const SIZES = {
  md: "px-7 py-3.5 text-base",
  sm: "px-5 py-2.5 text-sm",
} as const;

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export function ButtonLink({ href, variant = "primary", size = "md", className, children, ...rest }: ButtonLinkProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
