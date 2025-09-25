// checkContent.js
const fs = require("fs");
const path = require("path");

// Ordner mit den Artikeln
const contentDir = path.join(__dirname, "content");

// Liste einfacher Korrekturen (Rechtschreibung & Umlaute)
const corrections = [
  { wrong: /Steür/g, right: "Steuer" },
  { wrong: /steür/g, right: "steuer" },
  { wrong: /Steürn/g, right: "Steuern" },
  { wrong: /Vermoegen/g, right: "Vermögen" },
  { wrong: /vermoegen/g, right: "vermögen" },
  { wrong: /Fuehren/g, right: "Führen" },
  { wrong: /fuehren/g, right: "führen" },
  { wrong: /Oekonomie/g, right: "Ökonomie" },
  { wrong: /oekonomie/g, right: "ökonomie" },
  { wrong: /paßiv/g, right: "passiv" },
  { wrong: /ßich/g, right: "sich" },
  { wrong: /auß/g, right: "aus" },
  { wrong: /daß/g, right: "dass" },
  { wrong: /muß/g, right: "muss" },
  { wrong: /Strate?gieen/g, right: "Strategien" },
];

// Hilfsfunktion: Text korrigieren
function correctText(text) {
  let newText = text;
  corrections.forEach(({ wrong, right }) => {
    newText = newText.replace(wrong, right);
  });
  return newText;
}

// Alle .md-Dateien im content-Ordner einlesen
fs.readdirSync(contentDir).forEach((file) => {
  if (file.endsWith(".md")) {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, "utf-8");
    const corrected = correctText(content);

    if (content !== corrected) {
      fs.writeFileSync(filePath, corrected, "utf-8");
      console.log(`✅ Korrigiert: ${file}`);
    } else {
      console.log(`ℹ️ Keine Änderungen: ${file}`);
    }
  }
});

console.log("🔍 Content-Check abgeschlossen.");
