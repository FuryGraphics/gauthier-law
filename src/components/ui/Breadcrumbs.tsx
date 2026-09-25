import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { JsonLd } from "../seo/JsonLd";

/**
 * Visible breadcrumb trail plus its BreadcrumbList schema, so no inner page can
 * have one without the other. Pass the trail *after* Home; Home is prepended.
 */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-mist">
          {trail.map((crumb, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {i > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-gold" />}
                {isLast ? (
                  <span aria-current="page" className="text-bone">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="transition-colors hover:text-gold-light">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
