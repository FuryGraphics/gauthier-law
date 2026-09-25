import Link from "next/link";
import { FIRM } from "@/lib/site";
import { LOCATIONS } from "@/lib/routes";
import { FadeUp } from "./FadeUp";

function MarqueeRow({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={duplicate || undefined} inert={duplicate || undefined}>
      {LOCATIONS.map((loc) => (
        <li key={loc.href} className="flex items-center">
          <Link
            href={loc.href}
            className="px-8 font-display text-2xl whitespace-nowrap text-bone/80 transition-colors hover:text-gold-light md:text-3xl"
          >
            {loc.city}
          </Link>
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold" />
        </li>
      ))}
      {FIRM.counties.map((county) => (
        <li key={county} className="flex items-center">
          <span className="px-8 font-display text-2xl whitespace-nowrap text-mist italic md:text-3xl">{county}</span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold" />
        </li>
      ))}
    </ul>
  );
}

// Continuously scrolling band of service areas. The list is rendered twice for a
// seamless loop; the duplicate is inert so keyboard and screen-reader users meet
// each link once. Pauses on hover and stops entirely for reduced-motion users.
export function AreaMarquee() {
  return (
    <section aria-label="Areas served" className="border-y border-white/10 bg-navy-deep">
      <FadeUp className="relative overflow-hidden py-7 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused]">
          <MarqueeRow />
          <MarqueeRow duplicate />
        </div>
      </FadeUp>
    </section>
  );
}
