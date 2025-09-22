import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateArticle() {
  const outDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(outDir);

  // Beispiel-Prompt
  const prompt = `
Schreibe einen SEO-optimierten Finanzartikel mit Überschrift (H1), 
klaren Abschnitten (H2/H3), Meta-Description und einem Teaser.
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const raw = response.choices[0].message.content.trim();

  // Extrahiere ersten Titel für slug
  const titleMatch = raw.match(/^#\s+(.+)/m);
  const title = titleMatch ? titleMatch[1].trim() : "Automatischer Artikel";

  const slug = slugify(title, { lower: true, strict: true });

  const excerptMatch = raw.match(/META:\s*(.+)/i);
  const excerpt = excerptMatch ? excerptMatch[1].trim() : "Kurzbeschreibung folgt.";

  const md = `---
title: "${title}"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "${excerpt}"
slug: "${slug}"
---

${raw}
`;

  const outPath = path.join(outDir, `${slug}.md`);
  await fs.writeFile(outPath, md, "utf8");
  console.log("✅ Artikel gespeichert:", outPath);
}

generateArticle().catch(err => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
