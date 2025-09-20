import fs from 'fs-extra';
import path from 'path';
import slugify from 'slugify';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Entscheidet: 3 kurze Artikel, dann 1 langer
function needsLongForm() {
  const stampPath = path.join(process.cwd(), '.pattern.json');
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
function makePrompt(length = 'short') {
  const base = `Du bist ein deutscher Finanz-Redakteur. Schreibe einen SEO-optimierten Blogartikel über Finanzen & passives Einkommen. Verwende klare Überschriften (H2/H3), Listen und Beispiele. Füge am Anfang 'META: ...' mit einer kurzen Meta-Beschreibung ein. Baue 1–2 Hinweise auf Risiken ein.`;

  const topics = [
    'ETFs für Einsteiger: So startest du mit einem Sparplan',
    'Dividendenstrategie: Monatliche Ausschüttungen clever nutzen',
    '5 Wege zu passivem Einkommen ohne Startkapital',
    'Affiliate-Marketing: Schritt für Schritt zum ersten Einkommen',
    'Fehler, die Anfänger beim Investieren vermeiden sollten',
    'Passives Einkommen mit digitalen Produkten (E-Book, Vorlagen)',
    'ETF vs. Einzelaktien: Was ist sinnvoll für Anfänger?',
    'Inflation & Zinsen: So schützt du dein Erspartes',
    'Automatisierte Sparpläne: Tipps & Tools',
    'Steuern auf Kapitalerträge: Grundlagen für Einsteiger'
  ];

  const topic = topics[Math.floor(Math.random() * topics.length)];
  const wordTarget = (length === 'long') ? 1200 : 500;

  return `${base}\n\nThema: ${topic}\nZielwortzahl: ca. ${wordTarget} Wörter.\nGliedere sinnvoll mit H2/H3 und füge am Ende eine kurze Checkliste hinzu.`;
}

// Extrahiert Meta-Beschreibung
function parseMeta(text) {
  const lines = text.split('\n');
  let meta = '';
  if (lines[0]?.startsWith('META:')) {
    meta = lines[0].replace(/^META:\s*/, '').trim();
    text = lines.slice(1).join('\n').trim();
  }
  return { meta, body: text };
}

// Artikel generieren
async function generateArticle() {
  const longForm = needsLongForm();
  const prompt = makePrompt(longForm ? 'long' : 'short');

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7
  });

  const raw = response.choices?.[0]?.message?.content || "META: Artikel über Finanzen\nInhalt konnte nicht generiert werden.";
  const { meta, body } = parseMeta(raw);

  const titleLine = body.split('\n').find(l => l.trim().length > 0) || "Artikel zu Finanzen";
  const safeTitle = titleLine.replace(/^#+\s*/, '').trim();
  const slug = slugify(`${safeTitle}-${Date.now()}`, { lower: true, strict: true });
  const now = new Date().toISOString();
  const tags = ['Finanzen', 'Passives Einkommen'];
  const excerpt = meta.slice(0, 150) || 'Artikel über Finanzen & passives Einkommen.';

  const fm = [
    '---',
    `title: ${safeTitle}`,
    `date: ${now}`,
    `slug: ${slug}`,
    `tags: [${tags.join(', ')}]`,
    `excerpt: ${excerpt}`,
    '---',
    ''
  ].join('\n');

  const md = fm + body + '\n';

// 📌 Speichern direkt im Root-"content/" Ordner
const outDir = path.join(process.cwd(), "content");
await fs.ensureDir(outDir);

// Dateiname = slug + .md
const outPath = path.join(outDir, `${slug}.md`);

// Markdown-Datei schreiben
await fs.writeFile(outPath, md, "utf8");

console.log("✅ Artikel gespeichert unter:", outPath);
}

// Generator starten
generateArticle().catch(err => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});

