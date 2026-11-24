"use client";

import { hours } from "@/lib/site";
import { useTodayIndex } from "./OpenNow";

/* Today's opening hours in New Jersey time; "7 days a week" before hydration. */
export function TodayHours({ className = "" }: { className?: string }) {
  const i = useTodayIndex();
  return <span className={className}>{i < 0 ? "Open 7 days" : hours[i].label}</span>;
}
