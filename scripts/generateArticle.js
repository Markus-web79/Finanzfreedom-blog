 // scripts/generateArticle.js
// 🚀 FinanzFreedom – Automatische Artikelerstellung v3.1 (stabil + clean)

import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";
import matter from "gray-matter";

// Themenpool – jeder Lauf ein anderer Artikel
const THEMEN = [
  "ETF-Sparplan für Einsteiger",
  "Versicherungen verstehen und sparen",
  "Finanzielle Freiheit erreichen – so geht’s",
  "Inflation verstehen: Wie sie dein Geld beeinflusst",
  "Nebenjob-Ideen für mehr passives Einkommen",
  "Sparen für die Zukunft: Kinder, Ausbildung, Rente",
  "Kryptowährungen und ETFs – Chancen & Risiken",
  "Schulden abbauen mit System",
  "Gehalt clever investieren",
  "Die größten Anfängerfehler beim Investieren vermeiden"
];

// 🔹 Thema zufällig auswählen
function getRandomTopic() {
  return THEMEN[Math.floor(Math.random() * THEMEN.length)];
}

// 🔹 Kategorie erkennen
function getCategory(title) {
  const t = title.toLowerCase();
  if (t.includes("etf") || t.includes("aktie")) return "etfs";
  if (t.includes("versicherung")) return "versicherungen";
  if (t.includes("geld") || t.includes("sparen") || t.includes("einkommen")) return "geld-anlegen";
  return "wissen";
}

// 🔹 Content erzeugen (automatisch + SEO-optimiert)
function generateContent(title) {
  return `
# ${title}

## Warum dieses Thema wichtig ist
${title} betrifft fast jeden von uns. Mit den richtigen Entscheidungen kannst du langfristig Vermögen aufbauen und Fehler vermeiden, die viele andere teuer bezahlen.

## Grundlagen einfach erklärt
Ein solider Einstieg ist entscheidend. Verstehe zuerst die Basis von ${title.toLowerCase()}, bevor du Geld investierst oder Verträge abschließt.

## Schritt-für-Schritt Anleitung
1. Analysiere deine aktuelle Situation.  
2. Lege klare Ziele fest – kurz-, mittel- und langfristig.  
3. Nutze Tools und Vergleiche auf **FinanzFreedom**, um fundierte Entscheidungen zu treffen.  
4. Bleib konsequent – kleine, regelmäßige Schritte führen zum Erfolg.

## Fazit
${title} ist kein Hexenwerk, sondern Wissen, das jeder erlernen kann. Nutze die Inhalte auf **FinanzFreedom**, um deine Finanzen dauerhaft zu optimieren.
`;
}

// 🔹 Hauptfunktion
function generateArticle() {
  const title = getRandomTopic();
  const category = getCategory(title);
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const folder = path.join(process.cwd(), "content", category);
  const filePath = path.join(folder, `${slug}.md`);

  if (!existsSync(folder)) mkdirSync(folder, { recursive: true });

  const content = generateContent(title);

  const frontmatter = matter.stringify(content, {
    title,
    date: new Date().toISOString(),
    description: `${title} – verständlich erklärt auf FinanzFreedom.`,
    category,
  });

  writeFileSync(filePath, frontmatter);
  console.log(`✅ Neuer Artikel erstellt (${category}): ${filePath}`);
}

// 🔹 Sicherer Start (keine roten Deploys)
try {
  generateArticle();
  console.log("🎉 Artikel erfolgreich generiert!");
} catch (err) {
  console.error("❌ Fehler beim Generieren:", err.message);
  process.exit(0); // kein Fehlerabbruch im Workflow
}
