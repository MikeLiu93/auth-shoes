import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", "public", "shoes");
mkdirSync(outDir, { recursive: true });

const items = [
  { slug: "jordan-1-retro-high", brand: "NIKE", initials: "AJ1", name: "Air Jordan 1 Retro High OG", colorway: "DZ5485-008", accent: "#C8102E", index: "001" },
  { slug: "air-force-1-low", brand: "NIKE", initials: "AF1", name: "Air Force 1 '07", colorway: "TRIPLE WHITE", accent: "#D9D9D9", index: "002" },
  { slug: "sb-dunk-low", brand: "NIKE", initials: "SB", name: "SB Dunk Low Pro", colorway: "CT2552-800", accent: "#FF5F1F", index: "003" },
  { slug: "nb-1906a", brand: "NEW BALANCE", initials: "1906A", name: "1906A", colorway: "U1906AB", accent: "#A8A8A8", index: "004" },
  { slug: "yeezy-350-v2", brand: "ADIDAS", initials: "YZY", name: "Yeezy Boost 350 V2", colorway: "B37572", accent: "#C8102E", index: "005" },
  { slug: "gel-nyc", brand: "ASICS", initials: "NYC", name: "GEL-NYC", colorway: "CREAM / BIRCH", accent: "#C6A36F", index: "006" },
];

const svg = (it) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" role="img" aria-label="${it.brand} ${it.name} — ${it.colorway}">
  <rect width="800" height="800" fill="#F5F5F5"/>
  <g fill="#0A0A0A" font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
    <text x="40" y="56" font-size="13" letter-spacing="3.5">${it.brand}</text>
    <text x="760" y="56" text-anchor="end" font-size="13" font-family="ui-monospace, Menlo, monospace" letter-spacing="2">№ ${it.index} / 008</text>
    <line x1="40" y1="80" x2="760" y2="80" stroke="#0A0A0A" stroke-width="1"/>
  </g>
  <g>
    <text x="400" y="430" text-anchor="middle" font-family="Impact, 'Anton', 'Arial Black', sans-serif" font-size="280" font-weight="900" fill="#0A0A0A" letter-spacing="-12">${it.initials}</text>
    <line x1="240" y1="470" x2="560" y2="470" stroke="${it.accent}" stroke-width="6"/>
    <text x="400" y="520" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="22" fill="#0A0A0A">${it.name.toUpperCase()}</text>
    <text x="400" y="552" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="13" fill="#737373" letter-spacing="2">&#8220;${it.colorway}&#8221;</text>
  </g>
  <g fill="#0A0A0A" font-family="ui-monospace, Menlo, monospace" font-size="11" letter-spacing="3">
    <line x1="40" y1="720" x2="760" y2="720" stroke="#0A0A0A" stroke-width="1"/>
    <text x="40" y="752">&#8220;FOR DISPLAY ONLY&#8221;</text>
    <text x="760" y="752" text-anchor="end">AUTH SHOES — c/o ARCHIVE</text>
  </g>
  <rect x="40" y="775" width="720" height="6" fill="${it.accent}"/>
</svg>
`;

for (const it of items) {
  const path = resolve(outDir, `${it.slug}.svg`);
  writeFileSync(path, svg(it), "utf8");
  console.log(`wrote ${path}`);
}
