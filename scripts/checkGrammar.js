// scripts/checkGrammar.js
import { execSync } from "child_process";
import path from "path";
import fs from "fs";

const contentDir = path.join(process.cwd(), "content");

console.log("🔎 Starte LanguageTool-Prüfung…");

const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

if (files.length === 0) {
  console.log("Keine .md-Dateien gefunden.");
  process.exit(0);
}

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  console.log(`\n➡️  Prüfe: ${file}`);

  try {
    // German (de-DE) prüfen
    const output = execSync(
      `npx languagetool-cli --language de-DE "${filePath}"`,
      { encoding: "utf8" }
    );
    console.log(output.trim() || "✅ Keine Probleme gefunden.");
  } catch (err) {
    console.error("⚠️ Fehler bei", file, ":", err.stdout || err.message);
  }
});

console.log("\n✅ Grammar-Check abgeschlossen.");
export default checkGrammar;
