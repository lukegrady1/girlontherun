import { XMark } from "./XMark";

/*
  Inner-page title: a numbered tag, a poster headline, and a hard rule.
  The X watermark sits behind the right side on wide screens.
*/
export function PageHeader({
  index,
  eyebrow,
  title,
  intro,
  children,
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      <XMark className="pointer-events-none absolute -right-10 top-1/2 hidden h-80 w-80 -translate-y-1/2 text-ink/[0.05] md:block" />
      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16">
        <p className="t-tag flex items-center gap-3 text-red">
          {index && <span className="bg-red px-1.5 py-0.5 text-white">{index}</span>}
          {eyebrow}
        </p>
        <h1 className="t-poster mt-4 max-w-5xl text-[3.4rem] sm:text-7xl lg:text-[7.5rem]">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
