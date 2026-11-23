import { Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { reviews, site } from "@/lib/site";

/*
  Verbatim Vagaro reviews. Featured ones are set big as pull quotes; the
  rest flow in a masonry of columns. No per-review stars: the reviewer's
  own rating is not shown on Vagaro's text, so we only show the aggregate.
*/
export function Reviews({ limit }: { limit?: number }) {
  const featured = reviews.filter((r) => "feature" in r && r.feature);
  const rest = reviews.filter((r) => !("feature" in r && r.feature)).slice(0, limit);
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="t-poster text-6xl sm:text-8xl">
          Ten million
          <br />
          <span className="text-red">dollar</span> exits.
        </h2>
        <a
          href={site.vagaro.reviews}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex items-center gap-3 border-2 border-ink bg-card px-4 py-3 hover:bg-ink hover:text-paper"
        >
          <span className="t-poster text-5xl">{site.rating.value}</span>
          <span>
            <span className="flex text-red" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={16} weight="fill" />
              ))}
            </span>
            <span className="t-tag">
              {site.rating.count} reviews on {site.rating.source}
            </span>
          </span>
        </a>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {featured.map((r, i) => (
          <Reveal key={r.name} delay={i * 90}>
            <figure className={`flex h-full flex-col justify-between p-7 ${i === 1 ? "bg-red text-white" : "bg-ink text-paper"}`}>
              <blockquote className="text-xl leading-snug sm:text-2xl">
                <span className="t-poster mr-1 text-5xl leading-none">“</span>
                {r.quote}
              </blockquote>
              <figcaption className="t-tag mt-6 opacity-80">— {r.name}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {rest.map((r) => (
          <figure key={r.name} className="mb-6 break-inside-avoid border-2 border-ink bg-card p-6">
            <blockquote className="leading-relaxed text-ink-soft">{r.quote}</blockquote>
            <figcaption className="t-tag mt-4 text-red">— {r.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
