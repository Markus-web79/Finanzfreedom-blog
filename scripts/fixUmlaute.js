// scripts/fixUmlaute.js
// ----------------------------------------------------
// FINANZFREEDOM - Automatische Slug-Bereinigung
// ----------------------------------------------------
// Entfernt Umlaute und Sonderzeichen in Dateinamen,
// behält aber Umlaute im sichtbaren Titel im Frontmatter.
// ----------------------------------------------------

import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

function sanitizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function fixUmlautFiles() {
  const files = fs.readdirSync(contentDir);
  const seen = new Set();

  for (const file of files) {
    const ext = path.extname(file);
    const base = path.basename(file, ext);
    const sanitized = sanitizeFilename(base) + ext;
    const oldPath = path.join(contentDir, file);
    const newPath = path.join(contentDir, sanitized);

    // Erkennung doppelter Dateien
    if (seen.has(sanitized)) {
      console.warn(`⚠️  Duplikat erkannt: ${file} → wird gelöscht`);
      fs.unlinkSync(oldPath);
      continue;
    }

    seen.add(sanitized);

    // Nur umbenennen, wenn nötig
    if (file !== sanitized) {
      fs.renameSync(oldPath, newPath);
      console.log(`✅ Umbenannt: ${file} → ${sanitized}`);
    }
  }

  console.log("🎯 Alle Dateinamen bereinigt und doppelte entfernt!");
}

// Starte den Prozess
fixUmlautFiles();
