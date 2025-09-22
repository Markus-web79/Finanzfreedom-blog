import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Entscheidet: 3 kurze Artikel, dann 1 langer
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
    "Steuern auf Kapitalerträge: Grundlagen für Einsteiger",
    "Die Zukunft der Finanzberatung: Digital vs. Traditionell",
    "Passives Einkommen: Der Schlüssel zur finanziellen Freiheit"
  ];

  const topic = topics[Math.floor(Math.random() * topics.length)];
  const lengthInfo = length === "long" ? "Mindestens 1500 Wörter." : "Ca. 600 Wörter.";

  return { topic, prompt: `${base}\n\nThema: ${topic}\n\n${lengthInfo}` };
}

// 📌 Artikel speichern mit sauberem Frontmatter
async function saveArticle(topic, slug, content) {
  const md = `---
title: "${topic}"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "${content.split("\n").slice(0, 2).join(" ").substring(0, 150)}..."
slug: "${slug}"
---

${content}
`;

  const outDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(outDir);
  const outPath = path.join(outDir, `${slug}.md`);
  await fs.writeFile(outPath, md, "utf8");

  console.log("✅ Artikel gespeichert unter:", outPath);
}

// Hauptfunktion
async function generateArticle() {
  const isLong = needsLongForm();
  const { topic, prompt } = makePrompt(isLong ? "long" : "short");
  const slug = slugify(topic, { lower: true, strict: true });

  console.log("📝 Generiere Artikel:", topic);

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const content = response.choices[0].message.content;
  await saveArticle(topic, slug, content);
}

generateArticle().catch(err => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
});
