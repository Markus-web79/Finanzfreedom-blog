import fs from "fs";

const wordsFile = process.argv[2];
const words = fs.readFileSync(wordsFile, "utf-8").split("\n").filter(Boolean);

const cspell = JSON.parse(fs.readFileSync("cspell.json", "utf-8"));

cspell.words = Array.from(new Set([...(cspell.words || []), ...words]));

fs.writeFileSync("cspell.json", JSON.stringify(cspell, null, 2));
console.log(`✅ ${words.length} Wörter zum Wörterbuch hinzugefügt`);
