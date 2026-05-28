// Generate contact-sheet montages of all candidate photos so they can be
// reviewed quickly, then curated by ID. Run: node scripts/contact-sheet.mjs
import sharp from "sharp";
import { readdirSync, mkdirSync, writeFileSync, existsSync } from "fs";
import { join, extname } from "path";

const ROOT = "assests";
const FOLDERS = ["1", "2", "3", "Downloads"];
const OUT = "scripts/_review";
const THUMB_W = 300;
const THUMB_H = 225; // 4:3 thumbs
const LABEL_H = 26;
const COLS = 5;
const ROWS = 5;
const PER_SHEET = COLS * ROWS;
const GAP = 6;

const IMG_RE = /\.(jpe?g|png|heic)$/i;
const PREFIX = { "1": "A", "2": "B", "3": "C", Downloads: "D" };

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

// Build manifest
const manifest = [];
for (const folder of FOLDERS) {
  const dir = join(ROOT, folder);
  let files;
  try {
    files = readdirSync(dir).filter((f) => IMG_RE.test(f)).sort();
  } catch {
    continue;
  }
  files.forEach((file, i) => {
    const id = `${PREFIX[folder]}${String(i + 1).padStart(2, "0")}`;
    manifest.push({ id, folder, file, path: join(dir, file) });
  });
}

writeFileSync(join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`Manifest: ${manifest.length} images`);

function labelSvg(text) {
  return Buffer.from(
    `<svg width="${THUMB_W}" height="${LABEL_H}">
      <rect width="100%" height="100%" fill="#0d0d0d"/>
      <text x="8" y="18" font-family="monospace" font-size="15" font-weight="bold" fill="#b8a47a">${text}</text>
    </svg>`,
  );
}

async function makeThumb(item) {
  try {
    const img = await sharp(item.path, { failOn: "none" })
      .rotate()
      .resize(THUMB_W, THUMB_H, { fit: "cover" })
      .toBuffer();
    const label = labelSvg(item.id);
    return sharp({
      create: {
        width: THUMB_W,
        height: THUMB_H + LABEL_H,
        channels: 3,
        background: "#000",
      },
    })
      .composite([
        { input: img, top: 0, left: 0 },
        { input: label, top: THUMB_H, left: 0 },
      ])
      .jpeg()
      .toBuffer();
  } catch (e) {
    console.warn(`SKIP ${item.id} (${item.file}): ${e.message}`);
    return null;
  }
}

const cellW = THUMB_W + GAP;
const cellH = THUMB_H + LABEL_H + GAP;
const sheetW = COLS * cellW + GAP;
const sheetH = ROWS * cellH + GAP;

let sheetIdx = 0;
for (let start = 0; start < manifest.length; start += PER_SHEET) {
  const batch = manifest.slice(start, start + PER_SHEET);
  const composites = [];
  for (let k = 0; k < batch.length; k++) {
    const thumb = await makeThumb(batch[k]);
    if (!thumb) continue;
    const col = k % COLS;
    const row = Math.floor(k / COLS);
    composites.push({
      input: thumb,
      top: GAP + row * cellH,
      left: GAP + col * cellW,
    });
  }
  sheetIdx++;
  const outPath = join(OUT, `sheet-${sheetIdx}.jpg`);
  await sharp({
    create: { width: sheetW, height: sheetH, channels: 3, background: "#e8e6e0" },
  })
    .composite(composites)
    .jpeg({ quality: 78 })
    .toFile(outPath);
  console.log(`Wrote ${outPath} (${batch.length} imgs)`);
}
console.log("Done.");
