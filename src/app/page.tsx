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
  title: "Dallas Personal Injury Lawyer",
  description:
    "Dallas personal injury lawyer Avia Gauthier represents people hurt in car accidents and slip and fall incidents across Dallas, Collin & Denton Counties.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={legalServiceSchema()} />
      <Hero
        image={IMAGES.heroSkyline}
        eyebrow="Dallas Personal Injury"
        title={
          <>
            Injured in <span className="text-gold-light">North Texas?</span>
          </>
        }
        subtitle="Attorney Avia Gauthier represents people hurt in car accidents and falls across Dallas, Collin, and Denton Counties — and deals with the insurance company so you can focus on recovering."
      />

      <AreaMarquee />

      <Section>
        <SectionHeading eyebrow="Practice Areas" title="How We Can Help" intro="The firm handles two kinds of injury claims, and handles them closely." />
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
        <ImageFeature image={IMAGES.officeDesk} eyebrow="The Firm" title="Injury Claims, Handled in Dallas">
          <p>
            Gauthier Law Firm is a Dallas personal injury practice led by attorney Avia Gauthier. From the firm&apos;s
            office on Preston Road, Avia represents people hurt in collisions and in falls on unsafe property.
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
              eyebrow="Recently Injured?"
              title="The First Days Matter"
              intro="Evidence disappears and deadlines run while you are still recovering. Know what protects your claim."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={ROUTES.afterAccident}>What to Do After a Crash</ButtonLink>
              <ButtonLink href={ROUTES.faq} variant="outline">
                Read the FAQ
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7">
            {[
              { title: "Get treated", text: "Medical records are what connect an injury to the crash or the fall." },
              { title: "Mind the deadline", text: "Most Texas injury suits must be filed within two years of the injury." },
              { title: "Careful with insurers", text: "An early recorded statement or quick settlement can cost you later." },
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
