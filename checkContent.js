// checkContent.js
const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "content");

// Ersetzungen definieren (Umlaute etc.)
const replacements = {
  "ue": "ü",
  "ae": "ä",
  "oe": "ö",
  "Ue": "Ü",
  "Ae": "Ä",
  "Oe": "Ö",
  "Steür": "Steuer",
  "steür": "steuer",
  "Steürn": "Steuern",
  "steürn": "steuern"
};

// Prüfen + Fixen
function checkAndFixContent() {
  const files = fs.readdirSync(contentDir);

  files.forEach((file) => {
    if (file.endsWith(".md")) {
      const filePath = path.join(contentDir, file);
      let content = fs.readFileSync(filePath, "utf8");
      let originalContent = content;

      for (const [wrong, correct] of Object.entries(replacements)) {
        const regex = new RegExp(wrong, "g");
        content = content.replace(regex, correct);
      }

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ Korrigiert: ${file}`);
      } else {
        console.log(`ℹ️ Keine Änderungen: ${file}`);
      }
    }
  });
}

checkAndFixContent();
