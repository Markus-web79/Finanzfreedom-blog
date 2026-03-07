import fs from "fs";
import path from "path";

const topics = [
  "etf-sparplan-fuer-einsteiger",
  "wie-man-mit-50-euro-investiert",
  "vermoegensaufbau-fuer-handwerker",
  "investieren-als-selbststaendiger",
  "etf-fehler-die-anfaenger-machen",
  "passives-einkommen-realistisch",
  "geldanlage-fuer-azubis",
  "investieren-mit-kleinem-gehalt",
  "wie-viel-sollte-man-investieren",
  "langfristig-vermoegen-aufbauen"
];

const dir = path.join(process.cwd(), "content/investieren");

fs.mkdirSync(dir, { recursive: true });

const topic = topics[Math.floor(Math.random() * topics.length)];

const filename = `${topic}-${Date.now()}.md`;

const article = `
---
title: ${topic.replace(/-/g, " ")}
description: Grundlagen und Strategien für langfristigen Vermögensaufbau.
category: investieren
date: ${new Date().toISOString().split("T")[0]}
---

Investieren wirkt für viele Menschen kompliziert. In Wirklichkeit geht es vor allem um Struktur und langfristiges Denken.

## Warum langfristiges Investieren funktioniert

Kapitalmärkte schwanken kurzfristig, entwickeln sich langfristig jedoch meist positiv. Wer regelmäßig investiert, nutzt diesen Effekt.

## Ein einfacher Einstieg

Viele Anleger starten mit breit gestreuten ETFs. Diese bilden große Märkte ab und reduzieren Einzelrisiken.

## Regelmäßigkeit schlägt Timing

Der größte Fehler vieler Einsteiger ist nicht eine falsche Anlage, sondern zu lange zu warten.

## Fazit

Langfristiges Investieren ist weniger kompliziert als viele denken. Wer früh beginnt und konsequent investiert, schafft die Grundlage für finanziellen Spielraum.
`;

fs.writeFileSync(path.join(dir, filename), article.trim());

console.log("Neuer Artikel erstellt:", filename);
