import type { Metadata } from "next";
import { LegalLink, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} in Shrewsbury, NJ handles the information you share when you visit this site, book an appointment, or contact us.`,
  alternates: { canonical: "/privacy/" },
};

/*
  This site has no forms and no booking widget of its own: booking happens
  on Vagaro. So the site itself collects almost nothing, and the policy
  says so plainly and points to Vagaro for booking data.
*/
export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacy Policy" title="Your info, kept simple." updated="November 23, 2026">
      <p>
        This Privacy Policy explains how {site.name} (“we”, “us”), the salon of {site.owner} in
        Shrewsbury, New Jersey, handles information connected to this website and your
        appointments.
      </p>

      <h2>What this website collects</h2>
      <p>
        This website has no sign-up forms, no accounts, and no advertising trackers. Like any site,
        our host receives basic technical data such as your browser type and the pages you
        visit, which is used only to keep the site running and secure.
      </p>

      <h2>Booking through Vagaro</h2>
      <p>
        Online booking happens on Vagaro, a separate service. When you book, Vagaro collects the
        details it asks for (such as your name, phone number, email address, and payment
        information) and shares your appointment details with us so we can look after your
        visit. Vagaro’s own privacy policy covers how it handles that information.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To schedule, confirm, and manage your appointments.</li>
        <li>To answer your calls and messages.</li>
        <li>
          To keep notes on your past services, color formulas, and HairPeace measurements so your
          next visit is consistent.
        </li>
      </ul>
      <p>We do not sell your personal information or use it for third-party advertising.</p>

      <h2>Mobile information</h2>
      <p>
        No mobile information will be shared with third parties or affiliates for marketing or
        promotional purposes. Text messaging originator opt-in data and consent will not be
        shared with any third parties.
      </p>

      <h2>Embedded content</h2>
      <p>
        Our Visit section shows an embedded Google Map. Google may set its own cookies when the
        map loads, under Google’s privacy policy.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>Ask us what information we hold about you.</li>
        <li>Ask us to correct or delete it, unless we need to keep it for legal or tax reasons.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Call <a href={site.phoneHref}>{site.phone}</a>
        {site.email ? (
          <>
            {" "}
            or email <a href={`mailto:${site.email}`}>{site.email}</a>
          </>
        ) : null}
        . See also our <LegalLink href="/terms/">Terms &amp; Conditions</LegalLink>.
      </p>
    </LegalPage>
  );
}
