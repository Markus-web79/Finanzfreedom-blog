/**
 * fixContent.js
 * Läuft in GitHub Actions, korrigiert alle .md-Dateien im content/-Ordner
 * - Unicode-sichere "Wortgrenzen"
 * - Längere Treffer zuerst
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Pfad ermitteln
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.resolve(__dirname, "../content");

// Dictionary laden
const DICT_PATH = path.resolve(__dirname, "../dictionary.json");
let dictionary = {};
try {
  dictionary = JSON.parse(fs.readFileSync(DICT_PATH, "utf-8"));
} catch (err) {
  console.error("❌ Konnte dictionary.json nicht laden:", err);
  process.exit(1);
}

// Alle Korrekturen extrahieren
const corrections = dictionary.corrections || {};
// optionales Wörterbuch (derzeit nicht benutzt, aber geladen)
const allowedWords = new Set(dictionary.words || []);

// Regex-Helper: Sonderzeichen im Suchbegriff escapen
function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Unicode-sichere Wortgrenzen:
 * (^|nicht-Buchstabe/Ziffer/Unterstrich)  +  ziel  +  (nicht-Buchstabe/Ziffer/Unterstrich|$)
 * => vermeidet \b, das bei Umlauten/ß oft nicht greift
 *
 * Flags:
 *  - g: global
 *  - i: case-insensitive
 *  - u: Unicode
 */
function makeWordRegex(word) {
  const w = escapeRegex(word);
  return new RegExp(`(^|[^\\p{L}\\p{N}_])(${w})(?=([^\\p{L}\\p{N}_]|$))`, "giu");
}

// Ersetzung mit Erhalt der Ränder (Gruppe 1 = linker Rand, Gruppe 2 = Wort)
function replaceWordBounded(text, wrong, right) {
  const rx = makeWordRegex(wrong);
  return text.replace(rx, (_, left, _mid) => `${left}${right}`);
}

// Funktion zur Autokorrektur (längere Keys zuerst)
function fixText(text) {
  let fixed = text;

  const entries = Object.entries(corrections)
    .filter(([wrong, right]) => wrong && right)
    .sort((a, b) => b[0].length - a[0].length); // lang -> kurz

  for (const [wrong, correct] of entries) {
    fixed = replaceWordBounded(fixed, wrong, correct);
  }
  return fixed;
}

// Alle Markdown-Dateien finden (nur oberste Ebene)
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

if (changedFiles.length === 0) {
  console.log("✅ Keine Änderungen nötig.");
} else {
  console.log(`✅ Fertig! ${changedFiles.length} Datei(en) korrigiert.`);
}
