import Image from "next/image";
import Link from "next/link";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { BookButton } from "./BookButton";
import { OpenNow } from "./OpenNow";
import { XMark } from "./XMark";
import { gallery, photos, site } from "@/lib/site";

/*
  Black poster hero. Left: the headline set huge and condensed with a red
  X punched into it. Right: three taped, tilted photos like a mood board on
  the suite wall. On phones the collage drops under the copy as a strip.
*/
export function Hero() {
  const years = new Date().getFullYear() - site.since;
  return (
    <section className="grain relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-8 lg:pb-20 lg:pt-14">
        <div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-paper/75">
            <span className="t-tag">
              {site.address.city}, {site.address.state}
            </span>
            <OpenNow className="text-paper/75" />
          </div>

          <h1 className="t-poster mt-6 text-[19vw] sm:text-[8rem] lg:text-[7.5rem] xl:text-[8.75rem]">
            <span className="block">Girls</span>
            <span className="flex items-center gap-[0.08em]">
              Run
              <XMark className="h-[0.78em] w-[0.78em] text-red" />
            </span>
            <span className="block">
              The <span className="text-red">World.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/85">
            Cuts, color, extensions, and <strong className="text-paper">HairPeace</strong>, the
            handmade lace clip-ins, by{" "}
            <span className="font-mono text-paper">{site.owner}</span>. Licensed since {site.since}.
            Every hair type, every texture, every pronoun.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <BookButton className="btn btn-red-on-dark" />
            <Link href="/services/" className="btn btn-line-light focus-ring">
              See the menu
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/15 pt-6">
            <div>
              <dt className="t-tag text-paper/55">Behind the chair</dt>
              <dd className="t-poster mt-1 text-5xl">{years}+ yrs</dd>
            </div>
            <div>
              <dt className="t-tag text-paper/55">On Vagaro</dt>
              <dd className="t-poster mt-1 flex items-center gap-1.5 text-5xl">
                {site.rating.value}
                <Star size={26} weight="fill" className="text-red" aria-label="stars" />
              </dd>
            </div>
            <div>
              <dt className="t-tag text-paper/55">Open</dt>
              <dd className="t-poster mt-1 text-5xl">7 days</dd>
            </div>
          </dl>
        </div>

        {/* Mood-board collage */}
        <div className="relative mx-auto h-[26rem] w-full max-w-[34rem] sm:h-[34rem]" aria-hidden="false">
          <figure className="absolute left-0 top-6 w-[52%] -rotate-[5deg] bg-paper p-2 pb-8 shadow-2xl">
            <div className="relative aspect-[3/4]">
              <Image src={gallery[0].src} alt={gallery[0].alt} fill priority sizes="(min-width: 1024px) 18rem, 50vw" className="object-cover" />
            </div>
            <figcaption className="t-tag absolute bottom-2 left-3 text-ink">Long layers</figcaption>
            <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-3" />
          </figure>
          <figure className="absolute right-0 top-0 w-[50%] rotate-[4deg] bg-paper p-2 pb-8 shadow-2xl">
            <div className="relative aspect-[3/4]">
              <Image src={photos.tam.src} alt={photos.tam.alt} fill priority sizes="(min-width: 1024px) 17rem, 50vw" className="object-cover object-bottom" />
            </div>
            <figcaption className="t-tag absolute bottom-2 left-3 text-ink">{site.owner}</figcaption>
            <span className="tape -top-3 left-6 -rotate-6" />
          </figure>
          <figure className="absolute bottom-0 left-[24%] w-[48%] rotate-[2deg] bg-paper p-2 pb-8 shadow-2xl">
            <div className="relative aspect-square">
              <Image src={gallery[1].src} alt={gallery[1].alt} fill sizes="(min-width: 1024px) 16rem, 48vw" className="object-cover" />
            </div>
            <figcaption className="t-tag absolute bottom-2 left-3 text-ink">Red velvet</figcaption>
            <span className="tape -top-3 right-4 rotate-12" />
          </figure>
          {/* Sticker */}
          <div className="absolute -bottom-2 right-0 flex h-28 w-28 rotate-12 flex-col items-center justify-center rounded-full bg-red text-center text-white shadow-xl sm:h-32 sm:w-32">
            <span className="t-tag text-[0.6rem]">Licensed since</span>
            <span className="t-poster text-4xl sm:text-5xl">{site.since}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
