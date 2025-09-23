const fs = require("fs");
const path = require("path");

// Pfad zum content-Ordner
const contentDir = path.join(__dirname, "content");

// Funktion: Alle Dateien im content-Ordner prüfen
function checkContentFiles() {
  const files = fs.readdirSync(contentDir);

  files.forEach((file) => {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    console.log(`🔎 Prüfe: ${file}`);

    // Check 1: Enthält META
    if (!content.includes("META:")) {
      console.warn(`⚠️  WARNUNG: ${file} hat keine META-Zeile!`);
    }

    // Check 2: Hat eine H1-Überschrift (# ...)
    if (!content.match(/^# /m)) {
      console.warn(`⚠️  WARNUNG: ${file} hat keine Hauptüberschrift (# ...)`);
    }

    // Check 3: Korrigiere Schreibweise (ü statt ue, ö statt oe, ä statt ae)
    const corrected = content
      .replace(/ue/g, "ü")
      .replace(/oe/g, "ö")
      .replace(/ae/g, "ä");

    if (corrected !== content) {
      fs.writeFileSync(filePath, corrected, "utf-8");
      console.log(`✅ Schreibweise in ${file} korrigiert (ü/ö/ä).`);
    }
  });

  console.log("✨ Check abgeschlossen!");
}

// Script starten
checkContentFiles();
