/**
 * fixFrontmatter.js
 * Fügt fehlende YAML-Header in allen Markdown-Dateien im /content Ordner hinzu
 * Nutzt die META:-Zeile, um title & meta zu erzeugen
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.resolve(__dirname, "../content");

function getMarkdownFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(dir, f));
}

function slugToTitle(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const files = getMarkdownFiles(CONTENT_DIR);
let changed = 0;

for (const file of files) {
  let text = fs.readFileSync(file, "utf-8");

  // Skip if YAML-Header schon vorhanden
  if (text.startsWith("---")) continue;

  const lines = text.split("\n");
  const metaLine = lines.find((l) => l.startsWith("META:"));
  const meta = metaLine ? metaLine.replace("META:", "").trim() : "";

  // Titel aus META oder aus Dateiname
  const title = meta
    ? meta.split("–")[0].trim()
    : slugToTitle(path.basename(file, ".md"));

  const today = new Date().toISOString().slice(0, 10);

  const header = `---\ntitle: "${title}"\ndate: ${today}\nmeta: "${meta}"\n---\n\n`;

  text = header + text;
  fs.writeFileSync(file, text, "utf-8");
  changed++;
  console.log(`✔ Header hinzugefügt: ${path.basename(file)}`);
}

if (changed === 0) {
  console.log("✅ Alle Dateien hatten bereits einen Header.");
} else {
  console.log(`✅ Fertig! ${changed} Datei(en) aktualisiert.`);
}
