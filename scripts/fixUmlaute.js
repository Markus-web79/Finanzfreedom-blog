// scripts/fixUmlaute.js

/**
 * Ersetzt deutsche Umlaute und Sonderzeichen in Texten
 * für saubere Dateinamen, Slugs und SEO-optimierte Strings.
 */
export function fixUmlaute(text) {
  if (!text || typeof text !== "string") return "";

  return text
    .replace(/Ä/g, "Ae")
    .replace(/Ö/g, "Oe")
    .replace(/Ü/g, "Ue")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^\w\s-]/g, "") // Entfernt Sonderzeichen außer - und _
    .trim()
    .replace(/\s+/g, "-"); // Ersetzt Leerzeichen durch Bindestriche
}

// ⬇️ Default-Export, damit der Import in generateArticle.js funktioniert
export default fixUmlaute;
