// scripts/pingSearchEngines.js
// Meldet die aktuelle Sitemap bei Google & Bing an

import https from "https";

const BASE_URL = "https://finanzfreedom.de";
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

function ping(url) {
  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        const { statusCode } = res;
        res.resume(); // Daten verwerfen, wir brauchen nur den Status

        if (statusCode && statusCode >= 200 && statusCode < 300) {
          console.log(`✅ Ping OK: ${url} (${statusCode})`);
        } else {
          console.warn(`⚠️ Unerwartete Antwort ${statusCode} für: ${url}`);
        }

        resolve();
      })
      .on("error", (err) => {
        console.error(`❌ Ping fehlgeschlagen: ${url}`, err.message);
        // Deploy soll trotzdem weiterlaufen:
        resolve();
      });
  });
}

async function main() {
  console.log("🔎 Melde Sitemap bei Suchmaschinen an:", SITEMAP_URL);

  const googleUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(
    SITEMAP_URL
  )}`;
  const bingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(
    SITEMAP_URL
  )}`;

  await ping(googleUrl);
  await ping(bingUrl);

  console.log("✅ Sitemap-Pings abgeschlossen.");
}

main().catch((err) => {
  console.error("❌ Unerwarteter Fehler beim Sitemap-Ping:", err);
  // Deploy nicht abbrechen:
  process.exit(0);
});
