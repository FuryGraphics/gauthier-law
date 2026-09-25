import type { Faq } from "@/lib/schema";
import { IMAGES, type SiteImage } from "./images";

// City page content. The firm has ONE office (Dallas); copy must never imply an
// office in any other city. Court and geography details are general and should be
// confirmed by the attorney before publication.

export type LocationContent = {
  slug: string;
  seoTitle: string;
  description: string;
  image: SiteImage;
  subtitle: string;
  intro: string[];
  courts: { title: string; paragraphs: string[] };
  practiceBlurbs: Record<"dwi" | "drug-charges" | "assault-family-violence", string>;
  faqs: Faq[];
};

const OFFICE_ANSWER =
  "No. Gauthier Law Firm has one office, located at 15150 Preston Road, Suite 300, in Dallas. The firm represents clients whose cases are pending in Dallas, Collin, and Denton County courts. Call (214) 377-0786 to ask about scheduling a consultation.";

const dallas: LocationContent = {
  slug: "dallas",
  seoTitle: "Criminal Defense Attorney in Dallas, TX",
  description:
    "Criminal defense attorney serving Dallas, TX. Avia Gauthier defends DWI, drug, and assault family-violence cases in Dallas County courts. Call (214) 377-0786.",
  image: IMAGES.heroSkyline,
  subtitle:
    "From the firm's North Dallas office, attorney Avia Gauthier defends people charged with DWI, drug offenses, and assault family-violence throughout the city of Dallas.",
  intro: [
    "Gauthier Law Firm's office is on Preston Road in North Dallas, which makes Dallas home base for the firm. Attorney Avia Gauthier represents people facing criminal charges across the city, from Uptown and Deep Ellum to Oak Cliff, Lake Highlands, and Far North Dallas.",
    "Most of Dallas lies in Dallas County, but parts of the city extend into Collin and Denton Counties. Where an arrest happened generally determines which county's courts hear the case, so one of the first things to confirm is exactly where your case is pending.",
  ],
  courts: {
    title: "Criminal Courts in Dallas County",
    paragraphs: [
      "Dallas County criminal cases are generally heard at the Frank Crowley Courts Building near downtown Dallas. Misdemeanors, such as a first DWI or most assault family-violence charges, are typically handled in the County Criminal Courts, while felonies are handled in the Criminal District Courts.",
      "Lower-level Class C offenses, which are punishable by fine only, are generally handled by municipal or justice courts rather than the county criminal courts.",
    ],
  },
  practiceBlurbs: {
    dwi: "Defense for DWI arrests in Dallas, including ALR license hearings and felony intoxication charges.",
    "drug-charges": "Defense for marijuana, controlled-substance, and intent-to-deliver charges filed in Dallas County.",
    "assault-family-violence": "Defense for family-violence accusations, bond conditions, and protective orders in Dallas.",
  },
  faqs: [
    {
      question: "Where will my Dallas criminal case be heard?",
      answer:
        "If your arrest happened in the part of Dallas that lies in Dallas County, a misdemeanor or felony case will generally be heard at the Frank Crowley Courts Building. If it happened in a portion of the city within Collin or Denton County, the case will usually be heard in that county instead. Your paperwork or an attorney can confirm the court.",
    },
    {
      question: "Do I have to appear in court in person?",
      answer:
        "It depends on the court, the charge, and the stage of the case. Some settings require the defendant to be present, while an attorney may be able to handle others. Your attorney can tell you which settings you need to attend.",
    },
    {
      question: "Where is the firm's office?",
      answer:
        "Gauthier Law Firm is located at 15150 Preston Road, Suite 300, Dallas, TX 75248. Call (214) 377-0786 to ask about scheduling a consultation.",
    },
  ],
};

