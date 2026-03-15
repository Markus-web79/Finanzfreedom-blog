const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = process.cwd();
const CONTENT_ROOT = path.join(ROOT, "content");
const DEFAULT_CATEGORY = "investieren";
const CATEGORY_DIR = path.join(CONTENT_ROOT, DEFAULT_CATEGORY);
const REPORTS_DIR = path.join(ROOT, "reports");
const STATE_FILE = path.join(ROOT, ".article-generator-state.json");

fs.mkdirSync(CATEGORY_DIR, { recursive: true });
fs.mkdirSync(REPORTS_DIR, { recursive: true });

/*
HIGH-END THEMENPOOL
Später nur hier erweitern.
Keine Zeitstempel, keine Zufallsslugs, keine Dopplungen.
*/

const TOPICS = [
  {
    slug: "etf-sparplan-fuer-einsteiger",
    title: "ETF-Sparplan für Einsteiger – der einfache Weg zum Vermögensaufbau",
    description:
      "Warum ETF-Sparpläne für viele Anleger der einfachste Einstieg in den langfristigen Vermögensaufbau sind.",
    category: "investieren",
    type: "guide",
    angle: "einsteiger",
  },
  {
    slug: "investieren-mit-50-euro",
    title: "Investieren mit 50 Euro im Monat – lohnt sich das?",
    description:
      "Auch kleine Beträge können langfristig Vermögen aufbauen. Entscheidend ist vor allem Zeit und Disziplin.",
    category: "investieren",
    type: "praxis",
    angle: "kleine-betraege",
  },
  {
    slug: "vermoegensaufbau-fuer-handwerker",
    title: "Vermögensaufbau für Handwerker – Strategien für langfristige finanzielle Sicherheit",
    description:
      "Viele Handwerker verdienen solide, investieren aber oft zu spät. So kann langfristiger Vermögensaufbau gelingen.",
    category: "investieren",
    type: "praxis",
    angle: "zielgruppe-handwerker",
  },
  {
    slug: "investieren-als-selbststaendiger",
    title: "Investieren als Selbstständiger – Rücklagen und Vermögensaufbau sinnvoll kombinieren",
    description:
      "Selbstständige müssen ihre finanzielle Zukunft stärker selbst organisieren. Diese Struktur hilft beim Einstieg.",
    category: "investieren",
    type: "praxis",
    angle: "zielgruppe-selbststaendige",
  },
  {
    slug: "etf-fehler-die-anfaenger-machen",
    title: "Die häufigsten ETF-Fehler von Einsteigern",
    description:
      "Viele Anleger machen beim Einstieg in ETFs ähnliche Fehler. Diese Stolperfallen solltest du vermeiden.",
    category: "investieren",
    type: "guide",
    angle: "fehler",
  },
  {
    slug: "investieren-mit-kleinem-gehalt",
    title: "Investieren mit kleinem Gehalt – wie Vermögensaufbau trotzdem möglich ist",
    description:
      "Auch mit begrenztem Einkommen lässt sich langfristig Vermögen aufbauen, wenn die Struktur stimmt.",
    category: "investieren",
    type: "praxis",
    angle: "kleines-einkommen",
  },
  {
    slug: "wie-viel-sollte-man-investieren",
    title: "Wie viel sollte man monatlich investieren?",
    description:
      "Die richtige Sparrate hängt von mehreren Faktoren ab. Diese Orientierung hilft beim Einstieg.",
    category: "investieren",
    type: "guide",
    angle: "sparrate",
  },
  {
    slug: "langfristig-vermoegen-aufbauen",
    title: "Langfristig Vermögen aufbauen – warum Geduld entscheidend ist",
    description:
      "Vermögensaufbau ist kein kurzfristiges Projekt. Langfristiges Denken bleibt der Schlüssel.",
    category: "investieren",
    type: "guide",
    angle: "langfristigkeit",
  },
  {
    slug: "trade-republic-etf-sparplan",
    title: "Trade Republic ETF-Sparplan – so funktioniert der Einstieg",
    description:
      "Wie ETF-Sparpläne bei Trade Republic funktionieren und worauf Einsteiger achten sollten.",
    category: "investieren",
    type: "broker",
    angle: "broker",
  },
  {
    slug: "trade-republic-erfahrungen",
    title: "Trade Republic Erfahrungen – für wen sich der Broker wirklich lohnt",
    description:
      "Ein realistischer Blick auf Funktionen, Kosten und Stärken von Trade Republic.",
    category: "investieren",
    type: "broker",
    angle: "broker",
  },
  {
    slug: "scalable-capital-erfahrungen",
    title: "Scalable Capital Erfahrungen – wie gut ist der Broker in der Praxis?",
    description:
      "Was Anleger über Scalable Capital wissen sollten und für wen sich der Broker eignet.",
    category: "investieren",
    type: "broker",
    angle: "broker",
  },
  {
    slug: "bester-broker-fuer-einsteiger",
    title: "Der beste Broker für Einsteiger – worauf es wirklich ankommt",
    description:
      "Nicht jeder Broker passt zu jedem Anleger. Diese Kriterien sind für Einsteiger entscheidend.",
    category: "investieren",
    type: "broker",
    angle: "broker-vergleich",
  },
  {
    slug: "msci-world-etf",
    title: "MSCI World ETF – warum dieser Index so beliebt ist",
    description:
      "Der MSCI World gehört zu den bekanntesten Indizes der Welt. Doch was steckt wirklich dahinter?",
    category: "investieren",
    type: "guide",
    angle: "etf-index",
  },
  {
    slug: "msci-world-rendite",
    title: "MSCI World Rendite – wie viel Gewinn ist langfristig realistisch?",
    description:
      "Ein Blick auf historische Renditen und realistische Erwartungen beim Investieren.",
    category: "investieren",
    type: "guide",
    angle: "etf-index",
  },
  {
    slug: "msci-world-vs-ftse-all-world",
    title: "MSCI World vs FTSE All World – welcher ETF passt besser?",
    description:
      "Beide Indizes sind beliebt. Die Unterschiede sind kleiner, aber wichtiger, als viele denken.",
    category: "investieren",
    type: "comparison",
    angle: "vergleich",
  },
  {
    slug: "etf-sparplan-kosten",
    title: "ETF-Sparplan Kosten – welche Gebühren wirklich wichtig sind",
    description:
      "Viele Anleger unterschätzen die Kosten beim Investieren. Diese Gebühren solltest du kennen.",
    category: "investieren",
    type: "guide",
    angle: "kosten",
  },
  {
    slug: "etf-sparplan-steuern",
    title: "ETF-Sparplan und Steuern – das sollten Anleger wissen",
    description:
      "Wie ETFs in Deutschland besteuert werden und welche Regeln Anleger kennen sollten.",
    category: "investieren",
    type: "guide",
    angle: "steuern",
  },
  {
    slug: "beste-etfs-fuer-einsteiger",
    title: "Die besten ETFs für Einsteiger",
    description:
      "Welche ETFs sich besonders für den Einstieg eignen und worauf Anleger achten sollten.",
    category: "investieren",
    type: "guide",
    angle: "etf-auswahl",
  },
  {
    slug: "etf-sparplan-vorteile",
    title: "ETF-Sparplan Vorteile – warum immer mehr Menschen investieren",
    description:
      "ETF-Sparpläne gelten als einfache und günstige Lösung für langfristigen Vermögensaufbau.",
    category: "investieren",
    type: "guide",
    angle: "vor-nachteile",
  },
  {
    slug: "etf-sparplan-nachteile",
    title: "ETF-Sparplan Nachteile – diese Risiken solltest du kennen",
    description:
      "Auch ETF-Sparpläne haben Schwächen. Wer investiert, sollte sie kennen.",
    category: "investieren",
    type: "guide",
    angle: "vor-nachteile",
  },
  {
    slug: "etf-oder-tagesgeld",
    title: "ETF oder Tagesgeld – was ist für Einsteiger sinnvoller?",
    description:
      "Beide Lösungen haben ihre Berechtigung. Entscheidend sind Ziel, Risiko und Zeithorizont.",
    category: "investieren",
    type: "comparison",
    angle: "vergleich",
  },
  {
    slug: "investieren-mit-100-euro",
    title: "Investieren mit 100 Euro im Monat – was langfristig möglich ist",
    description:
      "Schon 100 Euro im Monat können über Jahre einen großen Unterschied machen.",
    category: "investieren",
    type: "praxis",
    angle: "kleine-betraege",
  },
  {
    slug: "warum-frueh-investieren-wichtig-ist",
    title: "Warum früh investieren wichtiger ist als hohe Rendite",
    description:
      "Zeit ist beim Investieren oft wertvoller als die Jagd nach der höchsten Rendite.",
    category: "investieren",
    type: "guide",
    angle: "langfristigkeit",
  },
  {
    slug: "etf-sparplan-fuer-berufseinsteiger",
    title: "ETF-Sparplan für Berufseinsteiger – ein sinnvoller Start in den Vermögensaufbau",
    description:
      "Wer früh anfängt, verschafft sich langfristig einen enormen Vorteil.",
    category: "investieren",
    type: "praxis",
    angle: "zielgruppe-jung",
  },
  {
    slug: "vermoegensaufbau-fuer-azubis",
    title: "Vermögensaufbau für Azubis – geht das schon mit kleinem Einkommen?",
    description:
      "Auch in der Ausbildung kann man erste Strukturen für späteren Vermögensaufbau schaffen.",
    category: "investieren",
    type: "praxis",
    angle: "zielgruppe-jung",
  },
  {
    slug: "was-ist-ein-etf",
    title: "Was ist ein ETF? Einfach erklärt für Anfänger",
    description:
      "ETFs gehören zu den beliebtesten Geldanlagen. Was genau dahintersteckt, erklärt dieser Artikel.",
    category: "investieren",
    type: "guide",
    angle: "definition",
  },
  {
    slug: "etf-sparplan-strategie",
    title: "ETF-Sparplan Strategie – wie Anleger langfristig Vermögen aufbauen",
    description:
      "Mit einer klaren Strategie lassen sich ETF-Sparpläne deutlich sinnvoller nutzen.",
    category: "investieren",
    type: "guide",
    angle: "strategie",
  },
  {
    slug: "etf-sparplan-langfristig",
    title: "Warum langfristiges Investieren beim ETF-Sparplan entscheidend ist",
    description:
      "ETF-Sparpläne entfalten ihre Stärke vor allem über viele Jahre hinweg.",
    category: "investieren",
    type: "guide",
    angle: "langfristigkeit",
  },
  {
    slug: "etf-sparplan-rendite",
    title: "ETF-Sparplan Rendite – welche Erwartungen wirklich realistisch sind",
    description:
      "Historische Renditen helfen bei der Einordnung, ersetzen aber keine realistische Erwartung.",
    category: "investieren",
    type: "guide",
    angle: "rendite",
  },
  {
    slug: "trade-republic-vs-scalable-capital",
    title: "Trade Republic vs Scalable Capital – welcher Broker passt besser?",
    description:
      "Beide Broker sind beliebt. Der entscheidende Unterschied liegt oft im Detail.",
    category: "investieren",
    type: "comparison",
    angle: "vergleich",
  },
];

