"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";
import type { GalleryItem } from "@/lib/site";

/*
  Grid of rounded, outlined photo tiles with a sticker tag on each; tiles in
  `big` are double size. Tapping opens a <dialog> lightbox (native
  focus trap, Escape to close, arrow keys to step). `big` lists the tiles
  that span 2×2; pick them so the cell count fills whole rows of four.
*/
export function GalleryGrid({ items, big = [0] }: { items: GalleryItem[]; big?: number[] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);

  const open = (i: number) => {
    setIndex(i);
    ref.current?.showModal();
  };
  const step = useCallback(
    (d: number) => setIndex((i) => (i + d + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    const onKey = (e: KeyboardEvent) => {
      if (!dlg.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const current = items[index];

  return (
    <>
      <ul className="grid auto-rows-[12rem] grid-flow-row-dense grid-cols-2 gap-3 sm:auto-rows-[16rem] md:grid-cols-3 lg:grid-cols-4">
        {items.map((g, i) => (
          <li key={g.src} className={big.includes(i) ? "col-span-2 row-span-2" : ""}>
            <button
              type="button"
              onClick={() => open(i)}
              className="tile tile-link focus-ring group relative block h-full w-full bg-paper-deep"
              aria-label={`View larger: ${g.alt}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-[1.05]"
              />
              <span className={`sticker absolute bottom-3 left-3 ${["!bg-pink", "!bg-butter", "!bg-mint"][i % 3]}`}>{g.tag}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={ref}
        className="m-auto max-h-[92dvh] w-[min(92vw,56rem)] bg-transparent p-0 backdrop:bg-ink/80"
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
      >
        <div className="tile relative bg-ink">
          <div className="relative h-[78dvh]">
            <Image src={current.src} alt={current.alt} fill sizes="92vw" className="object-contain" />
          </div>
          <div className="flex items-center justify-between gap-3 border-t-2 border-ink bg-white px-3 py-2">
            <p className="text-sm text-ink">
              <span className="sticker mr-2 !bg-pink">{current.tag}</span>
              {current.alt}
            </p>
            <div className="flex shrink-0 gap-1">
              <button type="button" onClick={() => step(-1)} className="focus-ring p-2" aria-label="Previous photo">
                <ArrowLeft size={20} weight="bold" />
              </button>
              <button type="button" onClick={() => step(1)} className="focus-ring p-2" aria-label="Next photo">
                <ArrowRight size={20} weight="bold" />
              </button>
              <button type="button" onClick={() => ref.current?.close()} className="focus-ring p-2" aria-label="Close">
                <X size={20} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
