import fs from "fs";
import path from "path";

const baseUrl = "https://www.finanzfreedom.de";
const contentDir = path.join(process.cwd(), "content");
const publicDir = path.join(process.cwd(), "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

function generateSitemap() {
  console.log("Erstelle Sitemap...");

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"));

  const urls = [
    `${baseUrl}/`,
    ...files.map((file) =>
      `${baseUrl}/blog/${file.replace(".md", "")}`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  fs.writeFileSync(sitemapPath, xml);
  console.log("Sitemap erstellt.");
}

generateSitemap();
