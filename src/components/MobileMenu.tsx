"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="-mr-2 inline-flex h-12 w-12 items-center justify-center rounded-lg text-white transition hover:bg-white/10"
      >
        {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-white/10 bg-ink-2 shadow-2xl shadow-black/60"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-6xl px-4 pb-5 pt-2 sm:px-6">
          <ul className="divide-y divide-white/10">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-13 items-center font-display text-lg uppercase tracking-wider text-white transition hover:text-mint"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.phone.href}
            className="mt-3 flex min-h-13 items-center justify-center gap-2 rounded-lg bg-green font-display text-lg font-semibold uppercase tracking-wide text-ink"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {site.phone.display}
          </a>
        </nav>
      </div>
    </div>
  );
}
