// --- fixContent.js (Groß/Klein-tolerant + Debug) ---
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Pfade
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDir = path.join(__dirname, "..", "content");

// Wörterbuch laden
const dictPath = path.join(__dirname, "..", "dictionary.json");
const dictionary = JSON.parse(fs.readFileSync(dictPath, "utf8"));
const corrections = dictionary.corrections;

console.log("📚 Wörterbuch geladen:", Object.keys(corrections).length, "Einträge");

// Hilfsfunktion: Erhält Großschreibung
function applyCase(original, replacement) {
  if (original[0] === original[0].toUpperCase()) {
    // nur ersten Buchstaben groß
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

// Text fixen
function fixText(text, file) {
  let result = text;
  let replacedCount = 0;

  for (const [wrong, right] of Object.entries(corrections)) {
    const regex = new RegExp(wrong, "gi"); // case-insensitive
    result = result.replace(regex, match => {
      replacedCount++;
      console.log(`🔄 ${file}: "${match}" → "${applyCase(match, right)}"`);
      return applyCase(match, right);
    });
  }

  if (replacedCount === 0) {
    console.log(`✅ ${file}: keine Änderungen nötig`);
  }
  return result;
}

// Alle .md-Dateien korrigieren
function fixAllFiles() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));
  console.log("🔍 Gefundene Dateien:", files.join(", "));
  let changed = 0;

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const original = fs.readFileSync(filePath, "utf8");
    const fixed = fixText(original, file);
    if (fixed !== original) {
      fs.writeFileSync(filePath, fixed, "utf8");
      console.log(`✔ Korrigiert: ${file}`);
      changed++;
    }
  }

  console.log(
    changed === 0
      ? "🎉 Alle Dateien waren bereits korrekt."
      : `🚀 Fertig: ${changed} Datei(en) angepasst.`
  );
}

fixAllFiles();
