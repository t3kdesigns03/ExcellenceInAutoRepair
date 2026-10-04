import { promises } from "@/lib/site";
import { Container, Eyebrow, Picture, SectionTitle } from "./ui";

export default function Promises() {
  return (
    <section id="promise" aria-labelledby="promise-title" className="tread bg-ink-2 py-16 text-white sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Eyebrow dark>Our service promise</Eyebrow>
            <SectionTitle id="promise-title" dark>
              Honest work. No pressure.
            </SectionTitle>
          </div>
          <div className="plate w-full rounded-lg px-4 py-3.5 sm:w-[480px] sm:px-6 sm:py-4 lg:w-[440px] xl:w-[500px]">
            <Picture
              name="quality-honest"
              widths={[560, 1124]}
              fallback="png"
              sizes="(min-width: 640px) 472px, calc(100vw - 4rem)"
              alt="Quality Service | Affordable Prices | Honest Repairs"
              width={1124}
              height={66}
              className="h-auto w-full"
            />
          </div>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <li
              key={p.title}
              className="relative flex flex-col rounded-xl border border-white/10 bg-ink-3/80 p-6 transition hover:border-mint/40"
            >
              <span aria-hidden="true" className="font-display text-4xl font-bold leading-none text-mint/90 sm:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true" className="mt-4 h-1 w-10 rounded bg-green" />
              <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-wide">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-white/75">{p.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
