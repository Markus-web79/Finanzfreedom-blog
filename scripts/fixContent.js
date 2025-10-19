/**
 * fixContent.js
 * Korrigiert Markdown-Dateien im content/-Ordner
 * und erstellt automatische Backups von dictionary.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Pfade ermitteln
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.resolve(__dirname, "../content");

// Dictionary-Pfad
const DICT_PATH = path.resolve(__dirname, "../dictionary.json");

// 🔒 BACKUP-Funktion
function backupDictionary() {
  if (fs.existsSync(DICT_PATH)) {
    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, "-")
      .slice(0, 16);
    const backupPath = path.resolve(
      __dirname,
      `../dictionary-backup-${timestamp}.json`
    );
    fs.copyFileSync(DICT_PATH, backupPath);
    console.log(`🛟 Backup erstellt: ${backupPath}`);
  } else {
    console.warn("⚠️ Kein dictionary.json gefunden – Backup übersprungen.");
  }
}

// Dictionary laden (nach Backup)
backupDictionary();

let dictionary = {};
try {
  dictionary = JSON.parse(fs.readFileSync(DICT_PATH, "utf-8"));
} catch (err) {
  console.error("❌ Konnte dictionary.json nicht laden:", err);
  process.exit(1);
}

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
const files = getMarkdownFiles(CONTENT_DIR);
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

if (changedFiles.length === 0) {
  console.log("✅ Keine Änderungen nötig.");
} else {
  console.log(`✅ Fertig! ${changedFiles.length} Datei(en) korrigiert.`);
}
