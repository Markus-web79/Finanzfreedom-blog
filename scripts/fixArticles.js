import fs from "fs";
import path from "path";

const folder = "./content";

function fixFile(filePath) {
  let text = fs.readFileSync(filePath, "utf8");

  // Einheitliche Zeilenenden und Sonderzeichen korrigieren
  text = text.replace(/\r\n/g, "\n");
  text = text.replace(/\r/g, "\n");
  text = text.replace(/\t/g, "  ");

  // Sicherstellen, dass Header korrekt mit --- beginnt und endet
  if (!text.startsWith("---")) {
    text = "---\n" + text;
  }
  if (!text.includes("\n---\n")) {
    const firstLineEnd = text.indexOf("\n");
    text = text.slice(0, firstLineEnd) + "\n---\n" + text.slice(firstLineEnd);
  }

  // Überflüssige Leerzeilen am Anfang/Ende entfernen
  text = text.trim() + "\n";

  fs.writeFileSync(filePath, text, "utf8");
  console.log(`✅ Datei korrigiert: ${path.basename(filePath)}`);
}

function run() {
  const files = fs.readdirSync(folder).filter(f => f.endsWith(".md"));
  console.log(`\n🔍 Überprüfe ${files.length} Artikel...\n`);

  files.forEach(file => {
    const filePath = path.join(folder, file);
    fixFile(filePath);
  });

  console.log("\n🎉 Alle Artikel überprüft und formatiert!");
}

run();
