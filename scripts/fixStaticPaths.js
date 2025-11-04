import fs from "fs";
import path from "path";

const contentDir = "./content";

function getAllMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = getAllMarkdownFiles(contentDir);
const slugs = files.map(f => f.replace(/^content\/|\.md$/g, "").replace(/\\/g, "/"));

console.log("✅ Gefundene Slugs:");
slugs.forEach(s => console.log(` - ${s}`));

fs.writeFileSync("./.vercel-output-slugs.json", JSON.stringify(slugs, null, 2));
console.log("\n✅ Slug-Check abgeschlossen. Datei .vercel-output-slugs.json erstellt.");
