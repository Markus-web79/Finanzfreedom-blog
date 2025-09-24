import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

function fixText(text) {
  return text
    .replace(/Steuern/g, "Steuern")
    .replace(/Steürn/g, "Steuern")
    .replace(/Steür/g, "Steuer")
    .replace(/Vermoegen/g, "Vermögen")
    .replace(/Fuehren/g, "Führen")
    .replace(/ue/g, "ü")
    .replace(/ae/g, "ä")
    .replace(/oe/g, "ö");
}

function checkFiles() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    let text = fs.readFileSync(filePath, "utf-8");
    const fixed = fixText(text);

    if (fixed !== text) {
      fs.writeFileSync(filePath, fixed, "utf-8");
      console.log(`✅ Korrigiert: ${file}`);
    } else {
      console.log(`✔️ OK: ${file}`);
    }
  }
}

checkFiles();
