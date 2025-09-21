import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 🔹 Hilfsfunktion: Immer einen Titel erzwingen
function ensureTitleAndSlug(data, fallbackTitle) {
  let title = data.title || fallbackTitle || "Automatisch generierter Artikel";
  let slug = data.slug || slugify(title, { lower: true, strict: true });
  return { title, slug };
}

async function generateArticle() {
  const contentDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(contentDir);

  // 🔹 Prompt für OpenAI
  const prompt = `
Du bist ein deutscher Finanz-Redakteur. Schreibe einen Blogartikel mit Titel, Datum, Kurzbeschreibung (excerpt) und Inhalt. 
Antwortformat im Markdown mit Frontmatter (title, date, excerpt, slug).
`;

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const rawText = res.choices[0].message.content.trim();

  // 🔹 Frontmatter auslesen
  const match = /^---([\s\S]*?)---/m.exec(rawText);
  let frontmatter = {};
  if (match) {
    match[1].split("\n").forEach(line => {
      const [key, ...rest] = line.split(":");
      if (key && rest.length > 0) {
        frontmatter[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
      }
    });
  }

  // 🔹 Titel & Slug sicherstellen
  const { title, slug } = ensureTitleAndSlug(
    frontmatter,
    "FinanzFreedom Artikel"
  );

  // 🔹 Fallbacks für Datum & Excerpt
  const date = frontmatter.date || new Date().toISOString().split("T")[0];
  const excerpt =
    frontmatter.excerpt ||
    "Ein automatisch generierter FinanzFreedom Blogartikel.";

  // 🔹 Markdown-Datei erstellen
  const md = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt}"
slug: "${slug}"
---

${rawText.replace(/^---[\s\S]*?---/, "").trim()}
`;

  const outPath = path.join(contentDir, `${slug}.md`);
  await fs.writeFile(outPath, md, "utf8");
  console.log("✅ Artikel gespeichert unter:", outPath);
}

// Start
generateArticle().catch(err => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
