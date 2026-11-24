import {
  about,
  formatPrice,
  fullAddress,
  hours,
  nav,
  serviceGroups,
  site,
  siteUrl,
  visit,
} from "@/lib/site";

// /llms.txt (llmstxt.org): a plain-markdown summary of the salon for AI
// assistants and AI search, built from lib/site.ts like the pages and the
// schema. Written to out/llms.txt at build time.
export const dynamic = "force-static";

const url = (path: string) => `${siteUrl}${path}`;

export function GET() {
  const lines = [
    `# ${site.displayName}`,
    "",
    `> ${site.name} is ${site.owner}'s (${site.ownerShort}'s) hair salon suite in ${site.address.city}, ${site.address.state}: cuts, color, balayage, keratin, relaxers, extensions, braids, a brow bar, barbering and kids' cuts, from a licensed cosmetologist since ${site.since}. Home of HairPeace, Tam's handmade lace clip-in extensions. "${site.tagline}"`,
    "",
    about.bio.join("\n\n"),
    "",
    "## Business details",
    "",
    `- Name: ${site.name} (${site.displayName})`,
    `- Stylist: ${site.owner}`,
    `- Address: ${fullAddress}`,
    `- Phone: ${site.phone}`,
    `- Book online (Vagaro): ${site.vagaro.booking}`,
    `- ${visit.parking}; payment: ${visit.payment.join(", ")}`,
    `- Amenities: ${visit.amenities.join(", ")}`,
    "",
    "## Hours",
    "",
    ...hours.map((h) => `- ${h.day}: ${h.label}`),
    "",
    `## Service menu ([full menu](${url("/services/")}))`,
    "",
    ...serviceGroups.flatMap((g) => [
      `### ${g.title}`,
      "",
      g.blurb,
      "",
      ...g.services.map((s) => `- ${s.name}: ${formatPrice(s)}`),
      "",
    ]),
    "## Pages",
    "",
    ...nav.map((n) => `- [${n.label}](${url(n.href)})`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
