import fs from "fs";
import path from "path";

const article = `
---
title: ETF-Sparplan für Einsteiger
slug: etf-sparplan-einsteiger
category: investieren
description: So startest du einfach und sicher mit ETFs.
---

## Was ist ein ETF-Sparplan?

Ein ETF-Sparplan ermöglicht dir, regelmäßig in börsengehandelte Indexfonds zu investieren.

## Vorteile eines ETF-Sparplans
- breite Diversifikation
- geringe Kosten
- flexibel anpassbar

## Nachteile
- Marktschwankungen
- langfristiger Anlagehorizont nötig

## Fazit
Ein ETF-Sparplan ist ideal für langfristigen Vermögensaufbau.
`;

const dir = path.join(process.cwd(), "content/investieren");
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "etf-sparplan.md"), article.trim());

console.log("✅ Artikel erstellt");
