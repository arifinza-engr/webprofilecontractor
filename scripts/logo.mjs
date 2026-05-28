// Turn the white-background logo JPG into transparent PNGs (dark + light
// variants) for the navbar, and a favicon. Uses a luminance mask so the
// black-on-white artwork gets smooth anti-aliased transparency (no halos).
// Run: node scripts/logo.mjs
import sharp from "sharp";

const SRC = "public/Logo-Gabel.jpg";

const { data, info } = await sharp(SRC)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const px = width * height;
const dark = Buffer.alloc(px * 4); // black artwork, transparent bg
const light = Buffer.alloc(px * 4); // white artwork, transparent bg

for (let i = 0; i < px; i++) {
  const r = data[i * channels];
  const g = data[i * channels + 1];
  const b = data[i * channels + 2];
  const lum = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  const alpha = 255 - lum; // white -> 0 (transparent), black -> 255 (opaque)

  dark[i * 4] = 0;
  dark[i * 4 + 1] = 0;
  dark[i * 4 + 2] = 0;
  dark[i * 4 + 3] = alpha;

  light[i * 4] = 255;
  light[i * 4 + 1] = 255;
  light[i * 4 + 2] = 255;
  light[i * 4 + 3] = alpha;
}

const raw = { raw: { width, height, channels: 4 } };

// Trim the transparent margin so the artwork fills its box in the navbar.
await sharp(dark, raw).trim({ threshold: 5 }).png().toFile("public/logo.png");
await sharp(light, raw).trim({ threshold: 5 }).png().toFile("public/logo-light.png");

// Favicon: keep original (white bg, black mark) so it stays visible on any
// browser tab theme. Square source, just convert to PNG.
await sharp(SRC).resize(180, 180, { fit: "contain", background: "#ffffff" })
  .png()
  .toFile("src/app/icon.png");

console.log(`Logo processed (${width}x${height}) -> logo.png, logo-light.png, icon.png`);
