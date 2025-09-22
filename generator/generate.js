import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Hilfsfunktion → Slug erstellen
function makeSlug(title) {
  return slugify(title, { lower: true, strict: true });
}

// Artikel-Themenliste
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

async function generateArticle() {
  const title = pickTopic();
  const slug = makeSlug(title);

  const prompt = `
  Du bist Finanz-Redakteur. Schreibe einen Blogartikel mit folgendem Titel:
  "${title}".

  Anforderungen:
  - Schreibe SEO-optimiert.
  - Nutze klare Überschriften (H2, H3).
  - Schreibe ein kurzes Intro.
  - Baue eine Meta-Beschreibung ein (max. 160 Zeichen, mit "META:").
  - Füge 1-2 Hinweise auf Risiken ein.
  - Schreibe in freundlichem, verständlichem Deutsch.
  `;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const content = completion.choices[0].message.content;

  // Ordner sicherstellen
  const contentDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(contentDir);

  // Dateipfad
  const filePath = path.join(contentDir, `${slug}.md`);

  // Markdown-Datei
  const md = `---
title: "${title}"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "${title} – ein automatisch erstellter Artikel."
slug: "${slug}"
---

${content}
`;

  await fs.writeFile(filePath, md, "utf8");
  console.log("✅ Artikel gespeichert:", filePath);
}

generateArticle().catch((err) => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
