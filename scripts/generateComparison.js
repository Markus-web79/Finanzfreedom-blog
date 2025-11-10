// scripts/generateComparison.js
import fs from "fs";
import path from "path";

// 🧠 Vergleichskategorien
const categories = ["etfs", "versicherungen", "tagesgeld", "kredite"];
const logFile = path.join(process.cwd(), "scripts", "lastCategory.json");

// 🔁 Nächste Kategorie ermitteln
function getNextCategory() {
  let last = "none";
  if (fs.existsSync(logFile)) {
    try {
      last = JSON.parse(fs.readFileSync(logFile, "utf8")).last || "none";
    } catch {}
  }
  const index = last === "none" ? -1 : categories.indexOf(last);
  const next = categories[(index + 1) % categories.length];
  fs.writeFileSync(logFile, JSON.stringify({ last: next }, null, 2));
  return next;
}

const category = getNextCategory();
console.log(`🧠 Generiere neuen Vergleich in Kategorie: ${category}`);

const folder = path.join(process.cwd(), "content", category);
if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

// 📝 Artikel-Vorlage
const now = new Date();
const date = now.toISOString().split("T")[0];
const titleMap = {
  etfs: "ETF-Vergleich 2025 – Die besten Sparpläne im Überblick",
  versicherungen: "Versicherungsvergleich 2025 – Welche lohnt sich wirklich?",
  tagesgeld: "Tagesgeld-Vergleich 2025 – Wo gibt’s noch Zinsen?",
  kredite: "Kreditvergleich 2025 – Finde die besten Konditionen",
};
const slug = titleMap[category].toLowerCase().replace(/[^a-z0-9]+/g, "-");

const content = `---
title: "${titleMap[category]}"
description: "Aktueller ${category}-Vergleich auf FinanzFreedom – Alle Anbieter im Überblick mit Vorteilen, Nachteilen und Empfehlungen."
date: "${date}"
category: "${category}"
---

## Überblick
Hier findest du den aktuellen **${category}-Vergleich 2025**.  
Wir aktualisieren die Daten regelmäßig, damit du immer die besten Konditionen siehst.

## Anbieter-Vergleich

| Anbieter | Bewertung | Besonderheit |
|-----------|------------|--------------|
| Beispiel 1 | ⭐⭐⭐⭐☆ | Keine Depotgebühren |
| Beispiel 2 | ⭐⭐⭐⭐⭐ | Bonus für Neukunden |
| Beispiel 3 | ⭐⭐⭐☆☆ | Solide Basislösung |

> 💡 Hinweis: Die Daten dienen nur als Beispiel. Echte Vergleiche folgen automatisch über unsere API-Anbindung.

## Fazit
Der FinanzFreedom-${category}-Vergleich 2025 zeigt: Ein regelmäßiger Vergleich spart bares Geld – bleib dran und prüfe regelmäßig deine Optionen.
`;

const filePath = path.join(folder, `${slug}.md`);
fs.writeFileSync(filePath, content, "utf8");

console.log(`✅ Neuer Vergleich erstellt: ${filePath}`);
