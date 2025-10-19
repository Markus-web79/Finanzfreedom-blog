/**
 * fixContent.js
 * Universelles Autokorrektur- & Backup-System für deinen FinanzFreedom-Blog
 *
 * ✅ Korrigiert alle Markdown-Dateien im content/-Ordner
 * ✅ Erstellt automatische Backups der dictionary.json
 * ✅ Löscht alte Backups (älter als 30 Tage, behält 5 letzte)
 * ✅ Erkennt neue, verdächtige Wörter (z. B. zu viele Buchstaben)
 * ✅ Ergänzt dictionary.json sicher, ohne je bestehende Einträge zu überschreiben
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.resolve(__dirname, "../content");
const DICT_PATH = path.resolve(__dirname, "../dictionary.json");

// 🔒 1️⃣ Backup der dictionary.json
function backupDictionary() {
  if (fs.existsSync(DICT_PATH)) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 16);
    const backupPath = path.resolve(__dirname, `../dictionary-backup-${timestamp}.json`);
    fs.copyFileSync(DICT_PATH, backupPath);
    console.log(`🛟 Backup erstellt: ${backupPath}`);
  } else {
    console.warn("⚠️ Kein dictionary.json gefunden – Backup übersprungen.");
  }
}

// 🧹 2️⃣ Alte Backups aufräumen (älter als 30 Tage, behält 5 letzte)
function cleanOldBackups() {
  const dir = path.resolve(__dirname, "../");
  const files = fs.readdirSync(dir)
    .filter(f => f.startsWith("dictionary-backup-") && f.endsWith(".json"))
    .map(f => ({
      name: f,
      time: fs.statSync(path.join(dir, f)).mtimeMs
    }))
    .sort((a, b) => b.time - a.time);

  const now = Date.now();
  const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

  files.forEach((file, i) => {
    const age = now - file.time;
    if (i >= 5 && age > THIRTY_DAYS) {
      fs.unlinkSync(path.join(dir, file.name));
      console.log(`🧽 Altes Backup gelöscht: ${file.name}`);
    }
  });
}

// 🔁 Backup starten
backupDictionary();
cleanOldBackups();

// 📖 3️⃣ Dictionary sicher laden
let dictionary = { corrections: {}, words: [] };
try {
  if (fs.existsSync(DICT_PATH)) {
    dictionary = JSON.parse(fs.readFileSync(DICT_PATH, "utf8"));
  } else {
    console.warn("⚠️ dictionary.json fehlt – neue wird erstellt.");
  }
} catch (err) {
  console.error("❌ Fehler beim Laden des Wörterbuchs:", err);
  process.exit(1);
}

const corrections = dictionary.corrections || {};
const allowedWords = new Set(dictionary.words || []);

// 🧠 4️⃣ Neue verdächtige Wörter sammeln
const suspiciousWords = new Set();

// Funktion zur Erkennung verdächtiger Wörter (zu viele Wiederholungen, komisch großgeschrieben)
function detectSuspiciousWords(text) {
  const words = text.match(/\b[A-Za-zÄÖÜäöüß\-]{3,}\b/g) || [];
  for (const w of words) {
    if (/(.)\1{3,}/.test(w) || /[A-Z]{3,}/.test(w)) {
      if (!allowedWords.has(w.toLowerCase()) && !corrections[w]) {
        suspiciousWords.add(w);
      }
    }
  }
}

// ✍️ 5️⃣ Autokorrektur-Funktion
function fixText(text) {
  let fixed = text;
  for (const [wrong, correct] of Object.entries(corrections)) {
    const regex = new RegExp(`\\b${wrong}\\b`, "gi");
    fixed = fixed.replace(regex, correct);
  }
  detectSuspiciousWords(text);
  return fixed;
}

// 📄 6️⃣ Alle Markdown-Dateien im content/-Ordner finden
function getMarkdownFiles(dir) {
  return fs.readdirSync(dir)
    .filter(f => f.endsWith(".md"))
    .map(f => path.join(dir, f));
}

// 🚀 7️⃣ Hauptlauf
const files = getMarkdownFiles(CONTENT_DIR);
let changedFiles = [];

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  const fixed = fixText(original);

  if (fixed !== original) {
    fs.writeFileSync(file, fixed, "utf8");
    changedFiles.push(path.basename(file));
    console.log(`✔ Korrigiert: ${path.basename(file)}`);
  }
}

// 💾 8️⃣ Verdächtige Wörter sicher speichern (nur hinzufügen)
if (suspiciousWords.size > 0) {
  const newEntries = Array.from(suspiciousWords);
  const dict = JSON.parse(fs.readFileSync(DICT_PATH, "utf8"));

  dict.words = Array.from(new Set([...dict.words, ...newEntries]));
  fs.writeFileSync(DICT_PATH, JSON.stringify(dict, null, 2), "utf8");

  console.log(`🧠 ${newEntries.length} neue Wörter erkannt & hinzugefügt.`);
}

if (changedFiles.length === 0) {
  console.log("✅ Keine Änderungen nötig.");
} else {
  console.log(`✅ Fertig! ${changedFiles.length} Datei(en) korrigiert.`);
}