/*
TEXTBAUSTEINE
Die Varianten sorgen dafür, dass die Texte nicht immer gleich klingen.
*/

const introBlocks = [
  "Viele Menschen möchten investieren, fühlen sich vom Thema Geldanlage aber unnötig eingeschüchtert. Gerade am Anfang fehlt oft nicht die Motivation, sondern eine klare Orientierung.",
  "Investieren wird häufig komplizierter dargestellt, als es in der Praxis sein muss. Für viele Anleger sind nicht exotische Strategien entscheidend, sondern saubere Grundlagen.",
  "Der Wunsch nach Vermögensaufbau ist bei vielen da, die konkrete Umsetzung scheitert jedoch oft an Unsicherheit, falschen Erwartungen oder fehlender Struktur.",
];

const whyImportantBlocks = [
  "Wer langfristig Vermögen aufbauen will, kommt an systematischem Investieren kaum vorbei. Reines Sparen auf dem Konto reicht in vielen Fällen nicht aus, um Kaufkraft langfristig zu erhalten.",
  "Das Thema ist deshalb relevant, weil finanzielle Entscheidungen selten isoliert wirken. Was heute verschoben wird, fehlt später oft an Rendite, Erfahrung oder Zeit.",
  "Viele Anleger beschäftigen sich zu spät mit den Grundlagen. Dabei hängt der langfristige Erfolg oft weniger von Perfektion als von einem klaren Start ab.",
];

