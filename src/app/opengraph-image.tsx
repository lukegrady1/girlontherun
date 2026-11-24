import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/*
  Open Graph card, rendered at build time. Bricolage Grotesque ExtraBold is
  fetched from Google Fonts; if that fails the card falls back to the
  default sans so a font outage never breaks a deploy.
*/
export const dynamic = "force-static";

export const alt = "GirlOnTheRun by tam.i.am — Girls run the world. Shrewsbury, NJ.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text());
    const url = css.match(/src: url\((https:[^)]+\.(?:ttf|woff))\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

function X({ size: s, color }: { size: number; color: string }) {
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" fill={color}>
      <path d="M22 14 L86 78 L78 86 L14 22 Z" />
      <path d="M78 14 L86 22 L22 86 L14 78 Z" />
      <path d="M2 2 L34 6 L6 34 Z" />
      <path d="M98 2 L94 34 L66 6 Z" />
      <path d="M2 98 L6 66 L34 94 Z" />
      <path d="M98 98 L66 94 L94 66 Z" />
    </svg>
  );
}

export default async function Image() {
  const font = await loadFont();
  const family = font ? "Bricolage Grotesque" : "sans-serif";

  const tile = { display: "flex", border: "5px solid #17131a", borderRadius: 40 } as const;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", gap: 20, padding: 32, background: "#fff8f1", fontFamily: family, color: "#17131a" }}>
        <div style={{ ...tile, flex: 1.6, flexDirection: "column", justifyContent: "space-between", padding: 48, background: "#ffe45e" }}>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 800, letterSpacing: 1 }}>HAIR SALON &amp; EXTENSIONS · SHREWSBURY, NJ</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 118, fontWeight: 800, lineHeight: 0.92, letterSpacing: -4 }}>
            <span>Girls run</span>
            <span style={{ color: "#d9261c" }}>the world.</span>
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800 }}>girlontherun · tam.i.am</div>
        </div>
        <div style={{ display: "flex", flex: 1, flexDirection: "column", gap: 20 }}>
          <div style={{ ...tile, flex: 1, alignItems: "center", justifyContent: "center", background: "#d9261c" }}>
            <X size={190} color="#fff" />
          </div>
          <div style={{ ...tile, flex: 1, flexDirection: "column", justifyContent: "center", padding: 36, background: "#2f3dff", color: "#fff" }}>
            <span style={{ fontSize: 30, fontWeight: 800, color: "#ffe45e" }}>Since {site.since}</span>
            <span style={{ fontSize: 56, fontWeight: 800 }}>Book on Vagaro</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      ...(font ? { fonts: [{ name: "Bricolage Grotesque", data: font, weight: 800 as const, style: "normal" as const }] } : {}),
    },
  );
}
