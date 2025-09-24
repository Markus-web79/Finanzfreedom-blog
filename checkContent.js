// checkContent.js
const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "content");

// Wörterbuch für Korrekturen
const replacements = {
  "Steür": "Steuer",
  "steür": "steuer",
  "Steürn": "Steuern",
  "Fuehren": "Führen",
  "fuehren": "führen",
  "Vermoegen": "Vermögen",
  "Oekonomie": "Ökonomie",
  "ue": "ü",
  "ae": "ä",
  "oe": "ö",
  "Ae": "Ä",
  "Ue": "Ü",
  "Oe": "Ö"
};

function correctText(text) {
  let corrected = text;
  for (const [wrong, right] of Object.entries(replacements)) {
    const regex = new RegExp(wrong, "g");
    corrected = corrected.replace(regex, right);
  }
  return corrected;
}

// Alle .md Dateien im content-Ordner durchgehen
fs.readdirSync(contentDir).forEach((file) => {
  if (file.endsWith(".md")) {
    const filePath = path.join(contentDir, file);
    const originalContent = fs.readFileSync(filePath, "utf8");
    const correctedContent = correctText(originalContent);

    if (originalContent !== correctedContent) {
      fs.writeFileSync(filePath, correctedContent, "utf8");
      console.log(`✅ Datei korrigiert: ${file}`);
    } else {
      console.log(`ℹ️ Keine Änderungen nötig: ${file}`);
    }
  }
});
