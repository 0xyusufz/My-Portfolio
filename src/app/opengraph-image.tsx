import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Md Yusuf Fatah — AI, Automation & Software";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

/**
 * Minimal static OG image — factual branding only, matching the
 * dark-first identity. No metrics, no claims, no generated artwork.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          backgroundColor: "#0b0b0d",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 28,
            color: "#f5f5f4",
          }}
        >
          0xyusufz
          <span style={{ color: "#b8e62e", marginLeft: 4 }}>.</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 84,
            fontWeight: 650,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "#f5f5f4",
          }}
        >
          Md Yusuf Fatah
        </div>
        <div
          style={{
            marginTop: 24,
            fontFamily: "monospace",
            fontSize: 26,
            letterSpacing: "0.16em",
            color: "#a1a1aa",
          }}
        >
          AI · AUTOMATION · SOFTWARE
        </div>
      </div>
    ),
    { ...size },
  );
}
