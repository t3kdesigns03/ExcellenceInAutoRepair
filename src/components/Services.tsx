import { dealershipLine, services, site } from "@/lib/site";
import { KeyIcon, PhoneIcon, ServiceGlyph, ShieldIcon, TruckIcon } from "./icons";
import { Container, Eyebrow, SectionTitle } from "./ui";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-paper py-16 sm:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Eyebrow>What we fix</Eyebrow>
            <SectionTitle id="services-title">Complete Auto Repair</SectionTitle>
          </div>
          <p className="max-w-md text-lg text-ink/75">
            From brakes to A/C, it&apos;s all handled under one roof at {site.address.street}.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {services.map((s) => (
            <li
              key={s.name}
              className="group flex min-h-32 flex-col justify-between gap-4 rounded-xl border border-ink/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-green/50 hover:shadow-md sm:min-h-36 sm:p-6"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-mint transition group-hover:bg-green group-hover:text-ink">
                <ServiceGlyph name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="font-display text-lg font-semibold uppercase leading-tight tracking-wide text-ink sm:text-xl">
                {s.name}
              </h3>
            </li>
          ))}
        </ul>

        <div className="mt-4 grid gap-3 sm:gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="tread relative overflow-hidden rounded-xl bg-ink p-6 text-white sm:p-8">
            <div className="flex items-center gap-3 text-mint">
              <ShieldIcon className="h-7 w-7 shrink-0" />
              <span className="font-display text-sm font-medium uppercase tracking-[0.2em]">
                Skip the dealership
              </span>
            </div>
            <p className="mt-4 font-display text-2xl font-medium leading-snug sm:text-[1.7rem]">
              &ldquo;{dealershipLine}&rdquo;
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
            <div className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white p-5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green text-ink">
                <TruckIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide">Towing</h3>
                <p className="text-ink/70">Car won&apos;t make it in? Ask us about towing.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white p-5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green text-ink">
                <KeyIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide">Key Drop</h3>
                <p className="text-ink/70">Key drop available for easy vehicle drop-off.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <a
            href={site.phone.href}
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-ink px-5 font-display text-lg font-semibold tracking-wide text-mint transition hover:bg-ink-3"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {site.phone.display}
          </a>
          <p className="text-ink/65">to schedule service or ask a question.</p>
        </div>
      </Container>
    </section>
  );
}
