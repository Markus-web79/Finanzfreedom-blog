import fs from "fs";
import path from "path";

const contentDir = "./content";

// Funktion zur automatischen Korrektur
function fixContent(text) {
  return text
    .replace(/ae/g, "ä")
    .replace(/oe/g, "ö")
    .replace(/ue/g, "ü")
    .replace(/Ae/g, "Ä")
    .replace(/Oe/g, "Ö")
    .replace(/Ue/g, "Ü");
}

// Alle Markdown-Dateien im content-Ordner einlesen
fs.readdirSync(contentDir).forEach((file) => {
  if (file.endsWith(".md")) {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, "utf-8");

    const fixed = fixContent(content);

    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, "utf-8");
      console.log(`✅ Datei korrigiert: ${file}`);
    } else {
      console.log(`ℹ️ Keine Änderungen in: ${file}`);
    }
  }
});
