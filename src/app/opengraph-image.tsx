import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/*
  Open Graph card, rendered at build time. Archivo ExtraBold Condensed is
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
      "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62.5,800&display=swap",
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
  const family = font ? "Archivo" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#0f0f10",
          color: "#f5f2ec",
          fontFamily: family,
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: -60, top: 40, display: "flex", opacity: 0.95 }}>
          <X size={520} color="#d0202a" />
        </div>
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 3, color: "#c9c4bb" }}>
          SHREWSBURY, NJ · LICENSED SINCE {site.since}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 150, fontWeight: 800, lineHeight: 0.86, textTransform: "uppercase" }}>
          <span>Girls run</span>
          <span>the world.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 40, fontWeight: 800, textTransform: "uppercase" }}>
          <span>GirlOnTheRun · tam.i.am</span>
          <span style={{ background: "#d0202a", color: "#fff", padding: "6px 18px" }}>Book on Vagaro</span>
        </div>
      </div>
    ),
    {
      ...size,
      ...(font ? { fonts: [{ name: "Archivo", data: font, weight: 800 as const, style: "normal" as const }] } : {}),
    },
  );
}
