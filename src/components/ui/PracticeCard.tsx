import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SiteImage } from "@/content/images";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./icons";

/** The one card component for practice areas and services: icon, title, one-line description, Learn More. */
export function PracticeCard({
  icon,
  title,
  description,
  href,
  image,
  headingLevel: Heading = "h3",
}: {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  /** Optional photo header; zooms slowly on hover. */
  image?: SiteImage;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-white/10 bg-navy/40 transition duration-300 focus-within:border-gold/60 hover:-translate-y-1 hover:border-gold/60 hover:bg-navy/70 hover:shadow-2xl hover:shadow-black/40">
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-gold/30">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/60 to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-8">
        <span
          className={cn(
            "relative grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-navy-deep",
            image && "-mt-15 ring-4 ring-navy-deep",
          )}
        >
          <Icon name={icon} className="h-7 w-7 text-gold-light" />
        </span>
        <Heading className="mt-6 text-2xl text-bone">{title}</Heading>
        <p className="mt-3 flex-1 leading-relaxed text-mist">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-gold-light after:absolute after:inset-0"
        >
          Learn More<span className="sr-only"> about {title}</span>
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
