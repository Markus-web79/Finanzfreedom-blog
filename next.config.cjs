/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Wichtig: sorgt für statischen Export
  images: {
    unoptimized: true, // verhindert Fehler bei Vercel static export
  },
  trailingSlash: true, // sorgt für saubere URLs (/seite/)
  reactStrictMode: true,
};

export default nextConfig;
