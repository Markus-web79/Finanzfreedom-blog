import fs from "fs";
import path from "path";
import { fixUmlauts } from "./fixUmluate.js";
import { checkGrammar } from "./checkGrammar.js";

const contentRoot = "./content";
const topicsFile = "./generator/topics.json";

function createArticle(title, category, keywords = []) {
  const slug = title
    .toLowerCase()
    .replace(/[äöüß]/g, (c) =>
      c === "ä" ? "ae" : c === "ö" ? "oe" : c === "ü" ? "ue" : "ss"
    )
    .replace(/[^a-z0-9\-]/g, "-")
    .replace(/--+/g, "-");

  const categoryDir = path.join(contentRoot, category);
  const filePath = path.join(categoryDir, `${slug}.md`);

  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  if (fs.existsSync(filePath)) {
    console.log(`⚠️ Artikel existiert schon: ${filePath}`);
    return;
  }

  const template = `---
title: ${title}
slug: ${slug}
category: ${category}
description: ${title} – verständlich erklärt und mit Praxis-Tipps.
author: FinanzFreedom Redaktion
keywords: ${keywords.join(", ")}
---

# ${title}

## Einführung
Hier erfährst du Schritt für Schritt, wie du dieses Thema praktisch umsetzt.

## Hauptteil
Ausführliche Erklärungen, Beispiele und Tipps rund um **${title}**.

## Fazit
Das Wichtigste in Kürze – und wie du sofort starten kannst.
`;

  fs.writeFileSync(filePath, template);
  console.log(`✅ Neuer Artikel erstellt: ${filePath}`);

  const topics = JSON.parse(fs.readFileSync(topicsFile, "utf8"));
  topics.shift();
  fs.writeFileSync(topicsFile, JSON.stringify(topics, null, 2));
}

createArticle("ETF-Strategien für 2025", "etfs", ["etfs", "Finanzen"]);
