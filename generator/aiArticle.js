import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const OUTPUT_DIR = "./content";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function generateArticle({ title, category }) {
  console.log("🧠 Generiere Artikel:", title);

  const prompt = `
Schreibe einen hochwertigen, professionellen Finanzartikel auf Deutsch.

REGELN:
- HTML ONLY (kein Markdown)
- Kein Gelaber
- Klare Struktur
- SEO optimiert
- Sachlich, seriös
- Zielgruppe: normale Menschen, kein Fachchinesisch

STRUKTUR:
<h2>Einleitung</h2>
<h2>Grundlagen</h2>
<h2>Vorteile</h2>
<h2>Risiken</h2>
<h2>Fazit</h2>

THEMA:
${title}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3
  });

  const content = response.choices[0].message.content;
  const slug = slugify(title);

  const article = {
    title,
    description: `${title} einfach erklärt`,
    slug,
    category,
    content
  };

  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${slug}.json`),
    JSON.stringify(article, null, 2)
  );

  console.log("✅ Artikel gespeichert:", slug);
}

// 👇 HIER NUR TITEL ÄNDERN
await generateArticle({
  title: "ETF Sparplan für Einsteiger",
  category: "etfs"
});
