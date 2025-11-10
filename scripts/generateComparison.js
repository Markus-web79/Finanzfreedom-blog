// scripts/generateComparison.js
// ⚖️ FinanzFreedom – Vergleichsgenerator v2.0

import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";
import matter from "gray-matter";

const VERGLEICHE = [
  "ETF-Anbieter Vergleich",
  "Kreditkarten Vergleich",
  "Tagesgeldkonto Vergleich",
  "Berufsunfähigkeitsversicherung Vergleich",
  "Kfz-Versicherung Vergleich",
  "Hausratversicherung Vergleich",
  "Depot Vergleich",
];

function generateComparisonContent(title) {
  return `# ${title}

## Überblick
In diesem ${title} zeigen wir dir die wichtigsten Anbieter, Konditionen und worauf du achten solltest.

## Kriterien im Vergleich
- Gebühren und Kosten
- Leistungen und Servicequalität
- Benutzerfreundlichkeit
- Sicherheit und Regulierung

## Empfehlung
Vergleiche regelmäßig, um die besten Konditionen zu erhalten. Nutze Tools und Partnerlinks auf **FinanzFreedom**, um deinen optimalen Anbieter zu finden.

## Fazit
Der ${title} wird laufend aktualisiert, um dir aktuelle und faire Marktübersichten zu bieten.`;
}

function generateComparison() {
  const title = VERGLEICHE[Math.floor(Math.random() * VERGLEICHE.length)];
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const folder = path.join(process.cwd(), "content", "vergleiche");
  const filePath = path.join(folder, `${slug}.md`);

  if (!existsSync(folder)) mkdirSync(folder, { recursive: true });

  const content = generateComparisonContent(title);
  const frontmatter = matter.stringify(content, {
    title,
    description: `${title} – aktuell und transparent erklärt.`,
    date: new Date().toISOString(),
    category: "vergleiche",
  });

  writeFileSync(filePath, frontmatter);
  console.log(`⚖️ Neuer Vergleichsartikel erstellt: ${filePath}`);
}

try {
  generateComparison();
  console.log("✅ Vergleichsartikel erfolgreich generiert!");
} catch (err) {
  console.error("❌ Fehler im Vergleichsgenerator:", err);
  process.exit(1);
}
