/*
  The crossed-arrows X from Tam's GirlOnTheRun logo, redrawn as one SVG.
  In this direction it lives inside a round "button" badge in the logo and
  shows up as a sticker here and there.
*/
export function XMark({
  className = "",
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="currentColor"
    >
      <path d="M22 14 L86 78 L78 86 L14 22 Z" />
      <path d="M78 14 L86 22 L22 86 L14 78 Z" />
      <path d="M2 2 L34 6 L6 34 Z" />
      <path d="M98 2 L94 34 L66 6 Z" />
      <path d="M2 98 L6 66 L34 94 Z" />
      <path d="M98 98 L66 94 L94 66 Z" />
    </svg>
  );
}

/* Wordmark: the X in a red circle, then the name in one chunky line. */
export function Wordmark({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink bg-red text-white">
        <XMark className="h-4 w-4" />
      </span>
      <span className={`t-display text-[1.35rem] leading-none tracking-tight ${light ? "text-white" : "text-ink"}`}>
        girlontherun
      </span>
    </span>
  );
}

/* Four-point sparkle, used as decoration on tiles. */
export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  );
}
