const fs = require("fs");
const path = require("path");

// Ordner mit Artikeln
const contentDir = path.join(__dirname, "content");

// Wörterbuch mit Korrekturen
const corrections = {
  "Steür": "Steuer",
  "steür": "steuer",
  "Vermoegen": "Vermögen",
  "vermoegen": "vermögen",
  "Fuehren": "Führen",
  "fuehren": "führen",
  "Oekonomie": "Ökonomie",
  "oekonomie": "ökonomie",
  "aufbaün": "aufbauen"
};

// Hilfsfunktion: korrigiert Text
function fixText(text) {
  let fixed = text;
  for (const wrong in corrections) {
    const right = corrections[wrong];
    const regex = new RegExp(wrong, "g");
    fixed = fixed.replace(regex, right);
  }
  return fixed;
}

// Alle Dateien im content-Ordner laden
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

console.log("🔍 Content-Check abgeschlossen.");
