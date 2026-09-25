import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { FIRM } from "@/lib/site";
import { PRACTICE_AREAS, ROUTES } from "@/lib/routes";
import type { Faq } from "@/lib/schema";
import { IMAGES } from "@/content/images";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { LegalInfoNote } from "@/components/ui/LegalInfoNote";
import { CtaBand } from "@/components/ui/CtaBand";

// General FAQ. Per the schema strategy, FAQPage schema is reserved for the three
// practice-area pages, so this accordion does not emit it.

export const metadata = pageMetadata({
  title: "Criminal Defense FAQ",
  description:
    "Answers to common questions about criminal charges in Texas: arrests, bail, court dates, records, and working with Dallas defense attorney Avia Gauthier.",
  path: ROUTES.faq,
});

const GROUPS: { id: string; title: string; faqs: Faq[] }[] = [
  {
    id: "after-arrest",
    title: "After an Arrest",
    faqs: [
      {
        question: "Do I have to answer police questions?",
        answer:
          "Generally, no. You have the right to remain silent, and you can tell officers you want to speak with a lawyer before answering questions. You should still identify yourself when lawfully required and never physically resist an officer.",
      },
      {
        question: "How does bail work in Texas?",
        answer:
          "After an arrest, a person is typically brought before a magistrate, who sets bail and any bond conditions. Bond may be posted in cash, through a surety bond company, or in some cases on a personal bond. Bond conditions, such as no-contact orders or ignition interlock requirements, must be followed carefully.",
      },
      {
        question: "What if I missed a court date?",
        answer:
          "Contact a criminal defense attorney right away. Missing court can lead to a warrant and a new charge, but addressing it quickly can sometimes limit the consequences.",
      },
    ],
  },
  {
    id: "the-case",
    title: "Your Case",
    faqs: [
      {
        question: "What's the difference between a misdemeanor and a felony?",
        answer:
          "In Texas, misdemeanors are divided into Class A, B, and C offenses and are punishable by fines and up to one year in county jail. Felonies are more serious and range from state jail felonies to capital felonies, with possible prison sentences.",
      },
      {
        question: "What is deferred adjudication?",
        answer:
          "Deferred adjudication is a form of community supervision in which a judge postpones a finding of guilt. If the conditions are completed successfully, the case is dismissed without a conviction. It isn't available for every offense and can still have consequences, so it should be discussed with an attorney before it's accepted.",
      },
      {
        question: "Can my record be cleared?",
        answer:
          "Depending on how a case ended, you may be eligible for an expunction, which destroys records of an arrest, or an order of nondisclosure, which seals certain records from the public. Eligibility rules are specific to the offense and outcome.",
      },
      {
        question: "Can you guarantee how my case will turn out?",
        answer:
          "No. No ethical attorney can guarantee a result. Every case depends on its own facts, the evidence, and the court. Prior results do not guarantee a similar outcome.",
      },
    ],
  },
  {
    id: "working-with-the-firm",
    title: "Working With the Firm",
    faqs: [
      {
        question: "What types of cases does Gauthier Law Firm handle?",
        answer:
          "The firm concentrates on criminal defense for DWI, drug charges, and assault family-violence cases in Dallas, Collin, and Denton Counties.",
      },
      {
        question: "What should I bring to a consultation?",
        answer:
          "Bring any paperwork you received, such as bond documents, a citation, a notice of license suspension, or court notices, along with a list of questions. Please don't send confidential details through the website before speaking with the firm.",
      },
      {
        question: "Does contacting the firm create an attorney-client relationship?",
        answer:
          "No. Calling, emailing, chatting, or submitting a form does not by itself create an attorney-client relationship. That relationship begins only after the firm agrees to represent you.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Hero
        image={IMAGES.caseFiles}
        eyebrow="FAQ"
        title={
          <>
            Criminal Defense <span className="text-gold-light">Questions</span>
          </>
        }
        subtitle="Straightforward answers to questions people often have after an arrest in Texas."
        breadcrumbs={[{ name: "FAQ", path: ROUTES.faq }]}
      />

      {GROUPS.map((group, i) => (
        <Section key={group.id} id={group.id} tone={i % 2 ? "ink-soft" : "ink"}>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow={`Part ${i + 1}`} title={group.title} />
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={group.faqs} />
            </div>
          </div>
        </Section>
      ))}

      <Section tone="navy">
        <SectionHeading eyebrow="Charge-Specific Questions" title="Questions About a Specific Charge" />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {PRACTICE_AREAS.map((area) => (
            <li key={area.href}>
              <Link
                href={`${area.href}#faq`}
                className="block rounded-sm border border-white/10 px-6 py-5 text-lg text-bone transition-colors hover:border-gold/60 hover:text-gold-light"
              >
                {area.name} FAQ
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-mist">
          Recently arrested? Read{" "}
          <Link href={ROUTES.afterArrest} className="text-gold-light underline underline-offset-4">
            what to do after an arrest
          </Link>{" "}
          or call {FIRM.phone}.
        </p>
        <div className="mt-10 max-w-3xl">
          <LegalInfoNote />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
