const fs = require("fs");
const path = require("path");

const topics = [
  {
    slug: "etf-sparplan-strategie",
    title: "ETF Sparplan Strategie – langfristig Vermögen aufbauen",
    description: "Warum ETF Sparpläne für viele Anleger eine der einfachsten Strategien für langfristigen Vermögensaufbau sind."
  },
  {
    slug: "beste-etfs-fuer-einsteiger",
    title: "Die besten ETFs für Einsteiger",
    description: "Welche ETFs sich besonders für den Einstieg eignen und worauf Anleger achten sollten."
  },
  {
    slug: "etf-sparplan-kosten",
    title: "ETF Sparplan Kosten – welche Gebühren wirklich wichtig sind",
    description: "Viele Anleger unterschätzen die Kosten beim Investieren. Welche Gebühren wirklich relevant sind."
  },
  {
    slug: "etf-sparplan-steuern",
    title: "ETF Sparplan und Steuern – das sollten Anleger wissen",
    description: "Wie ETFs in Deutschland besteuert werden und welche Regeln Anleger kennen sollten."
  },
  {
    slug: "msci-world-rendite",
    title: "MSCI World Rendite – wie viel Gewinn ist langfristig realistisch?",
    description: "Ein Blick auf historische Renditen und realistische Erwartungen beim Investieren."
  },
  {
    slug: "bester-broker-fuer-einsteiger",
    title: "Der beste Broker für Einsteiger",
    description: "Welche Broker sich besonders für Anfänger eignen und worauf man achten sollte."
  },
  {
    slug: "trade-republic-erfahrungen",
    title: "Trade Republic Erfahrungen – lohnt sich der Broker?",
    description: "Wie gut Trade Republic für langfristige Anleger geeignet ist."
  }
];

const intros = [
  "Viele Menschen möchten ihr Geld investieren, wissen aber nicht genau, wo sie anfangen sollen. Besonders Einsteiger fühlen sich häufig von der Vielzahl an Möglichkeiten überfordert.",
  "Der Vermögensaufbau an der Börse wirkt für viele kompliziert. In der Praxis lassen sich jedoch viele Strategien relativ einfach umsetzen.",
  "Wer langfristig Vermögen aufbauen möchte, kommt am Thema Investieren kaum vorbei."
];

const explanations = [
  "Ein ETF bildet einen kompletten Aktienindex ab. Dadurch investieren Anleger automatisch in viele Unternehmen gleichzeitig.",
  "Breite Diversifikation ist ein zentraler Bestandteil erfolgreicher Anlagestrategien.",
  "Langfristige Investitionen profitieren stark vom sogenannten Zinseszinseffekt."
];

const examples = [
  "Angenommen ein Anleger investiert jeden Monat 100 Euro in einen ETF. Über mehrere Jahrzehnte kann daraus ein beachtliches Vermögen entstehen.",
  "Viele Investoren beginnen zunächst mit kleinen Beträgen und erhöhen ihre Sparrate später.",
  "Gerade für Berufseinsteiger kann ein ETF Sparplan ein einfacher Einstieg sein."
];

const conclusions = [
  "Langfristiges Investieren erfordert vor allem Geduld. Wer regelmäßig investiert und kurzfristige Schwankungen akzeptiert, kann langfristig profitieren.",
  "Der wichtigste Schritt beim Investieren ist häufig der erste. Wer früh beginnt, profitiert am meisten vom Zinseszinseffekt.",
  "Vermögensaufbau funktioniert selten über Nacht. Entscheidend sind Disziplin, Zeit und eine klare Strategie."
];

const dir = path.join(process.cwd(), "content/investieren");
fs.mkdirSync(dir, { recursive: true });

const topic = topics[Math.floor(Math.random() * topics.length)];

const intro = intros[Math.floor(Math.random() * intros.length)];
const explanation = explanations[Math.floor(Math.random() * explanations.length)];
const example = examples[Math.floor(Math.random() * examples.length)];
const conclusion = conclusions[Math.floor(Math.random() * conclusions.length)];

const filename = `${topic.slug}-${Date.now()}.md`;

const article = `
---
title: ${topic.title}
description: ${topic.description}
category: investieren
date: ${new Date().toISOString().split("T")[0]}
---

${intro}

## Warum dieses Thema wichtig ist

${explanation}

Viele Anleger unterschätzen, wie wichtig eine klare Strategie beim Investieren ist. Gerade langfristig kann eine einfache Struktur helfen, Fehler zu vermeiden.

## Wie das Prinzip funktioniert

${explanation}

Ein großer Vorteil moderner Anlageprodukte besteht darin, dass Anleger mit relativ kleinen Beträgen investieren können.

## Praxisbeispiel

${example}

Gerade bei langfristigen Investments zeigt sich, dass Zeit oft wichtiger ist als der perfekte Einstiegszeitpunkt.

## Vorteile und mögliche Risiken

Zu den größten Vorteilen gehört die breite Streuung. Gleichzeitig sollten Anleger jedoch beachten, dass auch ETFs kurzfristigen Schwankungen unterliegen können.

## Fazit

${conclusion}
`;

fs.writeFileSync(path.join(dir, filename), article.trim());

console.log("Artikel erstellt:", filename);
