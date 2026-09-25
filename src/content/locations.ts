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
  practiceBlurbs: Record<"car-accidents" | "slip-and-fall", string>;
  faqs: Faq[];
};

const OFFICE_ANSWER =
  "No. Gauthier Law Firm has one office, located at 15150 Preston Road, Suite 300, in Dallas. The firm represents injured clients whose claims arise in Dallas, Collin, and Denton Counties. Call (214) 377-0786 to ask about scheduling a consultation.";

const DEADLINE_ANSWER =
  "Most Texas injury lawsuits must be filed within two years of the date of the injury. If a city, county, transit authority, or other governmental unit may be responsible, written notice is often required much sooner, sometimes within months. Those dates are worth confirming right away.";

const dallas: LocationContent = {
  slug: "dallas",
  seoTitle: "Personal Injury Lawyer in Dallas, TX",
  description:
    "Personal injury lawyer serving Dallas, TX. Avia Gauthier handles car accident and slip and fall claims in Dallas County. Call (214) 377-0786 for a consultation.",
  image: IMAGES.heroSkyline,
  subtitle:
    "From the firm's North Dallas office, attorney Avia Gauthier represents people injured in car accidents and falls throughout the city of Dallas.",
  intro: [
    "Gauthier Law Firm's office is on Preston Road in North Dallas, which makes Dallas home base for the firm. Attorney Avia Gauthier represents injured people across the city, from Uptown and Deep Ellum to Oak Cliff, Lake Highlands, and Far North Dallas.",
    "Dallas traffic supplies more than its share of collisions. Crashes on I-35E, the LBJ Freeway, Central Expressway, and I-30, and in the parking lots and surface streets in between, can leave people with injuries that outlast the insurance company's first offer.",
  ],
  courts: {
    title: "Where a Dallas Injury Case Is Filed",
    paragraphs: [
      "Most injury claims are resolved with an insurance company without a lawsuit ever being filed. When filing is necessary, Dallas County civil cases are generally heard in the county courts at law or the civil district courts, which sit at the George L. Allen Sr. Courts Building downtown.",
      "Which court hears a case usually depends on the amount in dispute. Most of Dallas lies in Dallas County, though parts of the city extend into Collin and Denton Counties, and where the collision happened can affect where a suit is filed.",
    ],
  },
  practiceBlurbs: {
    "car-accidents": "Claims for people hurt in collisions on Dallas highways, surface streets, and parking lots.",
    "slip-and-fall": "Premises claims for falls in Dallas stores, apartment complexes, and parking garages.",
  },
  faqs: [
    {
      question: "Do I have to file a lawsuit to get compensated?",
      answer:
        "Often not. Many claims resolve through negotiation with the insurance company. A lawsuit becomes necessary when the insurer disputes fault or the injuries, when an offer is unreasonable, or when the filing deadline is approaching.",
    },
    { question: "How long do I have to bring an injury claim in Texas?", answer: DEADLINE_ANSWER },
    {
      question: "Where is the firm's office?",
      answer:
        "Gauthier Law Firm is located at 15150 Preston Road, Suite 300, Dallas, TX 75248. Call (214) 377-0786 to ask about scheduling a consultation.",
    },
  ],
};

