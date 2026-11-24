"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { nav, site } from "@/lib/site";
import { BookButton } from "./BookButton";

const COLORS = ["bg-pink", "bg-butter", "bg-mint", "bg-pink", "bg-butter", "bg-mint"] as const;

/*
  Drop-down card under the pill header, with each link as a colored pill.
  It remembers the path it was opened on and counts as open only while
  that is still the current path, so any navigation closes it. Escape
  closes it too.
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
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpenOn(open ? null : pathname)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-ink text-white"
      >
        {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
      </button>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Site"
          className="absolute inset-x-0 top-[calc(100%+0.6rem)] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-[1.75rem] border-2 border-ink bg-white p-4 shadow-[0_6px_0_var(--color-ink)]"
        >
          <ul className="grid grid-cols-2 gap-2">
            {nav.map((n, i) => {
              const active = pathname === n.href;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`t-display focus-ring block rounded-2xl border-2 border-ink px-4 py-4 text-2xl ${active ? "bg-ink text-white" : COLORS[i]}`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 grid gap-2">
            <BookButton className="btn btn-red w-full" />
            <a href={site.phoneHref} className="btn btn-white focus-ring w-full">
              Call {site.phone}
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
