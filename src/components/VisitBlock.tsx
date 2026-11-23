import { MapPin, NavigationArrow, Phone } from "@phosphor-icons/react/dist/ssr";
import { HoursTable } from "./HoursTable";
import { OpenNow } from "./OpenNow";
import { fullAddress, site, visit } from "@/lib/site";

/* Address, hours, and map in one bordered slab. */
export function VisitBlock() {
  return (
    <div className="grid border-2 border-ink bg-card lg:grid-cols-[1fr_1.1fr]">
      <div className="p-6 sm:p-10">
        <OpenNow className="text-ink" />
        <h3 className="t-headline mt-4 text-3xl">Find the suite</h3>
        <p className="mt-3 flex gap-2 text-lg">
          <MapPin size={24} weight="fill" className="mt-0.5 shrink-0 text-red" aria-hidden="true" />
          <span>{fullAddress}</span>
        </p>
        <p className="mt-1 pl-8 text-sm text-muted">{visit.parking}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="btn btn-ink btn-sm focus-ring">
            <NavigationArrow size={18} weight="bold" aria-hidden="true" />
            Directions
          </a>
          <a href={site.phoneHref} className="btn btn-line btn-sm focus-ring">
            <Phone size={18} weight="bold" aria-hidden="true" />
            {site.phone}
          </a>
        </div>

        <div className="mt-8">
          <HoursTable />
        </div>
      </div>
      <div className="relative min-h-80 border-t-2 border-ink lg:border-l-2 lg:border-t-0">
        <iframe
          src={site.mapsEmbedSrc}
          title={`Map to ${site.name}, ${fullAddress}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full grayscale-[0.6] contrast-[1.05]"
        />
      </div>
    </div>
  );
}
