// scripts/fixContent.js – liest Wörterbuch aus dictionary.json

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Hilfsvariablen für Pfade
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, "..", "content");
const dictionaryPath = path.join(__dirname, "..", "dictionary.json");

// --- Wörterbuch laden ---
let corrections = {};
try {
  const dictRaw = fs.readFileSync(dictionaryPath, "utf8");
  const dict = JSON.parse(dictRaw);
  corrections = dict.corrections || {};
  console.log(`📚 Wörterbuch geladen: ${Object.keys(corrections).length} Korrekturen gefunden`);
} catch (err) {
  console.error("⚠️ Konnte dictionary.json nicht laden:", err.message);
  process.exit(1);
}

// --- Hilfsfunktion für den Textaustausch ---
function fixText(text) {
  let result = text;
  for (const [wrong, right] of Object.entries(corrections)) {
    const regex = new RegExp(wrong, "gi");
    result = result.replace(regex, right);
  }
  return result;
}

// --- Alle .md-Dateien im content-Ordner korrigieren ---
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

  if (changed === 0) {
    console.log("Keine Änderungen erforderlich ✅");
  } else {
    console.log(`Fertig! ${changed} Datei(en) korrigiert.`);
  }
}

// --- Start ---
fixAllFiles();
