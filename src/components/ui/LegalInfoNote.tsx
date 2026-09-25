import Link from "next/link";
import { ROUTES } from "@/lib/routes";

/** Standard "general information, not legal advice" note for pages that explain Texas law. */
export function LegalInfoNote() {
  return (
    <p className="text-sm leading-relaxed text-mist">
      This page provides general information about Texas law, not legal advice, and laws change. Reading it does not
      create an attorney-client relationship. Every case is different, and prior results do not guarantee a similar
      outcome. See the full <Link href={ROUTES.disclaimer} className="text-gold-light underline underline-offset-4">disclaimer</Link>.
    </p>
  );
}
