import type { Metadata } from "next";
import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { HairPeaceFeature } from "@/components/HairPeaceFeature";
import { XMark } from "@/components/XMark";
import { formatPrice, photos, reviews, serviceGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "HairPeace Lace Clip-In Extensions",
  description:
    "HairPeace by tam.i.am: handmade one-peace clip-in extensions of 100% Remy human hair sewn onto black lace. TheGarter, ThePanty, POP Peace, L7s, FauxCut. Patent pending. Shrewsbury, NJ.",
  alternates: { canonical: "/hairpeace/" },
};

const pieces = serviceGroups.find((g) => g.id === "hairpeace")!.services;
const meredith = reviews.find((r) => r.name === "Meredith P.")!;

const SPECS = [
  { label: "Sizes", value: "Small · Medium · Large" },
  { label: "Length", value: "14″ · 16″ · 18″" },
  { label: "Shades", value: "Light · Medium · Dark" },
  { label: "Application", value: "About 3 minutes" },
] as const;

export default function HairPeacePage() {
  return (
    <>
      <section className="lace relative overflow-hidden border-b-2 border-ink text-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[1.4fr_1fr]">
          <div className="min-w-0">
            <p className="t-tag flex flex-wrap items-center gap-3 text-blush">
              <span className="bg-blush px-1.5 py-0.5 text-ink">New</span>Patent
              pending · Pre-order soon
            </p>
            <h1 className="t-poster mt-5 text-[19vw] text-blush sm:text-[10rem] lg:text-[9rem] xl:text-[11rem]">
              HairPeace
            </h1>
            <p className="mt-2 max-w-2xl font-mono text-lg text-paper/85 sm:text-xl">
              A black lace, lingerie-inspired clip-in collection. Remy human
              hair, silk thread, snag-proof clips, sewn by hand by tam.i.am.
            </p>
            <dl className="mt-10 grid max-w-3xl grid-cols-2 border-t border-blush/30 sm:grid-cols-4">
              {SPECS.map((s) => (
                <div
                  key={s.label}
                  className="border-b border-blush/30 py-4 pr-4"
                >
                  <dt className="t-tag text-blush/70">{s.label}</dt>
                  <dd className="mt-1 font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <BookButton className="btn btn-red-on-dark">
                Book a consultation &amp; measuring
              </BookButton>
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-sm rotate-3 border-4 border-blush shadow-2xl lg:block">
            <div className="relative aspect-[488/800]">
              <Image
                src={photos.popPeace.src}
                alt={photos.popPeace.alt}
                fill
                priority
                sizes="24rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blush py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="t-poster text-6xl sm:text-8xl">The collection.</h2>
          <ul className="mt-12 grid grid-cols-1 gap-px border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
            {pieces.map((p) => (
              <li key={p.name} className="flex min-w-0 flex-col bg-card p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="t-poster min-w-0 text-4xl [overflow-wrap:anywhere] sm:text-5xl">{p.name}</h3>
                  <span className="font-mono text-lg">{formatPrice(p)}</span>
                </div>
                {p.description ? (
                  <p className="mt-4 leading-relaxed text-ink-soft">
                    {p.description}
                  </p>
                ) : (
                  <p className="mt-4 text-muted">Ask Tam at your HairChat.</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <figure className="bg-ink p-8 text-paper sm:p-12">
            <XMark className="h-10 w-10 text-red" />
            <blockquote className="t-headline mt-6 text-3xl leading-tight sm:text-4xl">
              “{meredith.quote}”
            </blockquote>
            <figcaption className="t-tag mt-6 text-paper/70">
              — {meredith.name}, Vagaro review
            </figcaption>
          </figure>
          <div className="relative aspect-[8/7] border-2 border-ink">
            <Image
              src={photos.hairCloset.src}
              alt={photos.hairCloset.alt}
              fill
              sizes="(min-width: 1024px) 36rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <HairPeaceFeature />
    </>
  );
}
