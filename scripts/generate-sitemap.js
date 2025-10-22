// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";

const baseUrl = "https://finanzfreedom-blog.vercel.app";
const outDir = path.join(process.cwd(), "out");
const sitemapPath = path.join(outDir, "sitemap.xml");
const contentDir = path.join(process.cwd(), "content");

function generateSitemap() {
  console.log("🗺️ Generiere Sitemap...");

  // ✅ Sicherstellen, dass /out existiert:
  fs.mkdirSync(outDir, { recursive: true });

  // URLs sammeln
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));
  const urls = [`${baseUrl}/`, ...files.map(f => `${baseUrl}/${f.replace(/\.md$/, "")}`)];

  // XML erstellen
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `<url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;

  // Datei schreiben
  fs.writeFileSync(sitemapPath, xml, "utf8");
  console.log(`✅ Sitemap erstellt unter: ${sitemapPath}`);
}

generateSitemap();
