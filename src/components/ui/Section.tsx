import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteImage } from "@/content/images";
import { cn } from "@/lib/cn";
import { FadeUp } from "./FadeUp";

const TONES = {
  ink: "bg-ink",
  "ink-soft": "bg-ink-soft",
  navy: "bg-navy",
} as const;

// Scrim over a backdrop photo, matched to the section tone so text stays legible.
const BACKDROP_SCRIMS = {
  ink: "from-ink via-ink/75 to-ink",
  "ink-soft": "from-ink-soft via-ink-soft/75 to-ink-soft",
  navy: "from-navy via-navy/75 to-navy",
} as const;

export type SectionTone = keyof typeof TONES;

/** Content section wrapper — every section below the hero uses this, so every section fades up. */
export function Section({
  children,
  tone = "ink",
  backdrop,
  id,
  className,
  labelledBy,
}: {
  children: ReactNode;
  tone?: SectionTone;
  /** Optional atmospheric photo behind the section, heavily scrimmed. */
  backdrop?: SiteImage;
  id?: string;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(TONES[tone], "relative isolate overflow-hidden py-20 md:py-28", className)}
    >
      {backdrop && (
        <>
          <Image src={backdrop.src} alt={backdrop.alt} fill sizes="100vw" className="-z-20 object-cover opacity-45" />
          <div aria-hidden="true" className={cn("absolute inset-0 -z-10 bg-linear-to-b", BACKDROP_SCRIMS[tone])} />
        </>
      )}
      <FadeUp className="container-site">{children}</FadeUp>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "left",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">{eyebrow}</p>
      )}
      <Tag id={id} className="mt-3 text-3xl leading-tight text-bone md:text-4xl">
        {title}
      </Tag>
      <span aria-hidden="true" className={cn("mt-5 block h-0.5 w-14 bg-gold", centered && "mx-auto")} />
      {intro && <p className="mt-6 text-lg leading-relaxed text-mist">{intro}</p>}
    </div>
  );
}
