// ===========================================
//  FinanzFreedom - Automatische Vergleichsartikel v3.0
//  SEO-optimiert, mit Tabellen & Kategorie "vergleiche"
// ===========================================

import fs from "fs";
import path from "path";

// 1️⃣ Themen / Vergleichs-Setups
const COMPARISONS = [
  {
    title: "ETF-Broker Vergleich 2025 – die besten Anbieter im Überblick",
    category: "vergleiche",
    entities: [
      {
        name: "Broker A",
        fees: "0 € pro Trade (ab bestimmtem Volumen)",
        depot: "0 € Depotgebühr",
        strengths: "Viele ETFs, gute App, flexible Sparpläne",
        extras: "Aktionen mit gebührenfreien ETFs"
      },
      {
        name: "Broker B",
        fees: "1 € pro Trade",
        depot: "0 € Depotgebühr",
        strengths: "Sehr einfache Bedienung, gute Einsteiger-Tutorials",
        extras: "Bonus für Neukunden"
      },
      {
        name: "Broker C",
        fees: "ab 3,90 € pro Trade",
        depot: "0–2 € / Monat (abhängig vom Volumen)",
        strengths: "Große Produktauswahl, viele Einzelaktien & Fonds",
        extras: "Professionelle Order-Typen"
      }
    ],
    criteria: [
      "Ordergebühren",
      "Depotgebühr",
      "Stärken",
      "Besondere Features"
    ]
  },
  {
    title: "ETF-Sparplan Vergleich 2025 – so findest du den passenden Anbieter",
    category: "vergleiche",
    entities: [
      {
        name: "Sparplan-Anbieter A",
        fees: "0 € Ausführungsgebühr auf ausgewählte ETFs",
        depot: "0 €",
        strengths: "Sehr viele kostenlose Sparpläne, ab 1 € Rate",
        extras: "Automatische Erhöhung der Sparrate möglich"
      },
      {
        name: "Sparplan-Anbieter B",
        fees: "1,5 % pro Ausführung",
        depot: "0 €",
        strengths: "Gute Auswahl, solide Standardlösung",
        extras: "Einmalanlagen und Sparpläne kombinierbar"
      },
      {
        name: "Sparplan-Anbieter C",
        fees: "0,99 € pro Ausführung",
        depot: "0 €",
        strengths: "Breites ETF-Universum, auch Themen-ETFs",
        extras: "Dynamische Sparrate & Rebalancing-Funktion"
      }
    ],
    criteria: [
      "Ausführungsgebühr",
      "Depotgebühr",
      "Stärken",
      "Extras"
    ]
  },
  {
    title: "Tagesgeld vs. Festgeld – welcher Ansatz passt 2025 zu dir?",
    category: "vergleiche",
    entities: [
      {
        name: "Tagesgeld",
        fees: "Keine direkten Gebühren",
        depot: "Kein Depot nötig",
        strengths: "Täglich verfügbar, flexibel, ideal für Notgroschen",
        extras: "Zinsen meist variabel, Aktionen für Neukunden möglich"
      },
      {
        name: "Festgeld",
        fees: "Keine laufenden Gebühren",
        depot: "Kein Depot nötig",
        strengths: "Planbare Zinsen, höhere Verzinsung bei längerer Laufzeit",
        extras: "Geld ist für die Laufzeit gebunden"
      }
    ],
    criteria: [
      "Produkt",
      "Gebühren",
      "Flexibilität",
      "Für wen geeignet?"
    ]
  }
];

// 2️⃣ Hilfsfunktionen

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\wäöüß\- ]+/g, "")
    .replace(/\s+/g, "-");
}

function buildTable(topic) {
  // Für die Tagesgeld/Festgeld-Variante etwas andere Struktur
  if (topic.title.startsWith("Tagesgeld vs. Festgeld")) {
    return `
| Produkt     | Gebühren            | Flexibilität                  | Für wen geeignet?                              |
|------------|----------------------|--------------------------------|-----------------------------------------------|
| Tagesgeld  | Keine direkten Gebühren | Täglich verfügbar, jederzeit kündbar | Notgroschen, kurzfristige Rücklagen       |
| Festgeld   | Keine laufenden Gebühren | Während der Laufzeit gebunden | Planbare Zinsen, mittlere bis längere Laufzeit |
`;
  }

  // Standard-Vergleichstabelle
  let header = `| Anbieter | ${topic.criteria.join(" | ")} |
|---------|${topic.criteria.map(() => "--------------------").join("|")}|
`;

  let rows = topic.entities
    .map((e) => {
      return `| ${e.name} | ${e.fees} | ${e.depot || "-"} | ${e.strengths} | ${e.extras || "-"} |`;
    })
    .join("\n");

  return `\n${header}${rows}\n`;
}

function generateComparisonContent(topic) {
  const { title } = topic;
  const year = new Date().getFullYear();

  const table = buildTable(topic);

  return `---
title: "${title}"
description: "${title} – verständlich erklärt auf FinanzFreedom. Vergleiche Gebühren, Leistungen und erfahre, worauf du 2025 achten solltest."
date: "${new Date().toISOString()}"
type: "comparison"
category: "${topic.category}"
---

## Warum ein Vergleich wichtig ist

${title} hilft dir, Klarheit zu bekommen: Welcher Anbieter oder welches Produkt passt wirklich zu dir?  
Statt dich von Werbung leiten zu lassen, schaust du dir objektive Kriterien wie Kosten, Flexibilität und Funktionen an.

## Schnellübersicht der wichtigsten Unterschiede

${table}

## Worauf du besonders achten solltest

- **Kostenstruktur:** Kleine Gebührenunterschiede machen über Jahre einen großen Unterschied.  
- **Flexibilität:** Passt die Lösung zu deinem Zeithorizont und deinen Zielen?  
- **Angebotsumfang:** Bekommst du die ETFs, Produkte oder Features, die du wirklich brauchst?  
- **Sicherheit & Regulierung:** Achte auf regulierte Anbieter und Einlagensicherung.

## Schritt-für-Schritt zur Entscheidung

1. Lege fest, was dir am wichtigsten ist: Kosten, Komfort, Funktionsumfang oder Flexibilität.  
2. Nutze den Vergleich oben, um 2–3 Favoriten auszuwählen.  
3. Prüfe die Konditionen noch einmal direkt beim Anbieter (Gebühren können sich ändern).  
4. Starte mit einem überschaubaren Betrag und sammle Erfahrungen.  

## Fazit: So nutzt du den Vergleich für dich

${title} ist kein Selbstzweck – er soll dir helfen, eine Entscheidung zu treffen, mit der du dich langfristig wohlfühlst.  
Nutze **FinanzFreedom**, um regelmäßig Vergleiche zu checken, Angebote zu bewerten und deine Finanzstrategie Schritt für Schritt zu verbessern.`;
}

// 3️⃣ Hauptfunktion: Vergleichsartikel erzeugen

export default function generateComparison() {
  const topic =
    COMPARISONS[Math.floor(Math.random() * COMPARISONS.length)];

  const slug = toSlug(topic.title);
  const folder = path.join(process.cwd(), "content", topic.category);
  const filePath = path.join(folder, `${slug}.md`);

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const content = generateComparisonContent(topic);
  fs.writeFileSync(filePath, content, "utf8");

  console.log(`✅ Neuer Vergleichsartikel erstellt: ${filePath}`);
}
