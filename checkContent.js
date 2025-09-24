// checkContent.js
import fs from "fs";

const dictionaryPath = "./cspell.json";

// Wörterbuch laden oder neu anlegen
let dictionary = { words: [] };
if (fs.existsSync(dictionaryPath)) {
  dictionary = JSON.parse(fs.readFileSync(dictionaryPath, "utf-8"));
}

// Standard-Korrekturen für Umlaute und typische Fehler
const replacements = {
  "Steür": "Steuer",
  "Steürn": "Steuern",
  "Steürsatz": "Steuersatz",
  "Steürzahler": "Steuerzahler",
  "Fuehren": "Führen",
  "Vermoegen": "Vermögen",
  "ueber": "über",
  "ae": "ä",
  "oe": "ö",
  "ue": "ü",
};

// Hilfsfunktion: Wörterbuch automatisch erweitern
function addToDictionary(word) {
  if (!dictionary.words.includes(word)) {
    dictionary.words.push(word);
    fs.writeFileSync(dictionaryPath, JSON.stringify(dictionary, null, 2));
    console.log(`📖 Neues Wort ins Wörterbuch aufgenommen: ${word}`);
  }
}

// Content-Dateien prüfen
const files = fs.readdirSync("./content");

files.forEach((file) => {
  if (!file.endsWith(".md")) return;

  let content = fs.readFileSync(`./content/${file}`, "utf-8");

  // Feste Korrekturen anwenden
  for (const [wrong, correct] of Object.entries(replacements)) {
    if (content.includes(wrong)) {
      content = content.replaceAll(wrong, correct);
      console.log(`✅ ${file}: "${wrong}" → "${correct}" ersetzt`);
    }
  }

  // Wörter durchgehen und ins Wörterbuch aufnehmen
  const words = content.split(/\W+/);
  words.forEach((word) => {
    if (word.length > 3 && !dictionary.words.includes(word)) {
      addToDictionary(word);
    }
  });

  fs.writeFileSync(`./content/${file}`, content);
});
