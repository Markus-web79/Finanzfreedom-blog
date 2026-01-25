export default function Impressum() {
  return (
    <main style={styles.page}>
      <h1>Impressum</h1>

      <p>Angaben gemäß § 5 TMG</p>

      <p>
        Markus Habermann<br />
        Elsa-Brandströmstr. 21<br />
        45699 Herten<br />
        Deutschland
      </p>

      <p>
        Kontakt:<br />
        E-Mail: kontakt@finanzfreedom.de
      </p>

      <p>
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
        Markus Habermann
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
    lineHeight: "1.7",
  },
};
