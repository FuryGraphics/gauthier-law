"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";
import { cn } from "@/lib/cn";

const SWIPE_THRESHOLD = 60;

const slide = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 40 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -40 }),
};

/** Shared by the homepage and the Testimonials page. No autoplay, so readers control the pace. */
export function TestimonialCarousel({ testimonials, className }: { testimonials: Testimonial[]; className?: string }) {
  const [[index, direction], setPosition] = useState<[number, number]>([0, 0]);
  const slideId = useId();
  const count = testimonials.length;
  if (count === 0) return null;

  const step = (delta: number) => setPosition(([current]) => [(current + delta + count) % count, delta]);
  const goTo = (target: number) => setPosition(([current]) => [target, target > current ? 1 : -1]);
  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) step(1);
    else if (info.offset.x > SWIPE_THRESHOLD) step(-1);
  };

  const current = testimonials[index];

  return (
    <div className={className} role="region" aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-sm border border-white/10 bg-ink/40 px-6 py-12 text-center md:px-16 md:py-16">
        <Quote aria-hidden="true" className="mx-auto h-10 w-10 text-gold" strokeWidth={1.25} />
        <div id={slideId} aria-live="polite" className="mt-6">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.figure
              key={index}
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              drag={count > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              className={cn(count > 1 && "cursor-grab active:cursor-grabbing")}
            >
              <blockquote className="font-display text-xl leading-relaxed text-bone md:text-2xl">
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
                {current.attribution}
                {current.context && (
                  <span className="mt-1 block font-normal normal-case tracking-normal text-mist">{current.context}</span>
                )}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>

      {count > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous testimonial"
            aria-controls={slideId}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-bone transition-colors hover:border-gold-light hover:text-gold-light"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <div className="flex">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show testimonial ${i + 1} of ${count}`}
                aria-current={i === index ? "true" : undefined}
                aria-controls={slideId}
                className="group grid h-11 place-items-center px-1.5"
              >
                <span
                  className={cn(
                    "block h-2 rounded-full transition-all duration-300",
                    i === index ? "w-8 bg-gold" : "w-2 bg-white/25 group-hover:bg-white/50",
                  )}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next testimonial"
            aria-controls={slideId}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-bone transition-colors hover:border-gold-light hover:text-gold-light"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      )}

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-mist">
        Testimonials reflect individual clients’ experiences. Prior results do not guarantee a similar outcome, and
        every case is different.
      </p>
    </div>
  );
}
