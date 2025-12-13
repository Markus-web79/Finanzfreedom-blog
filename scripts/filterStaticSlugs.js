import fs from "fs";
import path from "path";

const CONTENT_DIR = "content";
const BLOCKED = ["datenschutz", "impressum", "kontakt"];

const files = fs.readdirSync(CONTENT_DIR);

files.forEach(file => {
  const slug = file.replace(".md", "");
  if (BLOCKED.includes(slug)) {
    console.log(`⛔ Entferne verbotenen Slug: ${slug}`);
    fs.unlinkSync(path.join(CONTENT_DIR, file));
  }
});

console.log("✅ Content bereinigt");
