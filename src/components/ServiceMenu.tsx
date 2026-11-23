import Image from "next/image";
import { CamelBreak } from "./CamelBreak";
import { Van } from "@phosphor-icons/react/dist/ssr";
import { BookButton } from "./BookButton";
import { formatPrice, serviceGroups } from "@/lib/site";

/*
  The full Vagaro menu. A sticky strip of category chips under the header
  jumps to each section; each section is a numbered poster title, an
  optional photo, and a ruled price list with Tam's descriptions verbatim.
*/
export function ServiceMenu() {
  return (
    <>
      <nav
        aria-label="Menu categories"
        className="sticky top-[4.5rem] z-30 border-b-2 border-ink bg-paper/95 backdrop-blur-md"
      >
        <ul className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {serviceGroups.map((g) => (
            <li key={g.id} className="shrink-0">
              <a
                href={`#${g.id}`}
                className="t-tag focus-ring block border-2 border-ink px-3 py-1.5 text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                {g.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {serviceGroups.map((g, gi) => (
          <section
            key={g.id}
            id={g.id}
            aria-labelledby={`${g.id}-title`}
            className="scroll-mt-36 border-b-2 border-ink py-14 last:border-b-0 sm:py-20"
          >
            <div className="grid gap-10 lg:grid-cols-[20rem_1fr] lg:gap-14">
              <header className="min-w-0 lg:sticky lg:top-40 lg:self-start">
                <p className="t-tag text-red">{String(gi + 1).padStart(2, "0")} / {String(serviceGroups.length).padStart(2, "0")}</p>
                <h2 id={`${g.id}-title`} className="t-poster mt-2 text-5xl [overflow-wrap:anywhere] sm:text-7xl">
                  <CamelBreak text={g.title} />
                </h2>
                <p className="mt-3 text-muted">{g.blurb}</p>
                {g.image && (
                  <div className="relative mt-6 hidden aspect-[4/5] w-full border-2 border-ink lg:block">
                    <Image src={g.image.src} alt={g.image.alt} fill sizes="20rem" className="object-cover" />
                  </div>
                )}
              </header>

              <ul className="min-w-0 border-t-2 border-ink">
                {g.services.map((s) => (
                  <li key={s.name} className="border-b border-ink/20 py-5">
                    <div className="flex items-baseline gap-3">
                      <h3 className="t-headline min-w-0 text-2xl [overflow-wrap:anywhere] sm:text-[1.7rem]">{s.name}</h3>
                      <span aria-hidden="true" className="mb-1.5 flex-1 border-b-2 border-dotted border-ink/30" />
                      <span className={`shrink-0 font-mono text-lg ${s.price === 0 ? "text-red" : ""}`}>
                        {formatPrice(s)}
                      </span>
                    </div>
                    {s.mobile && (
                      <p className="t-tag mt-2 inline-flex items-center gap-1.5 bg-ink px-2 py-1 text-paper">
                        <Van size={14} weight="bold" aria-hidden="true" /> Mobile service available
                      </p>
                    )}
                    {s.description && (
                      <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">{s.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="flex flex-col gap-5 border-2 border-ink bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl text-ink-soft">
            Prices are Tam’s current Vagaro menu. “From” prices depend on length, density, and
            history; your HairChat sets the real number. Vagaro offers Affirm on orders over $50.
          </p>
          <BookButton />
        </div>
      </div>
    </>
  );
}
