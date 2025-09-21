import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Hilfsfunktion: Slug erzeugen
function makeSlug(title) {
  return slugify(title, { lower: true, strict: true });
}

// Prompt-Erstellung
function makePrompt() {
  return `Du bist ein deutscher Finanz-Redakteur. 
Schreibe einen SEO-optimierten Blogartikel über Finanzen & passives Einkommen. 
Verwende klare Überschriften (H2/H3), Listen und Beispiele. 
Füge am Anfang 'META: ...' mit einer kurzen Meta-Beschreibung ein.`;
}

async function generateArticle() {
  const prompt = makePrompt();

  // API-Aufruf
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.choices[0].message.content.trim();

  // Titel extrahieren (erste Überschrift oder Fallback)
  let title = "Automatisch erstellter Artikel";
  const match = text.match(/^#\s+(.*)/m);
  if (match) title = match[1];

  const slug = makeSlug(title);

  const frontmatter = `---
title: "${title}"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "${title} – ein automatisch erstellter Blogartikel."
slug: "${slug}"
---
`;

  const md = frontmatter + "\n" + text;

  // 📌 Im content/-Ordner speichern
  const contentDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(contentDir);
  const outPath = path.join(contentDir, `${slug}.md`);

  await fs.writeFile(outPath, md, "utf8");
  console.log("✅ Artikel gespeichert unter:", outPath);
}

generateArticle().catch((err) => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
