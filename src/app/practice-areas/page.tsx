import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { FIRM } from "@/lib/site";
import { LOCATIONS, PRACTICE_AREAS, ROUTES } from "@/lib/routes";
import { IMAGES } from "@/content/images";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeUp } from "@/components/ui/FadeUp";
import { PracticeCard } from "@/components/ui/PracticeCard";
import { InfoCard } from "@/components/ui/InfoCard";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Personal Injury Practice Areas in Dallas",
  description:
    "Explore Gauthier Law Firm's personal injury practice areas: car accident and slip and fall claims in Dallas, Collin, and Denton Counties. Call (214) 377-0786.",
  path: ROUTES.practiceAreas,
});

const STAGES = [
  {
    title: "Early review",
    text: "Deadlines, available insurance, and the evidence that disappears first are identified right away.",
  },
  {
    title: "Investigation",
    text: "Crash or incident reports, photographs, video, and witness accounts are gathered while they still exist.",
  },
  {
    title: "Treatment and documentation",
    text: "Medical records and bills are assembled as treatment progresses, because they establish what the injury required.",
  },
  {
    title: "Negotiation or suit",
    text: "The claim is presented to the insurer, and suit is filed when that process stalls or a deadline nears.",
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <Hero
        image={IMAGES.gavel}
        eyebrow="Practice Areas"
        title={
          <>
            Personal Injury <span className="text-gold-light">Practice Areas</span>
          </>
        }
        subtitle={`${FIRM.name} concentrates on two kinds of injury claims: car accidents and slip and fall.`}
        breadcrumbs={[{ name: "Practice Areas", path: ROUTES.practiceAreas }]}
      />

      <Section>
        <SectionHeading
          eyebrow="What We Handle"
          title="Claims Avia Gauthier Handles"
          intro="Each practice area page explains how Texas law treats the claim, what compensation can cover, and what shapes the outcome."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PRACTICE_AREAS.map((area, i) => (
            <FadeUp key={area.href} delay={i * 0.12} className="h-full">
              <PracticeCard
                icon={area.icon}
                title={area.name}
                description={area.blurb}
                href={area.href}
                image={area.image}
              />
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section tone="ink-soft">
        <SectionHeading
          eyebrow="The Process"
          title="How an Injury Claim Typically Moves Forward"
          intro="Every claim is different, but most follow a similar path. Knowing it can make the process less overwhelming."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage, i) => (
            <FadeUp key={stage.title} delay={i * 0.08} className="h-full">
              <InfoCard title={stage.title} step={i + 1}>
                {stage.text}
              </InfoCard>
            </FadeUp>
          ))}
        </div>
        <p className="mt-10 text-mist">
          Just hurt in a crash? Start with{" "}
          <Link href={ROUTES.afterAccident} className="text-gold-light underline underline-offset-4">
            what to do after a car accident in Texas
          </Link>
          .
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Where We Practice" title="Serving Dallas, Collin, and Denton Counties" />
        <ul className="mt-10 flex flex-wrap gap-3">
          {LOCATIONS.map((loc) => (
            <li key={loc.href}>
              <Link
                href={loc.href}
                className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-bone transition-colors hover:border-gold-light hover:text-gold-light"
              >
                {loc.city}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={ROUTES.locations}
              className="inline-flex rounded-full border border-gold/50 px-5 py-2.5 text-gold-light transition-colors hover:bg-gold/10"
            >
              All areas we serve
            </Link>
          </li>
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
