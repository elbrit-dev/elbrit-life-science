import { ImageResponse } from "next/og";

export const alt = "Elbrit Life Sciences — Discovery. Innovation. Excellence.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#16235c",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(225,27,34,0.32), transparent 45%), radial-gradient(circle at 12% 88%, rgba(79,107,172,0.5), transparent 45%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              backgroundColor: "#E11B22",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            e
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
            ELBRiT Life Sciences
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Discovery. Innovation. Excellence.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "rgba(255,255,255,0.75)" }}>
            A leading Indian pharmaceutical company — 210+ products, WHO-GMP manufacturing.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
