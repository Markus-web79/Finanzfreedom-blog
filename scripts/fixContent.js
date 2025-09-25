import fs from "fs";
import path from "path";

// Wörterbuch laden
const dictPath = path.join(process.cwd(), "dictionary.json");
const dictionary = JSON.parse(fs.readFileSync(dictPath, "utf8"));

// Funktion zum Ersetzen
function fixText(text, dictionary) {
  let fixed = text;
  for (const [wrong, correct] of Object.entries(dictionary)) {
    const regex = new RegExp(wrong, "gi");
    fixed = fixed.replace(regex, correct);
  }
  return fixed;
}

// Content-Ordner durchgehen
const contentDir = path.join(process.cwd(), "content");
const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"));

let changes = 0;

files.forEach((file) => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, "utf8");
  const fixed = fixText(content, dictionary);

  if (content !== fixed) {
    fs.writeFileSync(filePath, fixed, "utf8");
    console.log(`✅ Korrigiert: ${file}`);
    changes++;
  } else {
    console.log(`ℹ️ Keine Änderungen: ${file}`);
  }
});

if (changes === 0) {
  console.log("🎉 Alle Dateien waren schon korrekt.");
} else {
  console.log(`🔍 Fertig! ${changes} Dateien wurden korrigiert.`);
}
