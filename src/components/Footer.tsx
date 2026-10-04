import { nav, site } from "@/lib/site";
import { PhoneIcon } from "./icons";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t-4 border-green bg-[#040504] text-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-header.svg" alt={site.name} width={600} height={99} className="h-auto w-[240px]" loading="lazy" />
          <p className="mt-4 font-display text-[0.95rem] uppercase tracking-wider text-steel">
            Quality Service | Affordable Prices | Honest Repairs
          </p>
        </div>

        <div className="min-w-0">
          <h2 className="font-display text-sm uppercase tracking-[0.2em] text-mint">Visit</h2>
          <address className="mt-3 not-italic leading-relaxed text-white/85">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.zip}
          </address>
          <p className="mt-3 text-white/85">
            {site.hours.days}, {site.hours.time}
          </p>
          <a
            href={site.phone.href}
            className="mt-2 inline-flex min-h-11 items-center gap-2 font-display text-xl font-semibold tracking-wide text-white hover:text-mint"
          >
            <PhoneIcon className="h-5 w-5 text-mint" />
            {site.phone.display}
          </a>
        </div>

        <nav aria-label="Footer" className="min-w-0">
          <h2 className="font-display text-sm uppercase tracking-[0.2em] text-mint">Explore</h2>
          <ul className="mt-1 grid grid-cols-2 gap-x-4 sm:grid-cols-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="inline-flex min-h-11 min-w-11 items-center text-white/85 hover:text-mint">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center text-white/85 hover:text-mint"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-1 py-5 text-sm text-white/60 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <p>Family owned &amp; operated in Omaha since {site.since}</p>
        </Container>
      </div>

      {/* room for the sticky mobile call bar */}
      <div aria-hidden="true" className="h-[calc(4.75rem+env(safe-area-inset-bottom))] lg:hidden" />
    </footer>
  );
}
