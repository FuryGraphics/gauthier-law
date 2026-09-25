import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { FIRM } from "@/lib/site";
import { LOCATIONS, PRACTICE_AREAS, ROUTES } from "@/lib/routes";
import { IMAGES } from "@/content/images";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeUp } from "@/components/ui/FadeUp";
import { PracticeCard } from "@/components/ui/PracticeCard";
import { ImageFeature } from "@/components/ui/ImageFeature";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Personal Injury Lawyer for Dallas, Collin & Denton Counties",
  description:
    "Gauthier Law Firm serves Dallas, Plano, McKinney, Frisco, and Denton. Attorney Avia Gauthier handles car accident and slip and fall claims across North Texas.",
  path: ROUTES.locations,
});

const inlineLink = "text-gold-light underline underline-offset-4";

const [carAccidents, slipAndFall] = PRACTICE_AREAS;

const CITY_BLURBS: Record<string, string> = {
  dallas: "Home of the firm's office, and the county where most of its claims arise.",
  plano: "Split between Collin and Denton Counties, which affects where a suit is filed.",
  mckinney: "The Collin County seat, where Collin County civil cases are filed.",
  frisco: "A fast-growing city spanning both Collin and Denton Counties.",
  denton: "The Denton County seat, where I-35E and I-35W meet.",
};

const COUNTIES = [
  {
    name: "Dallas County",
    text: "Civil cases are generally heard at the George L. Allen Sr. Courts Building in downtown Dallas.",
  },
  {
    name: "Collin County",
    text: "Civil cases are generally heard at the Russell A. Steindam Courts Building in McKinney.",
  },
  {
    name: "Denton County",
    text: "Civil cases are generally heard at the Denton County Courts Building in Denton.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <Hero
        image={IMAGES.heroSkyline}
        eyebrow="Areas We Serve"
        title={
          <>
            Injury Claims Across <span className="text-gold-light">North Texas</span>
          </>
        }
        subtitle={`From one office in Dallas, attorney ${FIRM.attorney} represents injured people throughout Dallas, Collin, and Denton Counties.`}
        breadcrumbs={[{ name: "Areas We Serve", path: ROUTES.locations }]}
      />

      <Section>
        <SectionHeading
          eyebrow="Cities"
          title="Communities We Serve"
          intro="Choose your city for information about local roads, courts, and the claims the firm handles there."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc, i) => (
            <FadeUp key={loc.href} delay={i * 0.08} className="h-full">
              <PracticeCard
                icon="mapPin"
                title={`${loc.city}, TX`}
                description={CITY_BLURBS[loc.slug]}
                href={loc.href}
              />
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section tone="ink-soft">
        <SectionHeading eyebrow="Counties" title="Three Counties, Three Court Systems" intro="Most injury claims settle with an insurer, but if a lawsuit becomes necessary, the county decides where it is filed." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {COUNTIES.map((county) => (
            <div key={county.name} className="rounded-sm border border-white/10 p-7">
              <h3 className="text-2xl text-bone">{county.name}</h3>
              <span aria-hidden="true" className="mt-4 block h-0.5 w-10 bg-gold" />
              <p className="mt-4 leading-relaxed text-mist">{county.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-mist">
          Some cities, including Dallas, Plano, and Frisco, cross county lines. Where a collision or fall happened
          generally determines which county&apos;s courts would hear a suit.
        </p>
      </Section>

      <Section>
        <ImageFeature image={IMAGES.officeDesk} eyebrow="Practice Areas" title="Focused on Two Kinds of Claims">
          <p>
            {FIRM.name} concentrates on{" "}
            <Link href={carAccidents.href} className={inlineLink}>
              car accident
            </Link>{" "}
            and{" "}
            <Link href={slipAndFall.href} className={inlineLink}>
              slip and fall
            </Link>{" "}
            claims, wherever in these three counties they arise.
          </p>
          <p>
            Have questions about a specific claim?{" "}
            <Link href={ROUTES.contact} className={inlineLink}>
              Contact the firm
            </Link>{" "}
            or call {FIRM.phone}.
          </p>
        </ImageFeature>
      </Section>

      <CtaBand />
    </>
  );
}
