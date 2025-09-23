// checkContent.js
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

function fixUmlauts(text) {
  return text
    // Vorsicht: nur "ae" ersetzen, wenn nicht Teil von "neue" usw.
    .replace(/\bAe/g, "Ä")
    .replace(/\bae/g, "ä")
    .replace(/\bOe/g, "Ö")
    .replace(/\boe/g, "ö")
    .replace(/\bUe/g, "Ü")
    .replace(/\bue/g, "ü");
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walkDir(filepath, callback);
    } else {
      callback(filepath);
    }
  });
}

walkDir(contentDir, (file) => {
  if (file.endsWith(".md")) {
    let content = fs.readFileSync(file, "utf8");
    const fixed = fixUmlauts(content);
    if (content !== fixed) {
      console.log(`✅ Fixing Umlaute in: ${file}`);
      fs.writeFileSync(file, fixed, "utf8");
    }
  }
});
