/**
 * 🧩 fixSlugs.js
 * Repariert automatisch Slugs in allen Markdown-Dateien unter /content/
 * - entfernt führende Slashes
 * - ersetzt Umlaute und Sonderzeichen
 * - wandelt Leerzeichen in Bindestriche um
 * - speichert die korrigierte Datei
 */

import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

function normalizeSlug(text) {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9\-]+/g, "-") // Sonderzeichen raus
    .replace(/-+/g, "-") // doppelte Bindestriche entfernen
    .replace(/^-|-$/g, ""); // Trim Bindestriche am Anfang/Ende
}

function fixSlugInFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  const lines = content.split("\n");
  let newLines = [];
  let changed = false;

  for (let line of lines) {
    if (line.startsWith("slug:")) {
      let slug = line.split(":")[1].trim().replace(/^["']|["']$/g, "");

      // führenden Slash entfernen
      slug = slug.replace(/^\//, "");

      // normalisieren
      const fixedSlug = normalizeSlug(slug);

      if (slug !== fixedSlug) {
        console.log(`🔧 Fix: ${slug} → ${fixedSlug}`);
        line = `slug: "${fixedSlug}"`;
        changed = true;
      } else {
        line = `slug: "${slug}"`;
      }
    }
    newLines.push(line);
  }

  if (changed) {
    fs.writeFileSync(filePath, newLines.join("\n"), "utf8");
    console.log(`✅ Datei aktualisiert: ${path.basename(filePath)}`);
  }
}

function run() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));
  console.log(`\n🔍 Überprüfe ${files.length} Dateien...\n`);

  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    fixSlugInFile(filePath);
  });

  console.log("\n🎉 Alle Slugs überprüft und korrigiert!");
}

run();
