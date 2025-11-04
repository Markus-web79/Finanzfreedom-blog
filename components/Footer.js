export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <h3 style={styles.logo}>
            Finanz<span style={styles.highlight}>Freedom</span>
          </h3>
          <p>Dein Weg zur finanziellen Freiheit – einfach erklärt, ehrlich und unabhängig.</p>
        </div>

        <div style={styles.links}>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/kontakt">Kontakt</a>
          <a href="/newsletter">Newsletter</a>
        </div>

        <p style={styles.note}>
          *Diese Seite enthält Affiliate-Links. Wenn du über einen Link etwas kaufst,
          erhalten wir ggf. eine kleine Provision – ohne Mehrkosten für dich.*
        </p>

        <p style={styles.copy}>
          © {currentYear} FinanzFreedom – Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#001f1f",
    color: "#ccc",
    padding: "50px 20px",
    borderTop: "2px solid #00bfa6",
    textAlign: "center",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  brand: {
    marginBottom: "1rem",
  },
  logo: {
    margin: 0,
    fontWeight: "bold",
  },
  highlight: {
    color: "#00bfa6",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1rem",
  },
  note: {
    fontSize: "0.85em",
    color: "#888",
    maxWidth: "700px",
    margin: "0 auto 1rem",
  },
  copy: {
    fontSize: "0.9em",
  },
};
