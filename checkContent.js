const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "content");

// Liste fester Korrekturen
const corrections = {
  "Steür": "Steuer",
  "steür": "steuer",
  "Vermoegen": "Vermögen",
  "vermoegen": "vermögen",
  "aufbaün": "aufbauen",
  "Fuehren": "Führen",
  "fuehren": "führen",
  "Oekonomie": "Ökonomie",
  "oekonomie": "ökonomie",
  "paßives": "passives",
  "mußen": "müssen",
  "laßen": "lassen",
  "wißen": "wissen",
  "außchöpfen": "ausschöpfen",
  "Außchüttungen": "Ausschüttungen",
  "strategieen": "Strategien",
  "haltedaür": "Haltedauer",
  "kapitalertrage": "Kapitalerträge",
  "steürn": "Steuern",
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

    // Wenn Änderungen gemacht wurden → zurückschreiben
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
