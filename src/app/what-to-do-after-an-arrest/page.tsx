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
  title: "What to Do After an Arrest in Texas",
  description:
    "Arrested in Dallas, Collin, or Denton County? Learn what to do next: your rights, bail and bond conditions, key deadlines, and when to call a defense lawyer.",
  path: ROUTES.afterArrest,
});

const STEPS = [
  {
    title: "Stay calm and don't resist",
    text: "Even if you believe the arrest is wrong, physically resisting or arguing can lead to additional charges. Challenges to an arrest belong in court.",
  },
  {
    title: "Use your right to remain silent",
    text: "You can politely decline to answer questions and say you want to speak with a lawyer. Statements made to police, even casual ones, can be used as evidence.",
  },
  {
    title: "Don't consent to searches",
    text: "You can say you don't consent to a search of your car, phone, or home. Don't physically interfere if officers search anyway; whether the search was lawful can be addressed later.",
  },
  {
    title: "Be careful on jail phones",
    text: "Calls from jail are generally recorded. Don't discuss the facts of your case with anyone except your attorney.",
  },
  {
    title: "Understand your bond conditions",
    text: "A magistrate sets bail and may impose conditions, such as no contact with certain people or an ignition interlock. Violating a condition can put you back in jail.",
  },
  {
    title: "Write down what happened",
    text: "As soon as you can, note the time, location, what officers said, and any witnesses. Share those notes only with your attorney.",
  },
];

export default function AfterArrestPage() {
  return (
    <>
      <Hero
        image={IMAGES.courthouseCorridor}
        eyebrow="Resources"
        title={
          <>
            What to Do After an <span className="text-gold-light">Arrest in Texas</span>
          </>
        }
        subtitle="The first days after an arrest can shape everything that follows. Here's what to know about your rights, your bond, and the deadlines that can't wait."
        breadcrumbs={[{ name: "What to Do After an Arrest", path: ROUTES.afterArrest }]}
      />

      <Section>
        <SectionHeading
          eyebrow="Step by Step"
          title="Protecting Yourself During and After an Arrest"
          intro="These general steps apply to most arrests. Your situation may call for different advice, so talk with a defense attorney about your case."
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
            <SectionHeading eyebrow="Deadlines" title="Time-Sensitive Issues by Charge" />
            <p className="mt-6 leading-relaxed text-mist">
              Some consequences start before your first court date. These are among the most important to know about.
            </p>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <Callout title="DWI: 15 days to protect your license">
              After a DWI arrest, you generally have 15 days from receiving a notice of suspension to request an ALR
              hearing. Otherwise, the suspension typically takes effect automatically.
            </Callout>
            <Callout title="Family violence: protective orders apply immediately">
              An emergency protective order or bond condition can bar contact with the alleged victim or returning home,
              starting right away, even if the other person wants contact.
            </Callout>
            <Callout title="Drug charges: evidence and searches">
              Video, lab records, and details about how a search happened are easier to obtain and preserve early in a
              case.
            </Callout>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="The Road Ahead" title="What Happens Next" />
          </div>
          <div className="prose-site lg:col-span-7">
            <p>
              After an arrest, a person is generally brought before a magistrate, who explains the accusation, sets bail,
              and may impose bond conditions. Once released, the next step is usually an initial court setting.
            </p>
            <p>
              Before and after that setting, the prosecutor reviews the case and decides whether to file formal charges.
              Many cases involve several court settings as evidence is exchanged, motions are considered, and the case
              moves toward dismissal, a negotiated resolution, or trial.
            </p>
            <p>
              Talking with a defense attorney early can help you avoid missed deadlines and understand your options.{" "}
              <Link href={ROUTES.contact}>Contact {FIRM.name}</Link> or call {FIRM.phone}. You can also browse the{" "}
              <Link href={ROUTES.faq}>criminal defense FAQ</Link>.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading eyebrow="Practice Areas" title="Learn About Your Charge" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRACTICE_AREAS.map((area) => (
            <PracticeCard key={area.href} icon={area.icon} title={area.name} description={area.blurb} href={area.href} />
          ))}
        </div>
        <div className="mt-12 max-w-3xl">
          <LegalInfoNote />
        </div>
      </Section>

      <CtaBand title="Arrested? Talk to a Defense Attorney" />
    </>
  );
}
