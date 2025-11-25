export default function KategorieSlugPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Kategorie</h1>
      <p>Artikel-Ansicht in Bearbeitung.</p>
    </div>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps() {
  return { props: {} };
}
