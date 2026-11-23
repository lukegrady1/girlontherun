import { XMark } from "./XMark";

/*
  Red marquee band. The word list is rendered twice and the track slides
  by -50%, so the loop is seamless. Decorative: screen readers get one
  plain copy instead of the moving strip.
*/
export function Ticker({
  words,
  tone = "red",
}: {
  words: readonly string[];
  tone?: "red" | "ink";
}) {
  const bg = tone === "red" ? "bg-red text-white" : "bg-ink text-paper";
  const mark = tone === "red" ? "text-ink" : "text-red";
  const run = (key: string) => (
    <ul key={key} className="flex shrink-0 items-center" aria-hidden="true">
      {words.map((w) => (
        <li key={w} className="flex items-center">
          <span className="t-poster px-6 text-4xl sm:text-5xl">{w}</span>
          <XMark className={`h-6 w-6 ${mark}`} />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`overflow-hidden border-y-2 border-ink py-3 ${bg}`}>
      <p className="sr-only">{words.join(", ")}</p>
      <div className="flex w-max animate-marquee">
        {run("a")}
        {run("b")}
      </div>
    </div>
  );
}
