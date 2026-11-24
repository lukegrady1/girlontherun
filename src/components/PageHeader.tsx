import Image from "next/image";
import { Sparkle } from "./XMark";

const BG = {
  pink: "bg-pink",
  butter: "bg-butter",
  mint: "bg-mint",
  cobalt: "bg-cobalt text-white",
} as const;

/*
  Inner-page title as a big colored tile: sticker label, chunky headline,
  intro. With an `image`, a photo tile sits beside it (under it on phones).
*/
export function PageHeader({
  index,
  eyebrow,
  title,
  intro,
  image,
  color = "pink",
  children,
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image?: { src: string; alt: string; position?: string };
  color?: keyof typeof BG;
  children?: React.ReactNode;
}) {
  return (
    <section className="px-3 pt-6 sm:px-5">
      <div className={`mx-auto grid max-w-7xl gap-3 ${image ? "lg:grid-cols-[1.6fr_1fr]" : ""}`}>
        <div className={`tile relative min-w-0 p-7 sm:p-12 ${BG[color]}`}>
          <Sparkle className="absolute right-6 top-6 hidden h-10 w-10 opacity-80 sm:block" />
          <p className="flex flex-wrap items-center gap-2">
            {index && <span className="sticker !bg-ink !text-white">{index}</span>}
            <span className="sticker">{eyebrow}</span>
          </p>
          <h1 className="t-display mt-6 max-w-4xl text-[3.2rem] [overflow-wrap:anywhere] sm:text-7xl lg:text-[6rem]">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-85">{intro}</p>}
          {children}
        </div>
        {image && (
          <div className="tile relative min-h-72 bg-paper-deep">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 30rem, 100vw" className={`object-cover ${image.position ?? ""}`} />
          </div>
        )}
      </div>
    </section>
  );
}
