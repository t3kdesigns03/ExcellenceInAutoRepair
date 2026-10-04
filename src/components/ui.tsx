import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-3 flex items-center gap-3 font-display text-sm font-medium uppercase tracking-[0.2em] ${
        dark ? "text-mint" : "text-green-deep"
      }`}
    >
      <span aria-hidden="true" className={`h-0.5 w-8 ${dark ? "bg-mint" : "bg-green"}`} />
      {children}
    </p>
  );
}

export function SectionTitle({
  id,
  children,
  dark = false,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`font-display text-[2rem] font-bold uppercase leading-[1.05] tracking-wide sm:text-5xl ${
        dark ? "text-white" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/** <picture> with a WebP source and JPEG/PNG fallback, built by scripts/build-assets.mjs */
export function Picture({
  name,
  widths,
  fallback,
  sizes,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  name: string;
  widths: number[];
  fallback: "jpg" | "png";
  sizes: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const set = (ext: string) => widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(", ");
  return (
    <picture>
      <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
      <img
        src={`/images/${name}-${widths[0]}.${fallback}`}
        srcSet={set(fallback)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}
