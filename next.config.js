/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

// Optional: Wenn du unter /<repo> hostest, REPO_NAME in den Workflow-Umgebungsvariablen setzen
// if (isGithubActions) {
//   const repo = process.env.REPO_NAME || '';
//   basePath = `/${repo}`;
//   assetPrefix = `/${repo}/`;
// }

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix,
  basePath,
};

module.exports = nextConfig;
