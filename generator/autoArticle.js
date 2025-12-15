import fs from "fs";
import path from "path";

const OUTPUT_DIR = "./content";
const TEMPLATE = JSON.parse(
  fs.readFileSync("./generator/articles/template.json", "utf-8")
);

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

function createArticle({ title, description, content, category }) {
  const slug = slugify(title);

  const article = {
    ...TEMPLATE,
    title,
    description,
    slug,
    category,
    content
  };

  const filePath = path.join(OUTPUT_DIR, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(article, null, 2));

  console.log("✔ Artikel erstellt:", filePath);
}

// 👇 HIER DEIN TESTARTIKEL
createArticle({
  title: "ETF Sparplan für Einsteiger",
  description: "So startest du einfach und sicher mit ETFs",
  category: "etfs",
  content: `
    <h2>Was ist ein ETF?</h2>
    <p>Ein ETF ist ein börsengehandelter Fonds...</p>

    <h2>Warum ein Sparplan sinnvoll ist</h2>
    <p>Mit einem Sparplan investierst du regelmäßig...</p>
  `
});
