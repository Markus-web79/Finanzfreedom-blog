// scripts/generateComparison.js
// ⚙️ Automatischer Vergleichsartikel-Generator (SEO + OpenGraph + Auto-Kategorie)

import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";
import matter from "gray-matter";

// 🔍 SEO + Jahr-Erweiterung
function enhanceComparisonTitle(title, category) {
  const year = new Date().getFullYear();
  const modifiers = ["Top", "Beste", "Empfohlene", "Beliebteste", "Günstigste", "Smarteste"];
  const randomWord = modifiers[Math.floor(Math.random() * modifiers.length)];
  return `${randomWord} ${title} ${year}`;
}

// SEO-Metadaten
function generateSEOMeta(title, category) {
  const year = new Date().getFullYear();
  const description = `${title} – Aktuelle Anbieter, Gebühren und Vorteile im ${category}-Vergleich ${year}.`;
  const keywords = `${title}, ${category}, Vergleich, Finanztipps, ${year}, Anbieter, Testsieger, FinanzFreedom`;
  return { description, keywords };
}

// OpenGraph
function generateOpenGraph(title, description, category) {
  const urlSlug = title.toLowerCase().replace(/[^a-z0-9äöüß]+/g, "-").replace(/(^-|-$)/g, "");
  return {
    "og:title": title,
    "og:description": description,
    "og:type": "article",
    "og:url": `https://finanzfreedom.de/${category}/${urlSlug}`,
    "og:image": "https://finanzfreedom.de/og-compare.jpg"
  };
}

// Themenpool
const COMPARISON_TOPICS = {
  etfs: ["ETF-Broker Vergleich", "ETF-Sparplan Anbieter", "Depotkosten im Vergleich"],
  versicherungen: ["KFZ-Versicherung", "Haftpflichtversicherung", "Hausratversicherung"],
  geld: ["Kreditkarten Anbieter", "Tagesgeldkonto Vergleich", "Girokonto 2025"]
};

function getRandomCategory() {
  const keys = Object.keys(COMPARISON_TOPICS);
  return keys[Math.floor(Math.random() * keys.length)];
}
function getRandomTopic(category) {
  const topics = COMPARISON_TOPICS[category];
  return topics[Math.floor(Math.random() * topics.length)];
}

// Inhalt
function generateComparisonContent(title, category) {
  const year = new Date().getFullYear();
  return `# ${title}

## Überblick
In diesem ${category}-Vergleich ${year} zeigen wir dir die besten Anbieter, deren Konditionen und unsere Empfehlungen.

## Wichtige Kriterien
- Kosten & Gebührenstruktur  
- Benutzerfreundlichkeit & mobile Nutzung  
- Sicherheit & Regulierung  
- Kundenservice & Bewertungen  

## Unsere Empfehlung (${year})
**${title}** bietet im ${category}-Bereich starke Leistungen mit fairen Konditionen.  

## Fazit
Vergleiche regelmäßig deine Anbieter und nutze **FinanzFreedom**, um auf dem Laufenden zu bleiben.`;
}

// Hauptfunktion
function generateComparison() {
  const category = getRandomCategory();
  const topic = getRandomTopic(category);
  const title = enhanceComparisonTitle(topic, category);
  const seo = generateSEOMeta(title, category);
  const og = generateOpenGraph(title, seo.description, category);

  const slug = title.toLowerCase().replace(/[^a-z0-9äöüß]+/g, "-").replace(/(^-|-$)/g, "");
  const folder = path.join(process.cwd(), "content", category);
  const filePath = path.join(folder, `${slug}.md`);

  if (!existsSync(folder)) mkdirSync(folder, { recursive: true });

  const content = generateComparisonContent(title, category);
  const frontmatter = matter.stringify(content, {
    title,
    date: new Date().toISOString(),
    description: seo.description,
    keywords: seo.keywords,
    category,
    ...og
  });

  writeFileSync(filePath, frontmatter);
  console.log(`✅ Neuer Vergleichsartikel erstellt: ${filePath}`);
}

try {
  generateComparison();
  console.log("📊 Vergleich erfolgreich erstellt!");
} catch (err) {
  console.error("❌ Fehler beim Vergleichsgenerator:", err);
  process.exit(1);
}
