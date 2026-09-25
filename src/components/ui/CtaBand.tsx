import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { FIRM } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { IMAGES, type SiteImage } from "@/content/images";
import { ButtonLink } from "./ButtonLink";
import { Section } from "./Section";

/** Closing consultation band reused at the bottom of pages. */
export function CtaBand({
  title = "Facing Criminal Charges in North Texas?",
  text,
  image = IMAGES.gavel,
}: {
  title?: ReactNode;
  text?: ReactNode;
  /** Backdrop photo; pass null for a plain navy band. */
  image?: SiteImage | null;
}) {
  return (
    <Section tone="navy" backdrop={image ?? undefined} className="border-t border-gold/30">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight text-bone md:text-4xl">{title}</h2>
          <span aria-hidden="true" className="mt-5 block h-0.5 w-14 bg-gold" />
          <p className="mt-6 text-lg leading-relaxed text-mist">
            {text ??
              `Speak with attorney ${FIRM.attorney} about your charges and your options. Call ${FIRM.phone} or send a message to request a consultation.`}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
          <ButtonLink href={FIRM.phoneHref}>
            <Phone aria-hidden="true" className="h-4 w-4" />
            Call {FIRM.phone}
          </ButtonLink>
          <ButtonLink href={ROUTES.contact} variant="outline">
            Request a Consultation
          </ButtonLink>
        </div>
      </div>
      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-mist">
        Contacting {FIRM.name} does not create an attorney-client relationship. Please do not send confidential
        information until an attorney-client relationship has been established.
      </p>
    </Section>
  );
}
