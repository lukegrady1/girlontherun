import type { Metadata } from "next";
import { LegalLink, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms for using the ${site.name} website and booking a hair appointment in Shrewsbury, NJ.`,
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Terms & Conditions" title="The fine print." updated="November 23, 2026">
      <p>
        These Terms cover your use of the {site.name} website and the appointments you book with{" "}
        {site.owner}. By using the site or booking, you agree to them.
      </p>

      <h2>Booking</h2>
      <p>
        Appointments are booked through Vagaro or by calling{" "}
        <a href={site.phoneHref}>{site.phone}</a>. Vagaro’s own terms apply to anything you do on
        Vagaro, including deposits, cancellation rules, and payment plans offered through Affirm.
      </p>

      <h2>Prices</h2>
      <p>
        Prices on this site mirror the current Vagaro menu. Prices marked “from” are starting
        points: the final price depends on your hair’s length, density, and history, and will be
        confirmed with you before any work begins. Color correction and extensions may need a
        consultation first.
      </p>

      <h2>HairPeace</h2>
      <p>
        HairPeace pieces are handmade to your measurements and color. Availability, pre-order
        dates, and patent status may change. Details are confirmed at your consultation.
      </p>

      <h2>Photos</h2>
      <p>
        Photos on this site are of real work. Results vary with every head of hair, and nothing
        here is a guarantee of a particular result.
      </p>

      <h2>Using this site</h2>
      <p>
        The site is provided as is. We work to keep hours and prices current, but Vagaro and a
        phone call are the final word.
      </p>

      <h2>Governing law</h2>
      <p>These Terms are governed by the laws of the State of New Jersey.</p>

      <h2>Contact</h2>
      <p>
        Questions? Call <a href={site.phoneHref}>{site.phone}</a>. See also our{" "}
        <LegalLink href="/privacy/">Privacy Policy</LegalLink>.
      </p>
    </LegalPage>
  );
}
