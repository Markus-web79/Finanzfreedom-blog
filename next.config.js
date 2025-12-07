/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // Wichtig für statischen Export
  distDir: "out",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,     // Damit alle Routen korrekt exportiert werden

  reactStrictMode: true,
};

module.exports = nextConfig;
