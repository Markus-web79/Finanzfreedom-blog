// scripts/fixContent.js
const fs = require("fs");
const path = require("path");

// Wörterbuch laden
const dictionary = require("../dictionary.json");

// Ordner mit Artikeln
const contentDir = path.join(__dirname, "..", "content");

// Alle Dateien im content-Verzeichnis holen
const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

// Funktion zur Korrektur eines Textes
function fixText(text) {
  let fixed = text;
  for (const [wrong, correct] of Object.entries(dictionary)) {
    const regex = new RegExp(wrong, "gi");
    fixed = fixed.replace(regex, correct);
  }
  return fixed;
}

// Alle Dateien durchgehen und korrigieren
for (const file of files) {
  const filePath = path.join(contentDir, file);
  const original = fs.readFileSync(filePath, "utf8");
  const fixed = fixText(original);

  if (original !== fixed) {
    fs.writeFileSync(filePath, fixed, "utf8");
    console.log(`✅ Korrigiert: ${file}`);
  } else {
    console.log(`ℹ️ Keine Änderungen: ${file}`);
  }
}
