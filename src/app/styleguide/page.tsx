import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRACTICE_AREAS } from "@/lib/routes";
import { TESTIMONIALS } from "@/content/testimonials";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PracticeCard } from "@/components/ui/PracticeCard";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBand } from "@/components/ui/CtaBand";

// Dev-only QA page that renders every shared component. Returns 404 in production.

export const metadata: Metadata = {
  title: { absolute: "Component Styleguide" },
  robots: { index: false, follow: false },
};

const SAMPLE_FAQS = [
  { question: "Sample question one?", answer: "Placeholder answer used to test the accordion layout." },
  {
    question: "Sample question two, which is deliberately longer to test wrapping on narrow screens?",
    answer: "First paragraph of a multi-paragraph answer.\n\nSecond paragraph of the same answer.",
  },
  { question: "Sample question three?", answer: "Placeholder answer used to test the accordion layout." },
];

export default function StyleguidePage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <>
      <Hero
        eyebrow="Internal QA"
        title={
          <>
            Component <span className="text-gold-light">Styleguide</span>
          </>
        }
        subtitle="Every shared component, rendered with placeholder content."
        breadcrumbs={[{ name: "Styleguide", path: "/styleguide" }]}
      />
      <Section>
        <SectionHeading eyebrow="Cards" title="Practice cards" intro="Icon, title, one-line description, Learn More." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRACTICE_AREAS.map((area) => (
            <PracticeCard
              key={area.href}
              icon={area.icon}
              title={area.name}
              description={area.blurb}
              href={area.href}
              image={area.image}
            />
          ))}
        </div>
      </Section>
      <Section tone="navy">
        <SectionHeading eyebrow="Carousel" title="Testimonials" align="center" />
        <TestimonialCarousel testimonials={TESTIMONIALS} className="mt-12" />
      </Section>
      <Section>
        <SectionHeading eyebrow="Accordion" title="FAQ accordion" />
        <FaqAccordion items={SAMPLE_FAQS} className="mt-10 max-w-3xl" />
      </Section>
      <Section tone="ink-soft">
        <div className="prose-site max-w-3xl">
          <h2>Long-form prose</h2>
          <p>
            Body copy for practice pages, the disclaimer, and the privacy policy. <a href="#main">Inline link</a> and{" "}
            <strong>strong text</strong>.
          </p>
          <h3>Subheading</h3>
          <ul>
            <li>First list item</li>
            <li>Second list item</li>
          </ul>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