const plano: LocationContent = {
  slug: "plano",
  seoTitle: "Personal Injury Lawyer in Plano, TX",
  description:
    "Personal injury lawyer serving Plano, Texas. Avia Gauthier handles car accident and slip and fall claims in Collin and Denton County. Call (214) 377-0786 today.",
  image: IMAGES.officeDesk,
  subtitle:
    "Attorney Avia Gauthier represents Plano residents injured in car accidents and falls, from the firm's office in nearby North Dallas.",
  intro: [
    "Plano residents hurt in a collision or a fall can work with Gauthier Law Firm from the firm's office in nearby North Dallas. Attorney Avia Gauthier handles injury claims arising throughout the city.",
    "Central Expressway, the Dallas North Tollway, and the Sam Rayburn Tollway carry heavy traffic through and around Plano, and the city's retail centers and apartment communities generate their share of premises claims.",
  ],
  courts: {
    title: "Which County Handles a Plano Claim",
    paragraphs: [
      "Most of Plano is in Collin County, while a western portion of the city lies in Denton County. If a lawsuit becomes necessary, that line matters: a Collin County suit is generally filed in McKinney, and a Denton County suit in Denton.",
      "Collin County civil cases are heard in the county courts at law and district courts at the Russell A. Steindam Courts Building in McKinney.",
    ],
  },
  practiceBlurbs: {
    "car-accidents": "Claims for collisions on the Tollway, Central Expressway, and Plano surface streets.",
    "slip-and-fall": "Premises claims for falls in Plano shopping centers, restaurants, and apartment complexes.",
  },
  faqs: [
    {
      question: "Which county would my Plano case be filed in?",
      answer:
        "It usually depends on where the collision or fall happened. Most Plano matters fall in Collin County and would be filed in McKinney, while incidents in the Denton County portion of the city are generally handled in Denton.",
    },
    { question: "Does Gauthier Law Firm have an office in Plano?", answer: OFFICE_ANSWER },
    {
      question: "What should I do after a crash in Plano?",
      answer:
        "Get medical attention, report the collision, and photograph the vehicles and the scene if you're able. Keep everything the insurance companies send you, and get advice before giving a recorded statement to the other driver's insurer.",
    },
  ],
};

const mckinney: LocationContent = {
  slug: "mckinney",
  seoTitle: "Personal Injury Lawyer in McKinney, TX",
  description:
    "Personal injury lawyer serving McKinney, TX. Avia Gauthier handles car accident and slip and fall claims throughout Collin County. Call (214) 377-0786.",
  image: IMAGES.courthouseColumns,
  subtitle:
    "McKinney is the county seat of Collin County. Attorney Avia Gauthier represents people injured in car accidents and falls in McKinney and across the county.",
  intro: [
    "McKinney is the county seat of Collin County and home to the courthouse where Collin County civil cases are heard. Attorney Avia Gauthier represents injured people in McKinney and the surrounding communities.",
    "Collisions along US-75, US-380, and SH-121 bring many McKinney injury claims, and falls in the city's stores, restaurants, and apartment communities account for many more.",
  ],
  courts: {
    title: "Collin County Civil Courts",
    paragraphs: [
      "When an injury claim can't be resolved with the insurance company, a Collin County lawsuit is generally filed at the Russell A. Steindam Courts Building on Bloomdale Road in McKinney. County courts at law and district courts hear civil cases there, depending largely on the amount in dispute.",
      "Most claims still settle before trial, but filing can be what moves an insurer that has not made a reasonable offer.",
    ],
  },
  practiceBlurbs: {
    "car-accidents": "Claims for collisions on US-75, US-380, SH-121, and McKinney streets.",
    "slip-and-fall": "Premises claims for falls on McKinney business and residential property.",
  },
  faqs: [
    {
      question: "Where would a Collin County injury lawsuit be filed?",
      answer:
        "At the Russell A. Steindam Courts Building in McKinney, which houses the county courts at law and district courts that hear Collin County civil cases.",
    },
    { question: "Does Gauthier Law Firm have an office in McKinney?", answer: OFFICE_ANSWER },
    {
      question: "How long does an injury claim take?",
      answer:
        "It varies. A straightforward claim can resolve in a matter of months once treatment is complete, while a disputed claim or one that requires filing suit can take considerably longer. Settling before the medical picture is clear is usually a mistake, so treatment often sets the pace.",
    },
  ],
};

