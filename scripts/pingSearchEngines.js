// scripts/pingSearchEngines.js
// 🔔 Ping Google & Bing nach neuem Deploy

import https from "https";

const sitemapUrl = "https://finanzfreedom.de/sitemap.xml";
const feedUrl = "https://finanzfreedom.de/feed.xml";

function pingSearchEngines() {
  console.log("🔔 Pinge Suchmaschinen...");

  const endpoints = [
    `https://www.google.com/ping?sitemap=${sitemapUrl}`,
    `https://www.bing.com/ping?sitemap=${sitemapUrl}`,
  ];

  endpoints.forEach((url) => {
    https
      .get(url, (res) => {
        console.log(`✅ Ping gesendet an ${url} – Status: ${res.statusCode}`);
      })
      .on("error", (err) => {
        console.error(`❌ Ping-Fehler bei ${url}:`, err);
      });
  });

  console.log("🔔 RSS-Feed und Sitemap-Pings abgeschlossen.");
}

pingSearchEngines();
