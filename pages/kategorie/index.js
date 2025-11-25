export default function KategorieHome() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Kategorien</h1>
      <p>Diese Seite dient aktuell nur dazu, dass der Build grün bleibt.</p>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
