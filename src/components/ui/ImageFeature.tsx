import type { ReactNode } from "react";
import type { SiteImage } from "@/content/images";
import { cn } from "@/lib/cn";
import { RevealImage } from "./RevealImage";
import { SectionHeading } from "./Section";

/** Split photo + text block. Place inside a <Section>; `reverse` puts the photo on the right. */
export function ImageFeature({
  image,
  eyebrow,
  title,
  children,
  reverse = false,
}: {
  image: SiteImage;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <RevealImage image={image} className={cn("mx-auto w-full max-w-md lg:max-w-none", reverse && "lg:order-2")} />
      <div>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-mist">{children}</div>
      </div>
    </div>
  );
}
