import fs from "fs";
import path from "path";

const contentDir = "./content";

function checkArticles() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    const text = fs.readFileSync(filePath, "utf-8");

    console.log(`\n🔍 Prüfe: ${file}`);

    // --- META
    if (!text.includes("META:")) {
      console.warn("⚠️ Keine META-Zeile gefunden!");
    }

    // --- Titel
    if (!text.match(/^# /m)) {
      console.warn("⚠️ Kein Titel (# Überschrift) gefunden!");
    }

    // --- Länge
    if (text.length < 200) {
      console.warn("⚠️ Artikel scheint sehr kurz zu sein.");
    }

    // --- Umlaute
    const wrongUmlauts = {
      ue: "ü",
      ae: "ä",
      oe: "ö",
      Ue: "Ü",
      Ae: "Ä",
      Oe: "Ö"
    };

    for (const [wrong, right] of Object.entries(wrongUmlauts)) {
      if (text.includes(wrong)) {
        console.warn(`⚠️ Falsch geschrieben: "${wrong}" → bitte ersetzen durch "${right}"`);
      }
    }
  });
}

checkArticles();
