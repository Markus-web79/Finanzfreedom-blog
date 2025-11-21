import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BASE_URL = "https://finanzfreedom.de";
const contentDir = path.join(process.cwd(), "content");

function getAllMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllMarkdownFiles(fullPath));
    } else if (entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function generateSitemap() {
  const files = getAllMarkdownFiles(contentDir);

  const urls = files.map((file) => {
    const relPath = path
      .relative(contentDir, file)
      .replace(/\.md$/, "")
      .split(path.sep)
      .join("/");
    return `<url><loc>${BASE_URL}/${relPath}</loc></url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${BASE_URL}</loc></url>
  ${urls.join("\n  ")}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), xml);
  console.log("✅ Sitemap erfolgreich erstellt!");
}

generateSitemap();
