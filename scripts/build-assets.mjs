// Builds every brand + image asset the site uses. Run with `npm run assets`.
//
// - Wordmark, header logo, favicon and share image are HAND-BUILT SVG: text is laid out
//   glyph-by-glyph from real font files and written as vector <path>s, so the logo is
//   pixel-identical everywhere and never depends on a font being installed.
// - Photos/strips from assets-src/ are resized and compressed to WebP (+ JPEG/PNG fallback).
//
// Outputs are committed, so a normal `npm run build` (and Netlify) never needs this step.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import opentype from "opentype.js";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const out = (...p) => path.join(ROOT, ...p);
const font = (pkg, file) =>
  opentype.loadSync(out("node_modules", "@fontsource", pkg, "files", file));

const OSWALD_700 = font("oswald", "oswald-latin-700-normal.woff");
const OSWALD_600 = font("oswald", "oswald-latin-600-normal.woff");
const BARLOW_700 = font("barlow-condensed", "barlow-condensed-latin-700-normal.woff");

// Brand palette (kept in sync with src/app/globals.css)
const C = {
  ink: "#070807",
  mint: "#8EE0A6",
  mintDeep: "#1F4A2A",
  gray: "#B4BAB5",
  green: "#6FA91F",
  greenDark: "#4E7D10",
};

const r = (n) => Math.round(n * 100) / 100;

/** Lay out `text` glyph-by-glyph and return {d, width, capHeight} at `size`. */
function textPath(f, text, size, { tracking = 0 } = {}) {
  const scale = size / f.unitsPerEm;
  const glyphs = f.stringToGlyphs(text);
  let x = 0;
  const parts = [];
  glyphs.forEach((g, i) => {
    const p = g.getPath(x, 0, size);
    parts.push(p.toPathData(1));
    let adv = g.advanceWidth * scale;
    if (i < glyphs.length - 1) adv += f.getKerningValue(g, glyphs[i + 1]) * scale;
    x += adv + (i < glyphs.length - 1 ? tracking * size : 0);
  });
  const capHeight = (f.tables.os2.sCapHeight || f.unitsPerEm * 0.7) * scale;
  return { d: parts.join(""), width: x, capHeight };
}

/** Size a line so it is exactly `targetWidth` wide. */
function fitText(f, text, targetWidth, opts) {
  const probe = textPath(f, text, 100, opts);
  const size = (100 * targetWidth) / probe.width;
  return textPath(f, text, size, opts);
}

const g = (d, x, y, fill, extra = "") =>
  `<path transform="translate(${r(x)} ${r(y)})" d="${d}" fill="${fill}"${extra}/>`;

// ---------------------------------------------------------------- full wordmark
function wordmark() {
  const W = 1200;
  const padX = 44;
  const main = fitText(OSWALD_700, "EXCELLENCE IN AUTO-REPAIR", W - padX * 2, { tracking: 0.018 });
  const sub = textPath(OSWALD_600, "FAMILY OWNED & OPERATED", 1, { tracking: 0.08 });
  const subSize = (main.capHeight * 0.42) / sub.capHeight;
  const subL = textPath(OSWALD_600, "FAMILY OWNED & OPERATED", subSize, { tracking: 0.08 });
  const tag = fitText(BARLOW_700, "Quality Service  |  Affordable Prices  |  Honest Repairs", W - 150, {
    tracking: 0.03,
  });

  const mainY = 46 + main.capHeight; // baseline
  const subY = mainY + 30 + subL.capHeight;
  const stripeY = subY + 30;
  const stripeH = tag.capHeight + 40;
  const H = Math.ceil(stripeY + stripeH);
  const shadow = 4;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t">
<title id="t">Excellence In Auto-Repair — Family Owned &amp; Operated — Quality Service | Affordable Prices | Honest Repairs</title>
<defs><linearGradient id="m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B9F2C9"/><stop offset=".55" stop-color="${C.mint}"/><stop offset="1" stop-color="#6CC487"/></linearGradient>
<linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FBD2B"/><stop offset="1" stop-color="${C.greenDark}"/></linearGradient></defs>
<rect width="${W}" height="${H}" fill="${C.ink}"/>
<defs><path id="w" transform="translate(${r(padX)} ${r(mainY)})" d="${main.d}"/></defs>
<use href="#w" x="${shadow}" y="${shadow}" fill="${C.mintDeep}"/>
<use href="#w" fill="url(#m)"/>
${g(subL.d, W - padX - subL.width, subY, C.gray)}
<rect y="${r(stripeY)}" width="${W}" height="${r(stripeH)}" fill="url(#s)"/>
<rect y="${r(stripeY)}" width="${W}" height="3" fill="#9BD64A" opacity=".7"/>
${g(tag.d, (W - tag.width) / 2, stripeY + (stripeH + tag.capHeight) / 2, C.ink)}
</svg>`;
  return { svg, W, H };
}

// ------------------------------------------------- compact header logo (no box)
function headerLogo() {
  const W = 600;
  const main = fitText(OSWALD_700, "EXCELLENCE IN AUTO-REPAIR", W, { tracking: 0.018 });
  const subProbe = textPath(OSWALD_600, "FAMILY OWNED & OPERATED", 1, { tracking: 0.16 });
  const subL = textPath(OSWALD_600, "FAMILY OWNED & OPERATED", W / subProbe.width, { tracking: 0.16 });
  const mainY = main.capHeight + 6;
  const subY = mainY + main.capHeight * 0.34 + subL.capHeight;
  const H = Math.ceil(subY + 6);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t">
<title id="t">Excellence In Auto-Repair — Family Owned &amp; Operated</title>
${g(main.d, 0, mainY, C.mint)}
${g(subL.d, 0, subY, C.gray)}
</svg>`;
  return { svg, W, H };
}

