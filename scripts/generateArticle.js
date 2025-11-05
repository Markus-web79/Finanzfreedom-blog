// --- Import-Bereich ---
import fs from "fs";
import path from "path";
import fixUmlaute from "./fixUmlaute.js";
import checkGrammar from "./checkGrammar.js";

// --- Verzeichnisse ---
const contentRoot = "./content";
const topicsFile = "./generator/topics.json";

// --- Artikel-Erstellung ---
function createArticle(title, category, keywords = []) {
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
    console.log(`⚠️ Artikel existiert schon: ${filePath}`);
    return;
  }

  console.log(`📘 Neuer Artikel wird erstellt: ${filePath}`);
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
In diesem Artikel bekommst du eine klare und einfache Anleitung, um das Thema wirklich zu verstehen 
– ohne Fachchinesisch und mit Beispielen aus der Praxis.

## 2. Grundlagen
Hier erklären wir Schritt für Schritt, was ${title.toLowerCase()} bedeutet, 
welche Vorteile und Risiken es gibt und worauf du besonders achten solltest.
Dabei gehen wir auch auf häufige Fehler ein, die Einsteiger machen.

## 3. Umsetzung in der Praxis
So kannst du ${title.toLowerCase()} direkt umsetzen:
1. Vorbereitung: Verstehe dein Ziel und setze dir klare Grenzen.
2. Planung: Lege eine einfache Strategie fest.
3. Umsetzung: Schritt für Schritt starten – mit Geduld und Kontinuität.
4. Kontrolle: Prüfe regelmäßig deine Fortschritte.

## 4. Strategien, Tipps und Beispiele
| Strategie | Beschreibung | Geeignet für |
|------------|---------------|---------------|
| Konservativ | Fokus auf Sicherheit und Stabilität | Anfänger |
| Ausgewogen | Mischung aus Sicherheit und Wachstum | Fortgeschrittene |
| Wachstumsorientiert | Fokus auf hohe Rendite | Erfahrene Anleger |

## 5. Risiken und häufige Fehler
- Überhasteter Einstieg ohne Grundlagenwissen  
- Fehlende Diversifikation  
- Emotionale Entscheidungen  
- Kurzfristiges Denken statt langfristiger Planung  

## 6. Fazit
${title} kann ein wichtiger Baustein deiner finanziellen Freiheit sein, 
wenn du die Grundlagen verstehst und langfristig dranbleibst.  
Bleib ruhig, lerne stetig dazu und nutze Tools, die dich unterstützen – 
so erreichst du deine finanziellen Ziele mit System.
`;

  fs.writeFileSync(filePath, template);
  console.log(`✅ Neuer Artikel erstellt: ${filePath}`);

  const topics = JSON.parse(fs.readFileSync(topicsFile, "utf8"));
  topics.shift();
  fs.writeFileSync(topicsFile, JSON.stringify(topics, null, 2));
}

createArticle("ETF-Strategien für 2025", "etfs", ["etfs", "Finanzen"]);
