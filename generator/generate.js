import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Themenliste
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

// Zufälliges Thema auswählen
function pickTopic() {
  return topics[Math.floor(Math.random() * topics.length)];
}

// Prompt für OpenAI
function makePrompt(topic) {
  return `Du bist ein deutscher Finanz-Redakteur. 
Schreibe einen SEO-optimierten Blogartikel zum Thema "${topic}". 
Strukturiere mit H2/H3 Überschriften, Listen und Beispielen. 
Füge am Anfang eine kurze Meta-Beschreibung hinzu (META: ...).`;
}

async function generateArticle() {
  const topic = pickTopic();
  const slug = slugify(topic, { lower: true, strict: true });
  const contentDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(contentDir);

  console.log("📝 Generiere Artikel:", topic);

  // OpenAI Anfrage
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: makePrompt(topic) }]
  });

  const body = response.choices[0].message.content.trim();

  // Metadaten / Frontmatter
  const md = `---
title: "${topic}"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "Ein Artikel über ${topic}."
slug: "${slug}"
---

${body}
`;

  // Speichern
  const outPath = path.join(contentDir, `${slug}.md`);
  await fs.writeFile(outPath, md, "utf8");

  console.log("✅ Artikel gespeichert unter:", outPath);
}

// Start
generateArticle().catch((err) => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
