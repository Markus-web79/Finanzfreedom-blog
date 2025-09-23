import fs from "fs";
import path from "path";

const contentDir = "./content";

function checkArticles() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    const text = fs.readFileSync(filePath, "utf-8");

    console.log(`\n🔍 Prüfe: ${file}`);

    if (!text.includes("META:")) {
      console.warn("⚠️ Keine META-Zeile gefunden!");
    }

    if (!text.match(/^# /m)) {
      console.warn("⚠️ Kein Titel (# Überschrift) gefunden!");
    }

    if (file.length > 80) {
      console.warn("⚠️ Dateiname ist sehr lang, bitte kürzen.");
    }

    if (text.length < 200) {
      console.warn("⚠️ Artikel scheint sehr kurz zu sein.");
    }
  });
}

checkArticles();
