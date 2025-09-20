import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Entscheidet: 3 kurze Artikel, dann 1 langer
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

// Prompt-Erstellung
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
    "Steuern auf Kapitalerträge: Grundlagen für Einsteiger",
  ];

  const topic = topics[Math.floor(Math.random() * topics.length)];
  const lengthInfo =
    length === "long" ? "Schreibe ca. 1200 Wörter." : "Schreibe ca. 500 Wörter.";
  return `${base}\n\nThema: ${topic}\n${lengthInfo}`;
}

async function generateArticle() {
  // 📌 Prüfen ob content/ leer ist → Demo-Artikel anlegen
  const contentDir = path.join(process.cwd(), "content");
  await fs.ensureDir(contentDir);
  const existingFiles = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md")); // Nur .md-Dateien zählen

  if (existingFiles.length === 0) {
    const demoSlug = "willkommen";
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

    const demoPath = path.join(contentDir, `${demoSlug}.md`);
    await fs.writeFile(demoPath, demoMd, "utf8");
    console.log("✅ Demo-Artikel erstellt:", demoPath);
  }

  // 🔽 Ab hier: AI-gesteuerte Artikelerstellung
  const longForm = needsLongForm();
  const prompt = makePrompt(longForm ? "long" : "short");

  console.log("📝 Generiere Artikel mit Prompt:", prompt);

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const output = completion.choices[0].message.content;
  const slug = slugify(output.split("\n")[0].slice(0, 60), { lower: true });

  const md = output.replace(/^META:.*$/m, ""); // Entferne META-Zeile aus dem Body

  const outPath = path.join(contentDir, `${slug}.md`);
  await fs.writeFile(outPath, md, "utf8");

  console.log("✅ Artikel gespeichert unter:", outPath);
}

// Generator starten
generateArticle().catch((err) => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
