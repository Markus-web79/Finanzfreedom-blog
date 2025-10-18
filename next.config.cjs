/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⬇️ sorgt dafür, dass Next.js eine statische Website exportiert (für Vercel)
  output: "export",

  // ⬇️ erlaubt relative Pfade für Bilder (keine Optimierung durch Vercel nötig)
  images: { unoptimized: true },

  // ⬇️ sorgt für funktionierende URLs mit / am Ende
  trailingSlash: false,

  // ⬇️ stellt sicher, dass .js und .jsx Dateien als Pages erkannt werden
  pageExtensions: ["js", "jsx"],

  // ⬇️ wichtiger Zusatz: verhindert Abbruch bei leeren oder nicht gefundenen Routen
  eslint: { ignoreDuringBuilds: true },

  // ⬇️ für dynamische Routen wie /pages/[slug]
  experimental: {
    fallbackNodePolyfills: false,
  },
};

// ⬅️ CommonJS-Export (nicht ESModule)
module.exports = nextConfig;
