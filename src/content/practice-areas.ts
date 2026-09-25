import type { Faq } from "@/lib/schema";
import type { IconName } from "@/components/ui/icons";
import type { PenaltyRow } from "@/components/ui/PenaltyTable";

// Practice-area page content. Statements of Texas law are general summaries and
// must be reviewed by the attorney before publication (laws change). No outcome
// promises, case results, or credential claims belong here.

export type PracticeContent = {
  slug: string;
  seoTitle: string;
  description: string;
  hero: { eyebrow: string; title: string; accent: string; subtitle: string };
  overview: { title: string; paragraphs: string[] };
  callout: { title: string; text: string };
  penalties: { title: string; rows: PenaltyRow[]; note: string };
  issues: { title: string; intro: string; items: { title: string; text: string; icon: IconName }[] };
  faqs: Faq[];
  ctaTitle: string;
};

const dwi: PracticeContent = {
  slug: "dwi",
  ctaTitle: "Arrested for DWI?",
  seoTitle: "Dallas DWI Lawyer",
  description:
    "Charged with DWI in Dallas, Collin, or Denton County? Attorney Avia Gauthier defends Texas DWI cases and ALR license hearings. Call (214) 377-0786 today.",
  hero: {
    eyebrow: "DWI Defense",
    title: "Dallas DWI",
    accent: "Defense Lawyer",
    subtitle:
      "A DWI arrest can put your license, your job, and your record at risk. Attorney Avia Gauthier defends drivers charged with DWI across Dallas, Collin, and Denton Counties.",
  },
  overview: {
    title: "Understanding a DWI Charge in Texas",
    paragraphs: [
      "Under Texas Penal Code § 49.04, a person commits DWI by operating a motor vehicle in a public place while intoxicated. “Intoxicated” can mean having an alcohol concentration of 0.08 or more, or not having the normal use of your mental or physical faculties because of alcohol, drugs, or a combination of substances.",
      "That second definition matters. A driver can be charged with DWI even when no breath or blood test result exists, based on an officer's observations of driving, speech, balance, and performance on field sobriety tests. Each piece of that evidence can be examined and, where appropriate, challenged.",
      "A DWI case also moves on two tracks at once: the criminal case in court, and a separate administrative case over your driver's license. Missing a deadline in the license case can mean an automatic suspension.",
    ],
  },
  callout: {
    title: "The 15-day deadline",
    text: "After a DWI arrest in Texas, you generally have only 15 days from receiving a notice of license suspension to request an Administrative License Revocation (ALR) hearing. Without a timely request, the suspension typically takes effect automatically.",
  },
  penalties: {
    title: "DWI Charges and Penalty Ranges",
    rows: [
      {
        offense: "DWI, first offense",
        level: "Class B misdemeanor",
        range: "Up to 180 days in jail (72-hour minimum) and a fine up to $2,000",
      },
      {
        offense: "DWI, first offense with an alcohol concentration of 0.15 or more",
        level: "Class A misdemeanor",
        range: "Up to 1 year in jail and a fine up to $4,000",
      },
      {
        offense: "DWI, second offense",
        level: "Class A misdemeanor",
        range: "30 days to 1 year in jail and a fine up to $4,000",
      },
      {
        offense: "DWI, third or subsequent offense",
        level: "Third-degree felony",
        range: "2 to 10 years in prison and a fine up to $10,000",
      },
      {
        offense: "DWI with a passenger younger than 15",
        level: "State jail felony",
        range: "180 days to 2 years in a state jail facility and a fine up to $10,000",
      },
      {
        offense: "Intoxication assault",
        level: "Third-degree felony",
        range: "2 to 10 years in prison and a fine up to $10,000",
      },
      {
        offense: "Intoxication manslaughter",
        level: "Second-degree felony",
        range: "2 to 20 years in prison and a fine up to $10,000",
      },
    ],
    note: "These are general statutory ranges, not a prediction for any case. An open container, prior convictions, and other circumstances can change the charge or the punishment, and a conviction can also bring license suspension, additional fines, and ignition interlock requirements.",
  },
  issues: {
    title: "Questions a DWI Defense Can Raise",
    intro:
      "No defense applies to every arrest. These are some of the issues a careful review of a DWI case can examine.",
    items: [
      {
        icon: "car",
        title: "The reason for the stop",
        text: "Police generally need reasonable suspicion to pull a driver over. If the stop was not lawful, evidence gathered afterward may be subject to challenge.",
      },
      {
        icon: "search",
        title: "Field sobriety tests",
        text: "Standardized field sobriety tests are supposed to be given and scored in specific ways. Weather, footwear, road surfaces, medical conditions, and officer instructions can all affect the results.",
      },
      {
        icon: "scale",
        title: "Breath and blood testing",
        text: "Breath-test instruments must be properly maintained and operated, and blood samples must be collected, stored, and analyzed under reliable procedures. Records and lab documentation can reveal problems.",
      },
      {
        icon: "book",
        title: "Video evidence",
        text: "Dash-camera and body-camera footage can show what actually happened during the stop and arrest, and it doesn't always match the written report.",
      },
      {
        icon: "landmark",
        title: "Your driver's license",
        text: "The ALR hearing is a separate proceeding with its own deadline. It can protect your driving privileges and may offer an early opportunity to question the arresting officer.",
      },
      {
        icon: "gavel",
        title: "Options beyond trial",
        text: "Depending on the facts and your record, a dismissal, a reduced charge, or deferred adjudication for certain first offenses may be possible. No outcome can be promised in advance.",
      },
    ],
  },
  faqs: [
    {
      question: "What happens to my driver's license after a DWI arrest in Texas?",
      answer:
        "If you refused a breath or blood test, or if a test showed an alcohol concentration of 0.08 or more, the officer will typically serve you with a notice of suspension. The suspension usually takes effect 40 days after that notice unless you request an Administrative License Revocation (ALR) hearing within 15 days.\n\nFor a first offense, a failed test commonly results in a 90-day suspension, and a refusal in a 180-day suspension. You may also be eligible for an occupational driver's license that allows limited driving during a suspension.",
    },
    {
      question: "Should I have refused the breath test?",
      answer:
        "There's no single right answer, and what already happened can't be changed. A refusal usually leads to a longer license suspension and can be mentioned at trial, but it also means the State has no breath-test result to rely on. An attorney can review how the refusal happened and what evidence the State actually has.",
    },
    {
      question: "Can a DWI charge be dismissed or reduced?",
      answer:
        "Sometimes. Charges may be dismissed or reduced when evidence is suppressed, when testing was unreliable, or when the facts don't support the charge. Whether that's realistic depends entirely on your case, and no attorney can guarantee a particular result.",
    },
    {
      question: "Is deferred adjudication available for a DWI in Texas?",
      answer:
        "Texas law allows deferred adjudication for some first-time DWI offenses, but not in every case. Eligibility can depend on factors such as the alcohol concentration alleged and whether the driver holds a commercial driver's license, and it typically comes with conditions such as an ignition interlock device.",
    },
    {
      question: "Will a DWI arrest stay on my record?",
      answer:
        "An arrest creates a record even if the case is later dismissed. Depending on how the case ends, you may be able to seek an expunction or an order of nondisclosure. Eligibility rules are specific, so it's worth asking about early.",
    },
    {
      question: "How soon should I talk to a lawyer after a DWI arrest?",
      answer:
        "As soon as possible. The 15-day window to request an ALR hearing starts right away, and video and other evidence are easier to obtain early in a case.",
    },
  ],
};

