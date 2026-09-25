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
  title: "Criminal Defense in Dallas, Collin & Denton Counties",
  description:
    "Gauthier Law Firm serves Dallas, Plano, McKinney, Frisco, and Denton. Attorney Avia Gauthier defends criminal charges across Dallas, Collin & Denton Counties.",
  path: ROUTES.locations,
});

const inlineLink = "text-gold-light underline underline-offset-4";

const [dwi, drug, afv] = PRACTICE_AREAS;
const PRACTICE_LINKS = { dwi: dwi.href, drug: drug.href, afv: afv.href };

const CITY_BLURBS: Record<string, string> = {
  dallas: "Home of the firm's office, with most cases heard in Dallas County courts.",
  plano: "Split between Collin and Denton Counties, which affects where a case is heard.",
  mckinney: "The Collin County seat, where most Collin County criminal cases are heard.",
  frisco: "A fast-growing city spanning both Collin and Denton Counties.",
  denton: "The Denton County seat and home to two major universities.",
};

const COUNTIES = [
  {
    name: "Dallas County",
    text: "Criminal cases are generally heard at the Frank Crowley Courts Building near downtown Dallas.",
  },
  {
    name: "Collin County",
    text: "Criminal cases are generally heard at the Russell A. Steindam Courts Building in McKinney.",
  },
  {
    name: "Denton County",
    text: "Criminal cases are generally heard at the Denton County Courts Building in Denton.",
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
            Criminal Defense Across <span className="text-gold-light">North Texas</span>
          </>
        }
        subtitle={`From one office in Dallas, attorney ${FIRM.attorney} represents people charged with crimes in Dallas, Collin, and Denton Counties.`}
        breadcrumbs={[{ name: "Areas We Serve", path: ROUTES.locations }]}
      />

      <Section>
        <SectionHeading
          eyebrow="Cities"
          title="Communities We Serve"
          intro="Choose your city for information about local courts and the charges the firm defends there."
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
        <SectionHeading eyebrow="Counties" title="Three Counties, Three Court Systems" />
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
          Some cities, including Dallas, Plano, and Frisco, cross county lines. The county where an alleged offense
          happened generally determines which courts hear the case.
        </p>
      </Section>

      <Section>
        <ImageFeature image={IMAGES.officeDesk} eyebrow="Practice Areas" title="Focused on Three Kinds of Cases">
          <p>
            {FIRM.name} concentrates on{" "}
            <Link href={PRACTICE_LINKS.dwi} className={inlineLink}>
              DWI
            </Link>
            ,{" "}
            <Link href={PRACTICE_LINKS.drug} className={inlineLink}>
              drug
            </Link>
            , and{" "}
            <Link href={PRACTICE_LINKS.afv} className={inlineLink}>
              assault family-violence
            </Link>{" "}
            cases, wherever in these three counties they arise.
          </p>
          <p>
            Have questions about a specific case?{" "}
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
