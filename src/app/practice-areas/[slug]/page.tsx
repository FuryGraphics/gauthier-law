import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { PRACTICE_AREAS } from "@/lib/routes";
import { PRACTICE_CONTENT } from "@/content/practice-areas";
import { PracticeAreaTemplate } from "@/components/templates/PracticeAreaTemplate";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({ slug: area.slug }));
}

function resolve(slug: string) {
  const area = PRACTICE_AREAS.find((p) => p.slug === slug);
  const content = PRACTICE_CONTENT[slug];
  return area && content ? { area, content } : null;
}

export async function generateMetadata({ params }: PageProps<"/practice-areas/[slug]">) {
  const resolved = resolve((await params).slug);
  if (!resolved) return {};
  const { area, content } = resolved;
  return pageMetadata({ title: content.seoTitle, description: content.description, path: area.href });
}

export default async function PracticeAreaPage({ params }: PageProps<"/practice-areas/[slug]">) {
  const resolved = resolve((await params).slug);
  if (!resolved) notFound();
  return <PracticeAreaTemplate area={resolved.area} content={resolved.content} />;
}
