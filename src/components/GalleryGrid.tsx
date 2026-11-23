"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";
import type { GalleryItem } from "@/lib/site";

/*
  Uneven grid of work with a tag on each tile. Tapping opens a <dialog>
  lightbox (native focus trap, Escape to close, arrow keys to step).
*/
export function GalleryGrid({ items }: { items: GalleryItem[] }) {
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
      <ul className="grid auto-rows-[11rem] grid-flow-row-dense grid-cols-2 gap-3 sm:auto-rows-[15rem] sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((g, i) => (
          <li key={g.src} className={i % 7 === 0 ? "row-span-2" : ""}>
            <button
              type="button"
              onClick={() => open(i)}
              className="focus-ring group relative block h-full w-full overflow-hidden bg-ink"
              aria-label={`View larger: ${g.alt}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04] group-hover:opacity-80"
              />
              <span className="t-tag absolute bottom-0 left-0 bg-paper px-2 py-1 text-ink">{g.tag}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={ref}
        className="m-auto max-h-[92dvh] w-[min(92vw,56rem)] bg-transparent p-0 backdrop:bg-ink/90"
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
      >
        <div className="relative bg-ink">
          <div className="relative h-[78dvh]">
            <Image src={current.src} alt={current.alt} fill sizes="92vw" className="object-contain" />
          </div>
          <div className="flex items-center justify-between gap-3 bg-paper px-3 py-2">
            <p className="text-sm text-ink">
              <span className="t-tag mr-2 text-red">{current.tag}</span>
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
