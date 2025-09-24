const fs = require("fs");
const path = require("path");

// Ordner mit Artikeln
const CONTENT_DIR = path.join(__dirname, "content");

// Ersetzungen definieren
const replacements = [
  { wrong: "Steür", correct: "Steuer" },
  { wrong: "steür", correct: "steuer" },
  { wrong: "Vermoegen", correct: "Vermögen" },
  { wrong: "Fuehren", correct: "Führen" },
  { wrong: "Oekonomie", correct: "Ökonomie" },
  { wrong: "ue", correct: "ü" },
  { wrong: "oe", correct: "ö" },
  { wrong: "ae", correct: "ä" }
];

// Funktion: Alle Dateien im content-Ordner laden
function getMarkdownFiles(dir) {
  return fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
}

// Dateien durchgehen und Inhalte korrigieren
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let original = content;

  replacements.forEach(({ wrong, correct }) => {
    const regex = new RegExp(wrong, "g");
    content = content.replace(regex, correct);
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Korrigiert: ${filePath}`);
  } else {
    console.log(`ℹ️ Keine Änderungen: ${filePath}`);
  }
}

// Main-Run
function run() {
  const files = getMarkdownFiles(CONTENT_DIR);
  files.forEach((file) => fixFile(path.join(CONTENT_DIR, file)));
}

run();
