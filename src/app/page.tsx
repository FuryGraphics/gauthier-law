import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PRACTICE_AREAS, ROUTES } from "@/lib/routes";
import { legalServiceSchema } from "@/lib/schema";
import { IMAGES } from "@/content/images";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/ui/Hero";
import { AreaMarquee } from "@/components/ui/AreaMarquee";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeUp } from "@/components/ui/FadeUp";
import { PracticeCard } from "@/components/ui/PracticeCard";
import { ImageFeature } from "@/components/ui/ImageFeature";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InfoCard } from "@/components/ui/InfoCard";
import { CtaBand } from "@/components/ui/CtaBand";

// Homepage. Copy uses intake facts only. Texas attorney advertising: the client must
// review final copy before the homepage is filed/published.

export const metadata = pageMetadata({
  title: "Dallas Criminal Defense Lawyer",
  description:
    "Dallas criminal defense attorney Avia Gauthier defends clients facing DWI, drug, and assault family-violence charges in Dallas, Collin & Denton Counties.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={legalServiceSchema()} />
      <Hero
        image={IMAGES.heroSkyline}
        eyebrow="Dallas Criminal Defense"
        title={
          <>
            Criminal Defense for <span className="text-gold-light">North Texas</span>
          </>
        }
        subtitle="Attorney Avia Gauthier defends people charged with DWI, drug offenses, and assault family-violence across Dallas, Collin, and Denton Counties."
      />

      <AreaMarquee />

      <Section>
        <SectionHeading eyebrow="Practice Areas" title="How We Can Help" />
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
        <ImageFeature image={IMAGES.officeDesk} eyebrow="The Firm" title="Criminal Defense Rooted in Dallas">
          <p>
            Gauthier Law Firm is a Dallas criminal defense practice led by attorney Avia Gauthier. From the firm&apos;s
            office on Preston Road, Avia represents people charged with DWI, drug offenses, and assault family-violence.
          </p>
          <p>
            The firm serves clients in Dallas, Plano, McKinney, Frisco, Denton, and the surrounding communities. See{" "}
            <Link href={ROUTES.locations} className="text-gold-light underline underline-offset-4">
              all areas we serve
            </Link>
            .
          </p>
          <div className="pt-4">
            <ButtonLink href={ROUTES.attorney} variant="outline">
              Meet Avia Gauthier
            </ButtonLink>
          </div>
        </ImageFeature>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Recently Arrested?"
              title="The First Days Matter"
              intro="Some deadlines start running before your first court date. Know your rights and what to do next."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={ROUTES.afterArrest}>What to Do After an Arrest</ButtonLink>
              <ButtonLink href={ROUTES.faq} variant="outline">
                Read the FAQ
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7">
            {[
              { title: "Stay silent", text: "You can decline to answer questions and ask for a lawyer." },
              { title: "Mind deadlines", text: "After a DWI arrest, you generally have 15 days to request an ALR hearing." },
              { title: "Follow bond terms", text: "Violating a bond condition or protective order can mean new charges." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1} className="h-full">
                <InfoCard title={item.title} step={i + 1}>
                  {item.text}
                </InfoCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