const functionBlocks = [
  "In der Praxis funktioniert Vermögensaufbau meist dann gut, wenn Entscheidungen vereinfacht werden. Regelmäßigkeit, breite Streuung und ein realistischer Zeithorizont sind wichtiger als Aktionismus.",
  "Gerade Einsteiger profitieren davon, wenn sie Produkte und Prozesse verstehen, statt nur Schlagworte zu übernehmen. Wer das Prinzip hinter einer Anlage begreift, trifft später deutlich bessere Entscheidungen.",
  "Viele erfolgreiche Strategien wirken von außen unspektakulär. Genau das ist häufig ihre Stärke: Sie sind verständlich, durchhaltbar und nicht von ständigem Markttiming abhängig.",
];

const exampleBlocks = [
  "Ein klassisches Beispiel: Jemand investiert nicht auf einmal große Summen, sondern startet mit einem festen monatlichen Betrag. Über Jahre entsteht dadurch oft mehr Stabilität als durch spontane Einzelentscheidungen.",
  "In der Praxis zeigt sich häufig, dass kleine, dauerhaft durchgehaltene Beträge langfristig wirksamer sind als ambitionierte Pläne, die nach wenigen Monaten wieder aufgegeben werden.",
  "Wer früh beginnt, profitiert nicht nur von möglichen Renditen, sondern auch von Routine. Dieser Lerneffekt wird beim Vermögensaufbau oft unterschätzt.",
];

