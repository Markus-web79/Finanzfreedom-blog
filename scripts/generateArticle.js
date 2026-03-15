const fs = require("fs");
const path = require("path");

const topics = [
  {
    slug: "etf-sparplan-fuer-einsteiger",
    title: "ETF-Sparplan für Einsteiger – einfach und langfristig investieren",
    description:
      "Warum ETF-Sparpläne für viele Anleger der einfachste Einstieg in den Vermögensaufbau sind.",
    type: "guide",
  },
  {
    slug: "investieren-mit-50-euro",
    title: "Investieren mit 50 Euro im Monat – lohnt sich das überhaupt?",
    description:
      "Auch kleine Beträge können langfristig Vermögen aufbauen. Entscheidend ist vor allem Zeit.",
    type: "praxis",
  },
  {
    slug: "vermoegensaufbau-fuer-handwerker",
    title: "Vermögensaufbau für Handwerker – Strategien für langfristige finanzielle Sicherheit",
    description:
      "Viele Handwerker verdienen gut, investieren aber selten. Strategien für nachhaltigen Vermögensaufbau.",
    type: "praxis",
  },
  {
    slug: "investieren-als-selbststaendiger",
    title: "Investieren als Selbstständiger – Rücklagen und Vermögensaufbau kombinieren",
    description:
      "Selbstständige müssen ihre finanzielle Zukunft selbst organisieren. Diese Strategien helfen.",
    type: "praxis",
  },
  {
    slug: "etf-fehler-die-anfaenger-machen",
    title: "Die häufigsten ETF-Fehler von Einsteigern",
    description:
      "Viele Anleger machen beim Einstieg in ETFs ähnliche Fehler. Diese solltest du vermeiden.",
    type: "guide",
  },
  {
    slug: "investieren-mit-kleinem-gehalt",
    title: "Investieren mit kleinem Gehalt – wie Vermögensaufbau trotzdem möglich ist",
    description:
      "Auch mit begrenztem Einkommen kannst du langfristig Vermögen aufbauen.",
    type: "praxis",
  },
  {
    slug: "wie-viel-sollte-man-investieren",
    title: "Wie viel sollte man monatlich investieren?",
    description:
      "Die richtige Sparrate hängt von mehreren Faktoren ab. Diese Orientierung hilft beim Einstieg.",
    type: "guide",
  },
  {
    slug: "langfristig-vermoegen-aufbauen",
    title: "Langfristig Vermögen aufbauen – warum Geduld entscheidend ist",
    description:
      "Vermögensaufbau ist kein kurzfristiges Projekt. Langfristiges Denken ist der Schlüssel.",
    type: "guide",
  },
  {
    slug: "trade-republic-etf-sparplan",
    title: "Trade Republic ETF-Sparplan – so funktioniert der Einstieg",
    description:
      "Wie ein ETF-Sparplan bei Trade Republic funktioniert und worauf Einsteiger achten sollten.",
    type: "broker",
  },
  {
    slug: "scalable-capital-erfahrungen",
    title: "Scalable Capital Erfahrungen – für wen sich der Broker lohnt",
    description:
      "Ein Überblick über Funktionen, Kosten und Einsatzmöglichkeiten von Scalable Capital.",
    type: "broker",
  },
];

const dir = path.join(process.cwd(), "content", "investieren");
fs.mkdirSync(dir, { recursive: true });

// Nur saubere Markdown-Dateien lesen
const existingFiles = fs
  .readdirSync(dir)
  .filter((file) => file.endsWith(".md"));

// Bereits vorhandene Slugs erkennen
const existingSlugs = new Set(
  existingFiles.map((file) => file.replace(/\.md$/, "").replace(/-\d+$/, ""))
);

// Nur Themen verwenden, die noch nicht existieren
const availableTopics = topics.filter((topic) => !existingSlugs.has(topic.slug));

if (availableTopics.length === 0) {
  console.log("Alle definierten Artikelthemen wurden bereits erstellt.");
  process.exit(0);
}

// Zufällig ein noch freies Thema wählen
const topic =
  availableTopics[Math.floor(Math.random() * availableTopics.length)];

function buildGuideArticle(topic) {
  return `
---
title: ${topic.title}
description: ${topic.description}
category: investieren
date: ${new Date().toISOString().split("T")[0]}
---

## Einleitung

Viele Menschen schieben das Thema Investieren jahrelang vor sich her. Meist nicht, weil sie kein Interesse haben, sondern weil der Einstieg unnötig kompliziert wirkt. Genau hier liegt das Problem: Wer zu lange wartet, verliert wertvolle Zeit.

## Warum das Thema wichtig ist

Beim Vermögensaufbau geht es selten um spektakuläre Einzelentscheidungen. Entscheidend sind eher klare Grundprinzipien: regelmäßig investieren, Risiken verstehen und langfristig denken. Wer diese Basis beherrscht, trifft meist deutlich bessere finanzielle Entscheidungen.

## Worauf Einsteiger achten sollten

Gerade am Anfang ist nicht das perfekte Produkt entscheidend, sondern die richtige Struktur. Dazu gehören:

- ein realistischer monatlicher Betrag
- ein langer Anlagehorizont
- eine breite Streuung
- eine Strategie, die man auch in schwächeren Börsenphasen durchhält

## Ein häufiger Denkfehler

Viele Anfänger glauben, dass sie zuerst viel Geld ansparen oder den perfekten Zeitpunkt erwischen müssen. In der Praxis ist der größere Fehler meist das Warten. Wer früh anfängt und konsequent bleibt, ist langfristig fast immer besser aufgestellt.

## Fazit

Investieren muss nicht kompliziert sein. Wichtig ist ein klarer, verständlicher Einstieg und die Bereitschaft, langfristig dranzubleiben. Wer die Grundlagen sauber aufbaut, vermeidet viele typische Fehler schon zu Beginn.
`.trim();
}

