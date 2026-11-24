"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Van } from "@phosphor-icons/react";
import { formatPrice, serviceGroups } from "@/lib/site";
import { CamelBreak } from "./CamelBreak";

const COLORS = ["bg-pink", "bg-butter", "bg-mint"] as const;

/*
  The full Vagaro menu as tabs: a wrap of category pills, and one panel
  of service cards per category. Every panel is in the HTML (inactive ones
  carry `hidden`), so search engines still get the
  whole menu. The URL hash picks the tab, so /services/#hairchat from the
  home page opens HairChat, and switching tabs updates the hash. On phones
  the pills scroll sideways in one row.
*/
export function ServiceTabs() {
  const [active, setActive] = useState<string>(serviceGroups[0].id);

  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (serviceGroups.some((g) => g.id === id)) setActive(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const pick = (id: string) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div>
      <div role="tablist" aria-label="Menu categories" className="no-scrollbar -mx-3 flex gap-2 overflow-x-auto px-3 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {serviceGroups.map((g) => {
          const on = g.id === active;
          return (
            <button
              key={g.id}
              type="button"
              role="tab"
              id={`tab-${g.id}`}
              aria-selected={on}
              aria-controls={g.id}
              onClick={() => pick(g.id)}
              className={`focus-ring shrink-0 rounded-full border-2 border-ink px-4 py-2 font-semibold transition-[transform,background-color] duration-200 ${on ? "-translate-y-0.5 bg-ink text-white shadow-[0_3px_0_var(--color-red)]" : "bg-white hover:bg-butter"}`}
            >
              {g.title}
              <span className={`ml-1.5 text-sm ${on ? "text-white/70" : "text-muted"}`}>{g.services.length}</span>
            </button>
          );
        })}
      </div>

      {serviceGroups.map((g) => (
        <section
          key={g.id}
          id={g.id}
          role="tabpanel"
          aria-labelledby={`tab-${g.id}`}
          hidden={g.id !== active}
          className="mt-6"
        >
          <div className="grid gap-3 lg:grid-cols-[18rem_1fr]">
            <div className="tile flex min-w-0 flex-col justify-between gap-6 bg-cobalt p-6 text-white">
              <div>
                <h2 className="t-display text-5xl [overflow-wrap:anywhere]">
                  <CamelBreak text={g.title} />
                </h2>
                <p className="mt-3 text-white/85">{g.blurb}</p>
              </div>
              {g.image && (
                <div className="relative hidden aspect-square overflow-hidden rounded-2xl border-2 border-ink lg:block">
                  <Image src={g.image.src} alt={g.image.alt} fill sizes="18rem" className="object-cover" />
                </div>
              )}
            </div>
            <ul className="grid min-w-0 gap-3 sm:grid-cols-2">
              {g.services.map((s, i) => (
                <li key={s.name} className={`tile flex min-w-0 flex-col gap-3 p-6 ${COLORS[i % COLORS.length]}`}>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="t-display min-w-0 text-2xl [overflow-wrap:anywhere]">{s.name}</h3>
                    <span className={`sticker shrink-0 !text-base ${s.price === 0 ? "!bg-red !text-white" : ""}`}>{formatPrice(s)}</span>
                  </div>
                  {s.mobile && (
                    <p className="sticker w-fit !bg-ink !text-xs !text-white">
                      <Van size={14} weight="bold" aria-hidden="true" /> Mobile service available
                    </p>
                  )}
                  {s.description && <p className="text-[0.95rem] leading-relaxed text-ink-soft">{s.description}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