const plano: LocationContent = {
  slug: "plano",
  seoTitle: "Criminal Defense Attorney in Plano, TX",
  description:
    "Criminal defense attorney serving Plano, Texas. Avia Gauthier defends DWI, drug, and assault family-violence charges in Collin and Denton County courts.",
  image: IMAGES.officeDesk,
  subtitle:
    "Attorney Avia Gauthier represents Plano residents and visitors facing DWI, drug, and assault family-violence charges, from the firm's office in nearby North Dallas.",
  intro: [
    "Plano residents charged with a crime can work with Gauthier Law Firm from the firm's office in nearby North Dallas. Attorney Avia Gauthier represents clients facing DWI, drug, and assault family-violence charges arising in Plano.",
    "Most of Plano is in Collin County, while a western portion of the city lies in Denton County. That line matters: an arrest in west Plano may be prosecuted in Denton County rather than Collin County, with a different courthouse, different prosecutors, and different local procedures.",
  ],
  courts: {
    title: "Which Courts Handle Plano Cases",
    paragraphs: [
      "Collin County criminal cases are generally heard at the Russell A. Steindam Courts Building in McKinney. Misdemeanors are typically handled in the County Courts at Law, and felonies in the District Courts.",
      "Cases arising in the Denton County portion of Plano are generally heard at the Denton County Courts Building in Denton.",
    ],
  },
  practiceBlurbs: {
    dwi: "Defense for DWI arrests in Plano, including ALR hearings and repeat-offense charges.",
    "drug-charges": "Defense for possession and delivery charges arising from Plano stops and searches.",
    "assault-family-violence": "Defense for family-violence accusations and protective order issues in Plano.",
  },
  faqs: [
    {
      question: "Which court will hear a Plano arrest?",
      answer:
        "It usually depends on where the arrest happened. Most Plano cases are filed in Collin County and heard in McKinney, but an arrest in the Denton County portion of Plano will generally be handled in Denton County.",
    },
    { question: "Does Gauthier Law Firm have an office in Plano?", answer: OFFICE_ANSWER },
    {
      question: "What should I do right after a DWI arrest in Plano?",
      answer:
        "Keep the paperwork you were given, note the date you received any notice of license suspension, and speak with an attorney quickly. You generally have 15 days to request an ALR hearing to challenge the suspension.",
    },
  ],
};

const mckinney: LocationContent = {
  slug: "mckinney",
  seoTitle: "Criminal Defense Attorney in McKinney, TX",
  description:
    "Criminal defense attorney serving McKinney, TX. Avia Gauthier defends DWI, drug, and assault family-violence cases in Collin County courts. Call (214) 377-0786.",
  image: IMAGES.courthouseColumns,
  subtitle:
    "McKinney is the county seat of Collin County. Attorney Avia Gauthier defends people facing DWI, drug, and assault family-violence charges in McKinney and across Collin County.",
  intro: [
    "McKinney is the county seat of Collin County and home to the courthouse where most Collin County criminal cases are heard. Attorney Avia Gauthier represents people facing DWI, drug, and assault family-violence charges in McKinney and in the surrounding Collin County communities.",
    "Whether an arrest happened along US-75, in historic downtown McKinney, or in a neighboring Collin County city, the case will typically be handled at the county courthouse in McKinney.",
  ],
  courts: {
    title: "Collin County Criminal Courts",
    paragraphs: [
      "Collin County criminal cases are generally heard at the Russell A. Steindam Courts Building on Bloomdale Road in McKinney. Misdemeanors are typically handled in the County Courts at Law, and felonies in the District Courts.",
      "Each court can have its own settings, procedures, and expectations, which is one reason it helps to understand how a case is likely to move before the first court date.",
    ],
  },
  practiceBlurbs: {
    dwi: "Defense for DWI arrests in McKinney and throughout Collin County, including license hearings.",
    "drug-charges": "Defense for marijuana, THC concentrate, and controlled-substance charges in Collin County.",
    "assault-family-violence": "Defense for family-violence assault charges and bond conditions in McKinney.",
  },
  faqs: [
    {
      question: "Where is the Collin County courthouse?",
      answer:
        "Most Collin County criminal cases are heard at the Russell A. Steindam Courts Building in McKinney. Check your paperwork for the specific court and setting, or ask your attorney to confirm it.",
    },
    { question: "Does Gauthier Law Firm have an office in McKinney?", answer: OFFICE_ANSWER },
    {
      question: "How long does a Collin County criminal case take?",
      answer:
        "It varies widely. A misdemeanor may resolve in a few months, while a felony or a case headed to trial can take much longer. The charge, the evidence, and the court's docket all affect the timeline.",
    },
  ],
};

