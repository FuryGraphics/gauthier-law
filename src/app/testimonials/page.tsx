import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { FIRM } from "@/lib/site";
import { PRACTICE_AREAS, ROUTES } from "@/lib/routes";
import { IMAGES } from "@/content/images";
import { TESTIMONIALS } from "@/content/testimonials";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FacebookIcon } from "@/components/ui/icons";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "Client Testimonials",
  description:
    "Read what clients say about working with Gauthier Law Firm and Dallas criminal defense attorney Avia Gauthier on DWI, drug, and family-violence cases.",
  path: ROUTES.testimonials,
});

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        image={IMAGES.lawLibrary}
        eyebrow="Testimonials"
        title={
          <>
            What Clients <span className="text-gold-light">Say</span>
          </>
        }
        subtitle={`Feedback from people who have worked with ${FIRM.attorney} and ${FIRM.name}.`}
        breadcrumbs={[{ name: "Testimonials", path: ROUTES.testimonials }]}
      />

      <Section tone="navy" backdrop={IMAGES.courthouseColumns}>
        <SectionHeading eyebrow="Client Voices" title="Client Experiences" align="center" />
        <TestimonialCarousel testimonials={TESTIMONIALS} className="mt-12" />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Share Your Experience" title="Worked With the Firm?" />
            <p className="mt-6 text-lg leading-relaxed text-mist">
              If {FIRM.name} represented you, the firm welcomes your honest feedback. Please don&apos;t include
              confidential details about your case in a public review.
            </p>
            <div className="mt-8">
              <ButtonLink href={FIRM.facebook} variant="outline" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="h-4 w-4" />
                Visit us on Facebook
              </ButtonLink>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Learn More" title="Explore the Firm" />
            <ul className="mt-8 space-y-3 text-lg">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="text-gold-light hover:text-bone">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={ROUTES.attorney} className="text-gold-light hover:text-bone">
                  About Avia Gauthier
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-14 max-w-3xl text-sm leading-relaxed text-mist">
          Testimonials reflect the individual experiences of specific clients. They are not a guarantee, warranty, or
          prediction of the outcome of any other case. Prior results do not guarantee a similar outcome, and every case
          is different.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
