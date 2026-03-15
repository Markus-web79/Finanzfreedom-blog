const fs = require("fs");
const path = require("path");

const contentDir = path.join(process.cwd(), "content/investieren");

fs.mkdirSync(contentDir, { recursive: true });

/*
MASTER THEMENLISTE
Alle Artikel die langfristig erstellt werden sollen
*/

const topics = [
{ slug:"etf-sparplan-fuer-einsteiger", title:"ETF Sparplan für Einsteiger – der einfache Weg zum Vermögensaufbau", description:"Warum ETF Sparpläne für viele Anleger der einfachste Einstieg in den langfristigen Vermögensaufbau sind."},

{ slug:"investieren-mit-50-euro", title:"Investieren mit 50 Euro im Monat – lohnt sich das?", description:"Auch kleine Beträge können langfristig Vermögen aufbauen."},

{ slug:"msci-world-etf", title:"MSCI World ETF – warum dieser Index so beliebt ist", description:"Der MSCI World gehört zu den bekanntesten Aktienindizes der Welt."},

{ slug:"etf-sparplan-kosten", title:"ETF Sparplan Kosten – welche Gebühren wirklich wichtig sind", description:"Welche Kosten bei ETF Sparplänen entstehen können."},

{ slug:"etf-sparplan-strategie", title:"ETF Sparplan Strategie – langfristig Vermögen aufbauen", description:"Mit der richtigen Strategie lassen sich ETF Sparpläne effizient nutzen."},

{ slug:"etf-sparplan-steuern", title:"ETF Sparplan und Steuern – das solltest du wissen", description:"Wie ETFs in Deutschland besteuert werden."},

{ slug:"beste-etfs-fuer-einsteiger", title:"Die besten ETFs für Einsteiger", description:"Welche ETFs sich besonders für Anfänger eignen."},

{ slug:"msci-world-rendite", title:"MSCI World Rendite – wie viel Gewinn ist langfristig realistisch?", description:"Ein Blick auf historische Renditen des MSCI World."},

{ slug:"etf-sparplan-vorteile", title:"ETF Sparplan Vorteile – warum immer mehr Menschen investieren", description:"Warum ETF Sparpläne so beliebt sind."},

{ slug:"etf-sparplan-nachteile", title:"ETF Sparplan Nachteile – diese Risiken solltest du kennen", description:"Auch ETF Sparpläne haben Risiken."},

{ slug:"bester-broker-fuer-einsteiger", title:"Der beste Broker für Einsteiger", description:"Welche Broker sich für Anfänger besonders eignen."},

{ slug:"trade-republic-erfahrungen", title:"Trade Republic Erfahrungen – lohnt sich der Broker?", description:"Ein realistischer Blick auf den beliebten Broker."},

{ slug:"scalable-capital-erfahrungen", title:"Scalable Capital Erfahrungen – wie gut ist der Broker?", description:"Was Anleger über Scalable Capital wissen sollten."},

{ slug:"etf-sparplan-langfristig", title:"Warum langfristiges Investieren entscheidend ist", description:"Geduld ist einer der wichtigsten Faktoren beim Investieren."},

{ slug:"etf-sparplan-rendite", title:"ETF Sparplan Rendite – realistische Erwartungen", description:"Welche Renditen Anleger langfristig erwarten können."}
];

/*
TEXTBAUSTEINE
*/

const intros = [
"Viele Menschen möchten ihr Geld investieren, wissen jedoch nicht genau, wie sie beginnen sollen.",
"Der Wunsch nach finanzieller Sicherheit wächst bei vielen Menschen.",
"Immer mehr Menschen beschäftigen sich mit dem Thema Vermögensaufbau."
];

const explanations = [
"Ein ETF bildet einen kompletten Aktienindex ab. Dadurch investieren Anleger automatisch in viele Unternehmen gleichzeitig.",
"Ein großer Vorteil von ETFs ist die breite Diversifikation.",
"Langfristige Investitionen profitieren stark vom Zinseszinseffekt."
];

const examples = [
"Angenommen ein Anleger investiert monatlich 100 Euro in einen ETF.",
"Viele Anleger beginnen mit kleinen Beträgen und erhöhen ihre Sparrate später.",
"Gerade Berufseinsteiger nutzen ETF Sparpläne als Einstieg."
];

const conclusions = [
"Langfristiges Investieren erfordert Geduld.",
"Der wichtigste Schritt beim Investieren ist häufig der erste.",
"Vermögensaufbau funktioniert selten über Nacht."
];

/*
HILFSFUNKTIONEN
*/

function pick(arr){
return arr[Math.floor(Math.random()*arr.length)];
}

/*
BESTEHENDE ARTIKEL LESEN
*/

const existingFiles = fs.readdirSync(contentDir);

const usedTopics = existingFiles.map(file =>
file.replace(".md","").split("-").slice(0,-1).join("-")
);

/*
VERFÜGBARE THEMEN ERMITTELN
*/

const availableTopics = topics.filter(topic =>
!usedTopics.includes(topic.slug)
);

if(availableTopics.length === 0){
console.log("Alle Artikel aus der Themenliste wurden bereits erstellt.");
process.exit();
}

/*
THEMA AUSWÄHLEN
*/

const topic = availableTopics[Math.floor(Math.random()*availableTopics.length)];

/*
TEXT ERSTELLEN
*/

const article = `---
title: ${topic.title}
description: ${topic.description}
category: investieren
date: ${new Date().toISOString().split("T")[0]}
---

${pick(intros)}

## Warum dieses Thema wichtig ist

${pick(explanations)}

Viele Anleger unterschätzen, wie wichtig eine klare Strategie beim Investieren ist.

## Wie das Prinzip funktioniert

${pick(explanations)}

Ein großer Vorteil moderner Anlageprodukte besteht darin, dass Anleger mit relativ kleinen Beträgen investieren können.

## Praxisbeispiel

${pick(examples)}

Gerade bei langfristigen Investments zeigt sich, dass Zeit oft wichtiger ist als der perfekte Einstiegszeitpunkt.

## Vorteile und mögliche Risiken

Zu den größten Vorteilen gehört die breite Streuung. Gleichzeitig sollten Anleger beachten, dass auch ETFs kurzfristigen Schwankungen unterliegen können.

## Fazit

${pick(conclusions)}
`;

/*
DATEI SPEICHERN
*/

const filename = `${topic.slug}-${Date.now()}.md`;

const filePath = path.join(contentDir, filename);

if(fs.existsSync(filePath)){
console.log("Artikel existiert bereits.");
process.exit();
}

fs.writeFileSync(filePath, article.trim());

console.log("Artikel erstellt:", filename);
