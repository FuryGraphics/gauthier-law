import { PRACTICE_AREAS, ROUTES } from "@/lib/routes";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PracticeCard } from "@/components/ui/PracticeCard";

export default function NotFound() {
  return (
    <>
      <Hero
        title="Page Not Found"
        subtitle="The page you're looking for may have moved. Try one of the links below, or call the firm directly."
        secondaryCta={{ label: "Back to Home", href: ROUTES.home }}
      />
      <Section>
        <SectionHeading title="Practice Areas" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRACTICE_AREAS.map((area) => (
            <PracticeCard key={area.href} icon={area.icon} title={area.name} description={area.blurb} href={area.href} />
          ))}
        </div>
      </Section>
    </>
  );
}
