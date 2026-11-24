import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site, siteUrl } from "@/lib/site";

/*
  Bricolage Grotesque, variable with width and optical-size axes: one file
  for the chunky display type and the body copy.
*/
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
  display: "swap",
});

const title = "GirlOnTheRun | Hair Salon in Shrewsbury, NJ · Cuts, Color & Extensions";
const description =
  "tam.i.am’s GirlOnTheRun in Shrewsbury, NJ: haircuts, color, balayage, keratin, extensions, brows, and HairPeace handmade lace clip-ins. Licensed since 2001. Book on Vagaro.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | GirlOnTheRun, Shrewsbury NJ" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#fff8f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-red focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
