const fs = require("fs");
const path = require("path");

// Wörterbuch laden
const dictionaryPath = path.join(__dirname, "..", "dictionary.json");
const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, "utf8"));

// Content-Ordner
const contentDir = path.join(__dirname, "..", "content");

// Funktion zum Korrigieren
function fixText(text) {
  let fixed = text;
  for (const [wrong, correct] of Object.entries(dictionary)) {
    const regex = new RegExp("\\b" + wrong + "\\b", "gi");
    fixed = fixed.replace(regex, correct);
  }
  return fixed;
}

// Alle Markdown-Dateien laden und korrigieren
fs.readdirSync(contentDir).forEach((file) => {
  if (file.endsWith(".md")) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    const fixed = fixText(content);

    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, "utf8");
      console.log(`✅ Korrigiert: ${file}`);
    } else {
      console.log(`ℹ️ Keine Änderungen: ${file}`);
    }
  }
});
