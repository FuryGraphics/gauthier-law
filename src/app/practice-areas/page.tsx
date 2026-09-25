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
  title: "Criminal Defense Practice Areas in Dallas",
  description:
    "Explore Gauthier Law Firm's criminal defense practice areas: DWI, drug charges, and assault family-violence cases in Dallas, Collin, and Denton Counties.",
  path: ROUTES.practiceAreas,
});

const STAGES = [
  {
    title: "Early review",
    text: "Deadlines, bond conditions, and license issues are identified right away, before they become problems.",
  },
  {
    title: "Evidence investigation",
    text: "Police reports, video, lab results, and witness information are gathered and examined for weaknesses.",
  },
  {
    title: "Pretrial strategy",
    text: "Motions, negotiations, and program eligibility are evaluated against the evidence in your case.",
  },
  {
    title: "Resolution or trial",
    text: "You get a clear explanation of your options, so decisions about your case are informed ones.",
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
            Criminal Defense <span className="text-gold-light">Practice Areas</span>
          </>
        }
        subtitle={`${FIRM.name} concentrates on three kinds of criminal cases: DWI, drug charges, and assault family-violence.`}
        breadcrumbs={[{ name: "Practice Areas", path: ROUTES.practiceAreas }]}
      />

      <Section>
        <SectionHeading
          eyebrow="What We Handle"
          title="Charges Avia Gauthier Defends"
          intro="Each practice area page explains how Texas law treats the charge, the penalties involved, and questions a defense can raise."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
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
          title="How a Criminal Case Typically Moves Forward"
          intro="Every case is different, but most follow a similar path. Knowing it can make the process less overwhelming."
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
          Just arrested? Start with{" "}
          <Link href={ROUTES.afterArrest} className="text-gold-light underline underline-offset-4">
            what to do after an arrest in Texas
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
