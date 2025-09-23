const fs = require("fs");
const path = require("path");

// Ordner mit Artikeln
const contentDir = path.join(__dirname, "content");

// Liste mit Korrekturen für Umlaute und typische Finanz-Tippfehler
const typoCorrections = {
  // Umlaute
  ae: "ä",
  oe: "ö",
  ue: "ü",
  Ae: "Ä",
  Oe: "Ö",
  Ue: "Ü",
  ss: "ß",

  // Kapitalerträge & Steuern
  kapitalertäge: "Kapitalerträge",
  kapitalertrage: "Kapitalerträge",
  kapitalertraege: "Kapitalerträge",
  sparerpauschbetrag: "Sparer-Pauschbetrag",
  abgeltungssteur: "Abgeltungssteuer",
  abgeltungssteuern: "Abgeltungssteuer",

  // Rendite & Gewinn
  rendiete: "Rendite",
  rendieten: "Renditen",
  gewinne: "Gewinne",
  verlus: "Verlust",
  verluste: "Verluste",

  // Börse & Aktien
  börsse: "Börse",
  boerse: "Börse",
  aktiën: "Aktien",
  aktiens: "Aktien",
  dividenen: "Dividenden",
  divedende: "Dividende",

  // Sparen & Investieren
  sparplanen: "Sparplänen",
  sparplann: "Sparplan",
  invstitieren: "Investieren",
  invstieren: "Investieren",

  // Inflation & Wirtschaft
  inflationn: "Inflation",
  inflazion: "Inflation",
  wirtschafts: "Wirtschaft",
  konjuktur: "Konjunktur",

  // Passives Einkommen
  "passivem einkommen": "Passivem Einkommen",
  "pasives einkommen": "Passives Einkommen",
  passiev: "Passiv",

  // Digitales & Krypto
  "bit coin": "Bitcoin",
  etherum: "Ethereum",
  "block chain": "Blockchain",
  cryptowährung: "Kryptowährung",
  nfts: "NFTs",
};

// Funktion zum Korrigieren von Text
function correctText(text) {
  let corrected = text;
  for (const [wrong, right] of Object.entries(typoCorrections)) {
    const regex = new RegExp(`\\b${wrong}\\b`, "gi");
    corrected = corrected.replace(regex, right);
  }
  return corrected;
}

// Alle Artikel prüfen und ggf. überschreiben
fs.readdirSync(contentDir).forEach((file) => {
  if (file.endsWith(".md")) {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, "utf-8");
    const newContent = correctText(content);

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, "utf-8");
      console.log(`✅ Korrigiert: ${file}`);
    } else {
      console.log(`ℹ️ Keine Änderungen: ${file}`);
    }
  }
});
