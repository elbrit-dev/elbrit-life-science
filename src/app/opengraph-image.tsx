import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "Elbrit Life Sciences — Discovery. Innovation. Excellence.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Read from src/assets, NOT public/: a traced public/ file makes the build output contain a
  // partial public/ dir, and Firebase App Hosting then skips copying the real one (all of
  // /brand, /media-kit etc. 404 in production).
  const mark = await readFile(join(process.cwd(), "src/assets/elbrit-mark.png"), "base64");

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
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
          <img src={`data:image/png;base64,${mark}`} width={88} height={88} alt="" />
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
