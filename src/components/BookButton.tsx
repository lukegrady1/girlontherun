import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { bookHref } from "@/lib/site";

/*
  Every "Book" opens Vagaro's services page in a new tab (each service has
  its own Book Now there). A plain anchor so it works before hydration.
*/
export function BookButton({
  className = "btn btn-red",
  children = "Book on Vagaro",
  ariaLabel,
  arrow = true,
}: {
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  arrow?: boolean;
}) {
  return (
    <a
      href={bookHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} focus-ring`}
      aria-label={ariaLabel ?? (typeof children === "string" ? `${children} (opens Vagaro in a new tab)` : undefined)}
    >
      {children}
      {arrow && <ArrowUpRight size={18} weight="bold" aria-hidden="true" />}
    </a>
  );
}
