const fs = require("fs");
const path = require("path");

// Wörterbuch laden
const dict = JSON.parse(fs.readFileSync("dictionary.json", "utf8"));

const contentDir = path.join(__dirname, "content");
const files = fs.readdirSync(contentDir);

files.forEach(file => {
  if (file.endsWith(".md")) {
    const filePath = path.join(contentDir, file);
    let text = fs.readFileSync(filePath, "utf8");

    // Wörter ersetzen
    for (const [wrong, correct] of Object.entries(dict)) {
      const regex = new RegExp(wrong, "g");
      text = text.replace(regex, correct);
    }

    fs.writeFileSync(filePath, text, "utf8");
    console.log(`✅ Korrigiert: ${file}`);
  }
});
