export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <h3 style={styles.logo}>
            Finanz<span style={styles.highlight}>Freedom</span>
          </h3>
          <p>
            Dein Weg zur finanziellen Freiheit – einfach erklärt, ehrlich und
            unabhängig.
          </p>
        </div>

        <div style={styles.links}>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/kontakt">Kontakt</a>
          <a href="/newsletter">Newsletter</a>
        </div>

        <p style={styles.copy}>
          © {currentYear} FinanzFreedom · Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0d0d0d',
    color: '#ccc',
    padding: '50px 20px 20px 20px',
    borderTop: '2px solid #00a19b',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  brand: {
    marginBottom: '25px',
  },
  logo: {
    fontSize: '1.8rem',
    color: '#fff',
    margin: '0',
  },
  highlight: {
    color: '#00a19b',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '20px',
  },
  copy: {
    fontSize: '0.9rem',
    color: '#888',
  },
};
