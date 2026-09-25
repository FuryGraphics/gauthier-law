import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { FIRM } from "@/lib/site";
import { LOCATIONS, PRACTICE_AREAS, ROUTES } from "@/lib/routes";
import { IMAGES } from "@/content/images";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CaseClimbForm } from "@/components/forms/CaseClimbForm";

// INTERIM CONTACT PAGE — hosts the CaseClimb intake form until the Contact page
// prompt is built. Copy uses intake facts only.

export const metadata = pageMetadata({
  title: "Contact a Dallas Personal Injury Lawyer",
  description:
    "Contact Gauthier Law Firm in Dallas to request a consultation with personal injury lawyer Avia Gauthier. Call (214) 377-0786 or send a message online today.",
  path: ROUTES.contact,
});

const detailRow = "flex gap-4";
const detailIcon = "mt-1 h-5 w-5 shrink-0 text-gold";

export default function ContactPage() {
  return (
    <>
      <Hero
        image={IMAGES.courthouseColumns}
        eyebrow="Contact"
        title={
          <>
            Contact <span className="text-gold-light">Gauthier Law Firm</span>
          </>
        }
        subtitle={`Request a consultation with attorney ${FIRM.attorney}. Call the office or send a message using the form below.`}
        breadcrumbs={[{ name: "Contact", path: ROUTES.contact }]}
        secondaryCta={{ label: "Send a Message", href: "#contact-form" }}
      />

      <Section id="contact-form">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Send a Message" title="Request a Consultation" />
            <CaseClimbForm className="mt-10" />
            <p className="mt-6 text-xs leading-relaxed text-mist">
              Submitting this form does not create an attorney-client relationship. Please do not include confidential
              details about your case until an attorney-client relationship has been established.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <SectionHeading eyebrow="Office" title="Visit or Call" />
            <address className="mt-10 space-y-6 text-lg not-italic text-mist">
              <p className={detailRow}>
                <MapPin aria-hidden="true" className={detailIcon} />
                <span>
                  {FIRM.address.street}
                  <br />
                  {FIRM.address.city}, {FIRM.address.region} {FIRM.address.postalCode}
                </span>
              </p>
              <p className={detailRow}>
                <Phone aria-hidden="true" className={detailIcon} />
                <a href={FIRM.phoneHref} className="text-bone transition-colors hover:text-gold-light">
                  {FIRM.phone}
                </a>
              </p>
              <p className={detailRow}>
                <Mail aria-hidden="true" className={detailIcon} />
                <a href={`mailto:${FIRM.email}`} className="break-all text-bone transition-colors hover:text-gold-light">
                  {FIRM.email}
                </a>
              </p>
            </address>

            <div className="mt-12 border-t border-white/10 pt-10">
              <h3 className="text-xl text-bone">Practice Areas</h3>
              <ul className="mt-4 space-y-2">
                {PRACTICE_AREAS.map((area) => (
                  <li key={area.href}>
                    <Link href={area.href} className="text-gold-light transition-colors hover:text-bone">
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-xl text-bone">Areas Served</h3>
              <p className="mt-4 leading-relaxed text-mist">
                {LOCATIONS.map((loc, i) => (
                  <span key={loc.href}>
                    {i > 0 && " · "}
                    <Link href={loc.href} className="transition-colors hover:text-gold-light">
                      {loc.city}
                    </Link>
                  </span>
                ))}
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
