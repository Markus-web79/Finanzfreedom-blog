const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "content");

// Wörterbuch mit Ersetzungen
const replacements = {
  "Steür": "Steuer",
  "steür": "steuer",
  "Steürn": "Steuern",
  "steürn": "steuern",
  "Abgeltungßteür": "Abgeltungssteuer",
  "Kirchensteür": "Kirchensteuer",
  "Solidaritätszuschlag & ggf. Kirchensteür": "Solidaritätszuschlag & ggf. Kirchensteuer",
  "Vermoegen": "Vermögen",
  "vermoegen": "vermögen",
  "Fuehren": "Führen",
  "fuehren": "führen",
  "Oekonomie": "Ökonomie",
  "oekonomie": "ökonomie",
  "paßiv": "passiv",
  "Paßiv": "Passiv",
  "laßen": "lassen",
  "muß": "muss",
  "Muß": "Muss"
};

// Alle Dateien im content-Ordner durchgehen
fs.readdirSync(contentDir).forEach(file => {
  if (file.endsWith(".md")) {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, "utf8");

    let changed = false;
    for (const [wrong, correct] of Object.entries(replacements)) {
      if (content.includes(wrong)) {
        content = content.split(wrong).join(correct);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✅ ${file} korrigiert`);
    } else {
      console.log(`ℹ️ ${file} ohne Änderungen`);
    }
  }
});
