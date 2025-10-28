import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");
const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

console.log(`🔍 Prüfe ${files.length} Markdown-Dateien...\n`);

for (const file of files) {
  const filePath = path.join(contentDir, file);
  const text = fs.readFileSync(filePath, "utf8");

  const hasStart = text.trim().startsWith("---");
  const hasEnd = text.trim().split("\n").some(line => line.trim() === "---");
  const hasSlug = text.includes("slug:");
  const slugLine = (text.match(/slug:\s*(.*)/) || [])[1];

  if (!hasStart || !hasEnd) {
    console.log(`❌ ${file}: Frontmatter fehlt oder nicht abgeschlossen`);
  } else if (!hasSlug) {
    console.log(`❌ ${file}: slug: fehlt`);
  } else if (slugLine && slugLine.includes("/")) {
    console.log(`⚠️  ${file}: slug enthält führenden "/"`);
  } else {
    console.log(`✅ ${file}: OK`);
  }
}
