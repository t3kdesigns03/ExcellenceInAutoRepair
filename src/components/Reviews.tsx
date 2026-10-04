import { reviewThemes, site } from "@/lib/site";
import { CheckIcon, ExternalIcon, Stars } from "./icons";
import { Container, Eyebrow, SectionTitle } from "./ui";

export default function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-paper py-12 sm:py-20 lg:py-24">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="min-w-0">
          <Eyebrow>Reviews</Eyebrow>
          <SectionTitle id="reviews-title">What Omaha drivers say</SectionTitle>

          <div className="mt-6 rounded-2xl bg-ink p-5 text-white sm:mt-8 sm:p-8">
            <div className="flex items-end gap-4">
              <span className="font-display text-6xl font-bold leading-none text-mint sm:text-7xl">{site.rating.score}</span>
              <span className="pb-1">
                <Stars value={site.rating.score} className="h-6 text-mint" />
                <span className="mt-1 block text-white/75">out of 5 stars</span>
              </span>
            </div>
            <p className="mt-4 border-t border-white/10 pt-4 font-display text-lg uppercase tracking-wider">
              {site.rating.count} Google reviews
            </p>
          </div>
        </div>

        <div className="min-w-0 lg:pt-14">
          <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
            What customers mention again and again
          </h3>
          <ul className="mt-4 grid gap-2 sm:mt-5 sm:gap-3">
            {reviewThemes.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-4 py-3 text-base font-medium text-ink shadow-sm sm:gap-4 sm:px-5 sm:py-4 sm:text-lg"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green text-ink">
                  <CheckIcon className="h-4.5 w-4.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <a
            href={site.maps.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-lg border-2 border-ink px-5 font-display text-lg font-medium uppercase tracking-wider text-ink transition hover:bg-ink hover:text-mint"
          >
            Read our reviews on Google
            <ExternalIcon className="h-4.5 w-4.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
