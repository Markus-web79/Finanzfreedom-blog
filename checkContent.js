// checkContent.js
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

// Wörterbuch für automatische Korrekturen
const replacements = {
  "Steür": "Steuer",
  "steür": "steuer",
  "Steürn": "Steuern",
  "steürn": "steuern",
  "ae": "ä",
  "oe": "ö",
  "ue": "ü",
  "Ae": "Ä",
  "Oe": "Ö",
  "Ue": "Ü"
};

function fixContent(text) {
  let fixed = text;
  for (const [wrong, correct] of Object.entries(replacements)) {
    const regex = new RegExp(wrong, "g");
    fixed = fixed.replace(regex, correct);
  }
  return fixed;
}

function checkFiles() {
  const files = fs.readdirSync(contentDir);

  files.forEach((file) => {
    if (file.endsWith(".md")) {
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, "utf8");
      const fixedContent = fixContent(content);

      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, "utf8");
        console.log(`✅ Korrigiert: ${file}`);
      } else {
        console.log(`👌 Keine Änderungen: ${file}`);
      }
    }
  });
}

checkFiles();
