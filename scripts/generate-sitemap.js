// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";

const baseUrl = "https://finanzfreedom-blog.vercel.app";
const contentDir = path.join(process.cwd(), "content");
const publicDir = path.join(process.cwd(), "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

function generateSitemap() {
  console.log("🗺️ Erstelle Sitemap im XML-Format...");

  // Stelle sicher, dass /public existiert
  fs.mkdirSync(publicDir, { recursive: true });

  // Alle Markdown-Dateien im content-Ordner abrufen
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  // URLs erstellen
  const urls = [`${baseUrl}/`, ...files.map((f) => `${baseUrl}/${f.replace(/\.md$/, "")}`)];

  // XML-Struktur für Google
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  // Sitemap schreiben
  fs.writeFileSync(sitemapPath, xml, "utf8");
  console.log(`✅ Sitemap erfolgreich erstellt: ${sitemapPath}`);
}

generateSitemap();
