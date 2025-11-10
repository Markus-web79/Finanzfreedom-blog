// scripts/generateComparison.js
// 🚀 FinanzFreedom – Automatische Vergleichstabellenerstellung v1.0

import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";
import matter from "gray-matter";

// Vergleichsthemen-Pool
const VERGLEICHE = [
  {
    titel: "ETF-Broker Vergleich 2025 – Die besten Anbieter im Überblick",
    kategorie: "etfs",
    spalten: ["Anbieter", "Depotgebühr", "Orderkosten", "ETF-Angebot", "Besonderheiten"],
    daten: [
      ["Scalable Capital", "0 €", "ab 0,99 €", "1.900+", "Günstige Sparpläne"],
      ["Trade Republic", "0 €", "1 €", "1.500+", "App-basiert, einfach"],
      ["Comdirect", "0 €", "3,90 €", "1.200+", "Hohe Sicherheit, klassische Bank"],
    ],
  },
  {
    titel: "Kreditkarten Vergleich 2025 – Die besten kostenlosen Karten",
    kategorie: "vergleiche",
    spalten: ["Karte", "Jahresgebühr", "Auslandseinsatz", "Vorteile", "Bewertung"],
    daten: [
      ["N26 Mastercard", "0 €", "1,7 %", "Moderne App, Echtzeitkontrolle", "⭐⭐⭐⭐⭐"],
      ["DKB Visa", "0 €", "0 % (ab Aktivkunde)", "Gute Konditionen, weltweit nutzbar", "⭐⭐⭐⭐"],
      ["Barclays Visa", "0 €", "1,99 %", "Ratenzahlung möglich", "⭐⭐⭐"],
    ],
  },
  {
    titel: "Tagesgeld Vergleich 2025 – Zinsen im Überblick",
    kategorie: "geld-anlegen",
    spalten: ["Bank", "Zinssatz", "Einlagensicherung", "Zinsgarantie", "Besonderheiten"],
    daten: [
      ["ING", "3,6 %", "100.000 €", "6 Monate", "Bekannte Direktbank"],
      ["Renault Bank", "3,9 %", "100.000 €", "3 Monate", "Hohe Zinsen, schnelle Eröffnung"],
      ["C24 Bank", "4,0 %", "100.000 €", "4 Monate", "FinTech mit Bonusaktionen"],
    ],
  },
];

// 🔹 Funktion zum Erstellen einer Markdown-Tabelle
function createMarkdownTable(spalten, daten) {
  const header = `| ${spalten.join(" | ")} |`;
  const separator = `| ${spalten.map(() => "---").join(" | ")} |`;
  const rows = daten.map(row => `| ${row.join(" | ")} |`).join("\n");
  return `${header}\n${separator}\n${rows}`;
}

// 🔹 Vergleich zufällig wählen
function getRandomComparison() {
  return VERGLEICHE[Math.floor(Math.random() * VERGLEICHE.length)];
}

// 🔹 Hauptfunktion
function generateComparison() {
  const comp = getRandomComparison();
  const slug = comp.titel.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const folder = path.join(process.cwd(), "content", comp.kategorie);
  const filePath = path.join(folder, `${slug}.md`);

  if (!existsSync(folder)) mkdirSync(folder, { recursive: true });

  const markdownTable = createMarkdownTable(comp.spalten, comp.daten);
  const content = `
# ${comp.titel}

${markdownTable}

## Fazit
Dieser Vergleich wurde automatisch erstellt und wird regelmäßig aktualisiert.  
Auf **FinanzFreedom** findest du immer die neuesten Anbieter, Zinsen und Konditionen.
`;

  const frontmatter = matter.stringify(content, {
    title: comp.titel,
    date: new Date().toISOString(),
    description: `${comp.titel} – automatisch aktualisierter Vergleich auf FinanzFreedom.`,
    category: comp.kategorie,
  });

  writeFileSync(filePath, frontmatter);
  console.log(`📊 Neuer Vergleich erstellt (${comp.kategorie}): ${filePath}`);
}

// 🔹 Skript starten
try {
  generateComparison();
  console.log("✅ Vergleich erfolgreich erstellt!");
} catch (err) {
  console.error("❌ Fehler beim Erstellen des Vergleichs:", err.message);
  process.exit(0);
}
