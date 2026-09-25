import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { LOCATIONS } from "@/lib/routes";
import { LOCATION_CONTENT } from "@/content/locations";
import { LocationTemplate } from "@/components/templates/LocationTemplate";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ city: location.slug }));
}

function resolve(slug: string) {
  const location = LOCATIONS.find((l) => l.slug === slug);
  const content = LOCATION_CONTENT[slug];
  return location && content ? { location, content } : null;
}

export async function generateMetadata({ params }: PageProps<"/locations/[city]">) {
  const resolved = resolve((await params).city);
  if (!resolved) return {};
  const { location, content } = resolved;
  return pageMetadata({ title: content.seoTitle, description: content.description, path: location.href });
}

export default async function LocationPage({ params }: PageProps<"/locations/[city]">) {
  const resolved = resolve((await params).city);
  if (!resolved) notFound();
  return <LocationTemplate location={resolved.location} content={resolved.content} />;
}