const frisco: LocationContent = {
  slug: "frisco",
  seoTitle: "Criminal Defense Attorney in Frisco, TX",
  description:
    "Criminal defense attorney serving Frisco, TX. Avia Gauthier defends DWI, drug, and assault family-violence charges in Collin and Denton County courts.",
  image: IMAGES.dwiRoad,
  subtitle:
    "Frisco sits in two counties. Attorney Avia Gauthier defends people charged with DWI, drug offenses, and assault family-violence in Frisco, whichever county the case is in.",
  intro: [
    "Frisco is one of the fastest-growing cities in North Texas, and it sits across two counties. Attorney Avia Gauthier represents people charged with DWI, drug offenses, and assault family-violence in Frisco, whether the case is pending in Collin County or Denton County.",
    "Busy corridors such as the Dallas North Tollway and State Highway 121 run through the city, and many criminal cases begin with a traffic stop. Every stop has to meet legal requirements, and how a stop happened can matter to the case that follows.",
  ],
  courts: {
    title: "Collin County or Denton County?",
    paragraphs: [
      "The eastern part of Frisco lies in Collin County and the western part in Denton County. Collin County cases are generally heard at the Russell A. Steindam Courts Building in McKinney, and Denton County cases at the Denton County Courts Building in Denton.",
      "Because the two counties have different prosecutors and local procedures, confirming where a Frisco case is filed is an important early step.",
    ],
  },
  practiceBlurbs: {
    dwi: "Defense for DWI arrests on Frisco roads, including the Tollway and SH-121, and ALR hearings.",
    "drug-charges": "Defense for possession and delivery charges in both the Collin and Denton County parts of Frisco.",
    "assault-family-violence": "Defense for family-violence accusations and protective orders arising in Frisco.",
  },
  faqs: [
    {
      question: "Is my Frisco case in Collin County or Denton County?",
      answer:
        "It generally depends on where the alleged offense happened. The eastern part of Frisco is in Collin County and the western part is in Denton County. Your bond paperwork or court notice should list the county, and an attorney can confirm it.",
    },
    { question: "Does Gauthier Law Firm have an office in Frisco?", answer: OFFICE_ANSWER },
    {
      question: "Can a traffic stop on the Tollway be challenged?",
      answer:
        "Any traffic stop, wherever it happens, generally requires reasonable suspicion that a traffic violation or crime occurred. If a stop didn't meet that standard, evidence gathered afterward may be subject to challenge. Whether that applies depends on the facts, including any video.",
    },
  ],
};

const denton: LocationContent = {
  slug: "denton",
  seoTitle: "Criminal Defense Attorney in Denton, TX",
  description:
    "Criminal defense attorney serving Denton, TX. Avia Gauthier defends DWI, drug, and assault family-violence cases in Denton County courts. Call (214) 377-0786.",
  image: IMAGES.courthouseCorridor,
  subtitle:
    "Attorney Avia Gauthier represents students, families, and working professionals facing DWI, drug, and assault family-violence charges in Denton and across Denton County.",
  intro: [
    "Denton is the county seat of Denton County and home to the University of North Texas and Texas Woman's University. Attorney Avia Gauthier represents people facing DWI, drug, and assault family-violence charges in Denton and throughout Denton County.",
    "A criminal charge can be especially disruptive for students, with possible effects on enrollment, campus housing, scholarships, and future professional licensing. Those consequences are worth discussing early, alongside the charge itself.",
  ],
  courts: {
    title: "Denton County Criminal Courts",
    paragraphs: [
      "Denton County criminal cases are generally heard at the Denton County Courts Building in Denton. Misdemeanors are typically handled in the County Criminal Courts, and felonies in the District Courts.",
      "Class C offenses, which are punishable by fine only, are generally handled by municipal or justice courts.",
    ],
  },
  practiceBlurbs: {
    dwi: "Defense for DWI arrests in Denton, including cases involving college students and license hearings.",
    "drug-charges": "Defense for marijuana, THC vape, and controlled-substance charges in Denton County.",
    "assault-family-violence": "Defense for family-violence and dating-violence accusations in Denton.",
  },
  faqs: [
    {
      question: "I'm a college student. Will a criminal charge affect my enrollment?",
      answer:
        "It can. Universities have their own student conduct processes that are separate from the criminal case, and what you say in one can affect the other. Speak with a criminal defense attorney before responding to a school inquiry about an arrest.",
    },
    {
      question: "Can I still be charged with marijuana possession in Denton?",
      answer:
        "Yes. Possession of marijuana remains a crime under Texas law. Local enforcement policies don't change state law, and not every agency that can make an arrest in Denton is bound by city policy.",
    },
    { question: "Does Gauthier Law Firm have an office in Denton?", answer: OFFICE_ANSWER },
  ],
};

export const LOCATION_CONTENT: Record<string, LocationContent> = {
  [dallas.slug]: dallas,
  [plano.slug]: plano,
  [mckinney.slug]: mckinney,
  [frisco.slug]: frisco,
  [denton.slug]: denton,
};
