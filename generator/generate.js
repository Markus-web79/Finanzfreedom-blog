import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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

// 🔄 Rotationsdatei
const rotationFile = path.join(process.cwd(), "..", "content", ".rotation.json");

// 📌 Thema auswählen mit Rotation
function getNextTopic() {
  let index = 0;
  if (fs.existsSync(rotationFile)) {
    try {
      const data = fs.readJsonSync(rotationFile);
      index = (data.index + 1) % topics.length;
    } catch {
      index = 0;
    }
  }
  fs.writeJsonSync(rotationFile, { index });
  return topics[index];
}

// 📌 Einfache Affiliate-Links je nach Thema
function getAffiliateNote(topic) {
  if (topic.toLowerCase().includes("etf")) {
    return "👉 **Tipp:** Starte dein ETF-Sparen einfach über [Scalable Capital](https://dein-affiliate-link/etf).";
  }
  if (topic.toLowerCase().includes("dividenden")) {
    return "👉 **Tipp:** Finde die besten Dividenden-Aktien mit [Trade Republic](https://dein-affiliate-link/dividenden).";
  }
  if (topic.toLowerCase().includes("affiliate")) {
    return "👉 **Tipp:** Lerne Affiliate-Marketing Schritt für Schritt mit [Digistore24](https://dein-affiliate-link/affiliate).";
  }
  if (topic.toLowerCase().includes("ebook")) {
    return "👉 **Tipp:** Verkaufe deine E-Books einfach über [Amazon KDP](https://dein-affiliate-link/ebook).";
  }
  return "👉 **Hinweis:** Finanzentscheidungen bergen Risiken – informiere dich gut, bevor du investierst.";
}

async function generateArticle() {
  const contentDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(contentDir);

  // 📌 Willkommensartikel immer neu schreiben
  const demoSlug = "willkommen";
  const demoPath = path.join(contentDir, `${demoSlug}.md`);
  const demoMd = `---
title: "Willkommen auf dem FinanzFreedom Blog"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "Dein automatischer Blog über Finanzen und passives Einkommen ist live!"
---

# 🎉 Willkommen

Dies ist dein erster automatisch erzeugter Artikel.  
Hier kannst du sofort sehen, wie Inhalte angezeigt werden.

👉 Bald kommen hier automatisch neue Artikel mit Tipps und Affiliate-Links!
`;
  await fs.writeFile(demoPath, demoMd, "utf8");

  // 📌 Prüfen, ob heute schon ein Artikel existiert
  const today = new Date().toISOString().split("T")[0];
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));
  const alreadyToday = files.some(file => {
    const content = fs.readFileSync(path.join(contentDir, file), "utf8");
    return content.includes(`date: "${today}"`);
  });

  if (alreadyToday) {
    console.log("⏩ Heute wurde bereits ein Artikel erstellt – kein neuer Artikel nötig.");
    return;
  }

  // 🔄 Thema auswählen
  const topic = getNextTopic();
  console.log("📝 Generiere Artikel zu:", topic);

  const prompt = `Du bist ein deutscher Finanz-Redakteur. Schreibe einen SEO-optimierten Blogartikel über: ${topic}. Verwende klare Überschriften (H2/H3), Listen und Beispiele. Füge am Anfang 'META: ...' mit einer kurzen Meta-Beschreibung ein.`;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  let output = completion.choices[0].message.content;

  // 📌 Affiliate-Link einfügen
  output += `

---

${getAffiliateNote(topic)}
`;

  const slug = slugify(topic, { lower: true, strict: true });
  const outPath = path.join(contentDir, `${slug}.md`);
  await fs.writeFile(outPath, output, "utf8");

  console.log("✅ Neuer Artikel gespeichert:", outPath);
}

generateArticle().catch((err) => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
