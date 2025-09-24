// checkContent.js
const fs = require("fs");
const path = require("path");

// Wörterbuch für häufige Fehler
const corrections = {
  "Steür": "Steuer",
  "Vermoegen": "Vermögen",
  "Vermögen aufbaün": "Vermögen aufbauen",
  "Fuehren": "Führen",
  "Oekonomie": "Ökonomie",
  "ue": "ü",
  "oe": "ö",
  "ae": "ä",
  "Ae": "Ä",
  "Oe": "Ö",
  "Ue": "Ü"
};

const contentDir = path.join(__dirname, "content");

// Alle .md Dateien durchgehen
fs.readdirSync(contentDir).forEach(file => {
  if (file.endsWith(".md")) {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, "utf8");

    let changed = false;
    for (const [wrong, right] of Object.entries(corrections)) {
      if (content.includes(wrong)) {
        content = content.split(wrong).join(right);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✅ ${file} korrigiert`);
    } else {
      console.log(`ℹ️ ${file} unverändert`);
    }
  }
});
