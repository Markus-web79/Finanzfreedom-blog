// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";

const domain = "https://finanzfreedom-blog.vercel.app";
const contentDir = path.join(process.cwd(), "content");

// Zieldatei in Vercels tatsächlichem statischen Verzeichnis
const staticDir = path.join(process.cwd(), ".vercel/output/static");
fs.mkdirSync(staticDir, { recursive: true });
const sitemapPath = path.join(staticDir, "sitemap.xml");

// Alle Blogposts einlesen
const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

const urls = files.map((file) => {
  const slug = file.replace(/\.md$/, "");
  return `
  <url>
    <loc>${domain}/${slug}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>`;
});

// XML erzeugen
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>
  ${urls.join("")}
</urlset>`;

fs.writeFileSync(sitemapPath, xml, "utf8");
console.log("✅ Sitemap erstellt unter:", sitemapPath);
