import { allServices, hours, site, siteUrl, visit } from "@/lib/site";

/*
  LocalBusiness > HairSalon structured data mirroring lib/site.ts. No
  aggregateRating: Google treats a business rating itself on its own site
  as self-serving, and the 5.0 comes from Vagaro, not this page.
*/
export function JsonLd() {
  const paid = allServices.filter((s) => s.price > 0).map((s) => s.price);
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${siteUrl}/#salon`,
    name: site.name,
    alternateName: site.displayName,
    slogan: site.tagline,
    url: siteUrl,
    telephone: "+1-732-947-9941",
    image: `${siteUrl}/opengraph-image`,
    priceRange: `$${Math.min(...paid)} - $${Math.max(...paid)}`,
    currenciesAccepted: "USD",
    paymentAccepted: visit.payment.join(", "),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.unit}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    hasMap: site.mapsHref,
    sameAs: [site.vagaro.profile],
    founder: { "@type": "Person", name: site.owner, jobTitle: "Licensed Cosmetologist" },
    openingHoursSpecification: hours
      .filter((h) => h.open)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    amenityFeature: visit.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    knowsLanguage: "en",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: allServices
        .filter((s) => s.price > 0)
        .map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name },
          price: s.price,
          priceCurrency: "USD",
        })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: site.vagaro.booking,
      name: "Book an appointment",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
