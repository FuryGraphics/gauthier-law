import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { FIRM } from "@/lib/site";
import { LOCATIONS, PRACTICE_AREAS, ROUTES, type PracticeArea } from "@/lib/routes";
import type { PracticeContent } from "@/content/practice-areas";
import { IMAGES } from "@/content/images";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeUp } from "@/components/ui/FadeUp";
import { Callout, InfoCard } from "@/components/ui/InfoCard";
import { FactTable } from "@/components/ui/FactTable";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PracticeCard } from "@/components/ui/PracticeCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LegalInfoNote } from "@/components/ui/LegalInfoNote";
import { CtaBand } from "@/components/ui/CtaBand";

/** Shared layout for the practice-area pages. Emits FAQPage + BreadcrumbList schema. */
export function PracticeAreaTemplate({ area, content }: { area: PracticeArea; content: PracticeContent }) {
  const otherAreas = PRACTICE_AREAS.filter((p) => p.slug !== area.slug);

  return (
    <>
      <Hero
        image={area.image}
        eyebrow={content.hero.eyebrow}
        title={
          <>
            {content.hero.title} <span className="text-gold-light">{content.hero.accent}</span>
          </>
        }
        subtitle={content.hero.subtitle}
        breadcrumbs={[
          { name: "Practice Areas", path: ROUTES.practiceAreas },
          { name: area.name, path: area.href },
        ]}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Overview" title={content.overview.title} />
            <div className="prose-site mt-8">
              {content.overview.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="space-y-6 lg:col-span-5 lg:pt-16">
            <Callout title={content.callout.title}>{content.callout.text}</Callout>
            <div className="rounded-sm border border-white/10 bg-navy/40 p-7">
              <p className="font-display text-2xl text-bone">Talk with Avia Gauthier</p>
              <p className="mt-3 leading-relaxed text-mist">
                Get answers about your injuries, your deadlines, and your options.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink href={FIRM.phoneHref}>
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  Call {FIRM.phone}
                </ButtonLink>
                <ButtonLink href={ROUTES.contact} variant="outline">
                  Send a Message
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ink-soft">
        <SectionHeading eyebrow="The Details" title={content.facts.title} intro={content.facts.intro} />
        <div className="mt-10">
          <FactTable
            caption={content.facts.title}
            columns={content.facts.columns}
            rows={content.facts.rows}
            note={content.facts.note}
          />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What Matters" title={content.issues.title} intro={content.issues.intro} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.issues.items.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.06} className="h-full">
              <InfoCard title={item.title} icon={item.icon}>
                {item.text}
              </InfoCard>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section id="faq" tone="navy" backdrop={IMAGES.lawLibrary}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title={`${area.name} Questions`} />
            <p className="mt-6 leading-relaxed text-mist">
              More questions? See the general <Link href={ROUTES.faq} className="text-gold-light underline underline-offset-4">injury FAQ</Link> or
              read <Link href={ROUTES.afterAccident} className="text-gold-light underline underline-offset-4">what to do after a car accident</Link>.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={content.faqs} emitSchema />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Related" title="Other Practice Areas" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {otherAreas.map((other) => (
            <PracticeCard
              key={other.href}
              icon={other.icon}
              title={other.name}
              description={other.blurb}
              href={other.href}
              image={other.image}
            />
          ))}
        </div>
        <div className="mt-14 border-t border-white/10 pt-10">
          <h3 className="text-xl text-bone">{area.name} Claims Across North Texas</h3>
          <ul className="mt-5 flex flex-wrap gap-3">
            {LOCATIONS.map((loc) => (
              <li key={loc.href}>
                <Link
                  href={loc.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-bone transition-colors hover:border-gold-light hover:text-gold-light"
                >
                  <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
                  {loc.city}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 max-w-3xl">
            <LegalInfoNote />
          </div>
        </div>
      </Section>

      <CtaBand title={content.ctaTitle} />
    </>
  );
}
