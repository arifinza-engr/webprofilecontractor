// Optimize the curated documentation photos into /public/dokumentasi.
// Reads the review manifest for ID -> source path, resizes + compresses.
// Run: node scripts/optimize-docs.mjs
import sharp from "sharp";
import { readFileSync, mkdirSync, existsSync, writeFileSync } from "fs";
import { join } from "path";

const manifest = JSON.parse(
  readFileSync("scripts/_review/manifest.json", "utf8"),
);
const byId = Object.fromEntries(manifest.map((m) => [m.id, m]));

const OUT_DIR = "public/dokumentasi";
const MAX_W = 1600;

// Curated selection (display order). category: konstruksi | interior | struktur
const SELECTION = [
  { id: "D36", out: "doc-01", title: "Hunian Modern Hillside",          category: "konstruksi" },
  { id: "A03", out: "doc-02", title: "Pembangunan Gudang Industri",     category: "konstruksi" },
  { id: "B22", out: "doc-03", title: "Resepsionis Kantor Kustom",       category: "interior"   },
  { id: "A18", out: "doc-04", title: "Pengecoran Struktur Skala Besar", category: "konstruksi" },
  { id: "D40", out: "doc-05", title: "Struktur Baja Bentang Lebar",     category: "struktur"   },
  { id: "B05", out: "doc-06", title: "Dapur Custom Modern",             category: "interior"   },
  { id: "D07", out: "doc-07", title: "Fasad Arsitektural Kustom",       category: "konstruksi" },
  { id: "A39", out: "doc-08", title: "Pengerjaan Lantai Gudang",        category: "konstruksi" },
  { id: "B27", out: "doc-09", title: "Interior Kantor Korporat",        category: "interior"   },
  { id: "D43", out: "doc-10", title: "Hunian Dua Lantai Modern",        category: "konstruksi" },
  { id: "D11", out: "doc-11", title: "Ruang Keluarga Residensial",      category: "interior"   },
  { id: "D15", out: "doc-12", title: "Detail Fasad Modern",             category: "konstruksi" },
];

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const data = [];
for (const sel of SELECTION) {
  const item = byId[sel.id];
  if (!item) {
    console.warn(`MISSING ${sel.id} in manifest`);
    continue;
  }
  const outFile = `${sel.out}.jpg`;
  const info = await sharp(item.path, { failOn: "none" })
    .rotate()
    .resize(MAX_W, MAX_W, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(join(OUT_DIR, outFile));
  data.push({
    id: sel.out,
    title: sel.title,
    category: sel.category,
    image: `/dokumentasi/${outFile}`,
    width: info.width,
    height: info.height,
  });
  console.log(`✓ ${sel.id} -> ${outFile} (${info.width}x${info.height})`);
}

writeFileSync(
  "src/data/dokumentasi.json",
  JSON.stringify(data, null, 2) + "\n",
);
console.log(`\nWrote src/data/dokumentasi.json (${data.length} items)`);
