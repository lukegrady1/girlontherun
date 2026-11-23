import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CtaBand } from "@/components/CtaBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { HairPeaceFeature } from "@/components/HairPeaceFeature";
import { Hero } from "@/components/Hero";
import { MenuIndex } from "@/components/MenuIndex";
import { Reveal } from "@/components/Reveal";
import { Reviews } from "@/components/Reviews";
import { Ticker } from "@/components/Ticker";
import { VisitBlock } from "@/components/VisitBlock";
import { XMark } from "@/components/XMark";
import { about, gallery, photos, site } from "@/lib/site";

const TICKER = [
  "Cuts",
  "Color",
  "Balayage",
  "Keratin",
  "HairPeace",
  "Brow Bar",
  "Xtensions",
  "Braids",
  "RoseGold",
  "ForTheFellas",
  "KidsCuts",
] as const;

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker words={TICKER} />

      {/* 01 — Meet Tam */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md border-2 border-ink shadow-[10px_10px_0_var(--color-red)]">
              <Image src={photos.tamAlt.src} alt={photos.tamAlt.alt} fill sizes="(min-width: 1024px) 28rem, 90vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 w-48 -rotate-3 sm:left-auto sm:right-8 lg:-right-6">
              <Image src={photos.nameplate.src} alt={photos.nameplate.alt} width={800} height={491} className="h-auto w-full" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-tag flex items-center gap-3 text-red">
              <span className="bg-red px-1.5 py-0.5 text-white">01</span>Meet {site.ownerShort}
            </p>
            <h2 className="t-poster mt-4 text-6xl sm:text-8xl">
              Stylist.
              <br />
              Seamstress.
              <br />
              <span className="text-red">Since {site.since}.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">{about.bio[0]}</p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-3">
              {about.pillars.map((p) => (
                <li key={p.title} className="border-t-2 border-ink pt-3">
                  <p className="flex items-start gap-2 font-bold">
                    <XMark className="mt-1 h-3.5 w-3.5 shrink-0 text-red" />
                    {p.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
                </li>
              ))}
            </ul>
            <Link href="/about/" className="link-draw focus-ring mt-8 inline-flex items-center gap-2 font-bold uppercase tracking-wide">
              The whole story <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 02 — Menu index */}
      <section className="border-t-2 border-ink bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="t-tag flex items-center gap-3 text-red">
                <span className="bg-red px-1.5 py-0.5 text-white">02</span>The menu
              </p>
              <h2 className="t-poster mt-4 text-6xl sm:text-8xl">Pick your run.</h2>
            </div>
            <p className="max-w-sm text-muted">
              Eleven categories, every price listed. Not sure? Book a free{" "}
              <Link href="/services/#hairchat" className="font-bold text-ink underline decoration-red decoration-2 underline-offset-4">
                HairChat
              </Link>{" "}
              and figure it out together.
            </p>
          </div>
          <MenuIndex />
        </div>
      </section>

      {/* 03 — HairPeace */}
      <HairPeaceFeature compact />

      {/* 04 — Work */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="t-tag flex items-center gap-3 text-red">
                <span className="bg-red px-1.5 py-0.5 text-white">04</span>The work
              </p>
              <h2 className="t-poster mt-4 text-6xl sm:text-8xl">Before. After. Out the door.</h2>
            </div>
            <Link href="/gallery/" className="btn btn-line focus-ring">
              Full gallery
            </Link>
          </div>
          <GalleryGrid items={gallery.slice(0, 7)} />
        </div>
      </section>

      <Ticker
        tone="ink"
        words={["Every hair type", "Every texture", "Every pronoun", "Run wild", "Perfectly imperfect"]}
      />

      {/* 05 — Reviews */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="t-tag mb-4 flex items-center gap-3 text-red">
            <span className="bg-red px-1.5 py-0.5 text-white">05</span>Clients talking
          </p>
          <Reviews limit={6} />
        </div>
      </section>

      {/* 06 — Visit */}
      <section className="border-t-2 border-ink bg-paper-deep py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="t-tag flex items-center gap-3 text-red">
            <span className="bg-red px-1.5 py-0.5 text-white">06</span>Visit
          </p>
          <h2 className="t-poster mb-10 mt-4 text-6xl sm:text-8xl">
            Broad St, <span className="text-red">Shrewsbury.</span>
          </h2>
          <VisitBlock />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
