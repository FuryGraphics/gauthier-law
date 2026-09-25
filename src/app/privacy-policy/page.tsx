import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { FIRM, FIRM_ADDRESS_LINE } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { LegalDocument } from "@/components/templates/LegalDocument";

// DRAFT privacy policy for client/attorney review. It describes the tools actually
// installed on the site (GA4, CaseClimb form, LeadConnector chat). Confirm the firm's
// real data practices — especially "we do not sell" and SMS handling — before launch,
// and update this page whenever a tracking or intake tool is added or removed.

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Gauthier Law Firm collects, uses, and protects information submitted through this website, including forms, chat, text messages, and analytics.",
  path: ROUTES.privacy,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      subtitle="How information is collected, used, and protected when you use this website."
      path={ROUTES.privacy}
      updated="[INSERT DATE OF CLIENT APPROVAL]"
    >
      <p>
        This Privacy Policy explains how {FIRM.name} (&ldquo;the firm,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;)
        handles information collected through this website. By using the website, you agree to the practices described
        here.
      </p>

      <h2>Information We Collect</h2>
      <h3>Information you provide</h3>
      <p>When you contact the firm, you may provide information such as:</p>
      <ul>
        <li>Your name, phone number, and email address</li>
        <li>A message describing your situation</li>
        <li>Any other information you choose to share by phone, email, chat, or form</li>
      </ul>
      <p>
        Please don&apos;t submit confidential details about a legal matter through the website before an
        attorney-client relationship has been established. See the <Link href={ROUTES.disclaimer}>Disclaimer</Link>.
      </p>

      <h3>Information collected automatically</h3>
      <p>
        Like most websites, this site and its service providers may automatically collect information such as your IP
        address, browser type, device information, pages visited, and referring website, using cookies and similar
        technologies.
      </p>

      <h2>Third-Party Services on This Website</h2>
      <ul>
        <li>
          <strong>Contact form.</strong> The contact form is provided by CaseClimb. Information you submit is transmitted
          to and stored by that provider on the firm&apos;s behalf.
        </li>
        <li>
          <strong>Chat.</strong> The chat feature is provided by LeadConnector. Messages and contact details you enter
          in the chat are processed by that provider on the firm&apos;s behalf.
        </li>
        <li>
          <strong>Analytics.</strong> The website uses Google Analytics to understand how visitors use the site. Google
          may use cookies to collect usage information. You can learn about Google&apos;s practices and opt-out options
          on Google&apos;s website.
        </li>
      </ul>
      <p>These providers have their own privacy policies governing how they handle information.</p>

      <h2>Text Messages</h2>
      <p>
        If you provide your phone number through the contact form or chat, the firm may contact you by phone or text
        message about your inquiry. Message and data rates may apply. You can ask the firm to stop texting you at any
        time by replying to a message with your request or by contacting the firm directly.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>To respond to your inquiry and schedule consultations</li>
        <li>To evaluate whether the firm can assist with your matter, including checking for conflicts of interest</li>
        <li>To operate, maintain, and improve the website</li>
        <li>To comply with legal and professional obligations</li>
      </ul>

      <h2>How We Share Information</h2>
      <p>
        The firm does not sell personal information. Information may be shared with service providers that help operate
        the website and intake tools, when required by law or legal process, or to protect the rights and safety of the
        firm or others.
      </p>

      <h2>Data Security</h2>
      <p>
        The firm uses reasonable measures to protect information. However, no method of transmitting or storing data
        online is completely secure, and the firm cannot guarantee the security of information sent through the
        internet.
      </p>

      <h2>Your Choices</h2>
      <ul>
        <li>You can set your browser to refuse or delete cookies, though some features may not work as intended.</li>
        <li>You can request access to, correction of, or deletion of information you have provided, subject to legal and professional obligations.</li>
        <li>You can opt out of text messages as described above.</li>
      </ul>

      <h2>Children&apos;s Privacy</h2>
      <p>
        This website is not directed to children under 13, and the firm does not knowingly collect personal information
        from children under 13 through the website.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        The firm may update this Privacy Policy from time to time. Changes take effect when posted on this page, and the
        &ldquo;Last updated&rdquo; date above will be revised.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this Privacy Policy can be directed to {FIRM.name}, {FIRM_ADDRESS_LINE}; by phone at{" "}
        <a href={FIRM.phoneHref}>{FIRM.phone}</a>; or by email at <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>. You
        can also use the <Link href={ROUTES.contact}>contact page</Link>.
      </p>
    </LegalDocument>
  );
}
