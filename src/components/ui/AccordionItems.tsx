"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Faq } from "@/lib/schema";
import { cn } from "@/lib/cn";

// Answers stay in the DOM while collapsed (height 0 + inert) so the full FAQ text
// is present in the server-rendered HTML for crawlers.
export function AccordionItems({
  items,
  headingLevel: Heading = "h3",
  className,
}: {
  items: Faq[];
  headingLevel?: "h3" | "h4";
  className?: string;
}) {
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set());
  const baseId = useId();

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className={cn("divide-y divide-white/10 border-y border-white/10", className)}>
      {items.map((item, i) => {
        const isOpen = open.has(i);
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={item.question}>
            <Heading className="text-lg md:text-xl">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left text-bone transition-colors hover:text-gold-light"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/60 text-gold-light transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </Heading>
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pb-7 pr-2 leading-relaxed text-mist md:pr-14">
                {item.answer.split(/\n{2,}/).map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
