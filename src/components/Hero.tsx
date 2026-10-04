import { site } from "@/lib/site";
import { ClockIcon, NavigateIcon, PhoneIcon, PinIcon, Stars } from "./icons";
import { Container, Picture } from "./ui";

export default function Hero() {
  return (
    <section id="top" aria-label="Welcome" className="tread relative overflow-hidden bg-ink text-white">
      {/* soft mint glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-mint/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-green/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-10 pb-12 pt-8 sm:pt-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14 lg:pb-20 lg:pt-16">
        <div className="min-w-0">
          <h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/wordmark.svg"
              alt="Excellence In Auto-Repair — Family Owned & Operated. Quality Service, Affordable Prices, Honest Repairs."
              width={1200}
              height={287}
              fetchPriority="high"
              className="h-auto w-full rounded-lg shadow-2xl shadow-black/70 ring-1 ring-white/10"
            />
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Omaha&apos;s family owned and operated repair shop since {site.since} — we treat each
            vehicle we service as if it were our own.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phone.href}
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-green px-6 font-display text-xl font-semibold tracking-wide text-ink shadow-lg shadow-green/20 transition hover:bg-green-bright"
            >
              <PhoneIcon className="h-5.5 w-5.5" />
              Call {site.phone.display}
            </a>
            <a
              href={site.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg border-2 border-mint/60 px-6 font-display text-lg font-medium uppercase tracking-wider text-mint transition hover:border-mint hover:bg-mint/10"
            >
              <NavigateIcon className="h-5 w-5" />
              Get Directions
            </a>
          </div>

          <a
            href="#reviews"
            className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 text-sm text-white/85 transition hover:border-mint/40"
          >
            <Stars value={site.rating.score} className="h-4 text-mint" />
            <span>
              <strong className="font-semibold text-white">{site.rating.score}</strong> from{" "}
              {site.rating.count} Google reviews
            </span>
          </a>
        </div>

        <div className="min-w-0">
          <figure className="relative mx-auto w-full max-w-[400px]">
            <div className="overflow-hidden rounded-xl ring-2 ring-mint/40 shadow-2xl shadow-black/70">
              <Picture
                name="service-you-can-trust"
                widths={[400]}
                fallback="jpg"
                sizes="(min-width: 400px) 400px, 100vw"
                alt="Service You Can Trust — a car on the lift with its wheel off for brake work, tires stacked on the shop floor"
                width={400}
                height={309}
                priority
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="absolute -bottom-4 left-4 rounded-md bg-green px-3 py-1.5 font-display text-sm font-semibold uppercase tracking-wider text-ink shadow-lg">
              Serving Omaha since {site.since}
            </figcaption>
          </figure>

          <ul className="mx-auto mt-10 grid max-w-[400px] gap-3 text-[0.95rem]">
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
              <span>
                <span className="sr-only">Address: </span>
                {site.address.oneLine}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
              <span>
                <span className="sr-only">Hours: </span>
                {site.hours.days}, {site.hours.time}
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
