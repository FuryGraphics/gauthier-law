"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteImage } from "@/content/images";
import { cn } from "@/lib/cn";

const EASE_WIPE = [0.77, 0, 0.175, 1] as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// Photo that wipes open left-to-right and settles from a slight zoom when it
// scrolls into view, framed by an offset gold rule.
export function RevealImage({ image, className, sizes = "(min-width: 1024px) 50vw, 100vw" }: {
  image: SiteImage;
  className?: string;
  sizes?: string;
}) {
  const reduceMotion = useReducedMotion();
  const viewport = { once: true, margin: "0px 0px -80px 0px" };

  return (
    <div className={cn("relative", className)}>
      <div aria-hidden="true" className="absolute -right-4 -bottom-4 hidden h-full w-full border border-gold/50 sm:block" />
      <motion.div
        initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={viewport}
        transition={{ duration: 1.1, ease: EASE_WIPE }}
        className="relative aspect-[4/5] overflow-hidden bg-navy"
      >
        <motion.div
          initial={reduceMotion ? false : { scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={viewport}
          transition={{ duration: 1.6, ease: EASE_OUT }}
          className="absolute inset-0"
        >
          <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}
