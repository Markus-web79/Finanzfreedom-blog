// scripts/generateFeed.js
// 📰 Automatische RSS-Feed-Erstellung für FinanzFreedom

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://finanzfreedom.de";
const CONTENT_DIR = path.join(process.cwd(), "content");
const FEED_PATH = path.join(process.cwd(), "public", "feed.xml");

function generateFeedItem(article, category) {
  const urlSlug = article.slug || article.title.toLowerCase().replace(/\s+/g, "-");
  return `
    <item>
      <title>${article.title}</title>
      <link>${SITE_URL}/${category}/${urlSlug}</link>
      <description>${article.description || ""}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <guid>${SITE_URL}/${category}/${urlSlug}</guid>
    </item>
  `;
}

function generateFeed() {
  console.log("📰 Generiere RSS-Feed...");

  let items = [];

  const categories = fs.readdirSync(CONTENT_DIR);
  categories.forEach((category) => {
    const catPath = path.join(CONTENT_DIR, category);
    if (fs.statSync(catPath).isDirectory()) {
      const files = fs.readdirSync(catPath).filter((f) => f.endsWith(".md"));
      files.forEach((file) => {
        const raw = fs.readFileSync(path.join(catPath, file), "utf8");
        const { data } = matter(raw);
        if (data.title && data.date) {
          items.push(generateFeedItem({ ...data, slug: file.replace(".md", "") }, category));
        }
      });
    }
  });

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>FinanzFreedom RSS Feed</title>
  <link>${SITE_URL}</link>
  <description>Aktuelle Finanzartikel, Vergleiche & Tipps zur finanziellen Freiheit.</description>
  <language>de-de</language>
  ${items.join("\n")}
</channel>
</rss>`;

  fs.mkdirSync(path.dirname(FEED_PATH), { recursive: true });
  fs.writeFileSync(FEED_PATH, rss, "utf8");
  console.log(`✅ RSS-Feed erfolgreich erstellt: ${FEED_PATH}`);
}

generateFeed();
