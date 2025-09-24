const fs = require("fs");
const path = require("path");

// Pfad zum content-Ordner
const contentDir = path.join(__dirname, "content");

// Hilfsfunktion: Texte normalisieren (z. B. ue → ü, ae → ä, oe → ö)
function normalizeText(text) {
  return text
    .replace(/\bSteür/g, "Steuer")
    .replace(/\bsteür/g, "steuer")
    .replace(/ue/g, "ü")
    .replace(/ae/g, "ä")
    .replace(/oe/g, "ö")
    .replace(/Ae/g, "Ä")
    .replace(/Ue/g, "Ü")
    .replace(/Oe/g, "Ö");
}

// Alle Dateien im content-Ordner durchgehen
fs.readdirSync(contentDir).forEach((file) => {
  const filePath = path.join(contentDir, file);

  if (file.endsWith(".md")) {
    let content = fs.readFileSync(filePath, "utf-8");
    const normalized = normalizeText(content);

    if (content !== normalized) {
      fs.writeFileSync(filePath, normalized, "utf-8");
      console.log(`✅ Datei korrigiert: ${file}`);
    } else {
      console.log(`ℹ️ Keine Änderungen: ${file}`);
    }
  }
});
