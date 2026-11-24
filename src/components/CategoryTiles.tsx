import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { CamelBreak } from "./CamelBreak";
import { groupFrom, serviceGroups } from "@/lib/site";

const COLORS = ["bg-pink", "bg-butter", "bg-mint", "bg-white"] as const;

/*
  Home-page menu teaser: every category as a colored tile with its
  starting price as a sticker. Categories with a photo show it as a round
  thumbnail. The first tile is double width, so the eleven fill three
  even rows of four. Each tile opens that tab on the menu page.
*/
export function CategoryTiles() {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {serviceGroups.map((g, i) => (
        <li key={g.id} className={i === 0 ? "lg:col-span-2" : ""}>
          <Link
            href={`/services/#${g.id}`}
            className={`tile tile-link focus-ring flex h-full min-h-44 flex-col justify-between gap-5 p-6 ${COLORS[i % COLORS.length]}`}
          >
            <span className="flex items-start justify-between gap-3">
              <span className="sticker">{groupFrom(g)}</span>
              {g.image ? (
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-ink">
                  <Image src={g.image.src} alt="" fill sizes="4rem" className="object-cover" />
                </span>
              ) : (
                <ArrowUpRight size={26} weight="bold" aria-hidden="true" />
              )}
            </span>
            <span className="min-w-0">
              <span className="t-display block text-4xl [overflow-wrap:anywhere]">
                <CamelBreak text={g.title} />
              </span>
              <span className="mt-1.5 block text-[0.95rem] text-ink-soft">{g.blurb}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
