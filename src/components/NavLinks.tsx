"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

/* Desktop links as soft pills; the current page gets the pink fill. */
export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav aria-label="Site" className="hidden items-center gap-1 lg:flex">
      {nav.map((n) => {
        const active = pathname === n.href;
        return (
          <Link
            key={n.href}
            href={n.href}
            aria-current={active ? "page" : undefined}
            className={`focus-ring rounded-full px-3.5 py-2 text-[0.95rem] font-semibold transition-colors ${active ? "bg-pink" : "hover:bg-paper-deep"}`}
          >
            {n.label}
          </Link>
        );
      })}
    </nav>
  );
}
