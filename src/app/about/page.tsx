import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Sparkle, XMark } from "@/components/XMark";
import { about, photos, site, visit } from "@/lib/site";

export const metadata: Metadata = {
  title: "About tam.i.am",
  description:
    "Meet tam.i.am, licensed cosmetologist since 2001 and creator of GirlOnTheRun and HairPeace lace clip-ins. A private suite on Broad Street in Shrewsbury, NJ.",
  alternates: { canonical: "/about/" },
};

const PILLAR_COLORS = ["bg-pink", "bg-butter", "bg-mint"] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="About"
        eyebrow="The girl on the run"
        color="butter"
        title={
          <>
            Hey, I’m <span className="text-red">{site.owner}</span>
          </>
        }
        intro={`Licensed cosmetologist since ${site.since}. Hair artist, seamstress, and the hairdresser some clients have had since they were in a stroller.`}
        image={{ src: photos.tam.src, alt: photos.tam.alt, position: "object-[50%_30%]" }}
      />

      <section className="px-3 py-3 sm:px-5">
        <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-12">
          <Reveal className="tile min-w-0 bg-white p-7 sm:p-10 lg:col-span-8">
            <h2 className="t-display text-4xl sm:text-6xl">
              Hair artistry <span className="text-red">×</span> seamstressing.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              {about.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80} className="tile relative flex min-w-0 flex-col justify-between gap-6 bg-red p-7 text-white sm:p-10 lg:col-span-4">
            <XMark className="h-10 w-10 text-butter" />
            <blockquote className="t-display text-4xl sm:text-5xl">“{about.promise}”</blockquote>
            <p className="font-semibold text-white/85">— {site.owner}</p>
          </Reveal>
          {about.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className={`tile p-7 lg:col-span-4 ${PILLAR_COLORS[i]}`}>
              <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-white t-display text-xl">
                {i + 1}
              </span>
              <h3 className="t-display mt-5 text-3xl">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-3 py-16 sm:px-5 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-3 lg:grid-cols-12">
            <div className="tile relative min-w-0 bg-cobalt p-7 text-white sm:p-10 lg:col-span-5">
              <Sparkle className="absolute right-7 top-7 h-9 w-9 text-butter" />
              <span className="sticker">The suite</span>
              <h2 className="t-display mt-5 text-5xl sm:text-6xl">Cozy. Private. Very chic.</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                Damask walls, red shelves, a vintage dryer hood, a Brow Bar, and the HairCloset. One
                chair, one client, no salon-floor noise.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {[visit.parking, ...visit.amenities].map((a) => (
                  <li key={a} className="sticker">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tile relative min-h-80 bg-paper-deep lg:col-span-7">
              <Image src={photos.suite.src} alt={photos.suite.alt} fill sizes="(min-width: 1024px) 44rem, 100vw" className="object-cover" />
            </div>
            {photos.suiteDetails.map((p) => (
              <div key={p.src} className="tile relative aspect-square bg-paper-deep lg:col-span-3">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 20rem, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
