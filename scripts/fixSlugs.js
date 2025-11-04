// scripts/fixSlugs.js
import fs from "fs";
import path from "path";

const contentRoot = path.join(process.cwd(), "content");

// Hilfsfunktion: Slug aus Dateiname generieren
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[ä]/g, "ae")
    .replace(/[ö]/g, "oe")
    .replace(/[ü]/g, "ue")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function fixSlugs() {
  const categories = fs.readdirSync(contentRoot);

  for (const category of categories) {
    const categoryPath = path.join(contentRoot, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith(".md"));
    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      let content = fs.readFileSync(filePath, "utf8");

      // Titel aus Frontmatter auslesen
      const match = content.match(/title:\s*["']?(.+?)["']?\n/);
      if (!match) continue;

      const title = match[1];
      const correctSlug = slugify(title);
      const currentSlug = content.match(/slug:\s*["']?(.+?)["']?\n/);

      // Slug im Markdown ersetzen, wenn er falsch oder fehlt
      if (!currentSlug || currentSlug[1] !== correctSlug) {
        if (currentSlug) {
          content = content.replace(
            /slug:\s*["']?.+?["']?\n/,
            `slug: "${correctSlug}"\n`
          );
        } else {
          content = content.replace(
            /title:\s*["']?.+?["']?\n/,
            `title: "${title}"\nslug: "${correctSlug}"\n`
          );
        }
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ Slug korrigiert: ${file} → ${correctSlug}`);
      }
    }
  }

  console.log("✨ Alle Slugs überprüft und korrigiert!");
}

fixSlugs();
