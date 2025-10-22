// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";

const domain = "https://finanzfreedom-blog.vercel.app";
const contentDir = path.join(process.cwd(), "content");
const publicDir = path.join(process.cwd(), "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

function generateSitemap() {
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"));

  const urls = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    return `${domain}/${slug}`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}</loc>
  </url>
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
  </url>`
    )
    .join("")}
</urlset>`;

  fs.writeFileSync(sitemapPath, xml);
  console.log("✅ Sitemap wurde in /public/sitemap.xml erstellt.");
}

generateSitemap();
