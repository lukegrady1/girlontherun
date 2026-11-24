import Link from "next/link";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { BookButton } from "./BookButton";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { Wordmark } from "./XMark";
import { site } from "@/lib/site";

/*
  Floating pill header: a white, ink-outlined bar that hovers a little
  below the top of the window instead of spanning edge to edge. The
  phone menu drops down as a card from it (see MobileMenu).
*/
export function Header() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 rounded-full border-2 border-ink bg-white pl-4 pr-2 shadow-[0_4px_0_var(--color-ink)] sm:pl-5">
        <Link href="/" className="focus-ring rounded-full" aria-label={`${site.displayName}, home`}>
          <Wordmark />
        </Link>

        <NavLinks />

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="focus-ring hidden h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-butter sm:inline-flex"
            aria-label={`Call ${site.phone}`}
          >
            <Phone size={18} weight="bold" aria-hidden="true" />
          </a>
          <BookButton className="btn btn-red btn-sm !shadow-none" arrow={false}>
            Book
          </BookButton>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
