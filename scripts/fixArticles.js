import fs from "fs";
import path from "path";

const folder = "./content";

function fixFile(filePath) {
  let text = fs.readFileSync(filePath, "utf8");

  // Einheitliche Zeilenenden und Sonderzeichen korrigieren
  text = text.replace(/\r\n/g, "\n");
  text = text.replace(/—/g, "-");
  text = text.replace(/–/g, "-");
  text = text.replace(/\t/g, "  ");

  // Sicherstellen, dass Header korrekt mit --- beginnt und endet
  if (!text.startsWith("---")) {
    text =
