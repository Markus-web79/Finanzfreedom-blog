// --- generateArticle.js ---
// Erstellt automatisch neue Artikel mit Meta-Daten und Beispielstruktur

import fs from "fs";
import path from "path";
import fixUmlaute from "./fixUmlaute.js";
import { checkGrammar } from "./checkGrammar.js";

const contentRoot = "./content";
const topicsFile = "./generator/topics.json";

// --- Artikel-Erstellung ---
function createArticle(title, category = "allgemein", keywords = []) {
  const slug = title
    .toLowerCase()
    .replace(/[äÄ]/g, "ae")
    .replace(/[öÖ]/g, "oe")
    .replace(/[üÜ]/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9\-]/g, "-")
    .replace(/--+/g, "-");

  const categoryDir = path.join(contentRoot, category);
  const filePath = path.join(categoryDir, `${slug}.md`);

  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  if (fs.existsSync(filePath)) {
    console.log(`⚠️ Artikel existiert bereits: ${filePath}`);
    return;
  }

  const template = `---
title: ${title}
slug: ${slug}
category: ${category}
description: ${title} – verständlich erklärt mit Beispielen, Strategien und Praxis-Tipps.
author: FinanzFreedom Redaktion
keywords: ${keywords.join(", ")}
---

# ${title}

## 1. Einleitung
Viele Menschen interessieren sich für **${title}**, wissen aber nicht, wie sie konkret anfangen sollen.
In diesem Artikel bekommst du eine klare Anleitung, um das Thema wirklich zu verstehen – mit Beispielen aus der Praxis.

## 2. Grundlagen
Hier erklären wir Schritt für Schritt, was ${title.toLowerCase()} bedeutet, welche Vorteile und Risiken es gibt und worauf du besonders achten solltest.

## 3. Umsetzung in der Praxis
So kannst du ${title.toLowerCase()} direkt umsetzen:
1. Setze dir klare Ziele.
2. Erstelle eine einfache Strategie.
3. Starte mit Geduld und Disziplin.
4. Prüfe regelmäßig deine Fortschritte.

## 4. Tipps & Fehlervermeidung
| Tipp | Beschreibung |
|------|---------------|
| Klein starten | Erst kleine Summen investieren |
| Geduldig bleiben | Nicht bei Schwankungen aussteigen |
| Automatisierung nutzen | Daueraufträge, ETF-Sparpläne usw. |

## 5. Fazit
${title} kann ein wichtiger Baustein deiner finanziellen Freiheit sein – bleib dran, lerne dazu und nutze Tools, die dich langfristig unterstützen.
`;

  fs.writeFileSync(filePath, template, "utf-8");
  console.log(`✅ Neuer Artikel erstellt: ${filePath}`);
}

// --- Command-Line-Aufruf ---
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("❌ Bitte gib einen Artikeltitel an, z.B.:");
  console.log('   node scripts/generateArticle.js "ETF-Sparplan für Einsteiger" etfs');
  process.exit(1);
}

const [title, category = "allgemein", ...keywords] = args;
createArticle(title, category, keywords);
