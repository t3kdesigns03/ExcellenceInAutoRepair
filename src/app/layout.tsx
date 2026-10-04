import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

// Self-hosted (SIL OFL) so builds never depend on reaching Google Fonts.
const oswald = localFont({
  src: [
    { path: "../fonts/oswald-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/oswald-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/oswald-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/oswald-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
  display: "swap",
});

const barlow = localFont({
  src: [
    { path: "../fonts/barlow-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/barlow-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/barlow-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/barlow-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-barlow",
  display: "swap",
});

// Netlify sets URL at build time; fall back to localhost for local builds.
const siteUrl = process.env.URL ?? process.env.SITE_URL ?? "http://localhost:3000";

const description = `Family owned and operated auto repair in Omaha since ${site.since}. Brakes, struts & shocks, exhaust, cooling, diagnostics, electrical, A/C and tune-ups at ${site.address.oneLine}. Call ${site.phone.display}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} | Family Owned Auto Repair in Omaha, NE`,
  description,
  openGraph: {
    type: "website",
    title: `${site.name} — Omaha, NE`,
    description,
    siteName: site.name,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name} — Family Owned & Operated` }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#070807",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.name,
  telephone: site.phone.e164,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  openingHours: site.hours.schema,
  foundingDate: String(site.since),
  founder: { "@type": "Person", name: site.owner },
  sameAs: [site.facebook],
  image: `${siteUrl}/og.png`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${barlow.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-green focus:px-4 focus:py-3 focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
