const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "content");

// Liste fester Korrekturen (wird automatisch auf alle Artikel angewendet)
const corrections = {
  // Umlaute & Sonderzeichen
  "ae": "ä",
  "oe": "ö",
  "ue": "ü",
  "Ae": "Ä",
  "Oe": "Ö",
  "Ue": "Ü",

  // Häufige Fehler mit ß/ss
  "strasse": "Straße",
  "Strasse": "Straße",
  "daß": "dass",
  "muß": "muss",
  "Muß": "Muss",

  // Typische Tippfehler im Finanzbereich
  "Steür": "Steuer",
  "steür": "steuer",
  "Steürn": "Steuern",
  "steürn": "steuern",
  "Vermoegen": "Vermögen",
  "vermoegen": "vermögen",
  "aufbaün": "aufbauen",
  "paßives": "passives",
  "paßiv": "passiv",
  "wißen": "wissen",
  "Wißen": "Wissen",
  "laßen": "lassen",
  "Laßen": "Lassen",
  "mußen": "müssen",

  // Häufige Stilfehler
  "Fuehren": "Führen",
  "fuehren": "führen",
  "Oekonomie": "Ökonomie",
  "oekonomie": "Ökonomie",
  "außchöpfen": "ausschöpfen",
  "Außchüttungen": "Ausschüttungen",
  "strategieen": "Strategien",
  "haltedaür": "Haltedauer",
  "Kapitalertrage": "Kapitalerträge",
  "kapitalertrage": "Kapitalerträge",
};

// Alle Markdown-Dateien im content-Ordner finden
function getMarkdownFiles(dir) {
  return fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
}

// Dateien prüfen und korrigieren
function checkAndFixFiles() {
  const files = getMarkdownFiles(contentDir);
  let changed = false;

  files.forEach((file) => {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, "utf8");
    let original = content;

    // Feste Korrekturen anwenden
    for (const [wrong, right] of Object.entries(corrections)) {
      const regex = new RegExp(wrong, "g");
      content = content.replace(regex, right);
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✅ Korrigiert: ${file}`);
      changed = true;
    } else {
      console.log(`ℹ️ Keine Änderungen: ${file}`);
    }
  });

  if (!changed) {
    console.log("Keine Korrekturen nötig.");
  }
}

checkAndFixFiles();
