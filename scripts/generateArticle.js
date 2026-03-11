import fs from "fs";
import path from "path";

const topics = [
  {
    slug: "etf-sparplan-fuer-einsteiger",
    title: "ETF-Sparplan für Einsteiger – einfach und langfristig investieren",
    description:
      "Warum ETF-Sparpläne für viele Anleger der einfachste Einstieg in den Vermögensaufbau sind.",import fs from "fs";
import path from "path";

const topics = [
  {
    slug: "etf-sparplan-fuer-einsteiger",
    title: "ETF-Sparplan für Einsteiger – einfach und langfristig investieren",
    description:
      "Warum ETF-Sparpläne für viele Anleger der einfachste Einstieg in den Vermögensaufbau sind.",
  },
  {
    slug: "investieren-mit-50-euro",
    title: "Investieren mit 50 Euro im Monat – lohnt sich das überhaupt?",
    description:
      "Auch kleine Beträge können langfristig Vermögen aufbauen. Entscheidend ist vor allem Zeit.",
  },
  {
    slug: "vermoegensaufbau-fuer-handwerker",
    title: "Vermögensaufbau für Handwerker – Strategien für langfristige finanzielle Sicherheit",
    description:
      "Viele Handwerker verdienen gut, investieren aber selten. Strategien für nachhaltigen Vermögensaufbau.",
  },
  {
    slug: "investieren-als-selbststaendiger",
    title: "Investieren als Selbstständiger – Rücklagen und Vermögensaufbau kombinieren",
    description:
      "Selbstständige müssen ihre finanzielle Zukunft selbst organisieren. Diese Strategien helfen.",
  },
  {
    slug: "etf-fehler-die-anfaenger-machen",
    title: "Die häufigsten ETF-Fehler von Einsteigern",
    description:
      "Viele Anleger machen beim Einstieg in ETFs ähnliche Fehler. Diese solltest du vermeiden.",
  },
  {
    slug: "investieren-mit-kleinem-gehalt",
    title: "Investieren mit kleinem Gehalt – wie Vermögensaufbau trotzdem möglich ist",
    description:
      "Auch mit begrenztem Einkommen kannst du langfristig Vermögen aufbauen.",
  },
  {
    slug: "wie-viel-sollte-man-investieren",
    title: "Wie viel sollte man monatlich investieren?",
    description:
      "Die richtige Sparrate hängt von mehreren Faktoren ab. Diese Orientierung hilft beim Einstieg.",
  },
  {
    slug: "langfristig-vermoegen-aufbauen",
    title: "Langfristig Vermögen aufbauen – warum Geduld entscheidend ist",
    description:
      "Vermögensaufbau ist kein kurzfristiges Projekt. Langfristiges Denken ist der Schlüssel.",
  },
];

const dir = path.join(process.cwd(), "content/investieren");

fs.mkdirSync(dir, { recursive: true });

// Prüfen welche Artikel schon existieren
const existingFiles = fs.readdirSync(dir);

const availableTopics = topics.filter(
  (topic) => !existingFiles.includes(`${topic.slug}.md`)
);

// Wenn keine Themen mehr übrig sind → abbrechen
if (availableTopics.length === 0) {
  console.log("Alle Artikel wurden bereits erstellt.");
  process.exit();
}

const topic =
  availableTopics[Math.floor(Math.random() * availableTopics.length)];

const filename = `${topic.slug}.md`;

const article = `
---
title: ${topic.title}
description: ${topic.description}
category: investieren
date: ${new Date().toISOString().split("T")[0]}
---

## Einleitung

Viele Menschen beschäftigen sich erst spät mit dem Thema Geldanlage. Dabei lässt sich Vermögensaufbau oft einfacher umsetzen, als viele denken.

## Warum langfristiges Investieren funktioniert

Kapitalmärkte schwanken kurzfristig, entwickeln sich über lange Zeiträume jedoch meist positiv. Wer regelmäßig investiert, nutzt diesen Effekt.

Viele Anleger unterschätzen, wie stark der Zinseszinseffekt über Jahre wirkt.

## Ein einfacher Einstieg

Für viele Anleger eignen sich breit gestreute ETFs als Einstieg. Sie ermöglichen es, mit kleinen Beträgen regelmäßig in große Märkte zu investieren.

## Fazit

Investieren muss nicht kompliziert sein. Wichtig ist vor allem, früh zu beginnen und langfristig zu denken.
`;

fs.writeFileSync(path.join(dir, filename), article.trim());

console.log("Neuer Artikel erstellt:", filename);
  },
  {
    slug: "investieren-mit-50-euro",
    title: "Investieren mit 50 Euro im Monat – lohnt sich das überhaupt?",
    description:
      "Auch kleine Beträge können langfristig Vermögen aufbauen. Entscheidend ist vor allem Zeit.",
  },
  {
    slug: "vermoegensaufbau-fuer-handwerker",
    title: "Vermögensaufbau für Handwerker – Strategien für langfristige finanzielle Sicherheit",
    description:
      "Viele Handwerker verdienen gut, investieren aber selten. Strategien für nachhaltigen Vermögensaufbau.",
  },
  {
    slug: "investieren-als-selbststaendiger",
    title: "Investieren als Selbstständiger – Rücklagen und Vermögensaufbau kombinieren",
    description:
      "Selbstständige müssen ihre finanzielle Zukunft selbst organisieren. Diese Strategien helfen.",
  },
  {
    slug: "etf-fehler-die-anfaenger-machen",
    title: "Die häufigsten ETF-Fehler von Einsteigern",
    description:
      "Viele Anleger machen beim Einstieg in ETFs ähnliche Fehler. Diese solltest du vermeiden.",
  },
  {
    slug: "investieren-mit-kleinem-gehalt",
    title: "Investieren mit kleinem Gehalt – wie Vermögensaufbau trotzdem möglich ist",
    description:
      "Auch mit begrenztem Einkommen kannst du langfristig Vermögen aufbauen.",
  },
  {
    slug: "wie-viel-sollte-man-investieren",
    title: "Wie viel sollte man monatlich investieren?",
    description:
      "Die richtige Sparrate hängt von mehreren Faktoren ab. Diese Orientierung hilft beim Einstieg.",
  },
  {
    slug: "langfristig-vermoegen-aufbauen",
    title: "Langfristig Vermögen aufbauen – warum Geduld entscheidend ist",
    description:
      "Vermögensaufbau ist kein kurzfristiges Projekt. Langfristiges Denken ist der Schlüssel.",
  },
];

