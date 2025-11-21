// scripts/linkInternal.js
// 🔗 Automatische interne Verlinkung für FinanzFreedom
// Fügt am Ende jedes Artikels passende interne Links ein

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");
const MAX_LINKS = 3; // Anzahl interner Links pro Artikel

function getAllArticles() {
  const articles = [];

  const categories = fs.readdirSync(CONTENT_DIR);
  for (const category of categories) {
    const categoryPath = path.join(CONTENT_DIR, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith(".md"));
    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      articles.push({ ...data, path: `/${category}/${file.replace(".md", "")}` });
    }
  }

  return articles;
}

function findRelatedArticles(current, all) {
  const related = all.filter(
    a =>
      a.title !== current.title &&
      (a.category === current.category ||
        a.title.toLowerCase().includes(current.category) ||
        current.title.toLowerCase().includes(a.category))
  );

  return related.sort(() => 0.5 - Math.random()).slice(0, MAX_LINKS);
}

function appendLinks(filePath, links) {
  const raw = fs.readFileSync(filePath, "utf8");
  const split = raw.split("---");
  if (split.length < 3) return;

  let content = split.slice(2).join("---").trim();
  if (content.includes("## Weiterführend")) return; // Schon vorhanden

  const linkBlock =
    "\n\n## Weiterführend\n" +
    links
      .map(l => `- [${l.title}](${l.path})`)
      .join("\n") +
    "\n";

  const updated = `${split[0]}---${split[1]}---\n\n${content}${linkBlock}`;
  fs.writeFileSync(filePath, updated);
}

function main() {
  console.log("🔗 Starte automatische interne Verlinkung...");
  const all = getAllArticles();

  for (const category of fs.readdirSync(CONTENT_DIR)) {
    const catPath = path.join(CONTENT_DIR, category);
    if (!fs.statSync(catPath).isDirectory()) continue;

    const files = fs.readdirSync(catPath).filter(f => f.endsWith(".md"));
    for (const file of files) {
      const filePath = path.join(catPath, file);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      const related = findRelatedArticles(data, all);
      appendLinks(filePath, related);
    }
  }

  console.log("✅ Interne Verlinkung abgeschlossen.");
}

main();
