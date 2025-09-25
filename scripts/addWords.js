const fs = require("fs");

const file = process.argv[2] || "new-words.txt";
const dictPath = "dictionary.json";

// Neue Wörter einlesen
let newWords = [];
if (fs.existsSync(file)) {
  newWords = fs.readFileSync(file, "utf-8")
    .split("\n")
    .map(w => w.trim())
    .filter(w => w.length > 0);
}

// Wörterbuch laden
let dict = { words: [] };
if (fs.existsSync(dictPath)) {
  dict = JSON.parse(fs.readFileSync(dictPath, "utf-8"));
}

// Wörter hinzufügen
let added = 0;
newWords.forEach(word => {
  if (!dict.words.includes(word)) {
    dict.words.push(word);
    added++;
  }
});

// Wörterbuch speichern
if (added > 0) {
  fs.writeFileSync(dictPath, JSON.stringify(dict, null, 2));
  console.log(`✅ ${added} Wörter ins Wörterbuch übernommen`);
} else {
  console.log("ℹ️ Keine neuen Wörter gefunden`);
}
