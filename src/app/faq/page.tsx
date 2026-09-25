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

// General FAQ. Per the schema strategy, FAQPage schema is reserved for the
// practice-area pages, so this accordion does not emit it.

export const metadata = pageMetadata({
  title: "Personal Injury FAQ",
  description:
    "Answers to common questions about Texas injury claims: deadlines, fault, insurance offers, medical bills, and working with Dallas lawyer Avia Gauthier.",
  path: ROUTES.faq,
});

const GROUPS: { id: string; title: string; faqs: Faq[] }[] = [
  {
    id: "after-an-injury",
    title: "Right After an Injury",
    faqs: [
      {
        question: "Do I need to see a doctor if I feel okay?",
        answer:
          "It's usually wise. Adrenaline masks pain, and injuries to the neck, back, and head often surface days later. Being examined protects your health and creates the record that connects an injury to the crash or fall. Long gaps between the incident and treatment are one of the first things an insurer points to.",
      },
      {
        question: "Should I talk to the other side's insurance company?",
        answer:
          "You generally aren't required to give a recorded statement to the other party's insurer, and doing so early, before you know how badly you're hurt, can work against you. You do usually have obligations to your own insurer under your policy. Getting advice before that call is reasonable.",
      },
      {
        question: "What evidence matters most?",
        answer:
          "Photographs of the scene and the damage, the crash or incident report, names and numbers for witnesses, and your medical records. Surveillance video matters enormously in fall cases and is often erased within days unless someone asks for it to be preserved.",
      },
    ],
  },
  {
    id: "your-claim",
    title: "Your Claim",
    faqs: [
      {
        question: "How long do I have to bring a claim in Texas?",
        answer:
          "Most injury lawsuits must be filed within two years of the date of the injury. Some circumstances change that, and claims involving a governmental unit often require written notice much sooner. Because a missed deadline can end a claim no matter how strong it is, the dates should be confirmed early.",
      },
      {
        question: "What if I was partly at fault?",
        answer:
          "You may still recover. Texas reduces your recovery by your percentage of responsibility and bars recovery entirely if you're found more than 50 percent at fault. Insurers often assign more blame to the injured person than the evidence supports.",
      },
      {
        question: "What can an injury claim cover?",
        answer:
          "Generally medical bills and future care, lost income and lost earning capacity, property damage, and non-economic harm such as physical pain, mental anguish, impairment, and disfigurement. Which apply, and what they're worth, depends on the evidence in your case.",
      },
      {
        question: "How much is my case worth?",
        answer:
          "There's no formula, and no honest answer before the facts are reviewed. Value depends on fault, the seriousness and permanence of the injury, the treatment involved, and the insurance actually available. Be cautious of anyone who quotes a number up front. Prior results do not guarantee a similar outcome.",
      },
      {
        question: "Who pays my medical bills while the claim is pending?",
        answer:
          "Usually health insurance, medical payments coverage if your auto policy includes it, or arrangements with providers. Health insurers and medical providers may later claim repayment out of a settlement, which is one reason those claims need attention before anything is finalized.",
      },
      {
        question: "Will my case go to trial?",
        answer:
          "Most claims settle without a trial, and many settle without a lawsuit ever being filed. Filing suit becomes necessary when the insurer disputes fault or injuries, refuses a reasonable offer, or the deadline is approaching. Even then, most cases resolve before trial.",
      },
    ],
  },
  {
    id: "working-with-the-firm",
    title: "Working With the Firm",
    faqs: [
      {
        question: "What kinds of cases does Gauthier Law Firm handle?",
        answer:
          "The firm handles personal injury claims, specifically car accidents and slip and fall injuries, in Dallas, Collin, and Denton Counties.",
      },
      {
        question: "How are legal fees handled?",
        answer:
          "Fee arrangements are explained and put in writing before any representation begins. Ask about fees and costs during your consultation so the terms are clear before you decide.",
      },
      {
        question: "What should I bring to a consultation?",
        answer:
          "Anything you already have: the crash or incident report, photographs, insurance information, medical records or bills, and letters from any insurance company. A list of your questions helps too.",
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
            Injury Claim <span className="text-gold-light">Questions</span>
          </>
        }
        subtitle="Straightforward answers to the questions people ask after a crash or a fall in Texas."
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
        <SectionHeading eyebrow="Claim-Specific Questions" title="Questions About a Specific Claim" />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
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
          Recently hurt? Read{" "}
          <Link href={ROUTES.afterAccident} className="text-gold-light underline underline-offset-4">
            what to do after a car accident
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
