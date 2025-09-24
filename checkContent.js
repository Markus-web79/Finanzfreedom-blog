// checkContent.js

const fs = require("fs");
const path = require("path");

// Alle Ersetzungen (Umlaute, ß, Schreibfehler)
const replacements = {
  // Umlaute und ß
  "ae": "ä",
  "oe": "ö",
  "ue": "ü",
  "Ae": "Ä",
  "Oe": "Ö",
  "Ue": "Ü",
  "ss": "ß",

  // Häufige Schreibfehler
  "Steür": "Steuer",
  "steür": "steuer",
  "Steüroptimierung": "Steueroptimierung",
  "Steürpflicht": "Steuerpflicht",

  // ß und ss
  "muß": "muss",
  "Muß": "Muss",
  "müßen": "müssen",
  "Müßen": "Müssen",

  // ß / ss Varianten
  "paßiv": "passiv",
  "Paßiv": "Passiv",
  "paßives": "passives",
  "Paßives": "Passives",

  // ß bei Verben
  "auß": "auss",
  "Auß": "Auss",
  "laßen": "lassen",
  "Laßen": "Lassen",

  // wißen → wissen
  "wißen": "wissen",
  "Wißen": "Wissen",

  // qülle → Quelle
  "qülle": "Quelle",
  "Qülle": "Quelle",

  // Führen/Fuehren
  "Fuehr": "Führ",
  "Fuehren": "Führen",
  "fuehren": "führen",

  // Vermoegen
  "Vermoegen": "Vermögen",
  "vermoegen": "vermögen",

  // Oekonomie
  "Oekonomie": "Ökonomie",
  "oekonomie": "ökonomie",

  // Testfehler
  "aufbaün": "aufbauen",
  "aufbaen": "aufbauen",
};

// Verzeichnis mit allen Artikeln
const contentDir = path.join(__dirname, "content");

// Alle Dateien im content-Ordner prüfen
fs.readdirSync(contentDir).forEach((file) => {
  if (file.endsWith(".md")) {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, "utf8");
    let original = content;

    // Alle Ersetzungen durchführen
    for (const [wrong, correct] of Object.entries(replacements)) {
      const regex = new RegExp(wrong, "g");
      content = content.replace(regex, correct);
    }

    // Datei nur speichern, wenn Änderungen passiert sind
    if (content !== original) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✅ Korrigiert: ${file}`);
    } else {
      console.log(`ℹ️ Keine Änderungen: ${file}`);
    }
  }
});
