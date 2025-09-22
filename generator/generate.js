import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 📌 Entscheidet: 3 kurze Artikel, dann 1 langer
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

// 📌 Prompt-Erstellung
function makePrompt(length = "short") {
  const base = `Du bist ein deutscher Finanz-Redakteur. Schreibe einen SEO-optimierten Blogartikel über Finanzen & passives Einkommen. Verwende klare Überschriften (H2/H3), Listen und Beispiele. Füge am Anfang 'META: ...' mit einer kurzen Meta-Beschreibung ein.`;

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
    "Finanzielle Freiheit: Realistische Schritte in 5 Jahren",
  ];

  const topic = topics[Math.floor(Math.random() * topics.length)];
  return `${base}\n\nThema: ${topic}\n\nLänge: ${
    length === "long" ? "ca. 1200 Wörter" : "ca. 500 Wörter"
  }`;
}

// 📌 Speichern des Artikels
async function saveArticle(title, content) {
  const contentDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(contentDir);

  const slug = slugify(title || "automatischer-artikel", { lower: true, strict: true });

  const md = `---
title: "${title || "Automatischer Artikel"}"
slug: "${slug}"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "${content.slice(0, 140).replace(/\n/g, " ")}..."
---

${content}
`;

  const outPath = path.join(contentDir, `${slug}.md`);
  await fs.writeFile(outPath, md, "utf8");
  console.log("✅ Artikel gespeichert:", outPath);
}

// 📌 Hauptfunktion
async function generateArticle() {
  const isLong = needsLongForm();
  const prompt = makePrompt(isLong ? "long" : "short");

  console.log("⏳ Generiere Artikel...");
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const raw = res.choices[0].message.content.trim();

  // META-Zeile rausziehen
  let title = "Automatischer Artikel";
  let content = raw;

  if (raw.startsWith("META:")) {
    const lines = raw.split("\n");
    lines.shift(); // erste Zeile mit META entfernen
    content = lines.join("\n").trim();

    // Erster H1 oder H2 als Titel
    const heading = content.match(/^#\s+(.*)/m) || content.match(/^##\s+(.*)/m);
    if (heading) title = heading[1].trim();
  }

  await saveArticle(title, content);
}

generateArticle().catch((err) => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
