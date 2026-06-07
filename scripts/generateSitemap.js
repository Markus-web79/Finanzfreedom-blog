const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.finanzfreedom.de";
const PUBLIC_DIR = path.join(process.cwd(), "public");
const SITEMAP_PATH = path.join(PUBLIC_DIR, "sitemap.xml");

const staticRoutes = [
  "",
  "etfs",
  "investieren",
  "versicherungen",
  "broker",
  "wissen",
  "tools",
  "rechner",
  "kontakt",
  "impressum",
  "datenschutz",
  "ueber-uns",
];

const contentFolders = [
  "etfs",
  "investieren",
  "versicherungen",
  "wissen",
  "tools",
];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function normalizeRoute(route) {
  return route
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");
}

function getMarkdownRoutes(folder) {
  const dir = path.join(process.cwd(), "content", folder);

  if (!fs.existsSync(dir)) {
    console.warn(`⚠️ Content folder missing: ${dir}`);
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .filter((file) => file !== "index.md")
    .filter((file) => !file.startsWith("_"))
    .map((file) => `${folder}/${file.replace(/\.md$/, "")}`)
    .map(normalizeRoute);
}

const routes = [
  ...staticRoutes.map(normalizeRoute),
  ...contentFolders.flatMap(getMarkdownRoutes),
];

const uniqueRoutes = [...new Set(routes)].sort();

const urls = uniqueRoutes
  .map((route) => {
    const loc = route ? `${SITE_URL}/${route}` : `${SITE_URL}/`;

    return [
      "  <url>",
      `    <loc>${escapeXml(loc)}</loc>`,
      "    <changefreq>weekly</changefreq>",
      `    <priority>${route === "" ? "1.0" : "0.8"}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urls,
  "</urlset>",
  "",
].join("\n");

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");

console.log(`✅ Sitemap generated with ${uniqueRoutes.length} URLs.`);
console.log(`📍 Saved to: ${SITEMAP_PATH}`);
