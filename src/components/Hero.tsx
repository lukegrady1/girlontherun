import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "@phosphor-icons/react/dist/ssr";
import { BookButton } from "./BookButton";
import { OpenNow } from "./OpenNow";
import { TodayHours } from "./TodayHours";
import { Sparkle, XMark } from "./XMark";
import { gallery, photos, site } from "@/lib/site";

/*
  Bento hero. Six tiles on a 12-column grid (stacked on phones):
  the headline tile (butter), Tam's photo with a sticker, then a row of
  four small tiles: rating (pink), today's hours (cobalt), HairPeace (ink),
  and a vivid-color photo.

  SEO: the one H1 leads with "Hair Salon & Extensions in Shrewsbury, NJ"
  (what and where people search) and then the slogan, so it reads
  "Hair Salon & Extensions in Shrewsbury, NJ: Girls run the world."
*/
export function Hero() {
  const vivid = gallery[15];
  return (
    <section className="px-3 pt-6 sm:px-5">
      <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
        {/* Headline */}
        <div className="tile relative min-w-0 bg-butter p-7 sm:p-10 lg:col-span-7">
          <Sparkle className="animate-wiggle absolute right-7 top-7 hidden h-14 w-14 text-red sm:block" />
          <OpenNow className="sticker !text-[0.72rem]" />
          <h1 className="mt-6">
            <span className="t-tag block text-ink-soft">
              Hair Salon &amp; Extensions in {site.address.city}, {site.address.state}
              <span className="sr-only">:</span>
            </span>{" "}
            <span className="t-display mt-3 block text-[3.6rem] sm:text-[5.5rem] xl:text-[6.5rem]">
              Girls <span className="text-red">run</span> the world.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            <strong className="font-bold text-ink">{site.name}</strong> is a private hair suite on Broad
            Street in {site.address.city}, New Jersey, serving Monmouth County with haircuts, hair color
            and balayage, keratin smoothing, hair extensions, and brows. Plus HairPeace, handmade lace
            clip-ins by {site.owner}, a licensed cosmetologist since {site.since}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton />
            <Link href="/services/" className="btn btn-white focus-ring">
              See the menu
            </Link>
          </div>
        </div>

        {/* Tam */}
        <div className="tile relative min-h-[26rem] bg-pink lg:col-span-5">
          <Image
            src={photos.tam.src}
            alt={`${site.owner}, owner and stylist at ${site.name} hair salon in ${site.address.city}, NJ`}
            fill
            priority
            sizes="(min-width: 1024px) 34rem, 100vw"
            className="object-cover object-bottom"
          />
          <span className="sticker absolute left-4 top-4 -rotate-6 !bg-pink">Hi, I’m Tam 👋</span>
          <span className="absolute bottom-4 right-4 grid h-24 w-24 rotate-12 place-items-center rounded-full border-2 border-ink bg-red text-center text-white">
            <span className="t-display text-[0.8rem] leading-tight">
              licensed
              <br />
              <span className="text-3xl">{site.since}</span>
            </span>
          </span>
        </div>

        {/* Rating */}
        <a
          href={site.vagaro.reviews}
          target="_blank"
          rel="noopener noreferrer"
          className="tile tile-link focus-ring flex flex-col justify-between gap-6 bg-pink p-6 lg:col-span-3"
        >
          <span className="flex text-red" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={22} weight="fill" />
            ))}
          </span>
          <span>
            <span className="t-display block text-6xl">{site.rating.value}</span>
            <span className="mt-1 block font-semibold">
              {site.rating.count} reviews on {site.rating.source}
            </span>
          </span>
        </a>

        {/* Today's hours */}
        <Link href="/visit/" className="tile tile-link focus-ring flex flex-col justify-between gap-6 bg-cobalt p-6 text-white lg:col-span-3">
          <span className="t-tag text-butter">Today</span>
          <span>
            <TodayHours className="t-display block text-4xl" />
            <span className="mt-2 flex items-center gap-1 font-semibold">
              Hours &amp; directions <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </span>
          </span>
        </Link>

        {/* HairPeace */}
        <Link href="/hairpeace/" className="tile tile-link focus-ring relative flex min-h-56 flex-col justify-between overflow-hidden bg-ink p-6 text-white lg:col-span-3">
          <Image src={photos.hairCloset.src} alt="" fill sizes="(min-width: 1024px) 20rem, 100vw" className="object-cover opacity-45" />
          <span className="sticker relative w-fit !bg-pink">New · patent pending</span>
          <span className="relative">
            <span className="t-display block text-4xl">HairPeace</span>
            <span className="mt-1 flex items-center gap-1 font-semibold">
              Lace clip-ins <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </span>
          </span>
        </Link>

        {/* Vivid photo */}
        <div className="tile relative min-h-56 bg-mint lg:col-span-3">
          <Image src={vivid.src} alt={`${vivid.alt}, by ${site.name} in ${site.address.city}, NJ`} fill sizes="(min-width: 1024px) 20rem, 100vw" className="object-cover" />
          <span className="absolute bottom-3 left-3 grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-butter">
            <XMark className="h-5 w-5 text-red" />
          </span>
        </div>
      </div>
    </section>
  );
}
