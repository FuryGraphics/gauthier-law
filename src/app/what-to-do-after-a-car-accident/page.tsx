import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { FIRM } from "@/lib/site";
import { PRACTICE_AREAS, ROUTES } from "@/lib/routes";
import { IMAGES } from "@/content/images";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeUp } from "@/components/ui/FadeUp";
import { Callout, InfoCard } from "@/components/ui/InfoCard";
import { PracticeCard } from "@/components/ui/PracticeCard";
import { LegalInfoNote } from "@/components/ui/LegalInfoNote";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = pageMetadata({
  title: "What to Do After a Car Accident in Texas",
  description:
    "Hurt in a crash in Dallas, Collin, or Denton County? Learn what to do next: medical care, evidence, insurance calls, and the deadlines that can end a claim.",
  path: ROUTES.afterAccident,
});

const STEPS = [
  {
    title: "Get medical attention",
    text: "Adrenaline hides injuries, and some don't surface for days. Being examined protects your health and creates the record that ties an injury to the crash.",
  },
  {
    title: "Report the collision",
    text: "Call police to the scene where appropriate and make sure a crash report is created. Get the report number before you leave.",
  },
  {
    title: "Photograph everything",
    text: "Both vehicles, the damage, the positions, skid marks, traffic controls, the weather, and your visible injuries. More photos than you think you need.",
  },
  {
    title: "Collect the details",
    text: "The other driver's name, insurance information, and plate, plus names and numbers for any witnesses, who are often gone by the next day.",
  },
  {
    title: "Be careful with insurers",
    text: "Report the crash to your own insurer as your policy requires, but you're generally not obligated to give the other driver's insurer a recorded statement.",
  },
  {
    title: "Keep every document",
    text: "Bills, discharge instructions, work notes, repair estimates, and letters from any insurance company. These become the backbone of the claim.",
  },
];

export default function AfterAccidentPage() {
  return (
    <>
      <Hero
        image={IMAGES.carAccident}
        eyebrow="Resources"
        title={
          <>
            What to Do After a <span className="text-gold-light">Car Accident in Texas</span>
          </>
        }
        subtitle="The days right after a crash shape everything that follows. Here's what protects your health, your evidence, and your claim."
        breadcrumbs={[{ name: "What to Do After a Car Accident", path: ROUTES.afterAccident }]}
      />

      <Section>
        <SectionHeading
          eyebrow="Step by Step"
          title="Protecting Yourself After a Collision"
          intro="These general steps apply to most crashes. Your situation may call for different advice, so talk with a lawyer about your case."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <FadeUp key={step.title} delay={i * 0.06} className="h-full">
              <InfoCard title={step.title} step={i + 1}>
                {step.text}
              </InfoCard>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section tone="ink-soft">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Deadlines" title="Time-Sensitive Issues" />
            <p className="mt-6 leading-relaxed text-mist">
              Some steps can&apos;t wait for the insurance process to play out. These are the ones that most often cost
              people a claim.
            </p>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <Callout title="Two years to file suit">
              Most Texas injury lawsuits must be filed within two years of the date of the injury. Miss that deadline and
              the claim is generally gone, no matter how strong it was.
            </Callout>
            <Callout title="Government claims move faster">
              If a city, county, transit authority, or other governmental unit may be responsible, written notice is
              often required within months rather than years.
            </Callout>
            <Callout title="Evidence gets overwritten">
              Surveillance and traffic video is frequently recorded over within days or weeks, and vehicles get repaired
              or scrapped. Preserving proof early can decide a disputed case.
            </Callout>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="The Road Ahead" title="How a Claim Usually Unfolds" />
          </div>
          <div className="prose-site lg:col-span-7">
            <p>
              Once a claim is reported, an adjuster investigates and assigns fault. Meanwhile, you treat. Rushing to
              settle before your doctors know what recovery looks like is the most common way people end up paying for
              their own future care.
            </p>
            <p>
              When treatment is complete or the picture is clear, the claim is usually presented with the records and
              bills supporting it, and negotiation follows. If the insurer disputes fault or the injuries, or won&apos;t
              make a reasonable offer, the next step is filing suit. Even then, most cases resolve before trial.
            </p>
            <p>
              Questions about your own situation? <Link href={ROUTES.contact}>Contact {FIRM.name}</Link> or call{" "}
              {FIRM.phone}. You can also read the <Link href={ROUTES.faq}>injury claim FAQ</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading eyebrow="Practice Areas" title="Learn About Your Claim" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PRACTICE_AREAS.map((area) => (
            <PracticeCard key={area.href} icon={area.icon} title={area.name} description={area.blurb} href={area.href} />
          ))}
        </div>
        <div className="mt-12 max-w-3xl">
          <LegalInfoNote />
        </div>
      </Section>

      <CtaBand title="Injured in a Crash? Talk to a Lawyer" />
    </>
  );
}
