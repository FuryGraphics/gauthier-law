"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowRight, ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { FIRM } from "@/lib/site";
import { LOCATIONS, PRACTICE_AREAS, PRIMARY_NAV, ROUTES } from "@/lib/routes";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";

const SCROLL_THRESHOLD = 24;
const subscribeToScroll = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};
const getIsScrolled = () => window.scrollY > SCROLL_THRESHOLD;

// Menus stay in the DOM (hidden with `invisible`) so their links are crawlable and
// aria-controls always points at a real element.
const panelState = (open: boolean) =>
  open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none";

const eyebrow = "text-xs font-semibold uppercase tracking-[0.22em] text-gold-light";

export function Header() {
  const scrolled = useSyncExternalStore(subscribeToScroll, getIsScrolled, () => false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleMegaClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };
  const closeAll = () => {
    setMegaOpen(false);
    setMobileOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const solid = scrolled || megaOpen || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
        solid
          ? "border-white/5 bg-navy/95 shadow-lg shadow-black/25 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Logo onClick={closeAll} />

        <nav aria-label="Primary" className="hidden h-full lg:block">
          <ul className="flex h-full items-center gap-9 text-sm font-medium text-bone/90">
            <li
              ref={megaRef}
              className="flex h-full items-center"
              onMouseEnter={openMega}
              onMouseLeave={scheduleMegaClose}
              onBlur={(e) => {
                if (!megaRef.current?.contains(e.relatedTarget as Node | null)) setMegaOpen(false);
              }}
            >
              <button
                type="button"
                aria-expanded={megaOpen}
                aria-controls="mega-practice-areas"
                onClick={() => setMegaOpen((o) => !o)}
                className={cn(
                  "flex items-center gap-1.5 transition-colors hover:text-gold-light",
                  megaOpen && "text-gold-light",
                )}
              >
                Practice Areas
                <ChevronDown
                  aria-hidden="true"
                  className={cn("h-4 w-4 transition-transform duration-200", megaOpen && "rotate-180")}
                />
              </button>

              <div
                id="mega-practice-areas"
                className={cn(
                  "absolute inset-x-0 top-full border-t border-white/5 bg-navy shadow-2xl shadow-black/40 transition-[opacity,transform,visibility] duration-200",
                  panelState(megaOpen),
                )}
              >
                <div className="container-site grid gap-10 py-10 lg:grid-cols-12">
                  <div className="lg:col-span-8">
                    <p className={eyebrow}>Practice Areas</p>
                    <ul className="mt-5 grid gap-3 md:grid-cols-3">
                      {PRACTICE_AREAS.map((area) => (
                        <li key={area.href}>
                          <Link
                            href={area.href}
                            onClick={closeAll}
                            className="block h-full rounded-sm border border-white/10 p-5 transition-colors hover:border-gold/60 hover:bg-white/[0.03]"
                          >
                            <Icon name={area.icon} className="h-7 w-7 text-gold-light" />
                            <span className="mt-4 block font-display text-lg text-bone">{area.name}</span>
                            <span className="mt-2 block text-sm font-normal leading-relaxed text-mist">
                              {area.blurb}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={ROUTES.practiceAreas}
                      onClick={closeAll}
                      className="mt-6 inline-flex items-center gap-2 text-gold-light transition-colors hover:text-bone"
                    >
                      View all practice areas <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-10">
                    <p className={eyebrow}>Areas Served</p>
                    <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                      {LOCATIONS.map((loc) => (
                        <li key={loc.href}>
                          <Link
                            href={loc.href}
                            onClick={closeAll}
                            className="flex items-center gap-2 transition-colors hover:text-gold-light"
                          >
                            <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
                            {loc.city}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-xs font-normal leading-relaxed text-mist">
                      Serving Dallas, Collin, and Denton Counties from our Dallas office.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={FIRM.phoneHref}
          className="hidden items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light lg:inline-flex"
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          {FIRM.phone}
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-sm text-bone lg:hidden"
        >
          {mobileOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/5 bg-navy transition-[opacity,transform,visibility] duration-200 lg:hidden",
          panelState(mobileOpen),
        )}
      >
        <nav aria-label="Mobile" className="container-site space-y-10 py-8 pb-32">
          <div>
            <p className={eyebrow}>Practice Areas</p>
            <ul className="mt-4 space-y-1">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} onClick={closeAll} className="flex items-center gap-3 py-2.5 text-lg text-bone">
                    <Icon name={area.icon} className="h-5 w-5 text-gold-light" />
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={ROUTES.practiceAreas} onClick={closeAll} className="block py-2.5 text-gold-light">
                  All practice areas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={eyebrow}>Areas Served</p>
            <ul className="mt-4 grid grid-cols-2 gap-1">
              {LOCATIONS.map((loc) => (
                <li key={loc.href}>
                  <Link href={loc.href} onClick={closeAll} className="block py-2.5 text-bone">
                    {loc.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="space-y-1 border-t border-white/10 pt-8">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={closeAll} className="block py-2.5 text-lg text-bone">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={FIRM.phoneHref}
            className="flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 font-semibold text-navy-deep"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            Call {FIRM.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
