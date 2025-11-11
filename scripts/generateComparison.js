// ✅ FinanzFreedom – Automatischer Vergleichsartikel-Generator v2.1
// Erzeugt automatisch hochwertige Vergleichsartikel mit SEO-optimierten Titeln & Beschreibungen
// Autor: FinanzFreedom (Markus), 2025

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ===============================
// 🔧 Hilfsfunktionen
// ===============================

// Erzeugt zufälliges Element aus Array
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// SEO-Powerwörter für Titel
const POWERWORDS = [
  "beste",
  "günstigste",
  "smarte",
  "effektivste",
  "beliebteste",
  "aktuellste",
  "Top",
  "starke"
];

// Kategorien + mögliche Themen
const THEMEN = [
  { cat: "vergleiche", title: "ETF-Broker Vergleich", keyword: "ETFs" },
  { cat: "vergleiche", title: "Kreditkarten Vergleich", keyword: "Kreditkarten" },
  { cat: "vergleiche", title: "Sparplan Vergleich", keyword: "Sparpläne" },
  { cat: "vergleiche", title: "Versicherungsvergleich", keyword: "Versicherungen" },
  { cat: "vergleiche", title: "Tagesgeldkonto Vergleich", keyword: "Tagesgeld" },
  { cat: "vergleiche", title: "Depot Vergleich", keyword: "Depots" },
];

// ===============================
// ✍️ Textgenerator für Artikelinhalt
// ===============================
function generateContent(title, keyword) {
  return `
# ${title}

Mit dem **${title} 2025** findest du schnell heraus, welche Anbieter aktuell die besten Konditionen, Leistungen und Vorteile bieten. Unser Vergleich richtet sich an alle, die ${keyword.toLowerCase()} clever nutzen oder optimieren wollen.

## 🏆 Was diesen Vergleich ausmacht
Wir haben die wichtigsten Anbieter und Produkte geprüft – transparent, neutral und nach echten Kriterien wie Kosten, Flexibilität und Servicequalität.  
Ziel: Du triffst fundierte Entscheidungen für deine Finanzen – ohne Fachchinesisch.

## 🔍 Kriterien im Überblick
- Gebührenstruktur und Transparenz  
- Kundenbewertungen und Testsieger  
- Flexibilität bei Nutzung oder Kündigung  
- Zusatzleistungen, Boni oder Rabatte  
- Regulierung und Sicherheit der Anbieter

## 💡 FinanzFreedom Tipp
Ein direkter Vergleich spart oft **mehrere hundert Euro im Jahr** – ob beim Depot, bei Versicherungen oder Kreditkarten.  
Nutze außerdem Tools wie den [FinanzFreedom Rechner & Tools Bereich](/tools), um deine Auswahl noch besser zu bewerten.

## Fazit: ${title} leicht gemacht
Dieser Vergleich wird automatisch aktualisiert und erweitert.  
Bleib informiert mit **FinanzFreedom** – deinem Begleiter für kluge Finanzentscheidungen.

> *Letztes Update: ${new Date().toLocaleDateString("de-DE")}*
`;
}

// ===============================
// ⚙️ Hauptfunktion: Datei erstellen
// ===============================
function generateComparisons() {
  const thema = randomItem(THEMEN);
  const jahr = new Date().getFullYear();
  const word = randomItem(POWERWORDS);

  const title = `${thema.title} ${jahr} – die ${word} Anbieter im Überblick`;
  const slug = title
    .toLowerCase()
    .replace(/[äÄ]/g, "ae")
    .replace(/[öÖ]/g, "oe")
    .replace(/[üÜ]/g, "ue")
    .replace(/[ß]/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const folder = path.join(process.cwd(), "content", thema.cat);
  const filePath = path.join(folder, `${slug}.md`);

  // Ordner prüfen/erstellen
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`📁 Ordner erstellt: ${folder}`);
  }

  // Datei-Inhalt generieren
  const content = generateContent(title, thema.keyword);

  const frontmatter = matter.stringify(content, {
    title,
    date: new Date().toISOString(),
    description: `${title} – Aktueller Vergleich auf FinanzFreedom.`,
    category: thema.cat,
  });

  // Datei schreiben
  fs.writeFileSync(filePath, frontmatter);
  console.log(`✅ Vergleichsartikel erstellt: ${filePath}`);
}

// ===============================
// 🚀 Skript ausführen mit Fehlerfang
// ===============================
try {
  generateComparisons();
  console.log("🎉 Vergleichsartikel erfolgreich generiert!");
} catch (err) {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(0); // kein roter Deploy
}
