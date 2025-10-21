// scripts/fixContent.js
import fs from "fs";
import path from "path";

// Wörterbuch laden (geschützte Begriffe)
const dictPath = path.join(process.cwd(), "scripts", "dictionary.json");
let protectedWords = [];
if (fs.existsSync(dictPath)) {
  protectedWords = JSON.parse(fs.readFileSync(dictPath, "utf8"));
  console.log(`📚 Wörterbuch geladen: ${protectedWords.length} geschützte Begriffe`);
} else {
  console.log("⚠️ Kein Wörterbuch gefunden – alle Wörter werden geprüft.");
}

// Häufige deutsche Tippfehler / Ersetzungen
const corrections = {
  fur: "für",
  mussen: "müssen",
  wurde: "würde",
  dasd: "dass",
  " das ": " dass ",
  "Das ": "Das ",
  konnen: "können",
  mochte: "möchte",
  "zur Zeit": "zurzeit",
  "kennen lernen": "kennenlernen",
  "im Moment": "zurzeit",
  "seit langem": "schon lange",
  "im Allgemeinen": "in der Regel",
  "auf Grund": "aufgrund",
  "in Folge": "infolge",
  "so bald": "sobald",
  "in wie fern": "inwiefern",
  "du kannst": "Du kannst",
  "ihre": "Ihre"
};

// Hilfsfunktion: Wort prüfen, ob es geschützt ist
function isProtected(word) {
  return protectedWords.some(
    (w) => w.toLowerCase() === word.toLowerCase()
  );
}

// Markdown-Dateien laden
const contentDir = path.join(process.cwd(), "content");
const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

let totalFixes = 0;

files.forEach((file) => {
  const filePath = path.join(contentDir, file);
  let text = fs.readFileSync(filePath, "utf8");
  let originalText = text;

  for (const [wrong, correct] of Object.entries(corrections)) {
    // Nur ersetzen, wenn das Wort nicht geschützt ist
    if (!isProtected(wrong)) {
      const regex = new RegExp(`\\b${wrong}\\b`, "gi");
      text = text.replace(regex, correct);
    }
  }

  if (text !== originalText) {
    fs.writeFileSync(filePath, text, "utf8");
    console.log(`✅ Korrigiert: ${file}`);
    totalFixes++;
  }
});

if (totalFixes === 0) {
  console.log("✨ Keine Tippfehler gefunden. Alles sauber!");
} else {
  console.log(`🔍 Insgesamt ${totalFixes} Dateien automatisch korrigiert.`);
}
