export default function Disclaimer() {
  return (
    <main style={styles.page}>
      <h1>Disclaimer & Transparenz</h1>

      <p>
        Die Inhalte auf FinanzFreedom dienen ausschließlich der allgemeinen
        Information und stellen keine Anlageberatung dar.
      </p>

      <p>
        Finanzentscheidungen sind individuell und mit Risiken verbunden.
        Bitte informiere dich eigenständig oder ziehe bei Bedarf
        einen qualifizierten Berater hinzu.
      </p>

      <h2>Affiliate-Hinweis</h2>
      <p>
        FinanzFreedom kann sogenannte Affiliate-Links enthalten.
        Wenn du über einen solchen Link ein Produkt nutzt oder abschließt,
        erhalten wir möglicherweise eine Provision.
      </p>

      <p>
        Für dich entstehen dadurch keine zusätzlichen Kosten.
        Unsere Bewertungen und Inhalte bleiben davon unberührt.
      </p>

      <p style={{ opacity: 0.8 }}>
        Transparenz ist für uns wichtiger als kurzfristige Einnahmen.
      </p>
    </main>
  );
}

const styles = {
  page: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px",
    color: "#e5e7eb",
  },
};
