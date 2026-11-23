import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHeader } from "@/components/PageHeader";
import { gallery, photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before-and-afters and finished looks from GirlOnTheRun in Shrewsbury, NJ: balayage, platinum, vivid color, keratin, layered cuts, and bobs.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        index="Gallery"
        eyebrow="Real clients, real chairs"
        title={
          <>
            The <span className="text-red">proof.</span>
          </>
        }
        intro="Color corrections, rainbow peekaboos, keratin, platinum, bobs, and long layers. Tap any photo to see it bigger."
      />
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <GalleryGrid items={gallery} />
        </div>
      </section>

      <section className="border-t-2 border-ink bg-paper-deep py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="t-poster text-5xl sm:text-7xl">Inside the suite.</h2>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {[photos.suite, ...photos.suiteDetails].slice(0, 4).map((p) => (
              <li key={p.src} className="relative aspect-square border-2 border-ink">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Want this?" sub="Bring the photo." />
    </>
  );
}
