import { promises } from "@/lib/site";
import { Container, Eyebrow, Picture, SectionTitle } from "./ui";

export default function Promises() {
  return (
    <section id="promise" aria-labelledby="promise-title" className="tread bg-ink-2 py-12 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
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

        <ol className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {promises.map((p, i) => (
            <li
              key={p.title}
              className="relative grid grid-cols-[auto_1fr] gap-x-4 rounded-xl border border-white/10 bg-ink-3/80 p-5 transition hover:border-mint/40 sm:flex sm:flex-col sm:p-6"
            >
              <span aria-hidden="true" className="row-span-2 font-display text-3xl font-bold leading-none text-mint/90 sm:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true" className="mt-4 hidden h-1 w-10 rounded bg-green sm:block" />
              <h3 className="font-display text-lg font-semibold uppercase leading-tight tracking-wide sm:mt-4 sm:text-xl">{p.title}</h3>
              <p className="mt-1.5 leading-relaxed text-white/75 sm:mt-2">{p.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