// ------------------------------------------------------------------- favicon
function favicon({ rounded = true } = {}) {
  const S = 64;
  const E = textPath(OSWALD_700, "E", 1);
  const eSize = 38 / E.capHeight; // 38px tall E
  const e = textPath(OSWALD_700, "E", eSize);
  const stripe = 13;
  const rx = rounded ? 12 : 0;
  const top = (S - stripe - e.capHeight) / 2 + e.capHeight;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S} ${S}">
<defs><clipPath id="c"><rect width="${S}" height="${S}" rx="${rx}"/></clipPath></defs>
<g clip-path="url(#c)"><rect width="${S}" height="${S}" fill="${C.ink}"/>
<rect y="${S - stripe}" width="${S}" height="${stripe}" fill="${C.green}"/></g>
${g(e.d, (S - e.width) / 2, top, C.mint)}
</svg>`;
}

// ------------------------------------------------------- 1200x630 share image
function ogImage(wm) {
  const W = 1200, H = 630;
  const wmW = 1060;
  const s = wmW / wm.W;
  const wmH = wm.H * s;
  const line = textPath(OSWALD_600, "OMAHA, NE  ·  SINCE 1993  ·  (402) 399-0934", 1, { tracking: 0.08 });
  const lineL = textPath(OSWALD_600, "OMAHA, NE  ·  SINCE 1993  ·  (402) 399-0934", 30 / line.capHeight, {
    tracking: 0.08,
  });
  const wmY = (H - wmH - 90) / 2;
  const inner = wm.svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").replace(/<title[^>]*>.*?<\/title>/, "");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
<rect width="${W}" height="${H}" fill="${C.ink}"/>
<g transform="translate(${r((W - wmW) / 2)} ${r(wmY)}) scale(${s})">${inner}</g>
${g(lineL.d, (W - lineL.width) / 2, wmY + wmH + 70, C.gray)}
</svg>`;
}

// -------------------------------------------------------------------- write
const wm = wordmark();
fs.writeFileSync(out("public/brand/wordmark.svg"), wm.svg);
const hl = headerLogo();
fs.writeFileSync(out("public/brand/logo-header.svg"), hl.svg);
fs.writeFileSync(out("src/app/icon.svg"), favicon());

// Raster fallbacks: apple touch icon, .ico, share image
await sharp(Buffer.from(favicon({ rounded: false })), { density: 600 })
  .resize(180, 180)
  .png()
  .toFile(out("src/app/apple-icon.png"));
const tmp = [16, 32, 48].map((s) => out(`.ico-${s}.png`));
for (const [i, s] of [16, 32, 48].entries()) {
  await sharp(Buffer.from(favicon()), { density: 300 }).resize(s, s).png().toFile(tmp[i]);
}
execFileSync("convert", [...tmp, out("src/app/favicon.ico")]);
tmp.forEach((f) => fs.unlinkSync(f));
await sharp(Buffer.from(ogImage(wm)), { density: 96 }).png({ compressionLevel: 9, palette: true }).toFile(out("public/og.png"));

// Photos / strips → WebP + fallback, at 1x and 2x of their display size
const IMG = out("public/images");
async function photo(src, name, widths, fallback) {
  for (const w of widths) {
    const base = sharp(out("assets-src", src)).resize({ width: w, withoutEnlargement: true });
    await base.clone().webp({ quality: 80, effort: 6 }).toFile(path.join(IMG, `${name}-${w}.webp`));
    if (fallback === "jpg")
      await base.clone().flatten({ background: "#000" }).jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(IMG, `${name}-${w}.jpg`));
    else await base.clone().png({ compressionLevel: 9, palette: true }).toFile(path.join(IMG, `${name}-${w}.png`));
  }
}
await photo("trustus.png", "service-you-can-trust", [400], "jpg"); // source is 400px wide
await photo("familt2.png", "family-owned", [400, 802], "png");
await photo("honest.png", "quality-honest", [560, 1124], "png");

for (const f of fs.readdirSync(IMG)) console.log(f.padEnd(34), (fs.statSync(path.join(IMG, f)).size / 1024).toFixed(1), "KB");
console.log("wordmark", wm.W, "x", wm.H, "| header logo", hl.W, "x", hl.H);
