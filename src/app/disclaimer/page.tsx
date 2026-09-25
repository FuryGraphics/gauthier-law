import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { FIRM, FIRM_ADDRESS_LINE } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { LegalDocument } from "@/components/templates/LegalDocument";

// DRAFT legal copy for client/attorney review before publication. Texas attorney
// advertising rules apply; the attorney must confirm this satisfies them.

export const metadata = pageMetadata({
  title: "Legal Disclaimer",
  description:
    "Read the Gauthier Law Firm website disclaimer covering attorney advertising, no attorney-client relationship, prior results, and general legal information.",
  path: ROUTES.disclaimer,
});

export default function DisclaimerPage() {
  return (
    <LegalDocument
      title="Disclaimer"
      subtitle="Important information about using this website and what it does and doesn't mean."
      path={ROUTES.disclaimer}
      updated="September 25, 2026"
    >
      <h2>Attorney Advertising</h2>
      <p>
        This website is attorney advertising. The attorney responsible for its content is {FIRM.attorney}, whose office
        is located at {FIRM_ADDRESS_LINE}.
      </p>

      <h2>Not Legal Advice</h2>
      <p>
        The information on this website is provided for general informational purposes only. It is not legal advice and
        should not be relied on as a substitute for advice from a licensed attorney about your specific situation. Laws
        change frequently, and information on this website may not reflect the most current legal developments.
      </p>

      <h2>No Attorney-Client Relationship</h2>
      <p>
        Viewing this website, calling the firm, sending an email, using the chat feature, or submitting a contact form
        does not create an attorney-client relationship. An attorney-client relationship is formed only when{" "}
        {FIRM.name} agrees to represent you, typically through a written engagement agreement.
      </p>
      <p>
        Please do not send confidential or time-sensitive information through this website until an attorney-client
        relationship has been established. Information sent before then may not be treated as privileged or
        confidential.
      </p>

      <h2>No Guarantee of Results</h2>
      <p>
        Prior results do not guarantee a similar outcome. Every case is different and must be evaluated on its own
        facts. Any testimonials or descriptions of past matters reflect individual experiences and are not a promise or
        prediction of the result in any other case.
      </p>

      <h2>Jurisdiction</h2>
      <p>
        {FIRM.name} focuses on personal injury matters in Texas, primarily in Dallas, Collin, and Denton Counties. The
        firm does not seek to represent anyone based solely on visiting this website in a jurisdiction where this website
        may not comply with applicable laws and rules.
      </p>

      <h2>Images and Third-Party Content</h2>
      <p>
        Photographs on this website are illustrative and do not depict actual clients, cases, or events. Links to
        third-party websites are provided for convenience; the firm does not control and is not responsible for their
        content. Third-party tools on this site, such as the contact form and chat, are operated by outside providers.
      </p>

      <h2>Questions</h2>
      <p>
        If you have questions about this disclaimer, <Link href={ROUTES.contact}>contact the firm</Link> or call{" "}
        {FIRM.phone}. Also see the <Link href={ROUTES.privacy}>Privacy Policy</Link>.
      </p>
    </LegalDocument>
  );
}
