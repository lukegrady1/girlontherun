import Image from "next/image";
import Link from "next/link";
import { CamelBreak } from "./CamelBreak";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { groupFrom, serviceGroups } from "@/lib/site";

/*
  Home-page menu teaser, set like a magazine index: number, category name
  in poster type, starting price in mono. Rows with a photo reveal it on
  hover (desktop only; it's decoration). Each row deep-links to that
  category on the full menu.
*/
export function MenuIndex() {
  return (
    <ol className="border-t-2 border-ink">
      {serviceGroups.map((g, i) => (
        <li key={g.id} className="group relative border-b-2 border-ink">
          <Link
            href={`/services/#${g.id}`}
            className="focus-ring relative z-10 grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-3 py-4 transition-colors duration-200 hover:bg-ink hover:text-paper sm:grid-cols-[4rem_1fr_auto_auto] sm:gap-x-6 sm:px-3 sm:py-5"
          >
            <span className="t-tag text-red">{String(i + 1).padStart(2, "0")}</span>
            <span className="min-w-0">
              <span className="t-poster block text-[2.3rem] leading-[0.9] [overflow-wrap:anywhere] sm:text-6xl lg:text-7xl">
                <CamelBreak text={g.title} />
              </span>
              <span className="mt-1.5 block text-sm text-muted transition-colors group-hover:text-paper/70 sm:text-base">
                {g.blurb}
              </span>
            </span>
            <span className="t-tag hidden whitespace-nowrap sm:block">{groupFrom(g)}</span>
            <ArrowRight
              size={26}
              weight="bold"
              className="text-red transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          {g.image && (
            <div className="pointer-events-none absolute right-40 top-1/2 z-20 hidden aspect-[3/4] w-44 -translate-y-1/2 rotate-3 scale-90 overflow-hidden border-4 border-paper opacity-0 shadow-2xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 lg:block">
              <Image src={g.image.src} alt="" fill sizes="11rem" className="object-cover" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
