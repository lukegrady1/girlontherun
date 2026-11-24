"use client";

import { hours } from "@/lib/site";
import { useTodayIndex } from "./OpenNow";

/* Seven rows as pills; today's row is filled butter once the day is known. */
export function HoursTable({ dark = false }: { dark?: boolean }) {
  const today = useTodayIndex();
  return (
    <table className="w-full border-separate border-spacing-y-1.5 text-left">
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {hours.map((h, i) => {
          const isToday = i === today;
          const cell = isToday ? "bg-butter text-ink" : dark ? "bg-white/10" : "bg-paper";
          return (
            <tr key={h.day}>
              <th scope="row" className={`rounded-l-full py-2 pl-4 pr-3 font-semibold ${cell}`}>
                {h.day}
                {isToday && <span className="ml-2 rounded-full bg-red px-2 py-0.5 text-[0.65rem] font-bold uppercase text-white">Today</span>}
              </th>
              <td className={`whitespace-nowrap rounded-r-full py-2 pl-3 pr-4 text-right tabular-nums ${cell}`}>{h.label}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
