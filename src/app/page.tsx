import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CategoryTiles } from "@/components/CategoryTiles";
import { CtaBand } from "@/components/CtaBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { HairPeaceFeature } from "@/components/HairPeaceFeature";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Reviews } from "@/components/Reviews";
import { VisitBlock } from "@/components/VisitBlock";
import { Sparkle } from "@/components/XMark";
import { about, gallery, photos, site } from "@/lib/site";

const PILLAR_COLORS = ["bg-pink", "bg-butter", "bg-mint"] as const;

/* Page sections share one frame: inset from the edges, max 7xl wide. */
function Band({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-3 py-16 sm:px-5 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function Head({ sticker, title, children }: { sticker: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-3xl">
        <span className="sticker">{sticker}</span>
        <h2 className="t-display mt-4 text-5xl sm:text-7xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Meet Tam */}
      <Band>
        <div className="grid gap-3 lg:grid-cols-12">
          <Reveal className="tile relative min-h-[28rem] bg-pink lg:col-span-5">
            <Image src={photos.tamAlt.src} alt={photos.tamAlt.alt} fill sizes="(min-width: 1024px) 32rem, 100vw" className="object-cover" />
            <div className="absolute -bottom-1 -right-1 w-40 rotate-6 sm:w-48">
              <Image src={photos.nameplate.src} alt={photos.nameplate.alt} width={800} height={491} className="h-auto w-full drop-shadow-xl" />
            </div>
          </Reveal>
          <Reveal delay={80} className="tile relative min-w-0 bg-white p-7 sm:p-10 lg:col-span-7">
            <Sparkle className="absolute right-7 top-7 h-9 w-9 text-cobalt" />
            <span className="sticker !bg-butter">Meet {site.ownerShort}</span>
            <h2 className="t-display mt-5 text-5xl sm:text-6xl">
              Stylist. Seamstress. <span className="text-red">Since {site.since}.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{about.bio[0]}</p>
            <Link href="/about/" className="btn btn-ink focus-ring mt-8">
              Tam’s story <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
          </Reveal>
          {about.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className={`tile p-6 lg:col-span-4 ${PILLAR_COLORS[i]}`}>
              <p className="t-display text-2xl">{p.title}</p>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* Menu */}
      <Band className="dots border-y-2 border-ink bg-paper-deep">
        <Head
          sticker="The menu"
          title={
            <>
              Pick your <span className="text-red">vibe.</span>
            </>
          }
        >
          <p className="max-w-sm text-ink-soft">
            Eleven categories, every price listed. Not sure? Book a free{" "}
            <Link href="/services/#hairchat" className="font-bold text-ink underline decoration-red decoration-2 underline-offset-4">
              HairChat
            </Link>{" "}
            and figure it out together.
          </p>
        </Head>
        <CategoryTiles />
      </Band>

      {/* HairPeace */}
      <Band>
        <HairPeaceFeature compact />
      </Band>

      {/* Work */}
      <Band className="pt-0 sm:pt-0">
        <Head
          sticker="The work"
          title={
            <>
              Fresh out <span className="text-red">the chair.</span>
            </>
          }
        >
          <Link href="/gallery/" className="btn btn-white focus-ring">
            Full gallery <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </Link>
        </Head>
        <GalleryGrid items={gallery.slice(0, 5)} />
      </Band>

      {/* Reviews */}
      <Band className="dots border-y-2 border-ink bg-paper-deep">
        <Reviews limit={9} />
      </Band>

      {/* Visit */}
      <Band>
        <Head
          sticker="Visit"
          title={
            <>
              Broad St, <span className="text-red">Shrewsbury.</span>
            </>
          }
        />
        <VisitBlock />
      </Band>

      <CtaBand />
    </>
  );
}
