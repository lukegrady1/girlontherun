import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { VisitBlock } from "@/components/VisitBlock";
import { fullAddress, photos, site, visit } from "@/lib/site";

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
        color="butter"
        image={{ src: photos.suite.src, alt: photos.suite.alt }}
      />
      <section className="px-3 py-10 sm:px-5 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <VisitBlock />
          <dl className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FACTS.map((f, i) => (
              <div key={f.label} className={`tile p-6 ${["bg-pink", "bg-white", "bg-mint"][i % 3]}`}>
                <dt className="t-display text-2xl">{f.label}</dt>
                <dd className="mt-2 leading-relaxed text-ink-soft">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CtaBand title="See you on Broad St." sub="Free parking, right out front." />
    </>
  );
}
