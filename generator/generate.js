import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 👉 Entscheidet: 3 kurze Artikel, dann 1 langer
function needsLongForm() {
  const stampPath = path.join(process.cwd(), ".pattern.json");
  let state = { counter: 0 };
  if (fs.existsSync(stampPath)) state = fs.readJsonSync(stampPath);
  state.counter = (state.counter || 0) + 1;
  let isLong = false;
  if (state.counter >= 4) {
    isLong = true;
    state.counter = 0;
  }
  fs.writeJsonSync(stampPath, state);
  return isLong;
}

// 👉 Prompt-Erstellung
function makePrompt(length = "short") {
  const base = `Du bist ein deutscher Finanz-Redakteur. Schreibe einen SEO-optimierten Blogartikel über Finanzen & passives Einkommen. Verwende klare Überschriften (H2/H3), Listen und Beispiele. Baue 1–2 Hinweise auf Risiken ein. Füge am Anfang 'META: ...' mit einer kurzen Meta-Beschreibung ein.`;

  const topics = [
    "ETFs für Einsteiger: So startest du mit einem Sparplan",
    "Dividendenstrategie: Monatliche Ausschüttungen clever nutzen",
    "5 Wege zu passivem Einkommen ohne Startkapital",
    "Affiliate-Marketing: Schritt für Schritt zum ersten Einkommen",
    "Fehler, die Anfänger beim Investieren vermeiden sollten",
    "Passives Einkommen mit digitalen Produkten (E-Book, Vorlagen)",
    "ETF vs. Einzelaktien: Was ist sinnvoll für Anfänger?",
    "Inflation & Zinsen: So schützt du dein Erspartes",
    "Automatisierte Sparpläne: Tipps & Tools",
    "Steuern auf Kapitalerträge: Grundlagen für Einsteiger",
  ];

  const topic = topics[Math.floor(Math.random() * topics.length)];
  const lengthInfo =
    length === "long" ? "Schreibe ca. 1200 Wörter." : "Schreibe ca. 500 Wörter.";
  return `${base}\n\nThema: ${topic}\n\n${lengthInfo}`;
}

// 👉 Artikel speichern
async function saveArticle(slug, title, body) {
  const contentDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(contentDir);

  // Fallbacks für Sicherheit
  const safeTitle =
    title && title.trim() !== "" ? title : "Automatisch generierter Artikel";
  const safeDate = new Date().toISOString().split("T")[0];

  const md = `---
title: "${safeTitle}"
date: "${safeDate}"
slug: "${slug}"
excerpt: "${body.slice(0, 150).replace(/\n/g, " ")}..."
---

${body}
`;

  const outPath = path.join(contentDir, `${slug}.md`);
  await fs.writeFile(outPath, md, "utf8");

  console.log("✅ Artikel gespeichert:", outPath);
}

// 👉 Hauptfunktion
async function generateArticle() {
  const isLong = needsLongForm();
  const prompt = makePrompt(isLong ? "long" : "short");

  console.log("📝 Generiere Artikel mit Prompt:", prompt);

  const response = await client.chat.completions.create({
    model:
