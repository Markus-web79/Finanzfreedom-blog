// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";

const domain = "https://finanzfreedom-blog.vercel.app";
const contentDir = path.join(process.cwd(), "content");

// automatisch das Zielverzeichnis wählen
const outDir = fs.existsSync(path.join(process.cwd(), "out"))
  ? path.join(process.cwd(), "out")
  : path.join(process.cwd(), "public");

const sitemapPath = path.join(outDir, "sitemap.xml");

try {
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"));

  const urls = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    return `
  <url>
    <loc>${domain}/${slug}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>
  ${urls.join("")}
</urlset>`;

  fs.writeFileSync(sitemapPath, sitemap, "utf8");
  console.log(`✅ Sitemap erfolgreich erstellt in: ${sitemapPath}`);
} catch (err) {
  console.error("❌ Fehler beim Erstellen der Sitemap:", err);
}
