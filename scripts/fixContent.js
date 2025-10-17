/**
 * fixContent.js
 * Läuft in GitHub Actions, korrigiert alle .md-Dateien im content/-Ordner
 */

const fs = require("fs");
const path = require("path");

// Pfad zum content/-Ordner ermitteln
const CONTENT_DIR = path.resolve(__dirname, "../content");

// Pfad zur dictionary.json
const DICT_PATH = path.resolve(__dirname, "../dictionary.json");

// Dictionary laden
let dictionary = {};
try {
  dictionary = JSON.parse(fs.readFileSync(DICT_PATH, "utf-8"));
} catch (err) {
  console.error("❌ Konnte dictionary.json nicht laden:", err);
  process.exit(1);
}

// Alle Korrekturen extrahieren
const corrections = dictionary.corrections || {};
const allowedWords = new Set(dictionary.words || []);

// Funktion zur Autokorrektur
function fixText(text) {
  let fixed = text;
  for (const [wrong, correct] of Object.entries(corrections)) {
    const regex = new RegExp(`\\b${wrong}\\b`, "gi");
    fixed = fixed.replace(regex, correct);
  }
  return fixed;
}

// Alle Markdown-Dateien im content/-Ordner finden
function getMarkdownFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(dir, f));
}

// Hauptlauf
let changedFiles = [];
const files = getMarkdownFiles(CONTENT_DIR);

for (const file of files) {
  const original = fs.readFileSync(file, "utf-8");
  const fixed = fixText(original);
  if (fixed !== original) {
    fs.writeFileSync(file, fixed, "utf-8");
    changedFiles.push(path.basename(file));
    console.log(`✔ Korrigiert: ${path.basename(file)}`);
  }
}

// Ergebnis ausgeben
if (changedFiles.length === 0) {
  console.log("✅ Keine Änderungen nötig.");
} else {
  console.log(`✅ Fertig! ${changedFiles.length} Datei(en) korrigiert.`);
}
