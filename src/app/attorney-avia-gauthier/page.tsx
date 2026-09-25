import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { FIRM } from "@/lib/site";
import { LOCATIONS, PRACTICE_AREAS, ROUTES } from "@/lib/routes";
import { absoluteUrl, attorneySchema } from "@/lib/schema";
import { IMAGES } from "@/content/images";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeUp } from "@/components/ui/FadeUp";
import { InfoCard } from "@/components/ui/InfoCard";
import { PracticeCard } from "@/components/ui/PracticeCard";
import { CtaBand } from "@/components/ui/CtaBand";

// No credentials, education, bar admissions, awards, or years in practice were
// supplied. Every such fact stays a bracketed placeholder until the client verifies
// it — and verified facts should then also be passed to attorneySchema().

export const metadata = pageMetadata({
  title: "Avia Gauthier, Dallas Personal Injury Attorney",
  description:
    "Meet Avia Gauthier, the Dallas personal injury attorney behind Gauthier Law Firm, representing people hurt in car accidents and falls across North Texas.",
  path: ROUTES.attorney,
  ogType: "profile",
});

// Only intake-verified facts. When the client supplies credentials (bar admission,
// law school, memberships), add them here and to attorneySchema().
const AT_A_GLANCE = [
  { label: "Focus", value: "Personal injury" },
  { label: "Claims Handled", value: "Car accidents · Slip and fall" },
  { label: "Areas Served", value: "Dallas, Collin, and Denton Counties" },
  { label: "Office", value: "15150 Preston Road, Suite 300, Dallas, TX 75248" },
];

const APPROACH = [
  {
    icon: "message" as const,
    title: "Direct communication",
    text: "Clients work with the attorney handling their case and get plain-language explanations of what is happening and why.",
  },
  {
    icon: "search" as const,
    title: "Attention to the evidence",
    text: "Crash reports, photographs, video, and medical records are reviewed closely, because details decide how a claim is valued.",
  },
  {
    icon: "scale" as const,
    title: "Informed decisions",
    text: "Settlement offers and their trade-offs are explained plainly, so each client decides with the facts in hand.",
  },
];

export default function AttorneyPage() {
  return (
    <>
      <JsonLd data={attorneySchema({ image: absoluteUrl(IMAGES.aviaPortrait.src) })} />
      <Hero
        image={IMAGES.lawLibrary}
        eyebrow="About the Attorney"
        title={
          <>
            Avia Gauthier, <span className="text-gold-light">Personal Injury Attorney</span>
          </>
        }
        subtitle={`${FIRM.attorney} leads ${FIRM.name}, a Dallas practice representing people injured in car accidents and falls.`}
        breadcrumbs={[{ name: "About Avia Gauthier", path: ROUTES.attorney }]}
      />

      <Section>
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-sm border border-gold/40 bg-navy">
              <Image
                src={IMAGES.aviaPortrait.src}
                alt={IMAGES.aviaPortrait.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center text-sm text-mist">
              {FIRM.attorney}, {FIRM.name}
            </p>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Biography" title="About Avia Gauthier" />
            <div className="prose-site mt-8">
              <p>
                Avia Gauthier is the attorney behind {FIRM.name}, a personal injury practice based in North Dallas.
                The firm represents people hurt in{" "}
                <Link href={PRACTICE_AREAS[0].href}>car accidents</Link> and in{" "}
                <Link href={PRACTICE_AREAS[1].href}>slip and fall</Link> incidents throughout Dallas, Collin, and
                Denton Counties.
              </p>
              {/* TODO(client): add Avia's verified background and experience here. */}
              <p>
                The firm handles injury claims from the first call through resolution, whether that means a negotiated
                settlement with an insurance company or a lawsuit. Keeping the practice narrow means the same questions
                come up again and again: who was at fault, what the injuries genuinely require, and what insurance is
                actually available to cover it.
              </p>
              <p>
                Being hurt through someone else&apos;s carelessness upends work, family, and finances all at once.
                Avia&apos;s goal is to make sure every client understands the process, the timeline, and the choices
                ahead.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ink-soft">
        <SectionHeading eyebrow="At a Glance" title="The Practice in Brief" />
        <dl className="mt-10 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2">
          {AT_A_GLANCE.map((item) => (
            <div key={item.label} className="bg-ink-soft p-7">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">{item.label}</dt>
              <dd className="mt-3 text-bone">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <SectionHeading eyebrow="Approach" title="What Clients Can Expect" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {APPROACH.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1} className="h-full">
              <InfoCard title={item.title} icon={item.icon}>
                {item.text}
              </InfoCard>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section tone="navy" backdrop={IMAGES.courthouseCorridor}>
        <SectionHeading eyebrow="Practice Areas" title="Claims Avia Gauthier Handles" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PRACTICE_AREAS.map((area) => (
            <PracticeCard key={area.href} icon={area.icon} title={area.name} description={area.blurb} href={area.href} />
          ))}
        </div>
        <p className="mt-10 text-mist">
          Serving{" "}
          {LOCATIONS.map((loc, i) => (
            <span key={loc.href}>
              {i > 0 && (i === LOCATIONS.length - 1 ? ", and " : ", ")}
              <Link href={loc.href} className="text-gold-light hover:text-bone">
                {loc.city}
              </Link>
            </span>
          ))}
          .
        </p>
      </Section>

      <CtaBand title="Talk With Avia Gauthier About Your Case" />
    </>
  );
}
