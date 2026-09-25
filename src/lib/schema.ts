import { FIRM, SITE_URL } from "./site";
import { LOCATIONS, PRACTICE_AREAS, ROUTES, type Location } from "./routes";

// JSON-LD builders. Only facts supplied by the client belong here — no ratings,
// review counts, geo coordinates, hours, or credentials until they are provided.

type Json = Record<string, unknown>;
export type Crumb = { name: string; path: string };
export type Faq = { question: string; answer: string };

export const absoluteUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export const FIRM_ID = `${SITE_URL}/#legalservice`;
export const ATTORNEY_ID = `${absoluteUrl(ROUTES.attorney)}#attorney`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: FIRM.address.street,
  addressLocality: FIRM.address.city,
  addressRegion: FIRM.address.region,
  postalCode: FIRM.address.postalCode,
  addressCountry: FIRM.address.country,
};

const counties = FIRM.counties.map((name) => ({ "@type": "AdministrativeArea", name: `${name}, Texas` }));

const areaServed = [...LOCATIONS.map((l) => ({ "@type": "City", name: `${l.city}, Texas` })), ...counties];

const knowsAbout = ["Criminal defense", ...PRACTICE_AREAS.map((p) => p.name)];

const firmReference = { "@type": "LegalService", "@id": FIRM_ID, name: FIRM.name };

/** Homepage. */
export function legalServiceSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": FIRM_ID,
    name: FIRM.name,
    url: absoluteUrl(ROUTES.home),
    telephone: FIRM.phoneE164,
    email: FIRM.email,
    address: postalAddress,
    areaServed,
    knowsAbout,
    sameAs: [FIRM.facebook],
    // TODO(client): add logo, image, openingHoursSpecification, and priceRange once supplied.
  };
}

/** Attorney bio page. Pass verified credentials only (e.g. alumniOf) via `extra`. */
export function attorneySchema(extra: Json = {}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": ATTORNEY_ID,
    name: FIRM.attorney,
    url: absoluteUrl(ROUTES.attorney),
    telephone: FIRM.phoneE164,
    email: FIRM.email,
    address: postalAddress,
    areaServed,
    knowsAbout,
    parentOrganization: firmReference,
    ...extra,
  };
}

/** City/location pages. The address is the firm's single Dallas office. */
export function localBusinessSchema(location: Location): Json {
  const url = absoluteUrl(location.href);
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LegalService"],
    "@id": `${url}#localbusiness`,
    name: FIRM.name,
    url,
    telephone: FIRM.phoneE164,
    email: FIRM.email,
    address: postalAddress,
    areaServed: [
      { "@type": "City", name: `${location.city}, Texas` },
      ...location.counties.map((name) => ({ "@type": "AdministrativeArea", name: `${name}, Texas` })),
    ],
    knowsAbout,
    parentOrganization: firmReference,
  };
}

/** Practice-area pages — must mirror the visible FAQ accordion exactly. */
export function faqPageSchema(faqs: Faq[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Every inner page. Rendered automatically by <Breadcrumbs>. */
export function breadcrumbSchema(trail: Crumb[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}
