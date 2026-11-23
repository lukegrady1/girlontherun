/*
  The crossed-arrows X from Tam's GirlOnTheRun logo, redrawn as a single
  SVG so it can be a bullet, a ticker separator, or a giant watermark.
  Two diagonal bars, each ending in an arrowhead at all four corners.
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
      {/* Shafts */}
      <path d="M22 14 L86 78 L78 86 L14 22 Z" />
      <path d="M78 14 L86 22 L22 86 L14 78 Z" />
      {/* Arrowheads, one per corner, pointing out */}
      <path d="M2 2 L34 6 L6 34 Z" />
      <path d="M98 2 L94 34 L66 6 Z" />
      <path d="M2 98 L6 66 L34 94 Z" />
      <path d="M98 98 L66 94 L94 66 Z" />
    </svg>
  );
}

/* The wordmark: X mark + stacked condensed name. */
export function Wordmark({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <XMark className="h-9 w-9 shrink-0 text-red" />
      <span
        className={`t-poster flex flex-col text-[1.35rem] leading-[0.82] ${light ? "text-paper" : "text-ink"}`}
      >
        <span>Girl On</span>
        <span>The Run</span>
      </span>
    </span>
  );
}
