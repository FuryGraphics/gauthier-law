import type { IconName } from "@/components/ui/icons";
import { IMAGES, type SiteImage } from "@/content/images";

// Route registry. Nav, footer, sitemap, and schema all derive from this file, so a
// slug change here propagates everywhere. scripts/seo-audit.mjs fails the build
// audit if a sitemap entry has no built page or a built page is missing here.
export const ROUTES = {
  home: "/",
  attorney: "/attorney-avia-gauthier",
  practiceAreas: "/practice-areas",
  locations: "/locations",
  afterAccident: "/what-to-do-after-a-car-accident",
  testimonials: "/testimonials",
  faq: "/faq",
  contact: "/contact",
  disclaimer: "/disclaimer",
  privacy: "/privacy-policy",
} as const;

export type NavLink = { label: string; href: string };

export type PracticeArea = {
  slug: string;
  name: string;
  href: string;
  blurb: string;
  icon: IconName;
  image: SiteImage;
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "car-accidents",
    name: "Car Accidents",
    href: "/practice-areas/car-accidents",
    icon: "car",
    image: IMAGES.carAccident,
    blurb: "Claims for people hurt in collisions, from insurance negotiations through suit.",
  },
  {
    slug: "slip-and-fall",
    name: "Slip and Fall",
    href: "/practice-areas/slip-and-fall",
    icon: "hazard",
    image: IMAGES.slipHazard,
    blurb: "Premises liability claims for injuries caused by unsafe property conditions.",
  },
];

export type Location = {
  city: string;
  slug: string;
  href: string;
  counties: string[];
};

// The firm has one office (Dallas). Location pages describe service areas — they
// must never imply a physical office in the other cities. `counties` lists which of
// the firm's three service counties each city lies in, primary county first.
export const LOCATIONS: Location[] = [
  {
    city: "Dallas",
    slug: "dallas",
    href: "/locations/dallas",
    counties: ["Dallas County", "Collin County", "Denton County"],
  },
  { city: "Plano", slug: "plano", href: "/locations/plano", counties: ["Collin County", "Denton County"] },
  { city: "McKinney", slug: "mckinney", href: "/locations/mckinney", counties: ["Collin County"] },
  { city: "Frisco", slug: "frisco", href: "/locations/frisco", counties: ["Collin County", "Denton County"] },
  { city: "Denton", slug: "denton", href: "/locations/denton", counties: ["Denton County"] },
];

// Top-level nav items after the Practice Areas mega-dropdown.
export const PRIMARY_NAV: NavLink[] = [
  { label: "About", href: ROUTES.attorney },
  { label: "Testimonials", href: ROUTES.testimonials },
  { label: "FAQ", href: ROUTES.faq },
  { label: "Contact", href: ROUTES.contact },
];

export const QUICK_LINKS: NavLink[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About Avia Gauthier", href: ROUTES.attorney },
  { label: "What to Do After a Car Accident", href: ROUTES.afterAccident },
  { label: "Testimonials", href: ROUTES.testimonials },
  { label: "FAQ", href: ROUTES.faq },
  { label: "Contact", href: ROUTES.contact },
];

// Sitemap source — every page on the site.
export const SITEMAP_ROUTES: { path: string; priority: number }[] = [
  { path: ROUTES.home, priority: 1 },
  { path: ROUTES.practiceAreas, priority: 0.9 },
  ...PRACTICE_AREAS.map((p) => ({ path: p.href, priority: 0.9 })),
  { path: ROUTES.locations, priority: 0.7 },
  ...LOCATIONS.map((l) => ({ path: l.href, priority: 0.8 })),
  { path: ROUTES.attorney, priority: 0.8 },
  { path: ROUTES.afterAccident, priority: 0.7 },
  { path: ROUTES.testimonials, priority: 0.6 },
  { path: ROUTES.faq, priority: 0.6 },
  { path: ROUTES.contact, priority: 0.8 },
  { path: ROUTES.disclaimer, priority: 0.3 },
  { path: ROUTES.privacy, priority: 0.3 },
];
