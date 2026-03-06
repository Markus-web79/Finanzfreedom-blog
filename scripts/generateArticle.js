import fs from "fs";
import path from "path";

const articles = [
{
slug: "etf-sparplan-einsteiger",
title: "ETF-Sparplan für Einsteiger – der einfache Weg zum Vermögensaufbau",
description: "Wie du mit einem ETF-Sparplan langfristig Vermögen aufbauen kannst."
},

{
slug: "investieren-als-anfaenger",
title: "Investieren als Anfänger – die wichtigsten Regeln für den Start",
description: "Ein einfacher Leitfaden für deinen Einstieg in die Geldanlage."
},

{
slug: "geldanlage-fuer-selbststaendige",
title: "Geldanlage für Selbstständige – Strategien für unregelmäßiges Einkommen",
description: "Wie Selbstständige flexibel und langfristig investieren können."
},

{
slug: "etf-sparplan-starten",
title: "ETF-Sparplan starten – Schritt für Schritt erklärt",
description: "So richtest du deinen ersten ETF-Sparplan ein."
},

{
slug: "investieren-mit-wenig-geld",
title: "Investieren mit wenig Geld – Vermögensaufbau mit kleinen Beträgen",
description: "Auch mit kleinen Beträgen kannst du langfristig investieren."
}
];

const contentDir = path.join(process.cwd(), "content/investieren");

function generateMarkdown(article) {
return `
---
title: ${article.title}
description: ${article.description}
category: investieren
date: ${new Date().toISOString().split("T")[0]}
---

${article.title}

Viele Menschen möchten investieren, wissen aber nicht genau, wo sie anfangen sollen. Gerade am Anfang hilft eine klare Struktur.

## Warum langfristiges Investieren funktioniert

Langfristige Geldanlage nutzt einen entscheidenden Vorteil: Zeit. Durch den Zinseszinseffekt wächst Vermögen über Jahre immer schneller.

## Diversifikation

Ein wichtiger Grundsatz beim Investieren ist die Streuung. Wer sein Geld auf verschiedene Unternehmen und Branchen verteilt, reduziert Risiken.

## ETFs als Einstieg

Viele Einsteiger nutzen ETFs, weil sie kostengünstig sind und eine breite Streuung ermöglichen.

## Regelmäßigkeit schlägt Timing

Der Versuch, den perfekten Zeitpunkt für Käufe zu finden, scheitert oft. Regelmäßige Investitionen – etwa über Sparpläne – sind langfristig erfolgreicher.

## Fazit

Investieren muss nicht kompliziert sein. Wer früh beginnt, regelmäßig investiert und langfristig denkt, schafft eine solide Grundlage für Vermögensaufbau.
`;
}

function generateArticle() {

if (!fs.existsSync(contentDir)) {
fs.mkdirSync(contentDir, { recursive: true });
}

const article = articles[Math.floor(Math.random() * articles.length)];

const filePath = path.join(contentDir, `${article.slug}.md`);

if (fs.existsSync(filePath)) {
console.log("⚠️ Artikel existiert bereits:", article.slug);
return;
}

const markdown = generateMarkdown(article);

fs.writeFileSync(filePath, markdown.trim());

console.log("✅ Neuer Artikel erstellt:", article.slug);
}

generateArticle();
