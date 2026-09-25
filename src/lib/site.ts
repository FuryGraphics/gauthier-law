// Single source of truth for firm identity. Every page, schema block, and the
// footer read from here — never hard-code firm details elsewhere.

// TODO(client): the domain intake value was incomplete. This fallback is inferred
// from the firm's email domain — confirm the exact domain (and www vs. apex) before launch.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gauthierlawfirm.com").replace(/\/$/, "");

// TODO(client): GA4 placeholder. Set NEXT_PUBLIC_GA_ID to the real measurement ID before launch.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX";

export const FIRM = {
  name: "Gauthier Law Firm",
  attorney: "Avia Gauthier",
  businessType: "Corporation",
  phone: "(214) 377-0786",
  phoneHref: "tel:+12143770786",
  phoneE164: "+1-214-377-0786",
  email: "avia@gauthierlawfirm.com",
  address: {
    street: "15150 Preston Road, Suite 300",
    city: "Dallas",
    region: "TX",
    postalCode: "75248",
    country: "US",
  },
  facebook: "https://www.facebook.com/gauthierlawfirm",
  counties: ["Dallas County", "Collin County", "Denton County"],
} as const;

export const FIRM_ADDRESS_LINE = `${FIRM.address.street}, ${FIRM.address.city}, ${FIRM.address.region} ${FIRM.address.postalCode}`;
