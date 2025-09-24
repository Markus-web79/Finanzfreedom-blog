const fs = require("fs");
const path = require("path");

// Ordner mit Artikeln
const CONTENT_DIR = path.join(__dirname, "content");

// Wörterbuch für automatische Korrekturen
const replacements = {
  "Steür": "Steuer",
  "steür": "steuer",
  "Steüroptimierung": "Steueroptimierung",
  "Steürpflicht": "Steuerpflicht",
  "paßiv": "passiv",
  "Paßiv": "Passiv",
  "muß": "muss",
  "müßen": "müssen",
  "auß": "auss",
  "wißen": "wissen",
  "laßen": "lassen",
  "qülle": "Quelle",
  "Fuehr": "Führ",
  "Vermoegen": "Vermögen",
  "Oekonomie": "Ökonomie"
};

// Alle Dateien im content-Ordner durchgehen
fs.readdirSync(CONTENT_DIR).forEach(file => {
  if (file.endsWith(".md")) {
    const filePath = path.join(CONTENT_DIR, file);
    let content = fs.readFileSync(filePath, "utf8");

    let changed = false;
    for (const [wrong, correct] of Object.entries(replacements)) {
      if (content.includes(wrong)) {
        content = content.replace(new RegExp(wrong, "g"), correct);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✅ ${file} korrigiert`);
    } else {
      console.log(`ℹ️ ${file} keine Änderungen nötig`);
    }
  }
});
