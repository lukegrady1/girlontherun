import type { Metadata } from "next";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { PageHeader } from "@/components/PageHeader";
import { nav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <>
      <PageHeader
        index="404"
        eyebrow="Wrong turn"
        title={
          <>
            This page <span className="text-red">ran off.</span>
          </>
        }
        intro="The link may be old or mistyped. Everything else is right here."
      />
      <section className="px-3 py-10 sm:px-5 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <ul className="flex flex-wrap gap-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="btn btn-white focus-ring">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <BookButton />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
