const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.finanzfreedom.de";

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

function getMarkdownRoutes(folder) {
  const dir = path.join(process.cwd(), "content", folder);

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .filter((file) => file !== "index.md")
    .map((file) => `${folder}/${file.replace(/\.md$/, "")}`);
}

const routes = [
  ...staticRoutes,
  ...contentFolders.flatMap(getMarkdownRoutes),
];

const uniqueRoutes = [...new Set(routes)];

const urls = uniqueRoutes
  .map((route) => {
    const loc = route ? `${SITE_URL}/${route}` : `${SITE_URL}/`;
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(
  path.join(process.cwd(), "public", "sitemap.xml"),
  sitemap,
  "utf8"
);

console.log(`✅ Sitemap generated with ${uniqueRoutes.length} URLs.`);
