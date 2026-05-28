// Process the brand logo into navbar variants (dark/light) and favicon.
// Auto-detects whether the source has a real transparent background or just
// a white background (regardless of PNG alpha channel presence) and applies
// the right strategy.
// Run: node scripts/logo.mjs
import sharp from "sharp";
import { existsSync } from "fs";

const HIRES_SRC = "public/logo-new.png";
const LEGACY_SRC = "public/Logo-Gabel.jpg";
const SRC = existsSync(HIRES_SRC) ? HIRES_SRC : LEGACY_SRC;

const { data: probe, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// Sample four corners. If all opaque + near-white, treat as white-bg.
const cornerAlpha = [0, width - 1, (height - 1) * width, height * width - 1].map(
  (i) => probe[i * 4 + 3],
);
const hasRealTransparency = cornerAlpha.some((a) => a < 128);

console.log(
  `Source: ${SRC} (${width}x${height}, corners α=${cornerAlpha.join(",")} → ${
    hasRealTransparency ? "transparent bg" : "white bg"
  })`,
);

let darkBuf, lightBuf;

if (hasRealTransparency) {
  // Already transparent. Dark = source; Light = RGB-inverted (negate).
  darkBuf = await sharp(SRC).png().toBuffer();
  lightBuf = await sharp(SRC).negate({ alpha: false }).png().toBuffer();
} else {
  // White background: build alpha from luminance so anti-aliased edges
  // stay smooth (no halos). Works for both JPG and PNG-with-fake-alpha.
  const px = width * height;
  const dark = Buffer.alloc(px * 4);
  const light = Buffer.alloc(px * 4);
  for (let i = 0; i < px; i++) {
    const r = probe[i * 4];
    const g = probe[i * 4 + 1];
    const b = probe[i * 4 + 2];
    const lum = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    // Hard-threshold near-white to fully transparent so trim and edges stay
    // clean (compression/noise can push "white" to RGB 240-254).
    const a = lum >= 240 ? 0 : 255 - lum;
    dark[i * 4] = 0;
    dark[i * 4 + 1] = 0;
    dark[i * 4 + 2] = 0;
    dark[i * 4 + 3] = a;
    light[i * 4] = 255;
    light[i * 4 + 1] = 255;
    light[i * 4 + 2] = 255;
    light[i * 4 + 3] = a;
  }
  const raw = { raw: { width, height, channels: 4 } };
  darkBuf = await sharp(dark, raw).png().toBuffer();
  lightBuf = await sharp(light, raw).png().toBuffer();
}

// Trim transparent margins so the artwork fills its box in the navbar.
const dark = await sharp(darkBuf).trim({ threshold: 5 }).png().toFile("public/logo.png");
const light = await sharp(lightBuf).trim({ threshold: 5 }).png().toFile("public/logo-light.png");

// Favicon: flatten onto white bg square so it stays visible on any tab theme.
await sharp(SRC)
  .resize(256, 256, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .flatten({ background: "#ffffff" })
  .png()
  .toFile("src/app/icon.png");

console.log(
  `logo.png ${dark.width}x${dark.height}, logo-light.png ${light.width}x${light.height}, icon.png 256x256`,
);
