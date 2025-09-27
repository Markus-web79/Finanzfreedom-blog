/**
 * fixContent.js
 * Läuft in GitHub Actions, korrigiert alle .md-Dateien im content/-Ordner
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// -------- Pfade ermitteln --------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.resolve(__dirname, "../content");
const DICT_PATH = path.resolve(__dirname, "../dictionary.json");

// -------- Dictionary laden --------
let dictionary = {};
try {
  dictionary = JSON.parse(fs.readFileSync(DICT_PATH, "utf-8"));
  console.log(`📘 Dictionary geladen: ${Object.keys(dictionary.corrections || {}).length} Korrekturen`);
} catch (err) {
  console.error("❌ Konnte dictionary.json nicht laden:", err);
  process.exit(1);
}

const corrections = dictionary.corrections || {};
const allowedWords = new Set(dictionary.words || []);

// -------- Funktion zur Autokorrektur --------
function fixText(text) {
  let fixed = text;
  for (const [wrong, correct] of Object.entries(corrections)) {
    // \b entfernt, damit auch Wörter mit Umlauten/ß gefunden werden
    const regex = new RegExp(wrong, "gi");
    fixed = fixed.replace(regex, correct);
  }
  return fixed;
}

// -------- Markdown-Dateien sammeln --------
function getMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter(f => f.endsWith(".md"))
    .map(f => path.join(dir, f));
}

const files = getMarkdownFiles(CONTENT_DIR);
console.log(`📂 Gefundene Markdown-Dateien: ${files.length}`);
files.forEach(f => console.log("   - " + path.basename(f)));

// -------- Hauptlauf --------
let changedFiles = [];

for (const file of files) {
  const original = fs.readFileSync(file, "utf-8");
  const fixed = fixText(original);

  if (fixed !== original) {
    fs.writeFileSync(file, fixed, "utf-8");
    changedFiles.push(path.basename(file));
    console.log(`✔ Korrigiert: ${path.basename(file)}`);
  }
}

// -------- Ergebnis ausgeben --------
if (changedFiles.length === 0) {
  console.log("✅ Keine Änderungen nötig.");
} else {
  console.log(`✅ Fertig! ${changedFiles.length} Datei(en) korrigiert:`);
  changedFiles.forEach(f => console.log("   → " + f));
}
