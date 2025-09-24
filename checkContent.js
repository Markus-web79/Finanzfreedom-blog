import fs from "fs";
import path from "path";

// Wörterbuch laden
const dictionary = JSON.parse(fs.readFileSync("dictionary.json", "utf8"));

// Ordner mit Artikeln
const contentDir = path.join(process.cwd(), "content");

// Änderungen sammeln
let changes = [];

// Alle Dateien im content-Verzeichnis durchgehen
fs.readdirSync(contentDir).forEach((file) => {
  if (file.endsWith(".md")) {
    let filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, "utf8");
    let original = content;

    // Wörter ersetzen
    for (const [wrong, correct] of Object.entries(dictionary)) {
      const regex = new RegExp("\\b" + wrong + "\\b", "gi");
      if (regex.test(content)) {
        content = content.replace(regex, correct);
        changes.push(`${wrong} → ${correct} in ${file}`);
      }
    }

    // Datei nur überschreiben, wenn etwas geändert wurde
    if (content !== original) {
      fs.writeFileSync(filePath, content, "utf8");
    }
  }
});

// Änderungen für GitHub Actions ausgeben
if (changes.length > 0) {
  console.log("Gefundene & korrigierte Wörter:");
  changes.forEach(c => console.log("- " + c));
  // Ergebnis in eine Datei schreiben, damit der Workflow es ins Commit packen kann
  fs.writeFileSync("corrections.log", changes.join("\n"));
} else {
  console.log("Keine Fehler gefunden ✅");
}
