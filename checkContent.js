// checkContent.js
// Läuft im Workflow: prüft & korrigiert Content

const fs = require("fs");
const path = require("path");

// Ordner mit den Artikeln
const contentDir = path.join(__dirname, "content");

// Mapping für Umlaute und ß
const replacements = {
  ae: "ä",
  oe: "ö",
  ue: "ü",
  Ae: "Ä",
  Oe: "Ö",
  Ue: "Ü",
  ss: "ß",
};

// Hilfsfunktion: Text korrigieren
function fixText(text) {
  let fixed = text;

  // Ersetzungen für Umlaute
  for (const [wrong, right] of Object.entries(replacements)) {
    const regex = new RegExp(wrong, "g");
    fixed = fixed.replace(regex, right);
  }

  // Rechtschreibkorrektur: steür → Steuer
  fixed = fixed.replace(/Steür/g, "Steuer");
  fixed = fixed.replace(/steür/g, "steuer");

  return fixed;
}

// Alle .md Dateien im content-Ordner durchgehen
fs.readdirSync(contentDir).forEach((file) => {
  if (file.endsWith(".md")) {
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
});

console.log("🔍 Content-Check abgeschlossen!");
