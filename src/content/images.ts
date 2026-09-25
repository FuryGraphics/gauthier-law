export type SiteImage = { src: string; alt: string };

// Generated with Higgsfield (GPT Image 2). Atmospheric photography only: no people,
// no real landmarks, and nothing presented as a real case, client, or the attorney.
// Replace with real photography (office, attorney portrait) once the client supplies it.
export const IMAGES = {
  heroSkyline: {
    src: "/images/hero-skyline.jpg",
    alt: "Downtown skyline at dusk with warm lights glowing in the office towers",
  },
  courthouseColumns: {
    src: "/images/courthouse-columns.jpg",
    alt: "Stone courthouse columns lit by late-afternoon sun",
  },
  officeDesk: {
    src: "/images/office-desk.jpg",
    alt: "Law office desk with a brass lamp, law books, and a legal pad at dusk",
  },
  dwiRoad: {
    src: "/images/dwi-road.jpg",
    alt: "Wet highway at night reflecting distant red and blue emergency lights",
  },
  caseFiles: {
    src: "/images/case-files.jpg",
    alt: "Case files and reading glasses on a desk under warm lamplight",
  },
  courthouseCorridor: {
    src: "/images/courthouse-corridor.jpg",
    alt: "Quiet courthouse corridor with morning light across the floor",
  },
  gavel: {
    src: "/images/gavel.jpg",
    alt: "Wooden gavel and brass scales of justice on a dark desk",
  },
  lawLibrary: {
    src: "/images/law-library.jpg",
    alt: "Shelves of leather-bound law books in a dimly lit library",
  },
} satisfies Record<string, SiteImage>;
