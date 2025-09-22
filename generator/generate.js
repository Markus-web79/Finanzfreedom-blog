import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Hilfsfunktion: Entscheidet, ob ein langer Artikel generiert wird
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

// Prompt für OpenAI
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
  const lengthInfo =
    length === "long"
      ? "Schreibe ca. 1500 Wörter."
      : "Schreibe ca. 600 Wörter.";

  return `${base}\n\nThema: ${topic}\n\n${lengthInfo}`;
}

// Artikel generieren
async function generateArticle() {
  const longForm = needsLongForm();
  const prompt = makePrompt(longForm ? "long" : "short");

  console.log("📝 Prompt:", prompt);

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const content = completion.choices[0].message.content;

  // --- Fallbacks für Frontmatter ---
  let titleMatch = content.match(/#+\s*(.+)/);
  const title = titleMatch ? titleMatch[1].trim() : "Automatisch generierter Artikel";
  const slug = slugify(title, { lower: true, strict: true }) || `artikel-${Date.now()}`;
  const date = new Date().toISOString().split("T")[0];

  // Markdown bauen
  const md = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
excerpt: "${content.split("\n")[0].replace("META:", "").trim() || "Kurzbeschreibung folgt."}"
---

${content}
`;

  // Datei speichern
  const outDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(outDir);
  const outPath = path.join(outDir, `${slug}.md`);
  await fs.writeFile(outPath, md, "utf8");

  console.log("✅ Artikel gespeichert unter:", outPath);
}

generateArticle().catch((err) => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
