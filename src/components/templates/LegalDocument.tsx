import Link from "next/link";
import type { ReactNode } from "react";
import { ROUTES } from "@/lib/routes";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";

/** Layout for the Disclaimer and Privacy Policy: plain hero, long-form prose, related links. */
export function LegalDocument({
  title,
  subtitle,
  path,
  updated,
  children,
}: {
  title: string;
  subtitle: string;
  path: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ name: title, path }]}
        secondaryCta={{ label: "Contact the Firm", href: ROUTES.contact }}
      />
      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <article className="prose-site lg:col-span-8">
            <p className="text-sm uppercase tracking-[0.15em] text-gold-light">Last updated: {updated}</p>
            {children}
          </article>
          <aside className="lg:col-span-4">
            <div className="rounded-sm border border-white/10 bg-navy/40 p-7 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Related</p>
              <ul className="mt-5 space-y-3">
                {[
                  { label: "Disclaimer", href: ROUTES.disclaimer },
                  { label: "Privacy Policy", href: ROUTES.privacy },
                  { label: "Contact", href: ROUTES.contact },
                  { label: "Home", href: ROUTES.home },
                ]
                  .filter((link) => link.href !== path)
                  .map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-bone transition-colors hover:text-gold-light">
                        {link.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
