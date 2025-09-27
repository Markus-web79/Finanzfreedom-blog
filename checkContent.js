// checkContent.js – ES-Module kompatibel

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Pfad-Helfer (da ES-Module kein __dirname haben)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// content-Ordner
const contentDir = path.join(__dirname, "content");

// --- Dateien prüfen ---
function checkContent() {
  console.log("🔍 Starte Content-Check...");

  if (!fs.existsSync(contentDir)) {
    console.log("❌ Kein content-Ordner gefunden.");
    process.exit(1);
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  if (files.length === 0) {
    console.log("⚠️ Keine Markdown-Dateien im content-Ordner gefunden.");
    return;
  }

  let totalIssues = 0;

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const text = fs.readFileSync(filePath, "utf8");

    // Beispiel-Prüfung: leere Datei
    if (!text.trim()) {
      console.log(`⚠️ ${file}: Datei ist leer`);
      totalIssues++;
    }
    // Beispiel-Prüfung: META-Zeile vorhanden?
    if (!text.includes("META:")) {
      console.log(`⚠️ ${file}: META-Zeile fehlt`);
      totalIssues++;
    }
  }

  if (totalIssues === 0) {
    console.log("✅ Keine Fehler gefunden oder bereits behoben.");
  } else {
    console.log(`🚩 Insgesamt ${totalIssues} potenzielle Probleme gefunden.`);
  }
}

checkContent();
