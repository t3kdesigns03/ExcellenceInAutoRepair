import { about, site } from "@/lib/site";
import { Container, Eyebrow, Picture, SectionTitle } from "./ui";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-ink/10 bg-white py-12 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="min-w-0">
          <Eyebrow>About us</Eyebrow>
          <SectionTitle id="about-title">Treated like our own</SectionTitle>
          <div className="mt-5 max-w-[320px] sm:mt-6 sm:max-w-[400px]">
            <Picture
              name="family-owned"
              widths={[400, 802]}
              fallback="png"
              sizes="(min-width: 440px) 400px, calc(100vw - 2rem)"
              alt="Family Owned & Operated"
              width={802}
              height={85}
              className="h-auto w-full"
            />
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3">
            <div className="rounded-xl bg-ink p-4 text-white sm:p-5">
              <dt className="font-display text-xs uppercase tracking-[0.2em] text-mint">Since</dt>
              <dd className="mt-1 font-display text-3xl font-bold sm:text-4xl">{site.since}</dd>
            </div>
            <div className="rounded-xl bg-ink p-4 text-white sm:p-5">
              <dt className="font-display text-xs uppercase tracking-[0.2em] text-mint">Owner</dt>
              <dd className="mt-1 font-display text-xl font-semibold leading-tight sm:text-2xl">{site.owner}</dd>
            </div>
          </dl>
        </div>

        <figure className="relative min-w-0 rounded-2xl border-l-4 border-green bg-paper p-5 sm:p-10">
          <span
            aria-hidden="true"
            className="absolute -top-6 right-6 font-display text-[7rem] leading-none text-green/25 select-none"
          >
            &ldquo;
          </span>
          <blockquote className="relative text-lg leading-relaxed text-ink/90 sm:text-[1.4rem]">
            <p>{about}</p>
          </blockquote>
          <figcaption className="mt-4 font-display uppercase tracking-wider text-ink/70">
            &mdash; {site.name}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