const riskBlocks = [
  "Trotzdem sollte niemand investieren, ohne die Risiken zu verstehen. Auch breit gestreute Anlagen schwanken. Wer dieses Grundprinzip ignoriert, reagiert in schwachen Marktphasen oft zu emotional.",
  "Ein häufiger Fehler besteht darin, Vorteile zu überbetonen und Nachteile auszublenden. Seriöser Vermögensaufbau bedeutet immer, Chancen und Risiken gemeinsam zu betrachten.",
  "Gerade langfristige Strategien wirken nur dann, wenn man in normalen Marktphasen genauso diszipliniert bleibt wie in schwächeren Zeiten.",
];

const conclusionBlocks = [
  "Am Ende ist meist nicht die theoretisch beste Lösung entscheidend, sondern die Strategie, die realistisch zum eigenen Leben passt und langfristig durchgehalten wird.",
  "Wer Investieren sauber verstehen, einfach strukturieren und langfristig umsetzen will, ist meist besser aufgestellt als jemand, der ständig nach der perfekten Einzelentscheidung sucht.",
  "Die wichtigste Erkenntnis ist oft überraschend unspektakulär: Vermögensaufbau entsteht selten durch Komplexität, sondern durch Klarheit, Disziplin und Zeit.",
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function todayIso() {
  return new Date().toISOString().split("T")[0];
}

function slugFromFilename(filename) {
  return filename.replace(/\.md$/, "");
}

function loadState() {
  if (!fs.existsSync(STATE_FILE)) {
    return { generated: [], hashes: [] };
  }

  try {
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return {
      generated: Array.isArray(parsed.generated) ? parsed.generated : [],
      hashes: Array.isArray(parsed.hashes) ? parsed.hashes : [],
    };
  } catch (err) {
    return { generated: [], hashes: [] };
  }
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), "utf8");
}

function sha1(input) {
  return crypto.createHash("sha1").update(input).digest("hex");
}

