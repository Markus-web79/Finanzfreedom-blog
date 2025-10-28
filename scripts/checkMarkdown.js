import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");
const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

console.log(`🔍 Überprüfe ${files.length} Artikel...\n`);

for (const file of files) {
  const filePath = path.join(contentDir, file);
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    matter(raw); // prüft YAML / Frontmatter
    console.log(`✅ ${file} OK`);
  } catch (err) {
    console.log(`❌ ${file}: ${err.message}`);
  }
}
