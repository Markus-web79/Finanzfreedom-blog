// scripts/addWords.js
// Liest neue Wörter aus "new-words.txt" und fügt sie in dictionary.json hinzu

import fs from "fs";
import path from "path";

const dictPath = path.join(process.cwd(), "dictionary.json");
const newWordsPath = path.join(process.cwd(), "new-words.txt");

function loadJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function saveJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

function run() {
  if (!fs.existsSync(newWordsPath)) {
    console.log("⚠️ Keine neuen Wörter gefunden.");
    return;
  }

  const newWords = fs
    .readFileSync(newWordsPath, "utf8")
    .split("\n")
    .map((w) => w.trim().toLowerCase())
    .filter((w) => w.length > 2);

  if (newWords.length === 0) {
    console.log("ℹ️ Keine gültigen Wörter in new-words.txt");
    return;
  }

  const dictionary = loadJson(dictPath, { corrections: {}, words: [] });

  // Bestehende Wörter als Set (schneller Vergleich)
  const wordSet = new Set(dictionary.words || []);

  let added = 0;
  for (const word of newWords) {
    if (!wordSet.has(word)) {
      dictionary.words.push(word);
      wordSet.add(word);
      added++;
    }
  }

  if (added > 0) {
    saveJson(dictPath, dictionary);
    console.log(`📖 Wörterbuch aktualisiert: ${added} Wörter hinzugefügt.`);
  } else {
    console.log("✅ Keine neuen Wörter zum Wörterbuch hinzugefügt.");
  }
}

run();
