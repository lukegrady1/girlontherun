import { Star } from "@phosphor-icons/react/dist/ssr";
import { reviews, site } from "@/lib/site";

const COLORS = ["bg-pink", "bg-white", "bg-butter", "bg-mint", "bg-white", "bg-pink"] as const;
const TILTS = ["-rotate-1", "rotate-1", "rotate-0", "-rotate-[0.6deg]", "rotate-[0.8deg]", "rotate-0"] as const;

/*
  Verbatim Vagaro reviews as a wall of colored notes, slightly tilted.
  Featured ones are set larger. No per-review stars: only Vagaro's
  aggregate is shown.
*/
export function Reviews({ limit }: { limit?: number }) {
  const list = reviews.slice(0, limit);
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="t-display text-5xl sm:text-7xl">
          Clients be <span className="text-red">saying…</span>
        </h2>
        <a
          href={site.vagaro.reviews}
          target="_blank"
          rel="noopener noreferrer"
          className="sticker focus-ring !px-4 !py-2 hover:!bg-butter"
        >
          <span className="flex text-red" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={14} weight="fill" />
            ))}
          </span>
          {site.rating.value} · {site.rating.count} reviews on {site.rating.source}
        </a>
      </div>

      <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {list.map((r, i) => {
          const big = "feature" in r && r.feature;
          return (
            <li
              key={r.name}
              className={`tile mb-4 break-inside-avoid p-6 ${COLORS[i % COLORS.length]} ${TILTS[i % TILTS.length]}`}
            >
              <figure>
                <blockquote className={big ? "text-xl font-semibold leading-snug" : "leading-relaxed text-ink-soft"}>
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2 font-bold">
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-ink bg-white text-sm">
                    {r.name[0]}
                  </span>
                  {r.name}
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
