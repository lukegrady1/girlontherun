import { MapPin, NavigationArrow, Phone } from "@phosphor-icons/react/dist/ssr";
import { HoursTable } from "./HoursTable";
import { OpenNow } from "./OpenNow";
import { fullAddress, site, visit } from "@/lib/site";

/* Three tiles: where (mint), when (white), and the map. */
export function VisitBlock() {
  return (
    <div className="grid gap-3 lg:grid-cols-3">
      <div className="tile flex flex-col justify-between gap-8 bg-mint p-7">
        <div>
          <p className="t-tag">Where</p>
          <p className="t-display mt-3 flex gap-2 text-3xl">
            <MapPin size={30} weight="fill" className="shrink-0 text-red" aria-hidden="true" />
            <span>{site.address.line1}</span>
          </p>
          <p className="mt-2 text-ink-soft">
            {site.address.unit}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </p>
          <p className="sticker mt-4">{visit.parking}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="btn btn-ink btn-sm focus-ring">
            <NavigationArrow size={16} weight="bold" aria-hidden="true" />
            Directions
          </a>
          <a href={site.phoneHref} className="btn btn-white btn-sm focus-ring">
            <Phone size={16} weight="bold" aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </div>
      <div className="tile bg-white p-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="t-tag">When</p>
          <OpenNow className="text-muted" />
        </div>
        <div className="mt-3">
          <HoursTable />
        </div>
      </div>
      <div className="tile relative min-h-80 bg-paper-deep">
        <iframe
          src={site.mapsEmbedSrc}
          title={`Map to ${site.name}, ${fullAddress}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
