import { BookButton } from "./BookButton";
import { site } from "@/lib/site";

/* Red closing band before the footer. */
export function CtaBand({
  title = "Blend in or stand out.",
  sub = "I got you.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="border-t-2 border-ink bg-red text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-end md:justify-between">
        <h2 className="t-poster text-6xl sm:text-8xl">
          {title}
          <br />
          <span className="text-ink">{sub}</span>
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <BookButton className="btn btn-ink !text-white hover:!bg-white hover:!text-ink" />
          <a href={site.phoneHref} className="btn btn-line-light focus-ring">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
