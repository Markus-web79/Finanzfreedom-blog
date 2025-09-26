// scripts/fixContent.js
// ------------------------------------------------------------
// Korrigiert alle Markdown-Dateien im /content-Ordner mithilfe
// des Wörterbuchs aus /dictionary.json
// ------------------------------------------------------------

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Hilfsvariablen für __dirname in ES-Modulen
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pfade
const contentDir = path.join(__dirname, "..", "content");
const dictPath = path.join(__dirname, "..", "dictionary.json");

// Wörterbuch laden
let dictionary = {};
try {
  dictionary = JSON.parse(fs.readFileSync(dictPath, "utf8"));
  console.log(`📖 Wörterbuch geladen: ${Object.keys(dictionary).length} Einträge`);
} catch (err) {
  console.error("❌ Fehler beim Laden des Wörterbuchs:", err);
  process.exit(1);
}

// Hilfsfunktion für Text-Korrektur
function fixText(text) {
  let fixed = text;
  for (const [wrong, correct] of Object.entries(dictionary)) {
    const regex = new RegExp(`\\b${wrong}\\b`, "gi"); // Wortweise ersetzen, case-insensitive
    fixed = fixed.replace(regex, correct);
  }
  return fixed;
}

// Alle Markdown-Dateien im content-Ordner durchgehen
const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

if (files.length === 0) {
  console.log("ℹ️ Keine Markdown-Dateien gefunden.");
  process.exit(0);
}

let changes = 0;

for (const file of files) {
  const filePath = path.join(contentDir, file);
  const original = fs.readFileSync(filePath, "utf8");
  const fixed = fixText(original);

  if (fixed !== original) {
    fs.writeFileSync(filePath, fixed, "utf8");
    console.log(`✅ Korrigiert: ${file}`);
    changes++;
  } else {
    console.log(`⚪ Keine Änderungen: ${file}`);
  }
}

if (changes === 0) {
  console.log("✨ Alle Dateien waren bereits korrekt.");
} else {
  console.log(`🎉 ${changes} Datei(en) korrigiert.`);
}
