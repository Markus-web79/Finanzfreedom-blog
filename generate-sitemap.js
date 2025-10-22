import fs from "fs";
import path from "path";

const domain = "https://finanzfreedom-blog.vercel.app";
const contentDir = path.join(process.cwd(), "content");
const publicDir = path.join(process.cwd(), "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

// Alle Markdown-Dateien lesen
const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

let urls = files.map((file) => {
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
  </url>
  ${urls.join("")}
</urlset>`;

// 📄 In /public/sitemap.xml schreiben
fs.writeFileSync(sitemapPath, sitemap, "utf8");
console.log("✅ Sitemap erfolgreich generiert:", sitemapPath);
