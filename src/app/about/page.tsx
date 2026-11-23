import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Ticker } from "@/components/Ticker";
import { XMark } from "@/components/XMark";
import { about, photos, site, visit } from "@/lib/site";

export const metadata: Metadata = {
  title: "About tam.i.am",
  description:
    "Meet tam.i.am, licensed cosmetologist since 2001 and creator of GirlOnTheRun and HairPeace lace clip-ins. A private suite on Broad Street in Shrewsbury, NJ.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="About"
        eyebrow="The girl on the run"
        title={
          <>
            tam<span className="text-red">.</span>i<span className="text-red">.</span>am
          </>
        }
        intro={`Licensed cosmetologist since ${site.since}. Hair artist, seamstress, and the hairdresser some clients have had since they were in a stroller.`}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal className="grid min-w-0 grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[518/700] border-2 border-ink sm:col-span-1 sm:row-span-2">
              <Image src={photos.tam.src} alt={photos.tam.alt} fill sizes="(min-width: 1024px) 22rem, 90vw" className="object-cover object-bottom" />
            </div>
            <div className="relative hidden aspect-square border-2 border-ink sm:block">
              <Image src={photos.inspired.src} alt={photos.inspired.alt} fill sizes="16rem" className="object-cover" />
            </div>
            <div className="relative hidden aspect-square border-2 border-ink sm:block">
              <Image src={photos.logoSign.src} alt={photos.logoSign.alt} fill sizes="16rem" className="object-cover" />
            </div>
          </Reveal>

          <Reveal delay={100} className="min-w-0">
            <h2 className="t-poster text-5xl sm:text-7xl">
              Hair artistry
              <br />
              <span className="text-red">×</span> seamstressing.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
              {about.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-10 border-l-8 border-red pl-6">
              <p className="t-headline text-3xl sm:text-4xl">“{about.promise}”</p>
              <footer className="t-tag mt-3 text-muted">— {site.owner}</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <Ticker words={["Since 2001", "All hair types", "All textures", "Gender-free menu", "Patent pending"]} />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="t-poster text-6xl sm:text-8xl">What you get.</h2>
          <ol className="mt-12 grid gap-px border-2 border-ink bg-ink md:grid-cols-3">
            {about.pillars.map((p, i) => (
              <li key={p.title} className="bg-card p-8">
                <span className="t-poster text-7xl text-red">0{i + 1}</span>
                <h3 className="t-headline mt-4 text-2xl">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grain bg-ink py-20 text-paper sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="t-tag text-red">The suite</p>
            <h2 className="t-poster mt-4 text-6xl sm:text-8xl">Cozy. Private. Very chic.</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/80">
              Damask walls, red shelves, a vintage dryer hood, a Brow Bar, and the HairCloset.
              One chair, one client, no salon-floor noise.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {[visit.parking, ...visit.amenities].map((a) => (
                <li key={a} className="flex items-center gap-2 text-paper/90">
                  <XMark className="h-3.5 w-3.5 text-red" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] border-2 border-paper">
              <Image src={photos.suite.src} alt={photos.suite.alt} fill sizes="(min-width: 1024px) 36rem, 90vw" className="object-cover" />
            </div>
            {photos.suiteDetails.slice(0, 2).map((p) => (
              <div key={p.src} className="relative aspect-square border-2 border-paper">
                <Image src={p.src} alt={p.alt} fill sizes="18rem" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
