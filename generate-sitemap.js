// generate-sitemap.js
import fs from "fs";
import path from "path";

const domain = "https://finanzfreedom-blog.vercel.app";
const contentDir = path.join(process.cwd(), "content");

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

const pages = files.map((file) => {
  const slug = file.replace(/\.md$/, "");
  return `${domain}/${slug}`;
});

const staticPages = [`${domain}/`];

const allPages = [...staticPages, ...pages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === `${domain}/` ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap, "utf8");
console.log("✅ Sitemap erfolgreich generiert!");
