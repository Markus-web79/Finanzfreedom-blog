import fs from "fs";
import path from "path";
import Typo from "typo-js";

const dictionary = new Typo("de_DE"); // Deutsches Wörterbuch

const contentDir = path.join(process.cwd(), "content");

// Hilfsfunktion: deutsche Umlaute ersetzen
function fixUmlaute(text) {
  return text
    .replace(/\bue\b/gi, "ü")
    .replace(/\boe\b/gi, "ö")
    .replace(/\bae\b/gi, "ä")
    .replace(/\bss\b/gi, "ß");
}

// Hilfsfunktion: Markdown-Überschriften korrigieren
function fixHeadings(text) {
  return text.replace(/(#+)([^\s#])/g, (_, hashes, title) => `${hashes} ${title}`);
}

// Hilfsfunktion: einfache Rechtschreibprüfung
function spellCheck(text) {
  return text
    .split(/\s+/)
    .map((word) => {
      if (!dictionary.check(word)) {
        let suggestions = dictionary.suggest(word);
        if (suggestions.length > 0) {
          return suggestions[0];
        }
      }
      return word;
    })
    .join(" ");
}

// Dateien durchgehen
fs.readdirSync(contentDir).forEach((file) => {
  if (file.endsWith(".md")) {
    let filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, "utf-8");

    let fixed = content;
    fixed = fixUmlaute(fixed);
    fixed = fixed.replace(/\s{2,}/g, " "); // doppelte Leerzeichen
    fixed = fixed.replace(/\n{3,}/g, "\n\n"); // zu viele Leerzeilen
    fixed = fixHeadings(fixed);
    fixed = spellCheck(fixed);

    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, "utf-8");
      console.log(`✅ Korrigiert: ${file}`);
    } else {
      console.log(`👌 Schon okay: ${file}`);
    }
  }
});
