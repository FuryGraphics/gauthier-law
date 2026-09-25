import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { FIRM } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import type { Crumb } from "@/lib/schema";
import type { SiteImage } from "@/content/images";
import { Breadcrumbs } from "./Breadcrumbs";
import { ButtonLink } from "./ButtonLink";
import { HeroBackdrop } from "./HeroBackdrop";

type Cta = { label: string; href: string };

type HeroProps = {
  /** The page's single H1. Wrap a phrase in <span className="text-gold-light"> for the gold accent. */
  title: ReactNode;
  eyebrow?: string;
  subtitle?: ReactNode;
  /** Required on every inner page; omit only on the homepage. */
  breadcrumbs?: Crumb[];
  /** Background photo with parallax. Omit for the plain dark gradient. */
  image?: SiteImage;
  /** Defaults to the click-to-call button. */
  primaryCta?: Cta;
  /** Defaults to "Request a Consultation"; pass null to hide. */
  secondaryCta?: Cta | null;
  children?: ReactNode;
};

// Full-width dark hero that opens every page. Text animates in with CSS rather than
// Framer Motion so the H1 (usually the LCP element) paints before hydration.
export function Hero({ title, eyebrow, subtitle, breadcrumbs, image, primaryCta, secondaryCta, children }: HeroProps) {
  const primary = primaryCta ?? { label: `Call ${FIRM.phone}`, href: FIRM.phoneHref };
  const secondary = secondaryCta === undefined ? { label: "Request a Consultation", href: ROUTES.contact } : secondaryCta;

  return (
    <section className="hero-backdrop relative isolate overflow-hidden border-b border-white/5">
      {image && <HeroBackdrop image={image} />}
      <div aria-hidden="true" className="hero-lines pointer-events-none absolute inset-0 -z-10" />
      <div className={image ? "container-site pb-24 pt-36 md:pb-36 md:pt-52" : "container-site pb-20 pt-32 md:pb-28 md:pt-44"}>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-10 motion-safe:animate-fade-up" />}
        <div className="max-w-4xl motion-safe:animate-fade-up">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">{eyebrow}</p>
          )}
          <h1 className="mt-4 text-4xl leading-[1.1] text-bone sm:text-5xl lg:text-6xl">{title}</h1>
          <span aria-hidden="true" className="mt-7 block h-0.5 w-24 origin-left bg-gold motion-safe:animate-draw-line" />
          {subtitle && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist md:text-xl">{subtitle}</p>}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={primary.href}>
              {primary.href.startsWith("tel:") && <Phone aria-hidden="true" className="h-4 w-4" />}
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="outline" className="backdrop-blur-sm">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
