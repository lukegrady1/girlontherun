import Image from "next/image";
import Link from "next/link";
import { BookButton } from "./BookButton";
import { Sparkle } from "./XMark";
import { formatPrice, photos, serviceGroups } from "@/lib/site";

const pieces = serviceGroups.find((g) => g.id === "hairpeace")!.services;
const hero = pieces.filter((p) => p.name === "TheGarter" || p.name === "ThePanty");

/*
  HairPeace as a mini bento: a big ink tile with the pitch on the left;
  on the right, two photo tiles over the two lace pieces as pink
  "price tag" tiles.
*/
export function HairPeaceFeature({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-3 lg:grid-cols-12">
      <div className="tile relative min-w-0 bg-ink p-7 text-white sm:p-10 lg:col-span-7 lg:row-span-3">
        <Sparkle className="animate-spin-slow absolute right-7 top-7 h-10 w-10 text-pink" />
        <span className="sticker !bg-pink">The HairCloset · Patent pending</span>
        <h2 className="t-display mt-6 text-6xl sm:text-8xl">
          Hair<span className="text-pink">Peace</span>
        </h2>
        <p className="t-display mt-2 text-2xl text-butter sm:text-3xl">Hair lingerie, sewn by hand.</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          One-peace clip-ins of 100% Remy human hair, sewn by Tam onto feather-light black lace with the
          finest silk thread and snag-proof clips. Small, medium, or large; 14, 16, or 18 inches; light,
          medium, or dark, then color-blended to you. About a three-minute application.
        </p>
        {!compact && (
          <p className="mt-4 text-sm text-white/65">
            Also: POP Peace, L7s, DreadHead, and FauxCut, the short-hair fix with no grow-out.
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <BookButton className="btn btn-pink !border-white !shadow-[0_4px_0_#fff]">Book a measuring</BookButton>
          <Link href="/hairpeace/" className="btn btn-ink focus-ring !border-white !shadow-[0_4px_0_#fff]">
            Shop the collection
          </Link>
        </div>
      </div>
      <div className="tile relative min-h-64 bg-pink lg:col-span-3">
        <Image src={photos.hairCloset.src} alt={photos.hairCloset.alt} fill sizes="(min-width: 1024px) 20rem, 100vw" className="object-cover" />
      </div>
      <div className="tile relative min-h-64 bg-pink lg:col-span-2">
        <Image src={photos.popPeace.src} alt={photos.popPeace.alt} fill sizes="(min-width: 1024px) 14rem, 100vw" className="object-cover object-bottom" />
      </div>
      {hero.map((p) => (
        <div key={p.name} className="tile flex min-w-0 flex-col justify-between gap-4 bg-pink p-6 lg:col-span-5">
          <div className="flex items-baseline justify-between gap-3">
            <span className="t-display text-3xl">{p.name}</span>
            <span className="sticker !text-base">{formatPrice(p)}</span>
          </div>
          <p className="text-sm leading-relaxed text-ink-soft">{p.description}</p>
        </div>
      ))}
    </div>
  );
}