function extractExistingSlugs() {
  const allFiles = fs
    .readdirSync(CATEGORY_DIR)
    .filter((file) => file.endsWith(".md"));

  return new Set(allFiles.map((file) => slugFromFilename(file)));
}

function writeTopicExhaustedReport(existingCount, topicCount) {
  const report = {
    status: "TOPIC_POOL_EXHAUSTED",
    generated_at: new Date().toISOString(),
    message:
      "Keine neuen Themen mehr verfügbar. Bitte Themenliste erweitern.",
    existing_articles: existingCount,
    configured_topics: topicCount,
  };

  fs.writeFileSync(
    path.join(REPORTS_DIR, "article-generator-status.json"),
    JSON.stringify(report, null, 2),
    "utf8"
  );
}

function buildGuideArticle(topic) {
  return `---
title: ${topic.title}
description: ${topic.description}
category: ${topic.category}
date: ${todayIso()}
---

## Einleitung

${pick(introBlocks)}

## Warum dieses Thema wichtig ist

${pick(whyImportantBlocks)}

## Wie das Prinzip in der Praxis funktioniert

${pick(functionBlocks)}

## Ein realistisches Praxisbeispiel

${pick(exampleBlocks)}

## Worauf Anleger besonders achten sollten

Gerade am Anfang ist nicht die maximale Komplexität entscheidend, sondern eine nachvollziehbare Struktur. Dazu gehören ein realistischer monatlicher Betrag, ein tragbarer Zeithorizont und die Bereitschaft, Marktschwankungen nicht mit hektischen Entscheidungen zu beantworten.

## Typische Fehler und Missverständnisse

Viele Anleger glauben, dass sie zuerst besonders viel Geld brauchen oder den perfekten Zeitpunkt finden müssen. In der Praxis ist häufig das Gegenteil der Fall: Wer zu lange wartet, verliert vor allem Zeit.

${pick(riskBlocks)}

## Fazit

${pick(conclusionBlocks)}
`.trim();
}

function buildPraxisArticle(topic) {
  return `---
title: ${topic.title}
description: ${topic.description}
category: ${topic.category}
date: ${todayIso()}
---

## Einleitung

${pick(introBlocks)}

## Die typische Ausgangslage

Im Alltag scheitert Vermögensaufbau selten an fehlendem Interesse, sondern an fehlender Umsetzbarkeit. Wer mit einem normalen oder schwankenden Einkommen plant, braucht keine perfekte Theorie, sondern eine Lösung, die realistisch durchhaltbar ist.

## Was in der Praxis funktioniert

${pick(functionBlocks)}

Gerade bei kleineren Beträgen spielt Routine eine größere Rolle als spektakuläre Renditeversprechen. Wer klare Abläufe schafft, trifft langfristig meist bessere Entscheidungen.

## Ein realistisches Beispiel

${pick(exampleBlocks)}

## Wo viele Menschen falsch ansetzen

Ein häufiger Fehler ist, dass entweder zu viel auf einmal gewollt wird oder das Thema über Jahre komplett liegen bleibt. Beides führt selten zu guten Ergebnissen. Sinnvoller ist ein stabiler Mittelweg.

${pick(riskBlocks)}

## Fazit

${pick(conclusionBlocks)}
`.trim();
}

function buildBrokerArticle(topic) {
  return `---
title: ${topic.title}
description: ${topic.description}
category: ${topic.category}
date: ${todayIso()}
---

## Einleitung

Broker sind für viele Anleger der praktische Zugang zum Investieren. Trotzdem wird ihre Auswahl oft zu oberflächlich getroffen. Nicht Werbung, sondern Struktur, Kosten und Bedienbarkeit entscheiden darüber, ob ein Broker langfristig wirklich passt.

## Warum die Brokerwahl wichtig ist

${pick(whyImportantBlocks)}

## Welche Kriterien wirklich zählen

Für viele Einsteiger sind vor allem diese Punkte relevant:

- einfache Bedienung
- transparente Gebühren
- gute ETF-Sparplan-Funktionen
- verlässliche Ausführung
- eine Struktur, die zum eigenen Anlageverhalten passt

## Typische Fehler beim Brokervergleich

Viele konzentrieren sich nur auf einzelne Gebühren und übersehen das Gesamtbild. Ein Broker kann günstig sein und trotzdem schlecht passen, wenn die Bedienung kompliziert ist oder die Produktauswahl nicht zur eigenen Strategie passt.

## Praxisnahe Einordnung

${pick(exampleBlocks)}

${pick(riskBlocks)}

## Fazit

${pick(conclusionBlocks)}
`.trim();
}

