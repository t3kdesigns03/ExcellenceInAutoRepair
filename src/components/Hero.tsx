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

      <Container className="relative grid items-center gap-8 pb-10 pt-6 sm:pb-12 sm:pt-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14 lg:pb-20 lg:pt-16">
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

          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/85 sm:mt-6 sm:text-xl">
            Omaha&apos;s family owned and operated repair shop since {site.since} — we treat each
            vehicle we service as if it were our own.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
            <a
              href={site.phone.href}
              className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-lg bg-green px-6 font-display text-xl sm:min-h-14 font-semibold tracking-wide text-ink shadow-lg shadow-green/20 transition hover:bg-green-bright"
            >
              <PhoneIcon className="h-5.5 w-5.5" />
              Call {site.phone.display}
            </a>
            <a
              href={site.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border-2 border-mint/60 px-6 font-display text-lg font-medium uppercase tracking-wider text-mint transition hover:border-mint hover:bg-mint/10"
            >
              <NavigateIcon className="h-5 w-5" />
              Get Directions
            </a>
          </div>

          <a
            href="#reviews"
            className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 text-sm text-white/85 transition hover:border-mint/40"
          >
            <Stars value={site.rating.score} className="h-4 text-mint" />
            <span>
              <strong className="font-semibold text-white">{site.rating.score}</strong> from{" "}
              {site.rating.count} Google reviews
            </span>
          </a>
        </div>

        <div className="min-w-0">
          <figure className="group relative mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl bg-ink-3 shadow-2xl shadow-black/70 ring-1 ring-white/10">
            {/* Photo: shop-floor crop of the original banner, colour-graded into the brand palette */}
            <div className="relative isolate aspect-[16/11] overflow-hidden">
              <Picture
                name="shop-floor"
                widths={[400, 800]}
                fallback="jpg"
                sizes="(min-width: 480px) 440px, calc(100vw - 2rem)"
                alt="A car in the service bay with its wheel off and the brake rotor exposed, tires stacked on the shop floor"
                width={800}
                height={376}
                priority
                className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[60%_45%] brightness-[1.12] contrast-[1.1] saturate-[0.85] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.09]"
              />
              {/* brand-green wash + vignette + bottom scrim so the type sits on solid ground */}
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,rgb(111_169_31/0.35),transparent_55%)] mix-blend-soft-light" />
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(130%_100%_at_65%_20%,transparent_45%,rgb(7_8_7/0.6))]" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 via-45% to-transparent" />
              <div aria-hidden="true" className="tread absolute inset-0 opacity-50" />

              {/* viewfinder corners */}
              <span aria-hidden="true" className="absolute right-4 top-4 h-6 w-6 rounded-tr-md border-r-2 border-t-2 border-mint/70" />
              <span aria-hidden="true" className="absolute bottom-4 right-4 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-mint/30" />

              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-ink/65 px-3 py-1.5 font-display text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mint ring-1 ring-white/15 backdrop-blur-md sm:text-xs">
                <span aria-hidden="true" className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-bright" />
                </span>
                Serving Omaha since {site.since}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span aria-hidden="true" className="mb-3 block h-1 w-12 rounded-full bg-green" />
                <p className="font-display text-[2.35rem] font-bold uppercase leading-[0.92] tracking-tight text-white drop-shadow-[0_2px_12px_rgb(0_0_0/0.6)] sm:text-[2.9rem]">
                  <span className="block">Service</span>
                  <span className="block">
                    You Can <span className="text-mint">Trust</span>
                  </span>
                </p>
              </div>
            </div>

            {/* Card footer: where + when */}
            <ul className="grid gap-2.5 border-t border-white/10 px-5 py-4 text-[0.95rem] text-white/85 sm:px-6">
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
          </figure>
        </div>
      </Container>
    </section>
  );
}
