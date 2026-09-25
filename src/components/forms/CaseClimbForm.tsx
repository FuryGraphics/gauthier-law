import Script from "next/script";
import { cn } from "@/lib/cn";

// The firm's intake form, hosted by CaseClimb. Submissions go to CaseClimb, not
// this site. form_embed.js reads the data-* attributes to size the iframe
// (data-height) and to handle cookie consent.
const FORM_ID = "TZVW5QBMml0x74m0dwG6";
const FORM_NAME = "Website Form (Gauthier Law Firm)";
const FORM_HEIGHT = 540;

export function CaseClimbForm({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[10px] bg-white", className)} style={{ minHeight: FORM_HEIGHT }}>
      <iframe
        src={`https://services.caseclimb.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: "100%", minHeight: FORM_HEIGHT, border: "none", borderRadius: 10 }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={FORM_NAME}
        data-height={FORM_HEIGHT}
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title={FORM_NAME}
      />
      <Script src="https://services.caseclimb.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
