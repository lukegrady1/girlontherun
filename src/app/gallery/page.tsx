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
        color="pink"
        intro="Color corrections, rainbow peekaboos, keratin, platinum, bobs, and long layers. Tap any photo to see it bigger."
      />
      <section className="px-3 py-10 sm:px-5 sm:py-14">
        <div className="mx-auto max-w-7xl">
          {/* 17 photos + five 2×2 tiles = 32 cells: eight full rows of four. Groups of
              one big + four small fill two rows; the last two bigs pair up. */}
          <GalleryGrid items={gallery} big={[0, 5, 10, 15, 16]} />
        </div>
      </section>

      <section className="dots border-y-2 border-ink bg-paper-deep px-3 py-16 sm:px-5 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="sticker">The suite</span>
          <h2 className="t-display mt-4 text-5xl sm:text-7xl">Inside the suite.</h2>
          <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[photos.suite, ...photos.suiteDetails].slice(0, 4).map((p) => (
              <li key={p.src} className="tile relative aspect-square bg-paper">
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
