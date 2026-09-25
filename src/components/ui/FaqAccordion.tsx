import { faqPageSchema, type Faq } from "@/lib/schema";
import { JsonLd } from "../seo/JsonLd";
import { AccordionItems } from "./AccordionItems";

/**
 * The one FAQ component. Set `emitSchema` on pages that carry FAQPage schema
 * (the three practice-area pages) — the schema is generated from the same items
 * the visitor sees, so the two can't drift apart.
 */
export function FaqAccordion({
  items,
  emitSchema = false,
  headingLevel,
  className,
}: {
  items: Faq[];
  emitSchema?: boolean;
  headingLevel?: "h3" | "h4";
  className?: string;
}) {
  return (
    <>
      {emitSchema && <JsonLd data={faqPageSchema(items)} />}
      <AccordionItems items={items} headingLevel={headingLevel} className={className} />
    </>
  );
}
