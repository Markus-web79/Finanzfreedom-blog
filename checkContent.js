const fs = require("fs");
const path = require("path");

// Ordner mit Artikeln
const contentDir = path.join(__dirname, "content");

// Wörter, die ersetzt werden sollen
const replacements = {
  "Steür": "Steuer",
  "Vermoegen": "Vermögen",
  "Fuehren": "Führen",
  "ue": "ü",
  "oe": "ö",
  "ae": "ä"
};

// Alle Dateien im content-Ordner durchgehen
fs.readdirSync(contentDir).forEach((file) => {
  const filePath = path.join(contentDir, file);
  if (fs.lstatSync(filePath).isFile() && file.endsWith(".md")) {
    let content = fs.readFileSync(filePath, "utf8");
    let updated = content;

    // Ersetzungen anwenden
    for (const [wrong, correct] of Object.entries(replacements)) {
      const regex = new RegExp(wrong, "g");
      updated = updated.replace(regex, correct);
    }

    // Wenn Änderungen gemacht wurden → Datei überschreiben
    if (updated !== content) {
      fs.writeFileSync(filePath, updated, "utf8");
      console.log(`✅ Korrigiert: ${file}`);
    } else {
      console.log(`ℹ️ Keine Änderungen: ${file}`);
    }
  }
});