const drugCharges: PracticeContent = {
  slug: "drug-charges",
  ctaTitle: "Charged With a Drug Offense?",
  seoTitle: "Dallas Drug Crime Lawyer",
  description:
    "Facing a drug charge in Dallas, Collin, or Denton County? Attorney Avia Gauthier defends possession and delivery cases across North Texas. Call (214) 377-0786.",
  hero: {
    eyebrow: "Drug Charges",
    title: "Dallas Drug Charge",
    accent: "Defense Lawyer",
    subtitle:
      "Texas drug laws carry penalties that range from a misdemeanor to decades in prison. Attorney Avia Gauthier defends people charged with drug offenses across Dallas, Collin, and Denton Counties.",
  },
  overview: {
    title: "How Texas Classifies Drug Offenses",
    paragraphs: [
      "Most drug offenses in Texas are prosecuted under the Texas Controlled Substances Act, Chapter 481 of the Health and Safety Code. The law sorts substances into penalty groups, and the charge you face depends largely on which group the substance falls into, how much was involved, and what prosecutors allege you intended to do with it.",
      "Marijuana has its own penalty scheme. Penalty Group 1, which includes substances such as cocaine, methamphetamine, and heroin, generally carries the heaviest penalties. THC concentrates, such as vape cartridges and wax, are classified differently from plant marijuana and can be charged as felonies even in small amounts.",
      "Beyond simple possession, prosecutors may charge manufacture or delivery, possession with intent to deliver, or an offense in a drug-free zone near a school, any of which can increase the punishment.",
    ],
  },
  callout: {
    title: "Hemp, marijuana, and lab testing",
    text: "Since Texas legalized hemp in 2019, the difference between legal hemp and illegal marijuana can come down to THC concentration. Whether a substance was properly tested and identified can be an important question in a drug case.",
  },
  penalties: {
    title: "Possession Charges and Penalty Ranges",
    rows: [
      {
        offense: "Marijuana, 2 ounces or less",
        level: "Class B misdemeanor",
        range: "Up to 180 days in jail and a fine up to $2,000",
      },
      {
        offense: "Marijuana, more than 2 ounces up to 4 ounces",
        level: "Class A misdemeanor",
        range: "Up to 1 year in jail and a fine up to $4,000",
      },
      {
        offense: "Marijuana, more than 4 ounces up to 5 pounds",
        level: "State jail felony",
        range: "180 days to 2 years in a state jail facility and a fine up to $10,000",
      },
      {
        offense: "Penalty Group 1, less than 1 gram",
        level: "State jail felony",
        range: "180 days to 2 years in a state jail facility and a fine up to $10,000",
      },
      {
        offense: "Penalty Group 1, 1 gram to less than 4 grams",
        level: "Third-degree felony",
        range: "2 to 10 years in prison and a fine up to $10,000",
      },
      {
        offense: "Penalty Group 1, 4 grams to less than 200 grams",
        level: "Second-degree felony",
        range: "2 to 20 years in prison and a fine up to $10,000",
      },
      {
        offense: "Penalty Group 1, 200 grams to less than 400 grams",
        level: "First-degree felony",
        range: "5 to 99 years or life in prison and a fine up to $10,000",
      },
    ],
    note: "These are general statutory ranges, not a prediction for any case. Drug weights generally include adulterants and dilutants, and delivery allegations, drug-free zones, and prior convictions can raise the punishment.",
  },
  issues: {
    title: "Questions a Drug Charge Defense Can Raise",
    intro: "Every case turns on its own facts. These are some of the issues a careful review of a drug case can examine.",
    items: [
      {
        icon: "search",
        title: "The search",
        text: "The Fourth Amendment protects against unreasonable searches. If officers searched a car, home, or phone without a valid warrant, valid consent, or a recognized exception, the evidence may be subject to a motion to suppress.",
      },
      {
        icon: "car",
        title: "Whether the drugs were yours",
        text: "Being near drugs isn't the same as possessing them. In shared cars, apartments, and homes, the State must connect you to the substance with more than proximity alone.",
      },
      {
        icon: "scale",
        title: "Lab testing and weight",
        text: "The identity and weight of a substance drive the charge. Lab procedures, chain of custody, and how the weight was calculated can all be reviewed.",
      },
      {
        icon: "book",
        title: "Intent to deliver",
        text: "Prosecutors sometimes rely on quantity, packaging, or cash to allege intent to deliver. Those assumptions can be tested against the actual evidence.",
      },
      {
        icon: "landmark",
        title: "Diversion and specialty courts",
        text: "Some counties offer pretrial diversion or specialty court programs for eligible people. Eligibility and availability vary by county and by case.",
      },
      {
        icon: "gavel",
        title: "Consequences beyond the sentence",
        text: "A drug conviction can affect employment, professional licenses, housing, and immigration status. Those consequences deserve attention alongside the charge itself.",
      },
    ],
  },
  faqs: [
    {
      question: "Is marijuana legal in Texas now?",
      answer:
        "No. Hemp products with a delta-9 THC concentration of no more than 0.3 percent are legal, but possessing marijuana is still a crime under Texas law. Some cities have adopted local policies on low-level marijuana enforcement, but those policies don't change state law and don't bind every agency that can make an arrest.",
    },
    {
      question: "What's the difference between possession and possession with intent to deliver?",
      answer:
        "Possession means having care, custody, control, or management of a controlled substance. Possession with intent to deliver adds an allegation that you planned to sell or transfer it, which carries heavier penalties. Prosecutors often try to prove intent through circumstantial evidence such as quantity, packaging, scales, or cash, and that evidence can be challenged.",
    },
    {
      question: "Can I be charged if drugs were found in someone else's car or home?",
      answer:
        "You can be charged, but a charge isn't a conviction. When drugs are found in a shared space, the State generally has to show additional facts linking you to them, not just that you were nearby.",
    },
    {
      question: "Can a drug charge be dismissed?",
      answer:
        "Sometimes. A case may be dismissed if key evidence is suppressed because of an unlawful search, if lab testing doesn't support the charge, or if the evidence doesn't connect you to the substance. No attorney can guarantee a dismissal, but these issues deserve a close look.",
    },
    {
      question: "Will I go to jail for a first-time drug offense?",
      answer:
        "Not necessarily. Depending on the charge, the amount, your history, and the county, possible outcomes can include probation, deferred adjudication, a diversion program, or dismissal. What's realistic can only be assessed after the evidence has been reviewed.",
    },
    {
      question: "Can a drug arrest be removed from my record?",
      answer:
        "Possibly. If a case is dismissed or you complete certain programs, you may be eligible for an expunction or an order of nondisclosure. The rules depend on the offense and how the case ended.",
    },
  ],
};

