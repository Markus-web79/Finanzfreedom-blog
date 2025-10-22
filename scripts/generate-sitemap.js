// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";

const baseUrl = "https://finanzfreedom-blog.vercel.app";

// Pfad für die Sitemap im Export-Ordner
const sitemapPath = path.join(process.cwd(), "out", "sitemap.xml");

// Content-Ordner (Markdown-Dateien)
const contentDir = path.join(process.cwd(), "content");

function generateSitemap() {
  console.log("🗺️ Generiere Sitemap...");

  // Start mit den statischen Seiten
  let urls = [`${baseUrl}/`];

  // Alle .md-Dateien durchgehen
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    urls.push(`${baseUrl}/${slug}`);
  }

  // XML-Template
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(url => {
    return `<url><loc>${url}</loc></url>`;
  })
  .join("\n")}
</urlset>`;

  // Sitemap schreiben
  fs.writeFileSync(sitemapPath, xml);
  console.log(`✅ Sitemap erstellt unter: ${sitemapPath}`);
}

generateSitemap();
