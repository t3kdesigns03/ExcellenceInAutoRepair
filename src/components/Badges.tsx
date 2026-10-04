import { badges } from "@/lib/site";
import { Container } from "./ui";

export default function Badges() {
  return (
    <section aria-labelledby="badges-title" className="relative overflow-hidden bg-green py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,rgb(0_0_0/0.05)_0_2px,transparent_2px_16px)]"
      />
      <Container className="relative">
        <h2
          id="badges-title"
          className="text-center font-display text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl"
        >
          Credentials you can count on
        </h2>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
          {badges.map((b) => (
            <li
              key={b.label}
              className="flex items-center gap-5 rounded-2xl bg-ink p-4 shadow-xl shadow-green-deep/40 sm:flex-col sm:gap-0 sm:p-6 sm:text-center"
            >
              {/* Text-built seal: concentric rings, no third-party logo art */}
              <div
                aria-hidden="true"
                className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-mint/70 p-1.5 sm:mx-auto sm:h-36 sm:w-36"
              >
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-dashed border-mint/40 bg-ink-3">
                  <span className="font-display text-xs font-semibold tracking-[0.3em] text-mint sm:text-sm">{b.top}</span>
                  <span
                    className={`font-display font-bold uppercase leading-none text-white ${
                      b.big.length <= 2 ? "text-4xl sm:text-5xl" : "text-[1.05rem] sm:text-[1.35rem]"
                    }`}
                  >
                    {b.big}
                  </span>
                  <span className="mt-1 font-display text-[0.6rem] uppercase tracking-[0.16em] text-steel sm:text-[0.7rem]">
                    {b.bottom}
                  </span>
                </div>
              </div>
              <p className="font-display text-xl font-semibold uppercase leading-tight tracking-wide text-white sm:mt-5 sm:text-lg">{b.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
