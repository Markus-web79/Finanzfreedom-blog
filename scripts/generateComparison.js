// scripts/generateComparison.js
// 🔥 Automatische Vergleichsartikel-Erstellung mit SEO-Titel & Kategorien

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 🧠 SEO-Optimierung für Vergleichstitel
function enhanceComparisonTitle(title, category) {
  const year = new Date().getFullYear();
  const modifiers = ["Top", "Beste", "Empfohlene", "Beliebteste", "Smarteste", "Günstigste"];
  const randomWord = modifiers[Math.floor(Math.random() * modifiers.length)];

  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return `${randomWord} ${formattedCategory} ${year} – ${title}`;
}

// 🏷 Themenbereiche für Vergleiche
const COMPARISON_TOPICS = {
  etfs: [
    "ETF-Broker Vergleich",
    "ETF-Sparplan Vergleich",
    "Online Broker Gebühren",
    "ETF-Plattformen im Überblick"
  ],
  versicherungen: [
    "KFZ-Versicherung Vergleich",
    "Haftpflichtversicherung im Test",
    "Hausratversicherung Vergleich",
    "Private Krankenversicherung Anbieter"
  ],
  geld: [
    "Tagesgeldkonto Vergleich",
    "Kreditkarten Anbieter 2025",
    "Beste Girokonten im Überblick",
    "Zinsvergleich für Sparer"
  ]
};

// 🔍 Hilfsfunktion: zufälliges Thema & Kategorie bestimmen
function getRandomCategory() {
  const keys = Object.keys(COMPARISON_TOPICS);
  return keys[Math.floor(Math.random() * keys.length)];
}

function getRandomTopic(category) {
  const topics = COMPARISON_TOPICS[category];
  return topics[Math.floor(Math.random() * topics.length)];
}

// 🧩 Artikelinhalt generieren
function generateComparisonContent(title, category) {
  const year = new Date().getFullYear();

  return `# ${title}

## Einführung
In diesem Vergleich zeigen wir dir die ${category} mit den besten Konditionen, Vorteilen und Erfahrungen.  
Unsere Auswertung hilft dir, ${category === "etfs" ? "den richtigen Broker für deinen ETF-Sparplan" : "den besten Anbieter für deine Bedürfnisse"} zu finden.

## Wichtigste Kriterien
- Gebührenstruktur und Transparenz  
- Benutzerfreundlichkeit und mobile Nutzung  
- Sicherheit und Regulierung  
- Kundenservice und Bewertungen  

## Unsere Empfehlung (${year})
Nach Auswertung mehrerer Anbieter empfehlen wir:  
**${title}** als starken Einstiegspunkt für dein finanzielles Wachstum.

> Tipp: Vergleiche regelmäßig die Konditionen, da sich Gebühren und Zinsen ändern können.

## Fazit
${title} – Vergleiche regelmäßig und nutze die Tools auf **FinanzFreedom**,  
um dein Geld effizient und sicher zu verwalten.  
`;
}

// 🧱 Hauptfunktion
function generateComparison() {
  const category = getRandomCategory();
  const topic = getRandomTopic(category);
  const enhancedTitle = enhanceComparisonTitle(topic, category);

  const slug = enhancedTitle
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const folder = path.join(process.cwd(), "content", category);
  const filePath = path.join(folder, `${slug}.md`);

  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

  const content = generateComparisonContent(enhancedTitle, category);

  // 🧾 Frontmatter (Metadaten)
  const frontmatter = matter.stringify(content, {
    title: enhancedTitle,
    date: new Date().toISOString(),
    description: `${enhancedTitle} – Aktueller ${category}-Vergleich ${new Date().getFullYear()} auf FinanzFreedom.`,
    category,
  });

  fs.writeFileSync(filePath, frontmatter);
  console.log(`✅ Neuer Vergleichsartikel generiert: ${filePath}`);
}

// 🚀 Skript starten
try {
  generateComparison();
  console.log("🎯 Vergleich erfolgreich erstellt!");
} catch (err) {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
}
