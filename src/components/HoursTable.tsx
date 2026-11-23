"use client";

import { hours } from "@/lib/site";
import { useTodayIndex } from "./OpenNow";

/* Seven rows, today's marked in red once the client knows what day it is. */
export function HoursTable({ dark = false }: { dark?: boolean }) {
  const today = useTodayIndex();
  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {hours.map((h, i) => {
          const isToday = i === today;
          return (
            <tr
              key={h.day}
              className={`border-b ${dark ? "border-white/15" : "border-ink/15"} ${isToday ? "text-red" : ""}`}
            >
              <th scope="row" className="py-2.5 pr-4 font-semibold">
                {h.day}
                {isToday && <span className="t-tag ml-2 align-middle">Today</span>}
              </th>
              <td className="py-2.5 text-right font-mono text-[0.95rem] tabular-nums">{h.label}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
