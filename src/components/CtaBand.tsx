import Image from "next/image";
import { BookButton } from "./BookButton";
import { Sparkle } from "./XMark";
import { photos, site } from "@/lib/site";

/* Cobalt closing tile with a round photo sticker of Tam. */
export function CtaBand({
  title = "Blend in or stand out?",
  sub = "Either way, I got you. — Tam",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="px-3 py-3 sm:px-5 sm:py-5">
      <div className="tile relative mx-auto flex max-w-7xl flex-col gap-8 bg-cobalt px-7 py-12 text-white sm:px-12 md:flex-row md:items-center md:justify-between">
        <Sparkle className="absolute bottom-6 left-[45%] h-8 w-8 text-butter" />
        <div className="flex min-w-0 items-center gap-5">
          <div className="relative h-24 w-24 shrink-0 -rotate-6 overflow-hidden rounded-full border-2 border-ink bg-pink sm:h-28 sm:w-28">
            <Image src={photos.tam.src} alt={photos.tam.alt} fill sizes="7rem" className="object-cover object-bottom" />
          </div>
          <div className="min-w-0">
            <h2 className="t-display text-4xl sm:text-6xl">{title}</h2>
            <p className="mt-2 text-lg text-white/85">{sub}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <BookButton className="btn btn-butter" />
          <a href={site.phoneHref} className="btn btn-white focus-ring">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
