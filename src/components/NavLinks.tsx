"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav aria-label="Site" className="hidden items-center gap-6 lg:flex">
      {nav.map((n) => {
        const active = pathname === n.href;
        return (
          <Link
            key={n.href}
            href={n.href}
            aria-current={active ? "page" : undefined}
            className={`link-draw focus-ring pb-0.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] transition-colors hover:text-red ${active ? "text-red" : "text-ink"}`}
          >
            {n.label}
          </Link>
        );
      })}
    </nav>
  );
}
