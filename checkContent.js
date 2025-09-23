const fs = require("fs");
const path = require("path");

function fixText(text) {
  // Ersetzungen für Umlaute
  text = text.replace(/\bue\b/g, "ü")
             .replace(/\bUe\b/g, "Ü")
             .replace(/\boe\b/g, "ö")
             .replace(/\bOe\b/g, "Ö")
             .replace(/\bae\b/g, "ä")
             .replace(/\bAe\b/g, "Ä");

  // Allgemeiner: auch mitten im Wort ersetzen
  text = text.replace(/ue/g, "ü")
             .replace(/Ue/g, "Ü")
             .replace(/oe/g, "ö")
             .replace(/Oe/g, "Ö")
             .replace(/ae/g, "ä")
             .replace(/Ae/g, "Ä");

  // Doppelte Leerzeichen entfernen
  text = text.replace(/ {2,}/g, " ");

  // Sicherstellen, dass META-Zeile oben ist
  if (!text.startsWith("META:")) {
    text = "META: Bitte META-Beschreibung ergänzen\n\n" + text;
  }

  return text;
}

function checkContent() {
  const contentDir = path.join(process.cwd(), "content");

  if (!fs.existsSync(contentDir)) {
    console.error("❌ Ordner 'content/' nicht gefunden!");
    process.exit(1);
  }

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  if (files.length === 0) {
    console.log("⚠️ Keine Markdown-Dateien in 'content/' gefunden.");
    return;
  }

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    let text = fs.readFileSync(filePath, "utf-8");

    const fixed = fixText(text);

    if (fixed !== text) {
      fs.writeFileSync(filePath, fixed, "utf-8");
      console.log(`✅ ${file} wurde korrigiert`);
    } else {
      console.log(`ℹ️ ${file} war bereits in Ordnung`);
    }
  }
}

checkContent();
