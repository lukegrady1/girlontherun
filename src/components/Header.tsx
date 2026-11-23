import Link from "next/link";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { BookButton } from "./BookButton";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { Wordmark } from "./XMark";
import { site } from "@/lib/site";

/*
  Sticky header on paper with a hard ink rule underneath. Phone: wordmark,
  call, Book, menu. Desktop adds the inline links.
*/
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="focus-ring" aria-label={`${site.displayName}, home`}>
          <Wordmark />
        </Link>

        <NavLinks />

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="btn btn-line btn-sm focus-ring !px-3"
            aria-label={`Call ${site.phone}`}
          >
            <Phone size={18} weight="bold" aria-hidden="true" />
            <span className="hidden xl:inline">{site.phone}</span>
          </a>
          <BookButton className="btn btn-red btn-sm !shadow-[3px_3px_0_var(--color-ink)]" arrow={false}>
            Book
          </BookButton>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
