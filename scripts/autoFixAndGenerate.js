// scripts/autoFixAndGenerate.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDir = path.join(process.cwd(), "content");

// --- Hilfsfunktion: Slug bereinigen ---
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

// --- Struktur für neue Texte ---
function buildArticleContent(title) {
  return `
# ${title}

## 1. Einleitung
Viele Menschen fragen sich, wie sie ${title.toLowerCase()} können. In diesem Artikel erfährst du die Grundlagen und praxisnahen Tipps, um deine finanzielle Freiheit Schritt für Schritt aufzubauen.

## 2. Grundlagen
Hier erklären wir, was ${title.toLowerCase()} bedeutet und welche Strategien langfristig erfolgreich sind.

## 3. Praxisbeispiel
Ein Beispiel aus der Realität zeigt, wie du das Thema direkt anwenden kannst.

## 4. Vorteile & Risiken
| Vorteile | Risiken |
|-----------|----------|
| Einfach umsetzbar | Erfordert Disziplin |
| Gute Renditechancen | Schwankungen am Markt |

## 5. Fazit
Bleib langfristig dran, nutze Automatisierung und bilde dich weiter – so wirst du mit ${title.toLowerCase()} erfolgreich.
`;
}

// --- Hauptfunktion ---
function processArticles() {
  const categories = fs.readdirSync(contentDir);

  categories.forEach((category) => {
    const categoryPath = path.join(contentDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) return;

    const files = fs.readdirSync(categoryPath);
    files.forEach((file) => {
      const filePath = path.join(categoryPath, file);
      if (!file.endsWith(".md")) return;

      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      let changed = false;

      // Slug prüfen
      if (!data.slug || data.slug.trim() === "") {
        data.slug = toSlug(file.replace(".md", ""));
        changed = true;
      }

      // Meta hinzufügen
      if (!data.metaTitle) {
        data.metaTitle = `${data.title || file.replace(".md", "")} | FinanzFreedom`;
        changed = true;
      }
      if (!data.metaDescription) {
        data.metaDescription = `Lerne mehr über ${data.title || file.replace(".md", "")} und wie du finanzielle Freiheit erreichst.`;
        changed = true;
      }

      // Leere Artikel mit Standardinhalt füllen
      if (!content.trim()) {
        const newContent = buildArticleContent(data.title || file.replace(".md", ""));
        const newFile = matter.stringify(newContent, data);
        fs.writeFileSync(filePath, newFile, "utf-8");
        console.log(`📝 Artikel neu aufgebaut: ${file}`);
        return;
      }

      if (changed) {
        const newFile = matter.stringify(content, data);
        fs.writeFileSync(filePath, newFile, "utf-8");
        console.log(`✅ Metadaten korrigiert: ${file}`);
      }
    });
  });

  console.log("🎉 Alle Artikel erfolgreich geprüft und korrigiert!");
}

processArticles();
