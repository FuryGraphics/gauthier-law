import type { ReactNode } from "react";
import { Icon, type IconName } from "./icons";

/** Non-linking card for explanatory points (defense issues, steps). Use PracticeCard for navigation. */
export function InfoCard({
  title,
  children,
  icon,
  step,
}: {
  title: string;
  children: ReactNode;
  icon?: IconName;
  /** Renders a gold step number instead of an icon. */
  step?: number;
}) {
  return (
    <div className="h-full rounded-sm border border-white/10 bg-ink/40 p-7 transition-colors duration-300 hover:border-gold/40">
      {step !== undefined ? (
        <span aria-hidden="true" className="font-display text-4xl text-gold">
          {String(step).padStart(2, "0")}
        </span>
      ) : (
        icon && <Icon name={icon} className="h-7 w-7 text-gold-light" />
      )}
      <h3 className="mt-4 text-xl text-bone">{title}</h3>
      <div className="mt-3 leading-relaxed text-mist">{children}</div>
    </div>
  );
}

/** Highlighted callout for deadlines and warnings. */
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="rounded-sm border-l-2 border-gold bg-gold/[0.07] p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">{title}</p>
      <p className="mt-3 leading-relaxed text-bone">{children}</p>
    </aside>
  );
}
