import Image from "next/image";
import Link from "next/link";
import { BookButton } from "./BookButton";
import { formatPrice, photos, serviceGroups } from "@/lib/site";

const pieces = serviceGroups.find((g) => g.id === "hairpeace")!.services;
/* The two lace pieces get the big tags; the rest list underneath. */
const hero = pieces.filter((p) => p.name === "TheGarter" || p.name === "ThePanty");

/*
  HairPeace on black lace with the blush accent: the one place blush
  appears on the site, so it reads as its own label inside the brand.
*/
export function HairPeaceFeature({ compact = false }: { compact?: boolean }) {
  return (
    <section className="lace relative overflow-hidden text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[8/7] w-full border-4 border-blush">
            <Image src={photos.hairCloset.src} alt={photos.hairCloset.alt} fill sizes="(min-width: 1024px) 40rem, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-2 w-[42%] rotate-[5deg] border-4 border-blush bg-blush sm:-right-6">
            <div className="relative aspect-[488/800]">
              <Image src={photos.popPeace.src} alt={photos.popPeace.alt} fill sizes="16rem" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="t-tag text-blush">The HairCloset · Patent pending</p>
          <h2 className="t-poster mt-4 text-7xl text-blush sm:text-8xl lg:text-[8.5rem]">
            Hair<br />Peace.
          </h2>
          <p className="mt-2 font-mono text-lg text-paper/80">Hair lingerie, sewn by hand.</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">
            One-peace clip-ins of 100% Remy human hair, sewn by Tam onto feather-light black lace
            with the finest silk thread and snag-proof clips. Small, medium, or large; 14, 16, or
            18 inches; light, medium, or dark, then color-blended to you. About a three-minute
            application.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {hero.map((p) => (
              <li key={p.name} className="border-2 border-blush/60 p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="t-headline text-2xl text-blush">{p.name}</span>
                  <span className="font-mono text-lg">{formatPrice(p)}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-paper/75">{p.description}</p>
              </li>
            ))}
          </ul>

          {!compact && (
            <p className="mt-4 text-sm text-paper/70">
              Also: POP Peace, L7s, DreadHead, and FauxCut, the short-hair fix with no grow-out.
            </p>
          )}

          <div className="mt-9 flex flex-wrap gap-4">
            <BookButton className="btn btn-red-on-dark">Book a measuring</BookButton>
            <Link href="/hairpeace/" className="btn btn-line-light focus-ring">
              Inside HairPeace
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
