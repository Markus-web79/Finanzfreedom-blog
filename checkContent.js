// checkContent.js
// Läuft durch alle Dateien im content/-Ordner und korrigiert Schreibfehler

const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "content");

// Liste der Ersetzungen (immer erweiterbar)
const replacements = {
  "Steür": "Steuer",
  "steür": "steuer",
  "Vermoegen": "Vermögen",
  "vermoegen": "vermögen",
  "Fuehren": "Führen",
  "fuehren": "führen",
  "Oekonomie": "Ökonomie",
  "aufbaün": "aufbauen",
  "paßiv": "passiv",
  "auß": "aus",
  "muß": "muss",
  "Muß": "Muss",
  "daß": "dass",
  "wißen": "wissen",
  "laßen": "lassen"
};

// Funktion zum Korrigieren einer Datei
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let updated = content;

  for (const [wrong, correct] of Object.entries(replacements)) {
    const regex = new RegExp(wrong, "g");
    updated = updated.replace(regex, correct);
  }

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, "utf8");
    console.log(`✅ Korrigiert: ${filePath}`);
  } else {
    console.log(`ℹ️ Keine Änderungen: ${filePath}`);
  }
}

// Alle Dateien im content/-Ordner durchgehen
fs.readdirSync(contentDir).forEach((file) => {
  if (file.endsWith(".md")) {
    const filePath = path.join(contentDir, file);
    fixFile(filePath);
  }
});
