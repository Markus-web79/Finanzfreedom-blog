import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateArticle() {
  const contentDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(contentDir);

  // Themenliste
  const topics = [
    "ETFs für Einsteiger: So startest du mit einem Sparplan",
    "Dividendenstrategie: Monatliche Ausschüttungen clever nutzen",
    "5 Wege zu passivem Einkommen ohne Startkapital",
    "Affiliate-Marketing: Schritt für Schritt zum ersten Einkommen",
    "Fehler, die Anfänger beim Investieren vermeiden sollten",
    "Passives Einkommen mit digitalen Produkten (E-Book, Vorlagen)"
  ];

  // zufälliges Thema auswählen
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const slug = slugify(topic, { lower: true, strict: true });

  // OpenAI Prompt
  const prompt = `Schreibe einen SEO-optimierten Blogartikel über: ${topic}.
  Verwende klare Überschriften, Listen und ein Fazit.`;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const article = completion.choices[0].message.content;

  // Markdown-Datei mit Frontmatter
  const md = `---
title: "${topic}"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "${topic}"
slug: "${slug}"
---

${article}
`;

  const outPath = path.join(contentDir, `${slug}.md`);
  await fs.writeFile(outPath, md, "utf8");

  console.log("✅ Artikel gespeichert:", outPath);
}

generateArticle().catch(err => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
