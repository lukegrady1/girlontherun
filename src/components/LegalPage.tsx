import Link from "next/link";
import { PageHeader } from "./PageHeader";

/* Shared frame for Privacy and Terms: plain prose, one readable column. */
export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={`Last updated ${updated}.`} />
      <section className="py-14 sm:py-20">
        <article className="legal mx-auto max-w-3xl px-4 sm:px-6">{children}</article>
      </section>
    </>
  );
}

export function LegalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="focus-ring">
      {children}
    </Link>
  );
}
