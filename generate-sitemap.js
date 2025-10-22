// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";

const domain = "https://finanzfreedom-blog.vercel.app";
const contentDir = path.join(process.cwd(), "content");

// Sitemap soll in den public-Ordner geschrieben werden,
// damit Vercel sie beim Build automatisch deployt
const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");

// Falls der public-Ordner nicht existiert, erstellen:
fs.mkdirSync(path.join(process.cwd(), "public"), { recursive: true });

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

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
console.log("✅ Sitemap erfolgreich erstellt unter:", sitemapPath);
