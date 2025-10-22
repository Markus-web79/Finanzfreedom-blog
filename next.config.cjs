/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out', // hierhin schreibt Next.js die statischen Dateien
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
