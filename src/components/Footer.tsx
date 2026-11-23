import Link from "next/link";
import { BookButton } from "./BookButton";
import { XMark } from "./XMark";
import { fullAddress, hoursSummary, legalNav, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-paper">
      {/* Giant watermark X bleeding off the right edge. */}
      <XMark className="pointer-events-none absolute -right-24 -top-16 h-[28rem] w-[28rem] text-white/[0.04]" />

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20">
        <p className="t-poster text-[18vw] leading-[0.8] text-paper sm:text-[9.5rem]">
          Run <span className="text-red">the</span> world.
        </p>

        <div className="mt-12 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-[1.3fr_1fr_auto]">
          <div>
            <p className="t-tag text-white/55">The suite</p>
            <address className="mt-3 space-y-1 not-italic text-paper/90">
              <p>{fullAddress}</p>
              <p>
                <a href={site.phoneHref} className="font-bold text-paper hover:text-red">
                  {site.phone}
                </a>
              </p>
              <p className="text-paper/70">{hoursSummary}</p>
            </address>
          </div>
          <nav aria-label="Footer">
            <p className="t-tag text-white/55">Pages</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-draw text-paper/90 hover:text-paper">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.vagaro.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw text-paper/90 hover:text-paper"
                >
                  Vagaro reviews
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <BookButton className="btn btn-red-on-dark" />
            <a href={site.phoneHref} className="btn btn-line-light focus-ring">
              Call {site.phone}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <XMark className="h-3.5 w-3.5 text-red" />© {new Date().getFullYear()} {site.name} by{" "}
            {site.owner}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {legalNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-paper">
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
