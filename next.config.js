/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // ← ganz wichtig für statische Routen
  reactStrictMode: true,
};

export default nextConfig;
// Export categories für Header
export const revalidate = 3600; // 1x pro Stunde neue Kategorien
