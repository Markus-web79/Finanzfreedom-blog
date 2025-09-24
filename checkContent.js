// checkContent.js
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");
const logFile = path.join(process.cwd(), "corrections.log");

// Alle bisherigen Logs löschen
if (fs.existsSync(logFile)) {
  fs.unlinkSync(logFile);
}

function logCorrection(file, before, after) {
  const entry = `📄 ${file}\n   - ${before} 👉 ${after}\n`;
  fs.appendFileSync(logFile, entry);
}

function checkAndFixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let originalContent = content;

  // Regeln: Umlaute und typische Schreibweisen
  const rules = [
    { regex: /\bSteur\b/g, replace: "Steuer" },
    { regex: /\bSteür/g, replace: "Steuer" },
    { regex: /\bVermoegen\b/g, replace: "Vermögen" },
    { regex: /\bFuehren\b/g, replace: "Führen" },
    { regex: /\bOekonomie\b/g, replace: "Ökonomie" },
    { regex: /\baufbaün\b/g, replace: "aufbauen" },
    { regex: /\bü\b/g, replace: "ü" },
    { regex: /\bü\b/g, replace: "ü" },
    { regex: /\boe\b/g, replace: "ö" },
    { regex: /\bae\b/g, replace: "ä" },
  ];

  for (const { regex, replace } of rules) {
    if (regex.test(content)) {
      content = content.replace(regex, replace);
      logCorrection(path.basename(filePath), regex, replace);
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, "utf8");
  }
}

function run() {
  const files = fs.readdirSync(contentDir);

  files.forEach((file) => {
    if (file.endsWith(".md")) {
      const filePath = path.join(contentDir, file);
      checkAndFixFile(filePath);
    }
  });

  console.log("✅ Content-Check abgeschlossen.");
}

run();
