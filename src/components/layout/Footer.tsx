import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FIRM, FIRM_ADDRESS_LINE } from "@/lib/site";
import { LOCATIONS, PRACTICE_AREAS, QUICK_LINKS, ROUTES, type NavLink } from "@/lib/routes";
import { FacebookIcon } from "@/components/ui/icons";
import { Logo } from "./Logo";

const linkClass = "transition-colors hover:text-gold-light";

// Column labels are styled <p>s, not headings, so the footer never interferes
// with each page's H1→H2→H3 outline.
function FooterColumn({ label, links, className }: { label: string; links: NavLink[]; className?: string }) {
  return (
    <nav aria-label={`Footer: ${label}`} className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">{label}</p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/25 bg-navy-deep text-sm text-mist">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs leading-relaxed">
            Criminal defense for DWI, drug, and assault family-violence charges in Dallas, Collin, and Denton Counties.
          </p>
          <address className="mt-6 space-y-3 not-italic">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {FIRM.address.street}
                <br />
                {FIRM.address.city}, {FIRM.address.region} {FIRM.address.postalCode}
              </span>
            </p>
            <p className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={FIRM.phoneHref} className={linkClass}>
                {FIRM.phone}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${FIRM.email}`} className={linkClass}>
                {FIRM.email}
              </a>
            </p>
          </address>
          <a
            href={FIRM.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${FIRM.name} on Facebook`}
            className="mt-6 inline-grid h-10 w-10 place-items-center rounded-full border border-white/15 text-bone transition-colors hover:border-gold-light hover:text-gold-light"
          >
            <FacebookIcon className="h-4 w-4" />
          </a>
        </div>

        <FooterColumn label="Quick Links" links={QUICK_LINKS} className="lg:col-span-2" />
        <FooterColumn
          label="Practice Areas"
          links={[
            ...PRACTICE_AREAS.map((p) => ({ label: p.name, href: p.href })),
            { label: "All Practice Areas", href: ROUTES.practiceAreas },
          ]}
          className="lg:col-span-3"
        />
        <FooterColumn
          label="Areas Served"
          links={LOCATIONS.map((l) => ({ label: `${l.city}, TX`, href: l.href }))}
          className="lg:col-span-3"
        />
      </div>

      <div className="border-t border-white/10">
        {/* Extra bottom padding on mobile keeps the floating Call Now button off the copyright line. */}
        <div className="container-site space-y-4 py-8 pb-28 text-xs leading-relaxed md:pb-8">
          <p className="text-bone">Prior results do not guarantee a similar outcome.</p>
          <p>
            Attorney Advertising. The information on this website is for general informational purposes only and is not
            legal advice. Viewing this website or contacting {FIRM.name} does not create an attorney-client
            relationship. Attorney responsible for the content of this website: {FIRM.attorney}, {FIRM_ADDRESS_LINE}.
          </p>
          <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {FIRM.name}. All rights reserved.
            </p>
            <ul className="flex gap-6">
              <li>
                <Link href={ROUTES.disclaimer} className={linkClass}>
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href={ROUTES.privacy} className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
