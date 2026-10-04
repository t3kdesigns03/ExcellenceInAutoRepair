import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

/** Always-visible tap-to-call bar on phones/tablets. Hidden on desktop (header has the number). */
export default function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden">
      <a
        href={site.phone.href}
        className="mx-auto flex min-h-13 max-w-md items-center justify-center gap-2.5 rounded-lg bg-green font-display text-xl font-semibold tracking-wide text-ink shadow-lg shadow-black/50 active:bg-green-bright"
      >
        <PhoneIcon className="h-5.5 w-5.5" />
        <span>
          Call Now <span className="font-medium">· {site.phone.display}</span>
        </span>
      </a>
    </div>
  );
}
