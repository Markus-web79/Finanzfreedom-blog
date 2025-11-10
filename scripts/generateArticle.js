// scripts/generateArticle.js
// 🚀 FinanzFreedom – Automatische Artikelgenerierung v4.0 (SEO + OpenGraph ready)

import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";
import matter from "gray-matter";

// 🧠 SEO-Titeloptimierung
function enhanceTitle(title) {
  const year = new Date().getFullYear();
  const powerwords = ["beste", "clevere", "aktuellste", "smarte", "effektivste", "beliebteste"];
  const randomWord = powerwords[Math.floor(Math.random() * powerwords.length)];

  if (title.toLowerCase().includes("vergleich")) {
    return `${title} – ${randomWord} Anbieter ${year}`;
  }
  return `${title} – ${randomWord} Strategien & Tipps ${year}`;
}

// 🔍 SEO-Metadaten-Generator
function generateSEOMeta(title, category) {
  const year = new Date().getFullYear();
  const baseKeywords = [
    "Finanzwissen", "Finanzbildung", "Geldanlage", "Vermögensaufbau",
    "ETF", "Sparplan", "Finanzielle Freiheit", "Investment", "Vergleich", "Finanztipps"
  ];
  const categoryKeywords = {
    etfs: ["ETF Broker", "Sparplan", "Indexfonds", "Depot Vergleich"],
    versicherungen: ["Versicherungsvergleich", "Haftpflicht", "Hausrat", "Krankenversicherung"],
    geld: ["Zinsen", "Kreditkarte", "Tagesgeld", "Girokonto"]
  };

  const combinedKeywords = [
    ...baseKeywords,
    ...(categoryKeywords[category] || []),
    ...title.split(" ").filter(word => word.length > 3)
  ];

  const description = `${title} – Aktuelle Tipps und Strategien für ${category} im Jahr ${year}. `
    + `Lerne, wie du dein Geld clever anlegst und finanzielle Freiheit erreichst.`;

  const keywords = combinedKeywords
    .map(k => k.toLowerCase())
    .filter((v, i, a) => a.indexOf(v) === i)
    .slice(0, 20)
    .join(", ");

  return { description, keywords };
}

// 🌍 OpenGraph-Daten-Generator
function generateOpenGraph(title, description, category) {
  const urlSlug = title.toLowerCase().replace(/[^a-z0-9äöüß]+/g, "-").replace(/(^-|-$)/g, "");
  return {
    "og:title": title,
    "og:description": description,
    "og:type": "article",
    "og:url": `https://finanzfreedom.de/${category}/${urlSlug}`,
    "og:image": "https://finanzfreedom.de/og-default.jpg"
  };
}

// 🗂 Themenpools
const THEMEN = [
  "ETF-Sparplan für Einsteiger",
  "Versicherungen verstehen und sparen",
  "Finanzielle Freiheit erreichen – so geht’s",
  "Inflation verstehen: Warum dein Geld an Wert verliert",
  "Nebenjob Ideen für passives Einkommen",
  "Sparen für die Zukunft: Kinder, Ausbildung, Rente",
  "Kryptowährungen und ETFs – Chancen & Risiken",
  "Schulden abbauen mit System",
  "Wie du dein Gehalt clever investierst",
  "Die größten Anfängerfehler beim Investieren vermeiden"
];

// 🎯 Thema & Kategorie bestimmen
function getRandomTopic() {
  return THEMEN[Math.floor(Math.random() * THEMEN.length)];
}
function getCategory(title) {
  const t = title.toLowerCase();
  if (t.includes("etf") || t.includes("aktie")) return "etfs";
  if (t.includes("versicherung")) return "versicherungen";
  if (t.includes("geld") || t.includes("sparen") || t.includes("einkommen")) return "geld";
  return "wissen";
}

// ✍️ Artikelinhalt generieren
function generateContent(title) {
  return `# ${title}

## Warum dieses Thema wichtig ist
${title} betrifft fast jeden. Mit den richtigen Entscheidungen kannst du langfristig Vermögen aufbauen und Fehler vermeiden.

## Grundlagen einfach erklärt
Ein solider Einstieg ist entscheidend. Verstehe zuerst die Basis, bevor du investierst oder Verträge abschließt.

## Schritt-für-Schritt Anleitung
1. Analysiere deine aktuelle Situation.
2. Lege klare Ziele fest – kurz-, mittel- und langfristig.
3. Nutze Tools & Vergleiche auf **FinanzFreedom**, um fundierte Entscheidungen zu treffen.
4. Bleib konsequent – kleine, regelmäßige Schritte führen zum Erfolg.

## Fazit
${title} ist kein Hexenwerk. Nutze die Ressourcen auf **FinanzFreedom**, um deine finanzielle Zukunft aufzubauen.`;
}

// 🚀 Hauptfunktion
function generateArticle() {
  const baseTitle = getRandomTopic();
  const enhancedTitle = enhanceTitle(baseTitle);
  const category = getCategory(baseTitle);
  const seo = generateSEOMeta(enhancedTitle, category);
  const og = generateOpenGraph(enhancedTitle, seo.description, category);

  const slug = enhancedTitle.toLowerCase().replace(/[^a-z0-9äöüß]+/g, "-").replace(/(^-|-$)/g, "");
  const folder = path.join(process.cwd(), "content", category);
  const filePath = path.join(folder, `${slug}.md`);

  if (!existsSync(folder)) mkdirSync(folder, { recursive: true });

  const content = generateContent(enhancedTitle);
  const frontmatter = matter.stringify(content, {
    title: enhancedTitle,
    date: new Date().toISOString(),
    description: seo.description,
    keywords: seo.keywords,
    category,
    ...og
  });

  writeFileSync(filePath, frontmatter);
  console.log(`✅ Neuer Artikel generiert: ${filePath}`);
}

try {
  generateArticle();
  console.log("🧠 Artikel erfolgreich erstellt!");
} catch (err) {
  console.error("❌ Fehler beim Erstellen des Artikels:", err);
  process.exit(1);
}
