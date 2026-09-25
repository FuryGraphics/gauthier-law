export type Testimonial = {
  quote: string;
  attribution: string;
  context?: string;
};

// PLACEHOLDERS ONLY. No verified testimonials were supplied. Replace each entry
// with a real client's own words, published with their written permission.
// Never write or paraphrase a testimonial on a client's behalf.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "[INSERT VERIFIED CLIENT TESTIMONIAL #1 — client's own words, published with written permission]",
    attribution: "[CLIENT NAME OR INITIALS]",
    context: "[CASE TYPE]",
  },
  {
    quote: "[INSERT VERIFIED CLIENT TESTIMONIAL #2 — client's own words, published with written permission]",
    attribution: "[CLIENT NAME OR INITIALS]",
    context: "[CASE TYPE]",
  },
  {
    quote: "[INSERT VERIFIED CLIENT TESTIMONIAL #3 — client's own words, published with written permission]",
    attribution: "[CLIENT NAME OR INITIALS]",
    context: "[CASE TYPE]",
  },
];
