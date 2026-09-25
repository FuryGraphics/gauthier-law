import Image from "next/image";
import Link from "next/link";
import { FIRM } from "@/lib/site";
import { cn } from "@/lib/cn";

// Brand lockup: the gold G-and-scales mark (generated with Higgsfield; masters in
// brand-assets/) beside the firm name set in live text so it stays crisp and legible.
export function Logo({ onClick, className }: { onClick?: () => void; className?: string }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${FIRM.name}, home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <Image
        src="/brand/logo-mark.png"
        alt=""
        aria-hidden="true"
        width={255}
        height={256}
        preload
        className="h-11 w-11 transition-transform duration-500 group-hover:rotate-[-6deg]"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl text-bone">Gauthier</span>
        <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold-light">Law Firm</span>
      </span>
    </Link>
  );
}
