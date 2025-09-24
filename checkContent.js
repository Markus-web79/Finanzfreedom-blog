// checkContent.js
// Läuft automatisch im GitHub Action Workflow, korrigiert Rechtschreibung & Umlaute in allen Markdown-Artikeln im content/-Ordner.

const fs = require("fs");
const path = require("path");

// Fehler -> Korrektur
const corrections = {
  "Steür": "Steuer",
  "Steürn": "Steuern",
  "steür": "steuer",
  "steürn": "steuern",
  "paßiv": "passiv",
  "auß": "aus",
  "muß": "muss",
  "mußen": "müssen",
  "daß": "dass",
  "wißen": "wissen",
  "Qülle": "Quelle",
  "laßen": "lassen",
  "Vermoegen": "Vermögen",
  "vermoegen": "vermögen",
  "Fuehren": "Führen",
  "fuehren": "führen",
  "Oekonomie": "Ökonomie",
  "oekonomie": "ökonomie",
  "ae": "ä",
  "oe": "ö",
  "ue": "ü"
};

// Funktion zur Korrektur von Text
function correctText(text) {
  let corrected = text;
  for (const [wrong, right] of Object.entries(corrections)) {
    const regex = new RegExp(wrong, "g");
    corrected = corrected.replace(regex, right);
  }
  return corrected;
}

// content/-Ordner durchlaufen
const contentDir = path.join(__dirname, "content");
const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  const content = fs.readFileSync(filePath, "utf8");
  const corrected = correctText(content);

  if (content !== corrected) {
    fs.writeFileSync(filePath, corrected, "utf8");
    console.log(`✅ Korrigiert: ${file}`);
  } else {
    console.log(`ℹ️ Keine Fehler in: ${file}`);
  }
});
