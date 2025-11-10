import fs from "fs";
import path from "path";

const comparisonsDir = path.join(process.cwd(), "content/vergleiche");

// Beispiel-Daten (später API/CSV)
const demoData = [
  {
    name: "Trade Republic",
    gebuehr: "0 € pro Trade",
    sparplan: "1 € Mindestbetrag",
    vorteil: "Kostenloser ETF-Sparplan, App-basiert",
    link: "https://www.awin.com/TradeRepublic",
  },
  {
    name: "Scalable Capital",
    gebuehr: "0,99 € pro Trade",
    sparplan: "Ab 25 €",
    vorteil: "Riesige ETF-Auswahl, Profi-Dashboard",
    link: "https://www.awin.com/ScalableCapital",
  },
  {
    name: "comdirect",
    gebuehr: "3,90 € pro Trade",
    sparplan: "Ab 25 €",
    vorteil: "Traditionsbank mit guter App",
    link: "https://www.awin.com/comdirect",
  },
];

function generateMarkdownTable(data) {
  let table =
    "| Anbieter | Gebühren | Sparplan | Vorteile | Zum Anbieter |\n" +
    "|-----------|-----------|-----------|-----------|----------------|\n";

  data.forEach((broker) => {
    table += `| ${broker.name} | ${broker.gebuehr} | ${broker.sparplan} | ${broker.vorteil} | [Jetzt ansehen](${broker.link}) |\n`;
  });

  return table;
}

function generateComparison() {
  if (!fs.existsSync(comparisonsDir)) fs.mkdirSync(comparisonsDir, { recursive: true });

  const markdownContent = `---
title: "ETF-Broker Vergleich 2025"
description: "Die besten Anbieter für ETF-Sparpläne im direkten Vergleich."
date: "${new Date().toISOString()}"
category: "vergleiche"
---

# ETF-Broker Vergleich 2025

Hier findest du die besten ETF-Anbieter im Überblick:

${generateMarkdownTable(demoData)}

*Hinweis: Einige Links sind Affiliate-Links. Wir erhalten ggf. eine Provision, für dich entstehen keine Mehrkosten.*
`;

  const filePath = path.join(comparisonsDir, "etf-broker-vergleich.md");
  fs.writeFileSync(filePath, markdownContent);
  console.log("✅ Vergleichsartikel erstellt:", filePath);
}

generateComparison();
