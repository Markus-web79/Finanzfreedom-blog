import fs from "fs-extra";
import path from "path";
import slugify from "slugify";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateArticle() {
  const contentDir = path.join(process.cwd(), "..", "content");
  await fs.ensureDir(contentDir);

  // 📌 Willkommensartikel immer neu schreiben
  const demoSlug = "willkommen";
  const demoPath = path.join(contentDir, `${demoSlug}.md`);

  const demoMd = `---
title: "Willkommen auf dem FinanzFreedom Blog"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "Dein automatischer Blog über Finanzen und passives Einkommen ist live!"
---

# 🎉 Willkommen

Dies ist dein erster automatisch erzeugter Artikel.  
Hier kannst du sofort sehen, wie Inhalte angezeigt werden.

👉 Bald kommen hier automatisch neue Artikel mit Tipps und Affiliate-Links!
`;

  await fs.writeFile(demoPath, demoMd, "utf8");
  console.log("✅ Demo-Artikel erstellt:", demoPath);

  // 📂 Debug: Liste alle Dateien in content/
  console.log("📂 Dateien im content-Ordner:");
  console.log(fs.readdirSync(contentDir));
}

generateArticle().catch((err) => {
  console.error("❌ Fehler beim Generieren:", err);
  process.exit(1);
});
