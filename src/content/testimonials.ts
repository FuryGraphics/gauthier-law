export type Testimonial = {
  quote: string;
  attribution: string;
  context?: string;
};

// Real client testimonials only. Add an entry here once the client supplies a
// testimonial in the client's own words, with written permission to publish it, and
// it will appear on the Testimonials page automatically. Never write one on a
// client's behalf, and don't include confidential case details.
export const TESTIMONIALS: Testimonial[] = [];
