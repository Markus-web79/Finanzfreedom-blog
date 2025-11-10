// scripts/generateArticle.js
// 🧠 FinanzFreedom – Automatische Artikelerstellung (SEO-optimiert & stabil v3.2)

import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";
import matter from "gray-matter";

// 🏷️ SEO-Titeloptimierung
function enhanceTitle(title) {
  const year = new Date().getFullYear();
  const words = ["beste", "clevere", "aktuelle", "beliebteste", "smarte"];
  const pick = words[Math.floor(Math.random() * words.length)];
  if (title.toLowerCase().includes("vergleich")) {
    return `${title} – ${pick} Anbieter ${year}`;
  }
  return `${title}: ${pick} Strategien & Tipps ${year}`;
}

// 🎯 Themenpool
const THEMEN = [
  "ETF-Sparplan für Einsteiger",
  "Versicherungen verstehen und sparen",
  "Finanzielle Freiheit erreichen – so geht’s",
  "Inflation verstehen: Warum dein Geld an Wert verliert",
  "Nebenjob-Ideen für mehr passives Einkommen",
  "Sparen für die Zukunft: Kinder, Ausbildung, Rente",
  "Kryptowährungen und ETFs – Chancen & Risiken",
  "Schulden abbauen mit System",
  "Wie du dein Gehalt clever investierst",
  "Die größten Anfängerfehler beim Investieren vermeiden",
];

// 🎯 Kategorie bestimmen
function getCategory(title) {
  const t = title.toLowerCase();
  if (t.includes("etf") || t.includes("aktie")) return "etfs";
  if (t.includes("versicherung")) return "versicherungen";
  if (t.includes("geld") || t.includes("sparen") || t.includes("einkommen")) return "geld-anlegen";
  if (t.includes("steuer") || t.includes("tipps")) return "wissen";
  return "allgemein";
}

// 📄 Content-Generator
function generateContent(title) {
  return `# ${title}

## Warum dieses Thema wichtig ist
${title} betrifft jeden von uns. Mit dem richtigen Wissen kannst du langfristig Vermögen aufbauen und typische Fehler vermeiden.

## Grundlagen einfach erklärt
Ein solider Einstieg ist entscheidend. Verstehe zuerst die Basis, bevor du Geld investierst oder Verträge abschließt.

## Schritt-für-Schritt Anleitung
1. Analysiere deine aktuelle Situation.
2. Lege klare Ziele fest – kurz-, mittel- und langfristig.
3. Nutze Tools und Vergleiche auf **FinanzFreedom**, um fundierte Entscheidungen zu treffen.
4. Bleib konsequent – kleine, regelmäßige Schritte führen zu Erfolg.

## Fazit
${title} ist kein Hexenwerk, sondern Wissen, das jeder erlernen kann. Nutze die Inhalte auf **FinanzFreedom**, um deine Finanzen selbst in die Hand zu nehmen.`;
}

// 🏗️ Hauptfunktion
function generateArticle() {
  const rawTitle = THEMEN[Math.floor(Math.random() * THEMEN.length)];
  const title = enhanceTitle(rawTitle);
  const category = getCategory(title);
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const folder = path.join(process.cwd(), "content", category);
  const filePath = path.join(folder, `${slug}.md`);
  if (!existsSync(folder)) mkdirSync(folder, { recursive: true });

  const content = generateContent(title);
  const frontmatter = matter.stringify(content, {
    title,
    description: `${title} – verständlich erklärt auf FinanzFreedom.`,
    date: new Date().toISOString(),
    category,
  });

  writeFileSync(filePath, frontmatter);
  console.log(`✅ Neuer Artikel erstellt: ${filePath}`);
}

try {
  generateArticle();
  console.log("🧠 Artikel erfolgreich generiert!");
} catch (err) {
  console.error("❌ Fehler beim Artikelgenerator:", err);
  process.exit(1);
}
