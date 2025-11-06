/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // ← ganz wichtig für statische Routen
  reactStrictMode: true,
};

export default nextConfig;
