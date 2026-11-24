import Link from "next/link";
import { BookButton } from "./BookButton";
import { Sparkle, Wordmark } from "./XMark";
import { fullAddress, hoursSummary, legalNav, nav, site } from "@/lib/site";

/* The footer is one big ink tile, inset from the page edges like the header. */
export function Footer() {
  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 pb-8 pt-14 text-white sm:px-10 sm:pt-16">
        <Sparkle className="animate-spin-slow absolute right-8 top-8 h-14 w-14 text-butter sm:h-20 sm:w-20" />
        <p className="t-display max-w-3xl text-6xl sm:text-8xl">
          Run <span className="text-pink">wild.</span>
          <br />
          Run <span className="text-butter">the world.</span>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <BookButton className="btn btn-pink !border-white !shadow-[0_4px_0_#fff]" />
          <a href={site.phoneHref} className="btn btn-ink focus-ring !border-white !shadow-[0_4px_0_#fff]">
            Call {site.phone}
          </a>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-3">
          <div>
            <Wordmark light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Hair salon &amp; extensions in {site.address.city}, NJ. By {site.owner}, licensed since {site.since}.
            </p>
          </div>
          <address className="space-y-1.5 text-sm not-italic text-white/85">
            <p className="t-tag text-butter">Find us</p>
            <p>{fullAddress}</p>
            <p>
              <a href={site.phoneHref} className="underline decoration-pink decoration-2 underline-offset-4">
                {site.phone}
              </a>
            </p>
            <p className="text-white/65">{hoursSummary}</p>
          </address>
          <nav aria-label="Footer">
            <p className="t-tag text-butter">Pages</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="focus-ring inline-block rounded-full border border-white/30 px-3 py-1.5 text-sm hover:bg-white hover:text-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.vagaro.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-block rounded-full border border-white/30 px-3 py-1.5 text-sm hover:bg-white hover:text-ink"
                >
                  Vagaro reviews
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} by {site.owner}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {legalNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
