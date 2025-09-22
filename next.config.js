/** @type {import('next').NextConfig} */
const nextConfig = {
  // sorgt dafür, dass Vercel saubere statische Seiten baut
  output: "export",
  images: { unoptimized: true },

  // Rewrites: /pages/<slug> → /<slug>
  async rewrites() {
    return [
      {
        source: "/pages/:slug",
        destination: "/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
