import { Phone } from "lucide-react";
import { FIRM } from "@/lib/site";

/**
 * Floating click-to-call button, mobile only, on every page. Pinned bottom-LEFT:
 * the LeadConnector chat bubble owns bottom-right (its position is set in the
 * LeadConnector dashboard). If the chat is moved to the left there, move this back.
 */
export function MobileCallButton() {
  return (
    <a
      href={FIRM.phoneHref}
      aria-label={`Call ${FIRM.name} now at ${FIRM.phone}`}
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] left-4 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-navy-deep shadow-xl shadow-black/40 ring-1 ring-black/10 md:hidden"
    >
      <Phone aria-hidden="true" className="h-4 w-4" />
      Call Now
    </a>
  );
}
