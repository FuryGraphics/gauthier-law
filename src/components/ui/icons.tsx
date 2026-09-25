import type { SVGProps } from "react";
import {
  Ambulance,
  Banknote,
  BookOpen,
  CarFront,
  ClipboardList,
  Clock,
  FileSearch,
  Gavel,
  Handshake,
  HeartPulse,
  Landmark,
  MapPin,
  MessageSquare,
  Scale,
  Stethoscope,
  TriangleAlert,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  car: CarFront,
  hazard: TriangleAlert,
  scale: Scale,
  gavel: Gavel,
  landmark: Landmark,
  mapPin: MapPin,
  book: BookOpen,
  search: FileSearch,
  message: MessageSquare,
  medical: Stethoscope,
  injury: HeartPulse,
  ambulance: Ambulance,
  clipboard: ClipboardList,
  clock: Clock,
  money: Banknote,
  handshake: Handshake,
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = ICONS[name];
  return <Component aria-hidden="true" strokeWidth={1.5} {...props} />;
}

// lucide v1 dropped brand marks, so the Facebook glyph is drawn here.
export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.54V4.63a20.6 20.6 0 0 0-2.27-.13c-2.24 0-3.78 1.37-3.78 3.89v2.17H7.9v2.94h2.55V21h3.05Z" />
    </svg>
  );
}
