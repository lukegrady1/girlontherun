import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ServiceTabs } from "@/components/ServiceTabs";
import { allServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu & Prices",
  description:
    "Full GirlOnTheRun price list: haircuts from $40, color, balayage, GK keratin, relaxers, extensions and sew-in wefts, brow lamination, braids, RoseGold, and HairPeace clip-ins. Shrewsbury, NJ.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="Menu"
        eyebrow={`${allServices.length} services · every price listed`}
        color="mint"
        title={
          <>
            The <span className="text-red">whole</span> menu.
          </>
        }
        intro="Cut, color, smooth, extend, braid, brow. Every price below is straight from Tam’s Vagaro book, so what you see here is what you’ll see when you book."
      >
        <div className="mt-8">
          <BookButton />
        </div>
      </PageHeader>
      <section className="px-3 py-10 sm:px-5 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <ServiceTabs />
          <p className="mt-8 max-w-2xl text-sm text-muted">
            Prices are Tam’s current Vagaro menu. “From” prices depend on length, density, and history;
            your HairChat sets the real number. Vagaro offers Affirm on orders over $50.
          </p>
        </div>
      </section>
      <CtaBand title="Can’t decide?" sub="Book a free HairChat and figure it out together." />
    </>
  );
}
