// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";

const baseUrl = "https://finanzfreedom-blog.vercel.app";
const publicDir = path.join(process.cwd(), "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");
const contentDir = path.join(process.cwd(), "content");

function generateSitemap() {
  console.log("🗺️ Generiere Sitemap im XML-Format...");

  // Ordner /public sicherstellen
  fs.mkdirSync(publicDir, { recursive: true });

  // Alle Markdown-Dateien im content-Ordner holen
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  // URLs generieren
  const urls = [`${baseUrl}/`, ...files.map(f => `${baseUrl}/${f.replace(/\.md$/, "")}`)];

  // XML-Format für Google
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>`;

  // Datei schreiben in /public
  fs.writeFileSync(sitemapPath, xml, "utf8");
  console.log(`✅ Sitemap erstellt unter: ${sitemapPath}`);
}

generateSitemap();
