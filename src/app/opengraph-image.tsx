import { ImageResponse } from "next/og";
import { FIRM } from "@/lib/site";

// Default social share image for every page.
export const alt = `${FIRM.name}, criminal defense in Dallas, Texas`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #202A44 100%)",
          color: "#F4F1EA",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 8, color: "#CFA84E" }}>CRIMINAL DEFENSE · DALLAS, TEXAS</div>
        <div style={{ fontSize: 96, marginTop: 24 }}>{FIRM.name}</div>
        <div style={{ width: 120, height: 4, background: "#A47E1B", marginTop: 32 }} />
        <div style={{ fontSize: 32, marginTop: 36, color: "#A9AFBD" }}>
          DWI · Drug Charges · Assault Family-Violence
        </div>
        <div style={{ fontSize: 32, marginTop: 12 }}>{FIRM.phone}</div>
      </div>
    ),
    size,
  );
}
