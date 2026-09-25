import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FIRM } from "@/lib/site";
import { LOCATIONS, PRACTICE_AREAS, ROUTES, type Location } from "@/lib/routes";
import { localBusinessSchema } from "@/lib/schema";
import type { LocationContent } from "@/content/locations";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeUp } from "@/components/ui/FadeUp";
import { PracticeCard } from "@/components/ui/PracticeCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { LegalInfoNote } from "@/components/ui/LegalInfoNote";
import { CtaBand } from "@/components/ui/CtaBand";

/** Shared layout for the five city pages. Emits LocalBusiness + BreadcrumbList schema. */
export function LocationTemplate({ location, content }: { location: Location; content: LocationContent }) {
  const otherLocations = LOCATIONS.filter((l) => l.slug !== location.slug);

  return (
    <>
      <JsonLd data={localBusinessSchema(location)} />
      <Hero
        image={content.image}
        eyebrow={`Serving ${location.city}, Texas`}
        title={
          <>
            {location.city} <span className="text-gold-light">Criminal Defense Attorney</span>
          </>
        }
        subtitle={content.subtitle}
        breadcrumbs={[
          { name: "Areas We Serve", path: ROUTES.locations },
          { name: location.city, path: location.href },
        ]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={location.counties.join(" · ")} title={`Criminal Defense for ${location.city}`} />
            <div className="prose-site mt-8">
              {content.intro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5 lg:pt-16">
            <div className="rounded-sm border border-white/10 bg-navy/40 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                Our Office, Serving {location.city}
              </p>
              <address className="mt-5 space-y-4 not-italic text-mist">
                <p className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>
                    {FIRM.name}
                    <br />
                    {FIRM.address.street}
                    <br />
                    {FIRM.address.city}, {FIRM.address.region} {FIRM.address.postalCode}
                  </span>
                </p>
                <p className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <a href={FIRM.phoneHref} className="text-bone hover:text-gold-light">
                    {FIRM.phone}
                  </a>
                </p>
                <p className="flex gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <a href={`mailto:${FIRM.email}`} className="break-all text-bone hover:text-gold-light">
                    {FIRM.email}
                  </a>
                </p>
              </address>
              {location.slug !== "dallas" && (
                <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-mist">
                  {FIRM.name} has one office, in Dallas, and does not maintain an office in {location.city}.
                </p>
              )}
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="ink-soft">
        <SectionHeading eyebrow="Practice Areas" title={`Charges We Defend in ${location.city}`} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRACTICE_AREAS.map((area, i) => (
            <FadeUp key={area.href} delay={i * 0.1} className="h-full">
              <PracticeCard
                icon={area.icon}
                title={area.name}
                description={content.practiceBlurbs[area.slug as keyof LocationContent["practiceBlurbs"]]}
                href={area.href}
                image={area.image}
              />
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Local Courts" title={content.courts.title} />
          </div>
          <div className="prose-site lg:col-span-7">
            {content.courts.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            <p>
              Not sure what happens next? Read{" "}
              <Link href={ROUTES.afterArrest}>what to do after an arrest in Texas</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title={`${location.city} Questions`} />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={content.faqs} />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Areas We Serve" title="Other North Texas Communities" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherLocations.map((loc) => (
            <li key={loc.href}>
              <Link
                href={loc.href}
                className="group flex items-center justify-between rounded-sm border border-white/10 px-6 py-5 transition-colors hover:border-gold/60 hover:bg-white/[0.02]"
              >
                <span>
                  <span className="block font-display text-xl text-bone">{loc.city}</span>
                  <span className="mt-1 block text-sm text-mist">{loc.counties[0]}</span>
                </span>
                <MapPin aria-hidden="true" className="h-5 w-5 text-gold transition-transform group-hover:-translate-y-0.5" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 max-w-3xl">
          <LegalInfoNote />
        </div>
      </Section>

      <CtaBand title={`Facing Charges in ${location.city}?`} />
    </>
  );
}
