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
      <PageHeader color="mint" eyebrow={eyebrow} title={title} intro={`Last updated ${updated}.`} />
      <section className="px-3 py-10 sm:px-5 sm:py-14">
        <article className="legal tile mx-auto max-w-3xl bg-white p-7 sm:p-12">{children}</article>
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
