import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content/investieren");

const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));

files.forEach(file => {

  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  // wenn bereits Links vorhanden sind -> überspringen
  if (content.includes("Weitere Artikel")) return;

  const others = files
    .filter(f => f !== file)
    .slice(0, 2)
    .map(f => f.replace(".md", ""));

  const links = others.map(slug =>
    `- [${slug.replace(/-/g," ")}](/investieren/${slug})`
  ).join("\n");

  const section = `

## Weitere Artikel

${links}

`;

  content += section;

  fs.writeFileSync(filePath, content);

});

console.log("Interne Links ergänzt");
