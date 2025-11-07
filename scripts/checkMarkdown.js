import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

// 🔠 Slug-Funktion (Umlaute & Leerzeichen umwandeln)
function toSlug(filename) {
  return filename
    .replace(/\.md$/, "")
    .replace(/[Ää]/g, "ae")
    .replace(/[Öö]/g, "oe")
    .replace(/[Üü]/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

// ✍️ Standardinhalt für leere Artikel
function buildArticleContent(title) {
  return `
# ${title}

## 1. Einleitung
Viele Menschen fragen sich, wie sie ${title.toLowerCase()} können. In diesem Artikel erfährst du, worauf es ankommt und wie du Schritt für Schritt deine finanzielle Freiheit aufbaust.

## 2. Grundlagen
Hier lernst du, was ${title.toLowerCase()} bedeutet und welche Strategien langfristig erfolgreich sind.

## 3. Praxisbeispiel
Ein praktisches Beispiel zeigt, wie du das Thema direkt anwenden kannst.

## 4. Vorteile & Risiken
| Vorteile | Risiken |
|-----------|----------|
| Einfach umsetzbar | Erfordert Disziplin |
| Gute Renditechancen | Marktschwankungen möglich |

## 5. Fazit
Bleib langfristig dran, nutze Automatisierung und bilde dich weiter – so wirst du mit ${title.toLowerCase()} erfolgreich.
`;
}

// 🧠 Hauptfunktion
function checkMarkdownFiles() {
  console.log("🔍 Überprüfe alle Markdown-Dateien...\n");

  const categories = fs.readdirSync(contentDir);
  let changes = 0;

  categories.forEach((category) => {
    const categoryPath = path.join(contentDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) return;

    const files = fs.readdirSync(categoryPath);
    files.forEach((file) => {
      if (!file.endsWith(".md")) return;

      const filePath = path.join(categoryPath, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      let updated = false;
      const filenameSlug = toSlug(file.replace(".md", ""));

      // 🧩 Slug prüfen
      if (!data.slug || data.slug.trim() === "" || data.slug !== filenameSlug) {
        data.slug = filenameSlug;
        updated = true;
        console.log(`⚙️  Slug korrigiert in: ${file}`);
      }

      // 🏷️ Meta-Tags prüfen
      if (!data.metaTitle) {
        data.metaTitle = `${data.title || file.replace(".md", "")} | FinanzFreedom`;
        updated = true;
      }

      if (!data.metaDescription) {
        data.metaDescription = `Lerne mehr über ${data.title || file.replace(".md", "")} und wie du finanzielle Freiheit erreichst.`;
        updated = true;
      }

      // 🧾 Leere Artikel automatisch füllen
      if (!content.trim()) {
        const newContent = buildArticleContent(data.title || file.replace(".md", ""));
        const newFile = matter.stringify(newContent, data);
        fs.writeFileSync(filePath, newFile, "utf-8");
        console.log(`📝 Artikel neu erstellt: ${file}`);
        changes++;
        return;
      }

      if (updated) {
        const newFile = matter.stringify(content, data);
        fs.writeFileSync(filePath, newFile, "utf-8");
        changes++;
      }
    });
  });

  console.log(`\n🎉 Prüfung abgeschlossen – ${changes} Dateien aktualisiert oder überprüft.`);
}

checkMarkdownFiles();
