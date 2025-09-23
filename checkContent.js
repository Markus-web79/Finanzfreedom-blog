// checkContent.cjs
const fs = require("fs");
const path = require("path");

// Wörterbuch mit Korrekturen (kannst du erweitern)
const corrections = {
  "\\bteh\\b": "the",
  "\\brecieve\\b": "receive",
  "\\bfreedomm\\b": "freedom",
};

// Umlaute ersetzen (ue -> ü, ae -> ä, oe -> ö, ss bleibt gleich)
function replaceUmlauts(text) {
  return text
    .replace(/ae/g, "ä")
    .replace(/oe/g, "ö")
    .replace(/ue/g, "ü");
}

// Rechtschreibung korrigieren
function fixTypos(text) {
  for (const [wrong, correct] of Object.entries(corrections)) {
    const regex = new RegExp(wrong, "gi");
    text = text.replace(regex, correct);
  }
  return text;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  const original = content;
  content = replaceUmlauts(content);
  content = fixTypos(content);

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Korrigiert: ${filePath}`);
  } else {
    console.log(`ℹ️ Keine Änderungen: ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith(".md")) {
      processFile(fullPath);
    }
  });
}

console.log("🔍 Starte Content-Check...");
walkDir(path.join(__dirname, "content"));
console.log("✅ Content-Check abgeschlossen.");
