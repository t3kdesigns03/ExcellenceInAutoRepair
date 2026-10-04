import { site } from "@/lib/site";
import { ChatIcon, ClockIcon, ExternalIcon, NavigateIcon, PhoneIcon, PinIcon } from "./icons";
import { Container, Eyebrow, SectionTitle } from "./ui";

const card = "flex items-start gap-4 rounded-xl border border-white/10 bg-ink-3/70 p-5";
const iconBox = "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-mint/10 text-mint";
const label = "font-display text-xs uppercase tracking-[0.2em] text-mint";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="tread bg-ink py-16 text-white sm:py-24">
      <Container>
        <Eyebrow dark>Visit or call</Eyebrow>
        <SectionTitle id="contact-title" dark>
          Stop by the shop
        </SectionTitle>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="grid min-w-0 content-start gap-3">
            <div className={card}>
              <span className={iconBox}>
                <PhoneIcon className="h-5.5 w-5.5" />
              </span>
              <div className="min-w-0">
                <p className={label}>Phone</p>
                <a
                  href={site.phone.href}
                  className="inline-flex min-h-11 items-center font-display text-3xl font-semibold tracking-wide text-white transition hover:text-mint"
                >
                  {site.phone.display}
                </a>
              </div>
            </div>

            <div className={card}>
              <span className={iconBox}>
                <PinIcon className="h-5.5 w-5.5" />
              </span>
              <div className="min-w-0">
                <p className={label}>Address</p>
                <address className="mt-1 text-lg not-italic leading-snug">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.zip}
                </address>
                <a
                  href={site.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex min-h-11 items-center gap-2 font-display uppercase tracking-wider text-mint hover:text-mint-soft"
                >
                  <NavigateIcon className="h-4.5 w-4.5" />
                  Get directions
                </a>
              </div>
            </div>

            <div className={card}>
              <span className={iconBox}>
                <ClockIcon className="h-5.5 w-5.5" />
              </span>
              <div className="min-w-0">
                <p className={label}>Hours</p>
                <p className="mt-1 text-lg">
                  <span className="font-semibold">{site.hours.days}</span>
                  <br />
                  {site.hours.time}
                </p>
              </div>
            </div>

            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`${card} group transition hover:border-mint/40`}
            >
              <span className={iconBox}>
                <ChatIcon className="h-5.5 w-5.5" />
              </span>
              <span className="min-w-0">
                <span className={`${label} block`}>Facebook</span>
                <span className="mt-1 flex items-center gap-2 text-lg group-hover:text-mint">
                  Find us on Facebook
                  <ExternalIcon className="h-4.5 w-4.5" />
                </span>
              </span>
            </a>
          </div>

          <div className="relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-ink-3">
            {/* Shown until (or if) the embedded map loads */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-white/70">
              <PinIcon className="h-10 w-10 text-mint" />
              <p className="text-lg">{site.address.oneLine}</p>
            </div>
            <iframe
              title={`Map showing ${site.name} at ${site.address.oneLine}`}
              src={site.maps.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative block aspect-[4/3] h-full min-h-80 w-full border-0 lg:aspect-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
