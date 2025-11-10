// scripts/seoCheck.js
// 🔍 SEO-Qualitätsprüfung für automatisch generierte Artikel auf FinanzFreedom

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Mindestanforderungen
const MIN_WORDS = 500;
const PLACEHOLDER_PATTERNS = [
  "meta",
  "hauptteil",
  "lorem ipsum",
  "beispieltext",
  "dummy",
  "todo",
];
const REQUIRED_SECTIONS = ["## ", "### ", "# Fazit"];

// SEO-Check pro Datei
function checkArticle(filePath) {
  const contentRaw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(contentRaw);
  const title = data.title || "(kein Titel)";
  const wordCount = content.split(/\s+/).length;

  let warnings = [];

  // 1️⃣ Länge prüfen
  if (wordCount < MIN_WORDS) {
    warnings.push(`❗ Zu kurz (${wordCount} Wörter, empfohlen > ${MIN_WORDS})`);
  }

  // 2️⃣ Platzhalter erkennen
  for (const p of PLACEHOLDER_PATTERNS) {
    if (content.toLowerCase().includes(p)) {
      warnings.push(`⚠️ Platzhaltertext gefunden ("${p}")`);
    }
  }

  // 3️⃣ Struktur prüfen (Überschriften)
  const hasSections = REQUIRED_SECTIONS.some((s) => content.includes(s));
  if (!hasSections) {
    warnings.push("⚠️ Keine oder zu wenige Zwischenüberschriften.");
  }

  // 4️⃣ Keyword im Titel prüfen
  const mainKeyword = title.split(" ")[0]?.toLowerCase();
  if (mainKeyword && !content.toLowerCase().includes(mainKeyword)) {
    warnings.push(`⚠️ Hauptkeyword "${mainKeyword}" kommt im Text nicht vor.`);
  }

  // Ergebnis ausgeben
  if (warnings.length > 0) {
    console.log(`\n🔎 SEO-Check für "${title}" (${filePath}):`);
    warnings.forEach((w) => console.log("   " + w));
  } else {
    console.log(`✅ SEO-Check OK für "${title}"`);
  }
}

// Alle Artikel prüfen
function runSeoCheck() {
  console.log("🔍 Starte SEO-Qualitätsprüfung...");
  const categories = fs.readdirSync(CONTENT_DIR);

  categories.forEach((cat) => {
    const catPath = path.join(CONTENT_DIR, cat);
    if (fs.statSync(catPath).isDirectory()) {
      const files = fs.readdirSync(catPath).filter((f) => f.endsWith(".md"));
      files.forEach((file) => {
        const filePath = path.join(catPath, file);
        checkArticle(filePath);
      });
    }
  });

  console.log("\n🏁 SEO-Check abgeschlossen.\n");
}

runSeoCheck();
