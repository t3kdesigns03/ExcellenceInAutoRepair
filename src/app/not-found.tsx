import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="tread flex min-h-svh flex-col items-center justify-center gap-6 bg-ink px-4 text-center text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo-header.svg" alt={site.name} width={600} height={99} className="h-auto w-64" />
      <h1 className="font-display text-4xl font-bold uppercase tracking-wide">Page not found</h1>
      <p className="max-w-sm text-white/75">That page doesn&apos;t exist, but we&apos;re still right here on Blondo St.</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-green px-6 font-display text-lg font-semibold uppercase tracking-wide text-ink">
          Back to home
        </Link>
        <a href={site.phone.href} className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-mint/60 px-6 font-display text-lg uppercase tracking-wide text-mint">
          Call {site.phone.display}
        </a>
      </div>
    </main>
  );
}
