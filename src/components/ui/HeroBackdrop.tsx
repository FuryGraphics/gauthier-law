"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { SiteImage } from "@/content/images";

// Hero photo with a slow zoom-in on load and a gentle parallax drift on scroll.
// The image is oversized by 10% top and bottom so the drift never exposes an edge.
export function HeroBackdrop({ image }: { image: SiteImage }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div ref={ref} className="absolute inset-0 -z-20 overflow-hidden">
      <motion.div style={reduceMotion ? undefined : { y }} className="absolute inset-x-0 -top-[10%] -bottom-[10%]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover object-[72%_center] motion-safe:animate-ken-burns lg:object-center"
        />
      </motion.div>
      {/* Legibility scrims. Below lg the text spans the full width, so an even veil keeps the
          photo visible; from lg up the text sits left, so darken that side only. Top/bottom
          gradient covers the nav and the seam into the next section. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ink/55 lg:bg-transparent lg:bg-linear-to-r lg:from-ink lg:via-ink/75 lg:to-ink/20"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-ink/70 via-transparent to-ink" />
    </div>
  );
}
