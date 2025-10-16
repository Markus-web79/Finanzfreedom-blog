/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⬇️ sorgt dafür, dass Next.js eine statische Website exportiert (für Vercel)
  output: "export",

  // ⬇️ erlaubt relative Pfade für Bilder (keine Optimierung durch Vercel nötig)
  images: { unoptimized: true },

  // ⬇️ sorgt für funktionierende URLs mit / am Ende
  trailingSlash: true,

  // ⬇️ stellt sicher, dass .js und .jsx Dateien als Pages erkannt werden
  pageExtensions: ["js", "jsx"],
};

// ⬅️ wichtig: CommonJS-Export statt ESModule
module.exports = nextConfig;
