// checkContent.js
// Läuft automatisch im Workflow: korrigiert Schreibweisen & ersetzt Umlaute

const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.join(__dirname, "content");

// Wörterbuch mit Auto-Korrekturen
const replacements = {
  "Steür": "Steuer",
  "Vermoegen": "Vermögen",
  "Fuehren": "Führen",
  "Fuehrung": "Führung",
  "Oekonomie": "Ökonomie",
  "ue": "ü",
  "ae": "ä",
  "oe": "ö"
};

// Alle Dateien im content-Ordner durchgehen
fs.readdirSync(CONTENT_DIR).forEach((file) => {
  if (file.endsWith(".md")) {
    const filePath = path.join(CONTENT_DIR, file);
    let content = fs.readFileSync(filePath, "utf8");

    // Korrekturen anwenden
    Object.entries(replacements).forEach(([wrong, right]) => {
      const regex = new RegExp(wrong, "g");
      content = content.replace(regex, right);
    });

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Korrigiert: ${file}`);
  }
});
