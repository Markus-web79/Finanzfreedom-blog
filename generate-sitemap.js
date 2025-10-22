import fs from "fs";
import path from "path";

// Domain deiner Website
const domain = "https://finanzfreedom-blog.vercel.app";

// Ordner, in dem deine Markdown-Artikel liegen
const contentDir = path.join(process.cwd(), "content");

// Zielordner für die Sitemap (muss public sein!)
const publicDir = path.join(process.cwd(), "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

// Prüfen, ob public existiert
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Alle Markdown-Dateien im content-Ordner auslesen
const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"));

// URLs für alle Artikel generieren
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

// Sitemap speichern
fs.writeFileSync(sitemapPath, sitemap, "utf8");
console.log("✅ Sitemap erfolgreich generiert:", sitemapPath);
