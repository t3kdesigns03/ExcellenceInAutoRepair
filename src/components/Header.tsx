import { nav, site } from "@/lib/site";
import { PhoneIcon } from "./icons";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/85">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#top" className="flex min-h-11 items-center" aria-label={`${site.name} — back to top`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-header.svg"
            alt=""
            width={600}
            height={99}
            className="h-auto w-[200px] sm:w-[230px] lg:w-[250px]"
          />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-md px-3 font-display text-[0.95rem] uppercase tracking-wider text-white/85 transition hover:text-mint"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.phone.href}
          className="hidden min-h-11 items-center gap-2 rounded-lg bg-green px-4 font-display font-semibold tracking-wide text-ink transition hover:bg-green-bright lg:inline-flex"
        >
          <PhoneIcon className="h-4.5 w-4.5" />
          {site.phone.display}
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}