function buildComparisonArticle(topic) {
  return `---
title: ${topic.title}
description: ${topic.description}
category: ${topic.category}
date: ${todayIso()}
---

## Einleitung

Vergleichsartikel wirken oft einfacher, als sie sind. In der Praxis geht es nicht darum, einen pauschalen Sieger zu küren, sondern die Unterschiede so einzuordnen, dass sie für echte Anleger relevant werden.

## Wo die Unterschiede wirklich liegen

${pick(functionBlocks)}

Entscheidend ist fast nie ein einzelnes Detail, sondern die Frage, welches Produkt oder welcher Anbieter besser zum eigenen Ziel, zum Anlagehorizont und zum persönlichen Nutzungsverhalten passt.

## Welche Entscheidung für wen sinnvoll sein kann

Einsteiger brauchen meist vor allem Klarheit, einfache Prozesse und geringe Hürden. Erfahrenere Anleger bewerten dagegen häufiger Kostenstruktur, Produktumfang oder zusätzliche Funktionen.

## Typische Denkfehler bei Vergleichen

Viele Menschen suchen nach der einen perfekten Lösung. In Wirklichkeit hängt die Qualität einer Entscheidung stark davon ab, welche Anforderungen man selbst mitbringt.

${pick(riskBlocks)}

## Fazit

${pick(conclusionBlocks)}
`.trim();
}

function buildArticleByType(topic) {
  switch (topic.type) {
    case "praxis":
      return buildPraxisArticle(topic);
    case "broker":
      return buildBrokerArticle(topic);
    case "comparison":
      return buildComparisonArticle(topic);
    case "guide":
    default:
      return buildGuideArticle(topic);
  }
}

const state = loadState();
const existingSlugs = extractExistingSlugs();

const availableTopics = TOPICS.filter((topic) => {
  return !existingSlugs.has(topic.slug) && !state.generated.includes(topic.slug);
});

if (availableTopics.length === 0) {
  writeTopicExhaustedReport(existingSlugs.size, TOPICS.length);
  console.log("Keine neuen Themen mehr verfügbar. Bitte Themenliste erweitern.");
  process.exit(0);
}

/*
Wir versuchen mehrere Themen, falls zufällig derselbe Hash entsteht.
Das ist unwahrscheinlich, aber für Stabilität sinnvoll.
*/

let selectedTopic = null;
let article = null;
let articleHash = null;

for (const topic of availableTopics.sort(() => Math.random() - 0.5)) {
  const candidate = buildArticleByType(topic);
  const candidateHash = sha1(candidate);

  if (!state.hashes.includes(candidateHash)) {
    selectedTopic = topic;
    article = candidate;
    articleHash = candidateHash;
    break;
  }
}

if (!selectedTopic || !article || !articleHash) {
  writeTopicExhaustedReport(existingSlugs.size, TOPICS.length);
  console.log("Kein ausreichend eindeutiger Artikel mehr erzeugbar.");
  process.exit(0);
}

const filePath = path.join(CATEGORY_DIR, `${selectedTopic.slug}.md`);

if (fs.existsSync(filePath)) {
  console.log(`Artikel existiert bereits: ${selectedTopic.slug}.md`);
  process.exit(0);
}

fs.writeFileSync(filePath, article, "utf8");

state.generated.push(selectedTopic.slug);
state.hashes.push(articleHash);
saveState(state);

console.log(`Artikel erstellt: ${selectedTopic.slug}.md`);
