// scripts/fixContent.js – ES-Module
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, "..", "content");

// Wörterbuch laden
const dictPath = path.join(__dirname, "..", "dictionary.json");
const dictionary = JSON.parse(fs.readFileSync(dictPath, "utf8"));
const corrections = dictionary.corrections || {};

// -------- Text-Korrektur ----------
function fixText(text) {
  let result = text;

  // 1. Wörterbuch anwenden
  for (const [wrong, right] of Object.entries(corrections)) {
    const regex = new RegExp(wrong, "gi");
    result = result.replace(regex, right);
  }

  // 2. Satzanfang großschreiben (nach Punkt/Frage-/Ausrufezeichen oder Zeilenbeginn)
  result = result.replace(
    /(^|[.!?]\s+)([a-zäöüß])/g,
    (match, p1, p2) => p1 + p2.toUpperCase()
  );

  return result;
}

// -------- Alle Markdown-Dateien bearbeiten ----------
function fixAllFiles() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));
  let changed = 0;

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const original = fs.readFileSync(filePath, "utf8");
    const fixed = fixText(original);
    if (fixed !== original) {
      fs.writeFileSync(filePath, fixed, "utf8");
      console.log(`✔ Korrigiert: ${file}`);
      changed++;
    }
  }

  console.log(
    changed === 0
      ? "✅ Keine Änderungen erforderlich."
      : `✅ Fertig! ${changed} Datei(en) korrigiert.`
  );
}

fixAllFiles();
