import fs from "fs";
import path from "path";

const domain = "https://finanzfreedom-blog.vercel.app";
const contentDir = path.join(process.cwd(), "content");
const publicDir = path.join(process.cwd(), "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

// Sicherstellen, dass der Ordner existiert
fs.mkdirSync(publicDir, { recursive: true });

// Alle Markdown-Dateien im content-Ordner einlesen
const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"));

// URLs generieren
const urls = files.map((file) => {
  const slug = file.replace(/\.md$/, "");
  return `
  <url>
    <loc>${domain}/${slug}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>`;
});

// Sitemap zusammenbauen
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>
  ${urls.join("")}
</urlset>`;

// Datei wirklich in /public schreiben
try {
  fs.writeFileSync(sitemapPath, sitemap, "utf8");
  console.log("✅ Sitemap erfolgreich in /public erstellt:", sitemapPath);
} catch (error) {
  console.error("❌ Fehler beim Erstellen der Sitemap:", error);
}
