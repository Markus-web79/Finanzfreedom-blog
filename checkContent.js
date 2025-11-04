// checkContent.js – ES-Module kompatibel
// scripts/checkContent.js
// ----------------------------------------------------
// FINANZFREEDOM Content Checker & Slug-Sanitizer
// ----------------------------------------------------

import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

// ✅ Funktion: Bereinigt Slugs (keine Umlaute, keine Sonderzeichen)
function sanitizeSlug(slug) {
  return slug
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ✅ Funktion: Benennt Dateien automatisch korrekt um
function fixContentFiles() {
  const files = fs.readdirSync(contentDir);

  for (const file of files) {
    const oldPath = path.join(contentDir, file);
    const ext = path.extname(file);
    const base = path.basename(file, ext);

    const sanitized = sanitizeSlug(base) + ext;

    if (file !== sanitized) {
      const newPath = path.join(contentDir, sanitized);
      fs.renameSync(oldPath, newPath);
      console.log(`✅ Renamed: ${file} → ${sanitized}`);
    }
  }
}

// ✅ Funktion: Prüft, ob Dateien korrekt formatiert sind (z. B. keine leeren Artikel)
function checkFiles() {
  const files = fs.readdirSync(contentDir);
  let hasError = false;

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    if (content.trim().length < 50) {
      console.error(`⚠️  Datei zu kurz oder leer: ${file}`);
      hasError = true;
    }

    if (!file.endsWith(".md") && !file.endsWith(".mdx")) {
      console.error(`⚠️  Ungültiges Dateiformat: ${file}`);
      hasError = true;
    }
  }

  if (hasError) {
    console.error("🚫 Fehler im Content gefunden. Bitte prüfen!");
    process.exit(1);
  } else {
    console.log("✅ Alle Inhalte geprüft und bereit für Deploy!");
  }
}

// ----------------------------------------------------
// Ablauf: 1️⃣ Slugs fixen → 2️⃣ Dateien prüfen
// ----------------------------------------------------
console.log("🔍 Starte FinanzFreedom Content-Check...");
fixContentFiles();
checkFiles();
console.log("🎯 Check abgeschlossen – alles bereit!");
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
