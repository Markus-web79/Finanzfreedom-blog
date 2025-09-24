import fs from "fs";
import path from "path";

const contentDir = "./content";

// Funktion: Umlaute ersetzen (aber Steuern-Logik beachten)
function fixUmlauts(text) {
  return text
    // Umlaute
    .replace(/\bae/g, "ä")
    .replace(/\boe/g, "ö")
    .replace(/\bue/g, "ü")
    // Steuer-Fälle explizit korrekt halten
    .replace(/Steürn/g, "Steuern")
    .replace(/Steür/g, "Steuer")
    .replace(/Besteürung/g, "Besteuerung");
}

// Alle Dateien durchgehen
fs.readdirSync(contentDir).forEach((file) => {
  if (file.endsWith(".md")) {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, "utf8");

    const fixed = fixUmlauts(content);

    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, "utf8");
      console.log(`✔ Korrigiert: ${file}`);
    } else {
      console.log(`OK: ${file}`);
    }
  }
});
