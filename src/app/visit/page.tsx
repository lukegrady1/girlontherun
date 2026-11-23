import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { VisitBlock } from "@/components/VisitBlock";
import { XMark } from "@/components/XMark";
import { fullAddress, site, visit } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit · Hours & Directions",
  description: `GirlOnTheRun is at ${fullAddress}. Open 7 days, late nights Friday and Saturday. Free parking, wheelchair accessible, kid friendly.`,
  alternates: { canonical: "/visit/" },
};

const FACTS = [
  { label: "Parking", value: visit.parking },
  { label: "Payment", value: visit.payment.join(", ") },
  { label: "Pay over time", value: visit.financing },
  { label: "The space", value: visit.amenities.join(" · ") },
  { label: "Booking", value: "Online on Vagaro, or call the suite." },
  { label: "Language", value: visit.language },
] as const;

export default function VisitPage() {
  return (
    <>
      <PageHeader
        index="Visit"
        eyebrow={`${site.address.city}, New Jersey`}
        title={
          <>
            1026 <span className="text-red">Broad</span> St.
          </>
        }
        intro={`${site.address.unit}. Open seven days a week, with late nights till 9 on Friday and Saturday.`}
      />
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <VisitBlock />
          <dl className="mt-14 grid gap-px border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
            {FACTS.map((f) => (
              <div key={f.label} className="bg-card p-6">
                <dt className="t-tag flex items-center gap-2 text-red">
                  <XMark className="h-3 w-3" />
                  {f.label}
                </dt>
                <dd className="mt-2 leading-relaxed">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CtaBand title="See you" sub="on Broad St." />
    </>
  );
}
