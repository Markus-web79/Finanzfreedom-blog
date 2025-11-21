// ===========================================
//  FinanzFreedom - Automatische Artikel-Erstellung v3.5
//  SEO-optimiert, mit Kategorien & sauberer Grammatik
// ===========================================

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// === Hilfsfunktionen ===

// 1️⃣ SEO-Titelverbesserung
function enhanceTitle(title) {
  const year = new Date().getFullYear();
  const powerWords = ["beste", "smarte", "clevere", "aktuelle", "effektive"];
  const randomWord = powerWords[Math.floor(Math.random() * powerWords.length)];

  if (title.toLowerCase().includes("vergleich")) {
    return `${title} – ${randomWord} Anbieter ${year}`;
  } else {
    return `${title}: ${randomWord} Strategien & Tipps ${year}`;
  }
}

// 2️⃣ Themenliste mit automatischer Kategorie-Erkennung
const THEMEN = [
  { title: "ETF-Sparplan für Einsteiger", category: "etfs" },
  { title: "Versicherungen verstehen und sparen", category: "versicherungen" },
  { title: "Finanzielle Freiheit erreichen – so geht’s", category: "finanzielle-freiheit" },
  { title: "Inflation verstehen: Wie sie dein Geld beeinflusst", category: "geld" },
  { title: "Nebenjob-Ideen für mehr passives Einkommen", category: "geld-vermehren" },
  { title: "Sparen für die Zukunft: Tipps für 2025", category: "sparen" },
  { title: "Kryptowährungen und ETFs – Chancen & Risiken", category: "krypto" },
  { title: "Schulden abbauen mit System", category: "schulden" },
  { title: "Gehalt clever investieren", category: "investieren" },
  { title: "Die größten Anfängerfehler beim Investieren vermeiden", category: "investieren" },
];

// 3️⃣ Textgenerator (automatisch strukturierte Artikel)
function generateContent(title) {
  const cleanTitle = title.replace("–", "-");

  return `---
title: "${cleanTitle}"
description: "${cleanTitle} – verständlich erklärt auf FinanzFreedom. Lerne Schritt für Schritt, wie du dein Geld clever anlegst und vermeidest, typische Anfängerfehler zu machen."
date: "${new Date().toISOString()}"
---

## Warum dieses Thema wichtig ist

${title} betrifft fast jeden. Mit den richtigen Entscheidungen kannst du langfristig Vermögen aufbauen, Fehler vermeiden und dein Geld besser strukturieren. 

## Grundlagen einfach erklärt

Ein klarer Überblick über die wichtigsten Grundlagen hilft, bessere Entscheidungen zu treffen. Auf **FinanzFreedom** findest du einfach erklärte Inhalte, praxisnahe Beispiele und Tools, um deinen finanziellen Weg erfolgreich zu gestalten.

## Schritt-für-Schritt Anleitung

1. Analysiere deine aktuelle Situation.  
2. Setze klare Ziele – kurzfristig und langfristig.  
3. Nutze Tools und Vergleiche auf FinanzFreedom, um fundierte Entscheidungen zu treffen.  
4. Bleib konsequent – kleine, regelmäßige Schritte führen zu großem Erfolg.

## Fazit

${title} ist kein Hexenwerk, sondern Wissen, das jeder erlernen kann.  
Nutze die Inhalte auf **FinanzFreedom**, um finanzielle Freiheit und Sicherheit aufzubauen – Schritt für Schritt und mit echtem Mehrwert.`;
}

// === Hauptfunktion: Artikel generieren ===
export default function generateArticle() {
  const randomTopic = THEMEN[Math.floor(Math.random() * THEMEN.length)];
  const enhancedTitle = enhanceTitle(randomTopic.title);
  const category = randomTopic.category;
  const slug = enhancedTitle
    .toLowerCase()
    .replace(/[^\wäöüß\- ]+/g, "")
    .replace(/\s+/g, "-");

  const folder = path.join(process.cwd(), "content", category);
  const filePath = path.join(folder, `${slug}.md`);

  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

  const content = generateContent(enhancedTitle);
  fs.writeFileSync(filePath, content, "utf8");

  console.log(`✅ Neuer Artikel erstellt: ${filePath}`);
}
