import type { Faq } from "@/lib/schema";
import type { IconName } from "@/components/ui/icons";
import type { FactRow } from "@/components/ui/FactTable";

// Practice-area page content. Statements of Texas law are general summaries and
// must be reviewed by the attorney before publication (laws change). No outcome
// promises, settlement figures, case results, or credential claims belong here.
// Fee arrangements are deliberately not described — the client has not confirmed them.

export type PracticeContent = {
  slug: string;
  seoTitle: string;
  description: string;
  ctaTitle: string;
  hero: { eyebrow: string; title: string; accent: string; subtitle: string };
  overview: { title: string; paragraphs: string[] };
  callout: { title: string; text: string };
  facts: { title: string; intro: string; columns: [string, string, string]; rows: FactRow[]; note: string };
  issues: { title: string; intro: string; items: { title: string; text: string; icon: IconName }[] };
  faqs: Faq[];
};

const carAccidents: PracticeContent = {
  slug: "car-accidents",
  ctaTitle: "Hurt in a Crash?",
  seoTitle: "Dallas Car Accident Lawyer",
  description:
    "Injured in a car accident in Dallas, Collin, or Denton County? Attorney Avia Gauthier handles Texas injury claims and insurance disputes. Call (214) 377-0786.",
  hero: {
    eyebrow: "Car Accidents",
    title: "Dallas Car Accident",
    accent: "Lawyer",
    subtitle:
      "After a collision, the medical bills arrive long before any insurance check does. Attorney Avia Gauthier represents people injured in crashes across Dallas, Collin, and Denton Counties.",
  },
  overview: {
    title: "How a Texas Car Accident Claim Works",
    paragraphs: [
      "Texas is an at-fault state. The driver who caused a collision, and that driver's liability insurance, is generally responsible for the harm that follows. That means a claim turns on two questions: who was at fault, and what the injuries actually cost.",
      "Most claims begin with the insurance company rather than the courthouse. An adjuster investigates, assigns fault, and eventually makes an offer. That offer reflects the insurer's view of the case, and it is often made before the full extent of an injury is known.",
      "If the insurer disputes fault, disputes the injuries, or will not offer a reasonable amount, the next step is filing suit. Under Texas Civil Practice and Remedies Code § 16.003, most injury lawsuits must be filed within two years of the date of the crash.",
    ],
  },
  callout: {
    title: "Careful with recorded statements",
    text: "The other driver's insurer may ask for a recorded statement soon after a crash, before you know how badly you're hurt. You're generally not required to give one, and what you say can be used to reduce or deny your claim. It's worth getting advice first.",
  },
  facts: {
    title: "What an Injury Claim Can Include",
    intro:
      "Texas law divides damages into categories. Which ones apply, and what they are worth, depends entirely on the evidence in a particular case.",
    columns: ["Type of Compensation", "Category", "What it can cover"],
    rows: [
      {
        label: "Medical expenses",
        kind: "Economic",
        detail: "Emergency care, hospital stays, imaging, surgery, physical therapy, and medication",
      },
      {
        label: "Future medical care",
        kind: "Economic",
        detail: "Treatment a doctor expects will still be needed, including future procedures",
      },
      {
        label: "Lost income",
        kind: "Economic",
        detail: "Wages lost while recovering, and lost earning capacity when an injury affects future work",
      },
      {
        label: "Property damage",
        kind: "Economic",
        detail: "Vehicle repair or replacement, and related costs such as a rental",
      },
      {
        label: "Pain and mental anguish",
        kind: "Non-economic",
        detail: "Physical pain and emotional harm caused by the injury, past and future",
      },
      {
        label: "Impairment and disfigurement",
        kind: "Non-economic",
        detail: "Lasting physical limitations, scarring, and other permanent effects",
      },
      {
        label: "Exemplary damages",
        kind: "Rare",
        detail: "Available only where conduct rises to gross negligence or worse, and limited by statutory caps",
      },
    ],
    note: "This is a general list, not a prediction about any case. No one can promise a particular recovery, and prior results do not guarantee a similar outcome.",
  },
  issues: {
    title: "What Shapes a Car Accident Claim",
    intro: "Two crashes that look alike can resolve very differently. These are some of the factors that matter most.",
    items: [
      {
        icon: "search",
        title: "Proving fault",
        text: "Crash reports, photos, dash and surveillance video, vehicle damage, and witness accounts all bear on who caused the collision.",
      },
      {
        icon: "scale",
        title: "Comparative fault",
        text: "Texas reduces recovery by your share of responsibility, and bars it entirely if you are found more than 50 percent at fault. Insurers know this and often argue it.",
      },
      {
        icon: "medical",
        title: "Medical treatment and gaps",
        text: "Consistent treatment documents an injury. Long gaps between visits are frequently used by insurers to argue the injury was minor or unrelated.",
      },
      {
        icon: "money",
        title: "Available coverage",
        text: "Texas requires only minimum liability limits, so serious injuries can exceed them. Uninsured and underinsured motorist coverage on your own policy may matter a great deal.",
      },
      {
        icon: "clipboard",
        title: "Liens and health insurance",
        text: "Hospitals, health insurers, and government programs may claim repayment from a settlement. Handling those claims affects what actually reaches you.",
      },
      {
        icon: "clock",
        title: "Timing",
        text: "Settling before the medical picture is clear can leave future treatment uncovered, while waiting too long risks the two-year filing deadline.",
      },
    ],
  },
  faqs: [
    {
      question: "How long do I have to file a car accident claim in Texas?",
      answer:
        "Most personal injury lawsuits in Texas must be filed within two years of the date of the crash. Some situations change that, and claims involving a city, county, or other governmental unit often require written notice far sooner, sometimes within months. Because missing a deadline can end a claim entirely, it's worth confirming the dates that apply to your case early.",
    },
    {
      question: "What if the accident was partly my fault?",
      answer:
        "You may still be able to recover. Texas uses proportionate responsibility: your recovery is reduced by your percentage of fault, and you're barred from recovering if you're found more than 50 percent responsible. Insurers often assign more blame to the injured person than the evidence supports, which is one reason the fault investigation matters.",
    },
    {
      question: "Should I accept the insurance company's first offer?",
      answer:
        "Not without understanding what it covers. Early offers are often made before the full extent of an injury is known, and accepting one usually means signing a release that ends the claim, including for treatment you still need. Have the offer reviewed before you sign anything.",
    },
    {
      question: "What if the other driver had no insurance, or not enough?",
      answer:
        "Texas requires only minimum liability limits, and some drivers carry none. Uninsured or underinsured motorist coverage on your own policy can apply in that situation, and there may be other sources of coverage. Reviewing all available policies is an important early step.",
    },
    {
      question: "Do I have to go to court?",
      answer:
        "Many claims resolve through negotiation without a trial. Filing suit is sometimes necessary when the insurer disputes fault or the injuries, or when the deadline is approaching. Even after a suit is filed, cases often settle before trial.",
    },
    {
      question: "What should I do right after a crash?",
      answer:
        "Get medical attention, report the collision, and photograph the vehicles and the scene if you can. Keep medical records, bills, and anything the insurance companies send you. Avoid giving a recorded statement to the other driver's insurer before getting advice.",
    },
  ],
};

