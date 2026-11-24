import type { Metadata } from "next";
import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { Sparkle, XMark } from "@/components/XMark";
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
  { label: "Sizes", value: "S · M · L" },
  { label: "Length", value: "14″ · 16″ · 18″" },
  { label: "Shades", value: "Light · Medium · Dark" },
  { label: "On in", value: "~3 minutes" },
] as const;

const CARD_COLORS = ["bg-pink", "bg-white", "bg-butter"] as const;

/* HairPeace as a little shop: ink hero tile, spec stickers, product cards. */
export default function HairPeacePage() {
  return (
    <>
      <section className="px-3 pt-6 sm:px-5">
        <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-12">
          <div className="tile relative min-w-0 bg-ink p-7 text-white sm:p-12 lg:col-span-8">
            <Sparkle className="animate-spin-slow absolute right-8 top-8 h-12 w-12 text-pink" />
            <p className="flex flex-wrap gap-2">
              <span className="sticker !bg-pink">New</span>
              <span className="sticker">Patent pending · Pre-order soon</span>
            </p>
            <h1 className="t-display mt-7 text-[4rem] sm:text-[7rem] lg:text-[8.5rem]">
              Hair<span className="text-pink">Peace</span>
            </h1>
            <p className="t-display mt-2 text-2xl text-butter sm:text-4xl">Lingerie, for your hair.</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              A black lace, lingerie-inspired clip-in collection. Remy human hair, silk thread,
              snag-proof clips, sewn by hand by tam.i.am.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {SPECS.map((s) => (
                <li key={s.label} className="sticker !bg-white/10 !text-white !border-white/50">
                  <span className="text-pink">{s.label}</span> {s.value}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <BookButton className="btn btn-pink !whitespace-normal py-3 text-center !border-white !shadow-[0_4px_0_#fff]">
                Book a consultation &amp; measuring
              </BookButton>
            </div>
          </div>
          <div className="tile relative min-h-[28rem] bg-pink lg:col-span-4">
            <Image src={photos.popPeace.src} alt={photos.popPeace.alt} fill priority sizes="(min-width: 1024px) 26rem, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="px-3 py-16 sm:px-5 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <span className="sticker">The collection</span>
          <h2 className="t-display mt-4 text-5xl sm:text-7xl">
            Pick your <span className="text-red">peace.</span>
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pieces.map((p, i) => (
              <li key={p.name} className={`tile flex min-w-0 flex-col gap-4 p-6 ${CARD_COLORS[i % CARD_COLORS.length]}`}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="t-display min-w-0 text-4xl [overflow-wrap:anywhere]">{p.name}</h3>
                  <span className={`sticker shrink-0 !text-base ${p.price === 0 ? "!bg-red !text-white" : ""}`}>{formatPrice(p)}</span>
                </div>
                <p className="leading-relaxed text-ink-soft">{p.description ?? "Ask Tam at your HairChat."}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-12">
          <figure className="tile relative min-w-0 bg-butter p-7 sm:p-10 lg:col-span-7">
            <XMark className="h-9 w-9 text-red" />
            <blockquote className="t-display mt-6 text-3xl leading-tight sm:text-4xl">“{meredith.quote}”</blockquote>
            <figcaption className="mt-6 font-bold">— {meredith.name}, Vagaro review</figcaption>
          </figure>
          <div className="tile relative min-h-80 bg-pink lg:col-span-5">
            <Image src={photos.hairCloset.src} alt={photos.hairCloset.alt} fill sizes="(min-width: 1024px) 30rem, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
