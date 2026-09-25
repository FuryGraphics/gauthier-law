import type { Metadata } from "next";
import { FIRM } from "./site";

export const TITLE_SUFFIX = ` | ${FIRM.name}`;
const DESCRIPTION_MIN = 150;
const DESCRIPTION_MAX = 160;
const OG_IMAGE_PATH = "/opengraph-image";

type PageSeo = {
  /** Target keyword phrase — rendered as "<title> | Gauthier Law Firm". */
  title: string;
  /** 150–160 characters. Enforced at build time. */
  description: string;
  /** Route path, e.g. "/practice-areas/dwi". Becomes the canonical and og:url. */
  path: string;
  ogType?: "website" | "profile" | "article";
};

/**
 * Builds the complete metadata block every page exports: unique title, meta
 * description, canonical, Open Graph, and Twitter card. The OG image comes from
 * app/opengraph-image.tsx. Throws on an out-of-range description so a bad value
 * fails the build instead of shipping.
 */
export function pageMetadata({ title, description, path, ogType = "website" }: PageSeo): Metadata {
  const length = description.length;
  if (length < DESCRIPTION_MIN || length > DESCRIPTION_MAX) {
    throw new Error(
      `Meta description for "${path}" is ${length} characters; it must be ${DESCRIPTION_MIN}–${DESCRIPTION_MAX}.`,
    );
  }

  const fullTitle = `${title}${TITLE_SUFFIX}`;
  // Setting `openGraph` on a page replaces the parent's, which drops the root
  // app/opengraph-image on nested routes — so reference it explicitly.
  const image = { url: OG_IMAGE_PATH, width: 1200, height: 630, alt: `${FIRM.name}, criminal defense in Dallas, Texas` };
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      url: path,
      siteName: FIRM.name,
      locale: "en_US",
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}
