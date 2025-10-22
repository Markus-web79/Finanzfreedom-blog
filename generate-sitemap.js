// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";

const domain = "https://finanzfreedom-blog.vercel.app";
const contentDir = path.join(process.cwd(), "content");

// Vercel verwendet bei Next.js 14 das neue Output-System:
// .vercel/output/static für statische Dateien
const vercelStatic = path.join(process.cwd(), ".vercel/output/static");
const outDir = fs.existsSync(vercelStatic)
  ? vercelStatic
  : path.join(process.cwd(), "out");

const sitemapPath = path.join(outDir, "sitemap.xml");

// Sicherstellen, dass das Zielverzeichnis existiert
fs.mkdirSync(outDir, { recursive: true });

// Alle Markdown-Dateien (Blogposts)
const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

// Sitemap-XML generieren
const urls = files.map((file) => {
  const slug = file.replace(/\.md$/, "");
  return `
  <url>
    <loc>${domain}/${slug}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>
  ${urls.join("")}
</urlset>`;

fs.writeFileSync(sitemapPath, xml, "utf8");
console.log(`✅ Sitemap erfolgreich erstellt unter: ${sitemapPath}`);