function buildPraxisArticle(topic) {
  return `
---
title: ${topic.title}
description: ${topic.description}
category: investieren
date: ${new Date().toISOString().split("T")[0]}
---

## Einleitung

In der Theorie klingt Vermögensaufbau oft logisch. In der Praxis scheitert er meistens am Alltag. Genau deshalb braucht es Strategien, die nicht nur auf dem Papier funktionieren, sondern zum eigenen Leben passen.

## Die typische Ausgangslage

Viele Menschen haben kein Luxusproblem, sondern ein Strukturproblem. Das Einkommen reicht grundsätzlich, aber Geld bleibt nicht systematisch übrig oder wird nicht sinnvoll investiert. Wer Vermögen aufbauen will, braucht deshalb einen Plan, der realistisch umsetzbar ist.

## Was in der Praxis funktioniert

Für viele ist ein einfacher ETF-Sparplan der vernünftigste Einstieg. Der große Vorteil: Entscheidungen werden nicht jeden Monat neu getroffen, sondern einmal sauber vorbereitet und dann automatisiert umgesetzt.

Wichtig sind dabei vor allem:

- eine tragbare Sparrate
- ein Notgroschen
- ein realistischer Zeithorizont
- Disziplin statt Aktionismus

## Wo viele scheitern

Häufig wird entweder zu viel auf einmal gewollt oder zu lange gar nichts gemacht. Beides ist problematisch. Vermögensaufbau entsteht selten durch Perfektion, sondern durch Regelmäßigkeit über Jahre.

## Fazit

Wer Vermögen aufbauen will, braucht keine komplizierten Finanzprodukte. Viel wichtiger ist eine Lösung, die dauerhaft durchgehalten wird. Genau darin liegt langfristig der Unterschied zwischen Theorie und echtem Fortschritt.
`.trim();
}

function buildBrokerArticle(topic) {
  return `
---
title: ${topic.title}
description: ${topic.description}
category: investieren
date: ${new Date().toISOString().split("T")[0]}
---

## Einleitung

Broker sind für viele Einsteiger der praktische Einstieg in den Vermögensaufbau. Trotzdem wird die Wahl oft unnötig emotional geführt. Entscheidend sind nicht Werbung oder App-Design, sondern Kosten, Bedienbarkeit und die Frage, ob der Broker zur eigenen Strategie passt.

## Worauf man wirklich achten sollte

Ein guter Broker muss nicht alles können. Für viele Anleger reichen wenige Punkte:

- einfache ETF-Sparpläne
- transparente Gebühren
- verständliche Bedienung
- verlässliche Ausführung

Gerade für Einsteiger ist es sinnvoll, einen Anbieter zu wählen, der den Start leicht macht und keine unnötige Komplexität erzeugt.

## Was Einsteiger häufig übersehen

Viele konzentrieren sich nur auf einzelne Gebühren und übersehen dabei das Gesamtbild. Ein günstiger Broker bringt wenig, wenn die Bedienung unklar ist oder die Produktauswahl nicht zur eigenen Strategie passt.

## Für wen das Thema besonders wichtig ist

Wer langfristig in ETFs investieren will, trifft mit der Brokerwahl keine endgültige Lebensentscheidung. Trotzdem lohnt sich ein sauberer Vergleich, weil ein passender Einstieg die Wahrscheinlichkeit erhöht, dass der Sparplan auch wirklich durchgezogen wird.

## Fazit

Ein Broker sollte den Vermögensaufbau vereinfachen, nicht komplizierter machen. Wer Kosten, Bedienung und Strategie zusammendenkt, trifft meist die bessere Entscheidung als jemand, der nur auf Werbeversprechen schaut.
`.trim();
}

let article = "";

if (topic.type === "guide") {
  article = buildGuideArticle(topic);
} else if (topic.type === "praxis") {
  article = buildPraxisArticle(topic);
} else {
  article = buildBrokerArticle(topic);
}

const filename = `${topic.slug}.md`;
const filepath = path.join(dir, filename);

if (fs.existsSync(filepath)) {
  console.log(`Artikel existiert bereits: ${filename}`);
  process.exit(0);
}

fs.writeFileSync(filepath, article, "utf8");
console.log(`Neuer Artikel erstellt: ${filename}`);
