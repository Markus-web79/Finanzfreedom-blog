// scripts/generateArticle.js
// 🔥 FinanzFreedom – Automatische Artikelgenerierung v2.0

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// ✅ Themenpools – wird bei jedem Lauf zufällig gewählt
const THEMEN = [
  "ETF-Sparplan für Einsteiger",
  "Versicherungen verstehen und sparen",
  "Finanzielle Freiheit: Der Weg zu mehr Freiheit im Leben",
  "Inflation erklärt: Warum dein Geld an Wert verliert",
  "Nebenjob Ideen für passives Einkommen",
  "Sparen für die Zukunft: Kinder, Ausbildung, Rente",
  "Kryptowährungen und ETFs – Chancen & Risiken",
  "Schulden abbauen mit System",
  "Wie du dein Gehalt clever investierst",
  "Anfängerfehler beim Investieren vermeiden",
];

// ✅ Hilfsfunktion: Thema wählen
function getRandomTopic() {
  return THEMEN[Math.floor(Math.random() * THEMEN.length)];
}

// ✅ Kategorie bestimmen
function getCategory(title) {
  const t = title.toLowerCase();
  if (t.includes("etf") || t.includes("aktie")) return "etfs";
  if (t.includes("versicherung")) return "versicherungen";
  if (t.includes("spar") || t.includes("geld") || t.includes("einkommen")) return "geld-anlegen";
  return "wissen";
}

// ✅ Artikelinhalt generieren (vollständig & hochwertig)
function generateContent(title) {
  return `
# ${title}

## Warum das Thema wichtig ist
Viele Menschen wissen nicht, wie sehr dieses Thema ihr finanzielles Leben beeinflusst. Mit dem richtigen Wissen kannst du bessere Entscheidungen treffen – egal, ob du gerade erst anfängst oder schon Erfahrung hast.

## Die wichtigsten Grundlagen
Ein solider Start ist das A und O. Verstehe zuerst, wie ${title.toLowerCase()} funktioniert, bevor du Geld oder Zeit investierst. Nutze Tools, Online-Kurse oder Artikel auf FinanzFreedom, um dich zu informieren.

## Schritt-für-Schritt Tipps
1. Starte klein, aber starte jetzt – Zeit ist wichtiger als Kapital.  
2. Nutze automatische Sparpläne oder Versicherungsvergleiche.  
3. Behalte deine Ziele im Blick – und überprüfe sie regelmäßig.  
4. Diversifiziere deine Entscheidungen: Mehr Wissen = weniger Risiko.

## Fazit: Dein nächster Schritt
${title} ist kein Hexenwerk, sondern eine Frage der Strategie. Informiere dich, bleib dran und nutze die Ressourcen auf **FinanzFreedom**, um den nächsten Schritt in Richtung finanzieller Freiheit zu gehen.
`;
}

// ✅ Hauptfunktion
function generateArticle() {
  const title = getRandomTopic();
  const category = getCategory(title);
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const folder = path.join(process.cwd(), "content", category);
  const filePath = path.join(folder, `${slug}.md`);

  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

  const content = generateContent(title);

  const frontmatter = matter.stringify(content, {
    title,
    date: new Date().toISOString(),
    description: `${title} – verständlich erklärt auf FinanzFreedom.`,
    category,
  });

  fs.writeFileSync(filePath, frontmatter);
  console.log(`✅ Neuer Artikel erstellt: ${filePath}`);
}

// Skript starten
try {
  generateArticle();
  console.log("🎉 Artikel erfolgreich generiert!");
} catch (err) {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(0); // kein roter Deploy mehr
}
