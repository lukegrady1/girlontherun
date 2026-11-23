"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { nav, site } from "@/lib/site";
import { BookButton } from "./BookButton";

/*
  Full-height black sheet with poster-size links. It remembers the path it
  was opened on and counts as open only while that is still the current
  path, so any navigation (logo, Book, a link) closes it. Escape closes it
  too, and the page behind stops scrolling while it is up.
*/
export function MobileMenu() {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenOn(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpenOn(open ? null : pathname)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="focus-ring inline-flex h-11 w-11 items-center justify-center bg-ink text-paper"
      >
        {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
      </button>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Site"
          className="grain fixed inset-x-0 top-[4.5rem] bottom-0 z-50 overflow-y-auto bg-ink px-5 pb-10 pt-6 text-paper"
        >
          <ul>
            {nav.map((n, i) => {
              const active = pathname === n.href;
              return (
                <li key={n.href} className="border-b border-white/10">
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`focus-ring flex items-baseline gap-4 py-3 ${active ? "text-red" : "text-paper"}`}
                  >
                    <span className="t-tag text-white/45">{String(i + 1).padStart(2, "0")}</span>
                    <span className="t-poster text-5xl">{n.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 grid gap-3">
            <BookButton className="btn btn-red-on-dark w-full" />
            <a href={site.phoneHref} className="btn btn-line-light focus-ring w-full">
              Call {site.phone}
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
