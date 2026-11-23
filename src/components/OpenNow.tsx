"use client";

import { useSyncExternalStore } from "react";
import { hours } from "@/lib/site";

/*
  "Open now · till 9 PM" / "Closed · opens Tue 9 AM", computed in New Jersey
  time so it is right wherever the visitor is. Renders nothing on the server
  and during the static build (no clock there), then fills in on the client.
*/

function nyNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = hours.findIndex((h) => h.short === get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const fmt = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  const hr = h % 12 || 12;
  return `${hr}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h < 12 ? "AM" : "PM"}`;
};

function status(): { open: boolean; text: string } | null {
  const { day, minutes } = nyNow();
  if (day < 0) return null;
  const today = hours[day];
  if (today.open && minutes >= toMin(today.open) && minutes < toMin(today.close)) {
    return { open: true, text: `Open now · till ${fmt(today.close)}` };
  }
  if (today.open && minutes < toMin(today.open)) {
    return { open: false, text: `Opens today ${fmt(today.open)}` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = hours[(day + i) % 7];
    if (d.open) return { open: false, text: `Closed · opens ${i === 1 ? "tomorrow" : d.short} ${fmt(d.open)}` };
  }
  return null;
}

/* Re-check once a minute. */
function subscribe(cb: () => void) {
  const id = setInterval(cb, 60_000);
  return () => clearInterval(id);
}

let cache: { key: string; value: ReturnType<typeof status> } | null = null;
function snapshot() {
  const key = String(Math.floor(Date.now() / 60_000));
  if (cache?.key !== key) cache = { key, value: status() };
  return cache.value;
}

export function OpenNow({ className = "" }: { className?: string }) {
  const s = useSyncExternalStore(subscribe, snapshot, () => null);
  if (!s) return null;
  return (
    <span className={`t-tag inline-flex items-center gap-2 ${className}`}>
      <span
        className={`h-2 w-2 rounded-full ${s.open ? "bg-[#2fbf71] shadow-[0_0_0_3px_rgb(47_191_113/0.25)]" : "bg-current opacity-50"}`}
        aria-hidden="true"
      />
      {s.text}
    </span>
  );
}

/* Index of today's row (New York time) for highlighting the hours table. */
export function useTodayIndex(): number {
  return useSyncExternalStore(
    subscribe,
    () => nyNow().day,
    () => -1,
  );
}
