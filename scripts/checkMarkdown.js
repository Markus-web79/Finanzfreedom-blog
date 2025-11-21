import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");
let fixedCount = 0;

function checkAndFixMarkdown(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  let changed = false;

  // Titel prüfen
  if (!data.title) {
    data.title = path.basename(filePath).replace(".md", "");
    console.log(`⚠️  Fehlender Titel → ergänzt: ${data.title}`);
    changed = true;
  }

  // Slug prüfen
  if (!data.slug) {
    data.slug = data.title
      .toLowerCase()
      .replace(/[Ää]/g, "ae")
      .replace(/[Öö]/g, "oe")
      .replace(/[Üü]/g, "ue")
      .replace(/ß/g, "ss")
      .replace(/\s+/g, "-");
    console.log(`⚙️  Slug ergänzt: ${data.slug}`);
    changed = true;
  }

  // Kategorie prüfen (NEU!)
  if (!data.category || data.category.trim() === "") {
    const categoryGuess = path.basename(path.dirname(filePath));
    data.category = categoryGuess;
    console.log(`🪄 Kategorie automatisch ergänzt: ${categoryGuess}`);
    changed = true;
  }

  // Meta prüfen
  if (!data.metaTitle) {
    data.metaTitle = `${data.title} | FinanzFreedom`;
    changed = true;
  }
  if (!data.metaDescription) {
    data.metaDescription = `Lerne mehr über ${data.title} und wie du finanzielle Freiheit erreichst.`;
    changed = true;
  }

  // Wenn Änderungen nötig sind → Datei neu speichern
  if (changed) {
    const newFile = matter.stringify(content, data);
    fs.writeFileSync(filePath, newFile, "utf-8");
    fixedCount++;
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      checkAndFixMarkdown(fullPath);
    }
  }
}

console.log("🔍 Überprüfe Markdown-Dateien...");
walkDir(contentDir);

if (fixedCount === 0) {
  console.log("✅ Alle Markdown-Dateien sind vollständig und korrekt!");
} else {
  console.log(`🎯 ${fixedCount} Dateien wurden automatisch korrigiert.`);
}
