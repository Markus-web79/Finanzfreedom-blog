const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const CONTENT_ROOT = path.join(process.cwd(), "content");

function getAllMarkdownFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      results.push(fullPath);
    }
  }
  return results;
}

function buildDescriptionFromContent(content) {
  let text = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!$begin:math:display$\[\^$end:math:display$]*\]$begin:math:text$\[\^\)\]\*$end:math:text$/g, " ")
    .replace(/$begin:math:display$\[\^$end:math:display$]*\]$begin:math:text$\[\^\)\]\*$end:math:text$/g, " ")
    .replace(/[#>*_\-\+\=]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) {
    return "Finanzwissen einfach erklärt – kompakt und verständlich.";
  }

  const words = text.split(" ");
  return words.slice(0, 30).join(" ") + (words.length > 30 ? " …" : "");
}

function main() {
  if (!fs.existsSync(CONTENT_ROOT)) {
    console.error("❌ content-Ordner nicht gefunden:", CONTENT_ROOT);
    process.exit(1);
  }

  const files = getAllMarkdownFiles(CONTENT_ROOT);
  console.log(`Gefundene Markdown-Dateien: ${files.length}`);

  let updated = 0;

  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    const parsed = matter(raw);

    if (parsed.data.description) continue;

    const description = buildDescriptionFromContent(parsed.content);
    parsed.data.description = description;

    const output = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(file, output);

    console.log(`✅ Description gesetzt in: ${file}`);
    updated++;
  }

  console.log(`\nFERTIG! Neue Descriptions gesetzt in ${updated} Artikeln.`);
}

main();