const assaultFamilyViolence: PracticeContent = {
  slug: "assault-family-violence",
  ctaTitle: "Accused of Assault Family-Violence?",
  seoTitle: "Dallas Assault Family Violence Lawyer",
  description:
    "Accused of assault family violence in Dallas, Collin, or Denton County? Attorney Avia Gauthier defends family-violence charges. Call (214) 377-0786 today.",
  hero: {
    eyebrow: "Assault Family-Violence",
    title: "Assault Family-Violence",
    accent: "Defense in Dallas",
    subtitle:
      "A family-violence accusation can affect your home, your children, and your right to own a firearm before the case is even resolved. Attorney Avia Gauthier defends people facing these charges across Dallas, Collin, and Denton Counties.",
  },
  overview: {
    title: "What Counts as Family Violence in Texas",
    paragraphs: [
      "Assault under Texas Penal Code § 22.01 includes causing bodily injury to another person, threatening someone with imminent bodily injury, or causing physical contact the other person would find offensive or provocative. It becomes an assault family-violence case when the alleged victim is a family member, a member of the household, or someone in a current or former dating relationship, as defined by the Texas Family Code.",
      "Many of these cases begin with a 911 call during an argument, and arrests often happen quickly. What a report says happened and what actually happened are not always the same.",
      "Once a charge is filed, the State of Texas prosecutes the case, not the person who made the report. Even if the alleged victim no longer wants to proceed, the prosecutor decides whether the case continues.",
    ],
  },
  callout: {
    title: "Protective orders and bond conditions",
    text: "After an arrest, a magistrate may issue an emergency protective order, and bond conditions often restrict contact with the alleged victim or returning home. Violating those orders can lead to new charges, even if the other person agrees to the contact.",
  },
  penalties: {
    title: "Family-Violence Charges and Penalty Ranges",
    rows: [
      {
        offense: "Assault causing bodily injury (family violence)",
        level: "Class A misdemeanor",
        range: "Up to 1 year in jail and a fine up to $4,000",
      },
      {
        offense: "Assault family violence with a prior family-violence conviction",
        level: "Third-degree felony",
        range: "2 to 10 years in prison and a fine up to $10,000",
      },
      {
        offense: "Assault by impeding breathing or circulation",
        level: "Third-degree felony",
        range: "2 to 10 years in prison and a fine up to $10,000",
      },
      {
        offense: "Continuous violence against the family",
        level: "Third-degree felony",
        range: "2 to 10 years in prison and a fine up to $10,000",
      },
      {
        offense: "Aggravated assault (serious bodily injury or deadly weapon)",
        level: "Second-degree felony",
        range: "2 to 20 years in prison and a fine up to $10,000",
      },
    ],
    note: "These are general statutory ranges, not a prediction for any case. Prior convictions and other circumstances can raise them further, and a family-violence finding can bring consequences beyond the sentence, including firearm restrictions.",
  },
  issues: {
    title: "Questions a Family-Violence Defense Can Raise",
    intro:
      "These cases are rarely as simple as the first report suggests. These are some of the issues a careful review can examine.",
    items: [
      {
        icon: "search",
        title: "What the evidence shows",
        text: "Photos, medical records, 911 recordings, body-camera footage, and witness statements can support or contradict the allegations.",
      },
      {
        icon: "shield",
        title: "Self-defense",
        text: "Texas law recognizes the right to use force in self-defense in certain circumstances. Whether it applies depends on the specific facts.",
      },
      {
        icon: "message",
        title: "Credibility and motive",
        text: "Accusations sometimes arise during divorces, custody disputes, and breakups. Inconsistent statements and motives to exaggerate can be relevant.",
      },
      {
        icon: "landmark",
        title: "Protective orders and bond conditions",
        text: "Emergency orders and no-contact conditions can affect where you live and when you see your children. In some cases, they can be modified through the court.",
      },
      {
        icon: "scale",
        title: "Firearm rights",
        text: "Federal law generally prohibits people convicted of a misdemeanor crime of domestic violence from possessing firearms. That consequence should be weighed before resolving any case.",
      },
      {
        icon: "gavel",
        title: "The family-violence finding",
        text: "An affirmative finding of family violence can follow a person long after a case ends and can enhance future charges. How a case is resolved matters.",
      },
    ],
  },
  faqs: [
    {
      question: "Can the alleged victim drop assault family-violence charges?",
      answer:
        "Not directly. In Texas, the State prosecutes criminal cases. An alleged victim can tell the prosecutor they don't want to proceed, sometimes through an affidavit of non-prosecution, but the prosecutor decides whether to dismiss. The alleged victim's wishes can still be an important factor.",
    },
    {
      question: "What is an emergency protective order?",
      answer:
        "After a family-violence arrest, a magistrate can issue an order for emergency protection. It can require the accused person to stay away from the alleged victim and their home and to give up firearms. These orders generally last 31 to 61 days, and can last longer when the allegations involve a deadly weapon or serious bodily injury.",
    },
    {
      question: "Can I go home after being arrested for assault family violence?",
      answer:
        "It depends on the conditions of your bond and any protective order. Many orders prohibit returning to a shared home or contacting the alleged victim. Don't assume contact is allowed; have an attorney review the exact terms.",
    },
    {
      question: "Will a family-violence conviction affect my right to own a gun?",
      answer:
        "Generally, yes. Federal law prohibits people convicted of a misdemeanor crime of domestic violence from possessing firearms or ammunition, and Texas law has its own restrictions. That's one reason the way a case is resolved matters so much.",
    },
    {
      question: "Is deferred adjudication available in a family-violence case?",
      answer:
        "It may be available in some cases, but eligibility depends on the facts and your history. Even with deferred adjudication, a family-violence finding can carry lasting consequences, including limits on sealing the record later. Understand those consequences before accepting any plea offer.",
    },
    {
      question: "What should I do if I've been accused but not arrested?",
      answer:
        "Avoid contacting the person who made the accusation, don't post about the situation online, and speak with a criminal defense attorney before talking to police.",
    },
  ],
};

export const PRACTICE_CONTENT: Record<string, PracticeContent> = {
  [dwi.slug]: dwi,
  [drugCharges.slug]: drugCharges,
  [assaultFamilyViolence.slug]: assaultFamilyViolence,
};