const intros = [
  "Viele Menschen beschäftigen sich erst spät mit dem Thema Geldanlage. Dabei lässt sich Vermögensaufbau oft einfacher umsetzen, als viele denken.",
  "Investieren wirkt für Einsteiger häufig kompliziert. In Wirklichkeit geht es vor allem um langfristiges Denken und klare Strategien.",
  "Der Wunsch nach finanzieller Sicherheit wächst bei vielen Menschen. Ein strukturierter Vermögensaufbau kann dabei eine wichtige Rolle spielen.",
];

const middleSections = [
  `
## Warum langfristiges Investieren funktioniert

Kapitalmärkte schwanken kurzfristig, entwickeln sich über lange Zeiträume jedoch meist positiv. Wer regelmäßig investiert, nutzt diesen Effekt.

Viele Anleger unterschätzen, wie stark der Zinseszinseffekt über Jahre wirkt.
`,
  `
## Der häufigste Fehler beim Investieren

Viele Menschen warten zu lange mit dem Einstieg. Sie glauben, dass sie zuerst viel Geld sparen müssen oder den perfekten Zeitpunkt finden müssen.

In der Praxis zeigt sich jedoch: Regelmäßigkeit ist meist wichtiger als perfektes Timing.
`,
  `
## Warum Struktur beim Investieren wichtig ist

Wer langfristig investieren möchte, sollte eine klare Strategie verfolgen. Dazu gehören eine breite Streuung, regelmäßige Investitionen und ein langer Anlagehorizont.
`,
];

const endings = [
  `
## Fazit

Investieren muss nicht kompliziert sein. Wichtig ist vor allem, früh zu beginnen und langfristig zu denken. Kleine Schritte können über viele Jahre eine große Wirkung entfalten.
`,
  `
## Fazit

Langfristiger Vermögensaufbau basiert vor allem auf Disziplin und Geduld. Wer regelmäßig investiert und kurzfristige Schwankungen akzeptiert, schafft langfristig stabile Ergebnisse.
`,
  `
## Fazit

Der wichtigste Schritt beim Investieren ist oft der erste. Wer früh beginnt und konsequent investiert, verbessert seine finanziellen Möglichkeiten langfristig deutlich.
`,
];

const dir = path.join(process.cwd(), "content/investieren");

fs.mkdirSync(dir, { recursive: true });

const topic = topics[Math.floor(Math.random() * topics.length)];

const filename = `${topic.slug}-${Date.now()}.md`;

const intro = intros[Math.floor(Math.random() * intros.length)];
const middle = middleSections[Math.floor(Math.random() * middleSections.length)];
const ending = endings[Math.floor(Math.random() * endings.length)];

const article = `
---
title: ${topic.title}
description: ${topic.description}
category: investieren
date: ${new Date().toISOString().split("T")[0]}
---

${intro}

${middle}

## Ein einfacher Einstieg

Für viele Anleger eignen sich breit gestreute ETFs als Einstieg. Sie ermöglichen es, mit kleinen Beträgen regelmäßig in große Märkte zu investieren.

${ending}
`;

fs.writeFileSync(path.join(dir, filename), article.trim());

console.log("Neuer Artikel erstellt:", filename);
