export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: "/api/sitemap" });
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