const slipAndFall: PracticeContent = {
  slug: "slip-and-fall",
  ctaTitle: "Injured on Someone Else's Property?",
  seoTitle: "Dallas Slip and Fall Lawyer",
  description:
    "Hurt in a fall on unsafe property in Dallas, Collin, or Denton County? Attorney Avia Gauthier handles Texas premises liability claims. Call (214) 377-0786.",
  hero: {
    eyebrow: "Slip and Fall",
    title: "Dallas Slip and Fall",
    accent: "Lawyer",
    subtitle:
      "A fall in a store, a parking lot, or an apartment complex can cause lasting injuries. Attorney Avia Gauthier handles premises liability claims across Dallas, Collin, and Denton Counties.",
  },
  overview: {
    title: "Premises Liability in Texas",
    paragraphs: [
      "A property owner is not automatically responsible every time someone falls. Texas premises liability law asks what the owner knew, or should have known, about a dangerous condition and what the owner did about it.",
      "For a customer or other invitee, that generally means showing the owner had actual or constructive knowledge of a condition that posed an unreasonable risk of harm, failed to take reasonable care to make it safe or warn about it, and that the failure caused the injury.",
      "The duty owed depends on why the injured person was on the property. The same puddle can produce a valid claim for a shopper and no claim at all for someone who had no permission to be there. As with other injury claims, most suits must be filed within two years of the injury.",
    ],
  },
  callout: {
    title: "Evidence disappears quickly",
    text: "Spills get cleaned, broken handrails get repaired, and surveillance video is often recorded over within days or weeks. An incident report, photographs taken at the scene, and a prompt request to preserve video can make a real difference later.",
  },
  facts: {
    title: "Who You Are on the Property Changes the Duty",
    intro:
      "Texas sorts visitors into categories, and the category generally determines what the property owner owed you.",
    columns: ["Visitor status", "Who that usually means", "General duty owed by the owner"],
    rows: [
      {
        label: "Invitee",
        kind: "Highest duty",
        detail:
          "Customers and others on the property for the owner's benefit. The owner must use reasonable care to make safe or warn of dangerous conditions it knew about or should have discovered.",
      },
      {
        label: "Licensee",
        kind: "Limited duty",
        detail:
          "Social guests and others present with permission. The owner generally must warn of or make safe dangers it actually knows about.",
      },
      {
        label: "Trespasser",
        kind: "Lowest duty",
        detail:
          "Someone on the property without permission. The owner generally must only avoid injuring the person willfully, wantonly, or through gross negligence.",
      },
    ],
    note: "These are general categories. Which one applies, and what it means in a specific case, depends on the facts and can be disputed.",
  },
  issues: {
    title: "What Shapes a Slip and Fall Claim",
    intro: "Premises cases are won or lost on details that are easy to lose in the first days after a fall.",
    items: [
      {
        icon: "clock",
        title: "How long the hazard was there",
        text: "Constructive knowledge often turns on time. A spill that sat for an hour is treated very differently from one that happened moments earlier.",
      },
      {
        icon: "search",
        title: "Surveillance video",
        text: "Store and apartment video frequently shows both the fall and how long the hazard existed, but it is routinely overwritten unless someone asks for it to be preserved.",
      },
      {
        icon: "clipboard",
        title: "Incident reports and witnesses",
        text: "What the property wrote down, and who saw the condition before the fall, can corroborate the claim.",
      },
      {
        icon: "hazard",
        title: "Warnings and maintenance",
        text: "Whether cones were out, how often the area was inspected, and whether the hazard had been reported all bear on reasonable care.",
      },
      {
        icon: "scale",
        title: "The open and obvious defense",
        text: "Property owners often argue a hazard was plain to see, or that the injured person wasn't watching where they were going. Comparative fault applies here too.",
      },
      {
        icon: "medical",
        title: "Connecting the injury to the fall",
        text: "Prompt treatment ties the injury to the incident. Insurers scrutinize prior conditions and gaps in care.",
      },
    ],
  },
  faqs: [
    {
      question: "Is a property owner always responsible when someone falls?",
      answer:
        "No. Texas law doesn't make a property owner responsible for every injury on its premises. A claim generally requires showing the owner knew or should have known about an unreasonably dangerous condition and failed to use reasonable care to fix it or warn about it.",
    },
    {
      question: "What should I do right after a fall?",
      answer:
        "Report it to the property and ask that an incident report be made. Photograph the hazard and the surrounding area before anything is cleaned up, get the names of any witnesses, and seek medical attention. Keep the shoes and clothing you were wearing.",
    },
    {
      question: "How long do I have to bring a claim?",
      answer:
        "Most Texas premises liability suits must be filed within two years of the injury. Claims involving a governmental property owner often carry much shorter written notice requirements, so those dates should be checked right away.",
    },
    {
      question: "What if the store says I should have seen the hazard?",
      answer:
        "That's a common defense. Texas reduces recovery by the injured person's share of fault and bars recovery if that share exceeds 50 percent, so this argument is often about shifting blame. Evidence about lighting, signage, floor condition, and what the property knew can respond to it.",
    },
    {
      question: "Can I bring a claim if I fell at my apartment complex?",
      answer:
        "Possibly. Landlords and property managers can be responsible for dangerous conditions in common areas such as stairwells, walkways, parking areas, and pools, depending on what they knew and what the lease and Texas law require of them.",
    },
    {
      question: "What are these claims worth?",
      answer:
        "There's no standard figure. The value of any injury claim depends on the evidence of fault, the seriousness and permanence of the injury, the medical treatment involved, and the available insurance coverage. Be skeptical of anyone who quotes a number before reviewing the facts.",
    },
  ],
};

export const PRACTICE_CONTENT: Record<string, PracticeContent> = {
  [carAccidents.slug]: carAccidents,
  [slipAndFall.slug]: slipAndFall,
};