const frisco: LocationContent = {
  slug: "frisco",
  seoTitle: "Personal Injury Lawyer in Frisco, TX",
  description:
    "Personal injury lawyer serving Frisco, TX. Avia Gauthier handles car accident and slip and fall claims in Collin and Denton County. Call (214) 377-0786 today.",
  image: IMAGES.carAccident,
  subtitle:
    "Frisco sits in two counties. Attorney Avia Gauthier represents people injured in car accidents and falls there, whichever county the claim belongs to.",
  intro: [
    "Frisco is one of the fastest-growing cities in North Texas, and it sits across two counties. Attorney Avia Gauthier represents injured people in Frisco whether a claim belongs in Collin County or Denton County.",
    "The Dallas North Tollway, SH-121, and Preston Road carry constant traffic through the city, and Frisco's shopping centers, stadiums, and apartment communities draw crowds that premises owners are responsible for keeping reasonably safe.",
  ],
  courts: {
    title: "Collin County or Denton County?",
    paragraphs: [
      "The eastern part of Frisco is in Collin County and the western part is in Denton County. A Collin County suit is generally filed at the Russell A. Steindam Courts Building in McKinney, and a Denton County suit at the Denton County Courts Building in Denton.",
      "Because the two counties have different courts and procedures, confirming where a Frisco claim belongs is a useful early step, even while the claim is still with an insurance company.",
    ],
  },
  practiceBlurbs: {
    "car-accidents": "Claims for collisions on the Tollway, SH-121, Preston Road, and Frisco streets.",
    "slip-and-fall": "Premises claims for falls in Frisco retail centers, venues, and apartment complexes.",
  },
  faqs: [
    {
      question: "Is my Frisco claim in Collin County or Denton County?",
      answer:
        "It generally depends on where the collision or fall happened. The eastern part of Frisco is in Collin County and the western part is in Denton County. A crash report or incident report usually identifies the location, and an attorney can confirm the county.",
    },
    { question: "Does Gauthier Law Firm have an office in Frisco?", answer: OFFICE_ANSWER },
    {
      question: "The other driver's insurer already called me. Should I give a statement?",
      answer:
        "You're generally not required to give a recorded statement to the other driver's insurance company, and doing so early, before you know how badly you're hurt, can work against you. It's reasonable to get advice first.",
    },
  ],
};

const denton: LocationContent = {
  slug: "denton",
  seoTitle: "Personal Injury Lawyer in Denton, TX",
  description:
    "Personal injury lawyer serving Denton, TX. Avia Gauthier handles car accident and slip and fall claims in Denton County. Call (214) 377-0786 for a consultation.",
  image: IMAGES.courthouseCorridor,
  subtitle:
    "Attorney Avia Gauthier represents students, families, and working people injured in car accidents and falls in Denton and across Denton County.",
  intro: [
    "Denton is the county seat of Denton County and home to the University of North Texas and Texas Woman's University. Attorney Avia Gauthier represents injured people in Denton and throughout the county.",
    "I-35E and I-35W meet in Denton, and along with US-380 and Loop 288 they account for many of the area's collisions. Falls in campus-area apartments, stores, and restaurants make up much of the rest of the local injury work.",
  ],
  courts: {
    title: "Denton County Civil Courts",
    paragraphs: [
      "Denton County civil lawsuits are generally filed at the Denton County Courts Building in Denton, where county courts at law and district courts hear civil cases depending on the amount in dispute.",
      "As elsewhere, most injury claims are negotiated with an insurance company first, and filing suit becomes the next step only when that process stalls or a deadline approaches.",
    ],
  },
  practiceBlurbs: {
    "car-accidents": "Claims for collisions on I-35, US-380, Loop 288, and Denton city streets.",
    "slip-and-fall": "Premises claims for falls in Denton apartments, stores, and restaurants.",
  },
  faqs: [
    {
      question: "I'm a student. Can I bring a claim if I was hurt off campus?",
      answer:
        "Yes. A claim depends on who was responsible for the collision or the dangerous condition, not on whether you're a student. If a university or other governmental entity may be involved, notice deadlines can be much shorter, so ask about them early.",
    },
    { question: "What if my medical bills are more than the other driver's insurance?", answer:
        "That happens often, because Texas requires only minimum liability limits. Uninsured and underinsured motorist coverage on your own policy may apply, and there may be other coverage available. Reviewing every applicable policy is an important step." },
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
