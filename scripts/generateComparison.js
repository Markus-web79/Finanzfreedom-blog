// scripts/generateComparison.js
// 🔁 Automatische Erstellung von Vergleichsartikeln für FinanzFreedom

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const VERGLEICHE = [
  {
    title: "ETF Broker Vergleich 2025 – Die besten Anbieter im Überblick",
    description: "Finde den besten ETF-Broker in Deutschland: Gebühren, Sparplan-Angebote, App-Funktionalität und mehr.",
    table: `
      <table>
        <tr><th>Broker</th><th>Gebühr pro Trade</th><th>Sparplan</th><th>Bewertung</th></tr>
        <tr><td>Trade Republic</td><td>1 €</td><td>0 €</td><td>⭐⭐⭐⭐⭐</td></tr>
        <tr><td>Scalable Capital</td><td>0 € (Prime)</td><td>0 €</td><td>⭐⭐⭐⭐</td></tr>
        <tr><td>ING</td><td>4,90 € + 0,25%</td><td>1,75 %</td><td>⭐⭐⭐</td></tr>
      </table>
    `,
    content: `
## Warum ein ETF Broker Vergleich wichtig ist
Die Wahl des richtigen Brokers entscheidet langfristig über deine Rendite. Zu hohe Gebühren schmälern dein Ergebnis – der richtige Broker spart bares Geld.

## Worauf du achten solltest
- **Kosten pro Trade**: je niedriger, desto besser  
- **Sparplan-Angebote**: kostenlos oder mit Gebühren?  
- **App & Benutzerfreundlichkeit**: mobil handeln leicht gemacht  

## Fazit
Ein ETF Broker Vergleich lohnt sich: Wer regelmäßig spart, sollte auf geringe Kosten und verlässliche Technik achten. FinanzFreedom hilft dir, die Übersicht zu behalten.
`
  },
  {
    title: "Kreditkarten Vergleich 2025 – Beste kostenlosen Karten im Test",
    description: "Kostenlose Kreditkarten mit Top-Konditionen im Überblick – ohne Jahresgebühr, mit Cashback und Reisevorteilen.",
    table: `
      <table>
        <tr><th>Kreditkarte</th><th>Jahresgebühr</th><th>Cashback</th><th>Besonderheit</th></tr>
        <tr><td>Han­seatic GenialCard</td><td>0 €</td><td>–</td><td>Zinsfreie Raten</td></tr>
        <tr><td>Barclays Visa</td><td>0 €</td><td>–</td><td>Weltweit gebührenfrei bezahlen</td></tr>
        <tr><td>American Express Payback</td><td>0 €</td><td>1 Punkt / €</td><td>Bonusprogramm</td></tr>
      </table>
    `,
    content: `
## Warum ein Kreditkartenvergleich sinnvoll ist
Die richtige Kreditkarte spart Gebühren und bringt Vorteile beim Reisen oder Shoppen.

## Wichtige Kriterien
- **Keine Jahresgebühr**
- **Kostenlose Bargeldabhebung**
- **Gute App und Support**

## Fazit
Es gibt viele kostenlose Karten mit starken Leistungen. Vergleiche regelmäßig, um von neuen Angeboten zu profitieren.
`
  }
];

// === Funktion zum Erstellen der Vergleichsdateien ===
function generateComparisons() {
  const folder = path.join(process.cwd(), "content", "vergleiche");
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

  for (const item of VERGLEICHE) {
    const slug = item.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const filePath = path.join(folder, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      const frontmatter = matter.stringify(item.content.trim(), {
        title: item.title,
        description: item.description,
        table: item.table,
        date: new Date().toISOString(),
      });
      fs.writeFileSync(filePath, frontmatter);
      console.log(`✅ Erstellt: ${slug}.md`);
    } else {
      console.log(`⚙️ Übersprungen: ${slug}.md existiert bereits.`);
    }
  }
}

generateComparisons();
