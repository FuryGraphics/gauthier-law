import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { FIRM } from "@/lib/site";
import { LOCATIONS, PRACTICE_AREAS, ROUTES } from "@/lib/routes";
import { attorneySchema } from "@/lib/schema";
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
  title: "Avia Gauthier, Dallas Criminal Defense Attorney",
  description:
    "Meet Avia Gauthier, the Dallas criminal defense attorney behind Gauthier Law Firm, defending DWI, drug, and assault family-violence cases in North Texas.",
  path: ROUTES.attorney,
  ogType: "profile",
});

const CREDENTIALS = [
  { label: "Bar Admission", value: "[INSERT VERIFIED BAR ADMISSION(S) AND YEAR]" },
  { label: "Education", value: "[INSERT LAW SCHOOL AND DEGREE]" },
  { label: "Professional Memberships", value: "[INSERT VERIFIED MEMBERSHIPS, IF ANY]" },
  { label: "Courts", value: "[INSERT COURTS ADMITTED TO PRACTICE BEFORE]" },
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
    text: "Reports, video, testing records, and deadlines are reviewed closely, because details can change how a case should be approached.",
  },
  {
    icon: "scale" as const,
    title: "Informed decisions",
    text: "Options are laid out honestly, including the risks, so each client can make decisions about their own case.",
  },
];

export default function AttorneyPage() {
  return (
    <>
      <JsonLd data={attorneySchema()} />
      <Hero
        image={IMAGES.lawLibrary}
        eyebrow="About the Attorney"
        title={
          <>
            Avia Gauthier, <span className="text-gold-light">Criminal Defense Attorney</span>
          </>
        }
        subtitle={`${FIRM.attorney} leads ${FIRM.name}, a Dallas practice defending people charged with DWI, drug offenses, and assault family-violence.`}
        breadcrumbs={[{ name: "About Avia Gauthier", path: ROUTES.attorney }]}
      />

      <Section>
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            {/* TODO(client): replace with a professional portrait of Avia Gauthier. */}
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-sm border border-gold/40 bg-navy">
              <Image
                src="/brand/logo-mark.png"
                alt=""
                aria-hidden="true"
                width={255}
                height={256}
                className="absolute top-1/2 left-1/2 w-24 -translate-x-1/2 -translate-y-1/2 opacity-30"
              />
              <p className="absolute inset-x-0 bottom-8 text-center text-sm tracking-wide text-mist">
                [INSERT ATTORNEY PORTRAIT]
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Biography" title="About Avia Gauthier" />
            <div className="prose-site mt-8">
              <p>
                Avia Gauthier is the attorney behind {FIRM.name}, a criminal defense practice based in North Dallas.
                The firm represents people charged with{" "}
                <Link href={PRACTICE_AREAS[0].href}>DWI</Link>,{" "}
                <Link href={PRACTICE_AREAS[1].href}>drug offenses</Link>, and{" "}
                <Link href={PRACTICE_AREAS[2].href}>assault family-violence</Link> in Dallas, Collin, and Denton
                Counties.
              </p>
              <p>[INSERT VERIFIED BIOGRAPHY: background, how Avia came to criminal defense, and relevant experience.]</p>
              <p>
                A criminal charge is often one of the most stressful experiences in a person&apos;s life. Avia&apos;s
                goal is to make sure every client understands the charge, the process, and the choices ahead.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ink-soft">
        <SectionHeading eyebrow="Credentials" title="Education and Admissions" />
        <dl className="mt-10 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2">
          {CREDENTIALS.map((item) => (
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
        <SectionHeading eyebrow="Practice Areas" title="Cases Avia Gauthier Handles" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
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
