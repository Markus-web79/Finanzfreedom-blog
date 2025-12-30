export default function UeberUns() {
  return (
    <main style={styles.page}>
      <h1>Über FinanzFreedom</h1>

      <p>
        FinanzFreedom ist ein unabhängiges Finanzportal mit dem Ziel,
        komplexe Finanzthemen verständlich, ehrlich und ohne Verkaufsdruck
        aufzubereiten.
      </p>

      <h2>Warum FinanzFreedom?</h2>
      <p>
        Viele Menschen verlieren Geld, nicht weil sie zu wenig verdienen,
        sondern weil Finanzentscheidungen unnötig kompliziert dargestellt
        werden. FinanzFreedom soll dabei helfen, bessere Entscheidungen zu
        treffen – Schritt für Schritt.
      </p>

      <h2>Wie wir arbeiten</h2>
      <p>
        Wir vergleichen Finanzprodukte sachlich und transparent. 
        Es gibt keine bezahlten Rankings und keine versteckten Empfehlungen.
        Wenn ein Produkt verlinkt wird, geschieht das nachvollziehbar und
        begründet.
      </p>

      <h2>Transparenz & Finanzierung</h2>
      <p>
        FinanzFreedom kann sogenannte Affiliate-Links enthalten.
        Das bedeutet: Wenn du dich über einen Link für ein Produkt entscheidest,
        erhalten wir möglicherweise eine Provision – für dich entstehen
        keine zusätzlichen Kosten.
      </p>

      <p style={{ opacity: 0.8 }}>
        Dies stellt keine Anlageberatung dar. Alle Inhalte dienen ausschließlich
        der Information.
      </p>

      <h2>Unsere Vision</h2>
      <p>
        FinanzFreedom soll langfristig zu einem umfassenden Finanzportal wachsen –
        mit Vergleichen, Wissen, Tools und später auch digitalen Produkten.
        Ziel ist ein System, das unabhängig, skalierbar und international
        einsetzbar ist.
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
