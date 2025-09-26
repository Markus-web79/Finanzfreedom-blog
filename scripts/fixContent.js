// scripts/fixContent.js – ES-Module-Variante

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Hilfsvariablen für Pfade
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, "..", "content");

// --- Wörterbuch mit typischen Fehlern ---
const corrections = {
  "paßiv": "passiv",
  "paßives": "passives",
  "paßivem": "passivem",
  "läßt": "lässt",
  "muß": "muss",
  "mußt": "musst",
  "aufbaün": "aufbauen",
  "aufbaün.": "aufbauen.",
  "qülle": "quelle",
  "Qüllen": "Quellen",
  "neü": "neu",
  "steür": "steuer",
  "steüren": "steuern",
  "solizuschlag": "solidaritätszuschlag",
  "sparerpauschbetrag": "sparer-pauschbetrag"
  // … hier kannst du beliebig ergänzen
};

// --- Hilfsfunktion für den Textaustausch ---
function fixText(text) {
  let result = text;
  for (const [wrong, right] of Object.entries(corrections)) {
    const regex = new RegExp(wrong, "gi");
    result = result.replace(regex, right);
  }
  return result;
}

// --- Alle .md-Dateien im content-Ordner korrigieren ---
function fixAllFiles() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));
  let changed = 0;

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const original = fs.readFileSync(filePath, "utf8");
    const fixed = fixText(original);
    if (fixed !== original) {
      fs.writeFileSync(filePath, fixed, "utf8");
      console.log(`✔ Korrigiert: ${file}`);
      changed++;
    }
  }

  if (changed === 0) {
    console.log("Keine Änderungen erforderlich ✅");
  } else {
    console.log(`Fertig! ${changed} Datei(en) korrigiert.`);
  }
}

// --- Start ---
fixAllFiles();
