import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Prüfen: nach 3 kurzen Artikeln ein langer
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

// Prompt-Erstellung
function makePrompt(length = "short") {
  const base = `Du bist ein deutscher Finanz-Redakteur. Schreibe einen SEO-optimierten Blogartikel über Finanzen & passives Einkommen. Verwende klare Überschriften (H2/H3), Listen und Beispiele. Füge am Anfang 'META: ...' mit einer kurzen Meta-Beschreibung ein. Baue 1–2 Hinweise auf Risiken ein.`;

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
    "Steuern auf Kapitalerträge: Grundlagen für Einsteiger"
  ];

  const topic = topics[Math.floor(Math.random() * topics.length)];
  const lengthInfo = length === "long" ? "Langer Artikel (ca. 1200 Wörter)" : "Kurzer Artikel (ca. 600 Wörter)";
  return `${base}\n\nThema: ${topic}\n\n${lengthInfo}`;
}

// Hauptfunktion
async function generateArticle() {
  const longForm = needsLongForm();
  const prompt = makePrompt(longForm ? "long" : "short");

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  let content = res.choices[0].message?.content || "";

  // Titel & Meta herausziehen
  const titleMatch = content.match(/^#\s*(.*)/m);
  let title = titleMatch ? titleMatch[1].trim() : null;

  if (!title) {
    // Fallback-Titel
    title = `Artikel über Finanzen & passives Einkommen (${new Date().toISOString().split("T")[0]})`;
  }

  const excerptMatch = content.match(/META:\s*(.*)/i);
  const excerpt = excerptMatch ? excerptMatch[1].trim() : "Automatisch generierter Finanzartikel";

  const slug = slugify(title, { lower: true, strict: true });

  // Markdown-Datei vorbereiten
  const md = `---
title: "${title}"
slug: "${slug}"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "${excerpt}"
---

${content}
`;

  // 📌 Speichern im content/ Ordner
  const contentDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(contentDir);

  const outPath = path.join(contentDir, `${slug}.md`);
  await fs.writeFile(outPath, md, "utf8");

  console.log("✅ Artikel gespeichert unter:", outPath);
}

// Start
generateArticle().catch(err => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
