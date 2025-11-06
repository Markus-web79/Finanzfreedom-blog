// scripts/checkGrammar.js
import fs from "fs";
import path from "path";

/**
 * Prüft einfache Grammatik- und Schreibfehler in Markdown-Dateien.
 * (Platzhalter, kann später KI-gestützt erweitert werden)
 */
export function checkGrammar(content) {
  const issues = [];

  // Beispiel-Checks:
  if (content.includes("  ")) {
    issues.push("Doppelte Leerzeichen gefunden");
  }
  if (content.includes("..")) {
    issues.push("Mehrere Punkte hintereinander entdeckt");
  }

  return issues;
}

/**
 * Läuft durch alle Markdown-Dateien im content/-Ordner
 * und protokolliert einfache Grammatik-Checks.
 */
export function runGrammarCheck() {
  const contentDir = path.join(process.cwd(), "content");
  const entries = fs.readdirSync(contentDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".md")) {
      const filePath = path.join(contentDir, entry.name);
      const text = fs.readFileSync(filePath, "utf-8");
      const issues = checkGrammar(text);

      if (issues.length > 0) {
        console.log(`⚠️ Probleme in ${entry.name}:`, issues);
      } else {
        console.log(`✅ Keine Probleme in ${entry.name}.`);
      }
    }
  }

  console.log("✅ Grammar-Check abgeschlossen.");
}

// ⬇️ Wichtig: Export, damit generateArticle.js es nutzen kann
export default checkGrammar;
