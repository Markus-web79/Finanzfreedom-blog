import Link from "next/link";

export default function EtfIndex() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>ETFs verstehen & vergleichen</h1>
        <p style={styles.subtitle}>
          Exchange Traded Funds einfach erklärt – von Grundlagen bis konkrete ETF-Auswahl.
        </p>
      </section>

      {/* Karten */}
      <section style={styles.grid}>
        <Link href="/etf/msci-world" style={styles.card}>
          <div style={styles.cardBar} />
          <h3>MSCI World ETF</h3>
          <p>
            Der Klassiker unter den ETFs – globale Streuung, Chancen & Risiken
            verständlich erklärt.
          </p>
          <span style={styles.cta}>→ Zum Artikel</span>
        </Link>

        <div style={styles.cardDisabled}>
          <div style={styles.cardBar} />
          <h3>MSCI Emerging Markets</h3>
          <p>
            Schwellenländer-ETFs: höhere Chancen, höhere Risiken – Artikel folgt.
          </p>
          <span style={styles.disabled}>Artikel folgt</span>
        </div>

        <div style={styles.cardDisabled}>
          <div style={styles.cardBar} />
          <h3>All-World ETFs</h3>
          <p>
            Ein ETF für die ganze Welt – Unterschiede zu MSCI World & Co.
          </p>
          <span style={styles.disabled}>Artikel folgt</span>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },

  header: {
    maxWidth: "900px",
    margin: "0 auto 50px",
    textAlign: "center",
  },

  back: {
    display: "inline-block",
    marginBottom: "16px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: "600",
  },

  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },

  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
  },

  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
  },

  card: {
    position: "relative",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "26px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.25s ease",
  },

  cardDisabled: {
    position: "relative",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "26px",
    color: "#9ca3af",
    opacity: 0.6,
  },

  cardBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "#2dd4bf",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  },

  cta: {
    display: "inline-block",
    marginTop: "14px",
    color: "#2dd4bf",
    fontWeight: "600",
  },

  disabled: {
    display: "inline-block",
    marginTop: "14px",
    fontStyle: "italic",
  },
};
