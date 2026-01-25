import Link from "next/link";

export default function EtfIndex() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>ETFs verstehen & richtig starten</h1>

        <p style={styles.subtitle}>
          ETFs sind der einfachste Einstieg in den langfristigen Vermögensaufbau.
          Auf dieser Seite findest du die wichtigsten Grundlagen, Erklärungen
          und Entscheidungen – logisch aufgebaut und verständlich erklärt.
        </p>
      </section>

      {/* Einführung / Führung */}
      <section style={styles.intro}>
        <h2 style={styles.introTitle}>So nutzt du diese ETF-Übersicht sinnvoll</h2>

        <ol style={styles.steps}>
          <li>
            <strong>Starte mit den Grundlagen:</strong> Verstehe zuerst, was ETFs
            sind und warum sie für Einsteiger so beliebt sind.
          </li>
          <li>
            <strong>Lerne die wichtigsten ETF-Typen kennen:</strong> MSCI World,
            Emerging Markets und All-World ETFs im Vergleich.
          </li>
          <li>
            <strong>Triff deine Entscheidung:</strong> Finde heraus, welcher ETF
            zu deinem Ziel und deiner Risikobereitschaft passt.
          </li>
        </ol>
      </section>

      {/* Karten */}
      <section style={styles.grid}>
        {/* ETF Grundlagen */}
      <Link href="/etfs/etf-grundlagen" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>ETF Grundlagen</h3>
          <p style={styles.cardText}>
            Was ETFs sind, wie sie funktionieren und warum sie ideal für
            Einsteiger sind.
          </p>
          <span style={styles.cta}>Zum Artikel</span>
        </Link>

        {/* MSCI World */}
        <Link href="/etfs/msci-world" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>MSCI World ETF</h3>
          <p style={styles.cardText}>
            Der Klassiker unter den ETFs – globale Streuung, Chancen & Risiken
            verständlich erklärt.
          </p>
          <span style={styles.cta}>Zum Artikel</span>
        </Link>

        {/* Emerging Markets */}
        <Link href="/etfs/msci-emerging-markets" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>MSCI Emerging Markets</h3>
          <p style={styles.cardText}>
            Schwellenländer-ETFs: höhere Chancen, höhere Risiken – klar erklärt.
          </p>
          <span style={styles.cta}>Zum Artikel</span>
        </Link>

        {/* All World */}
        <Link href="/etfs/all-world-etfs" style={styles.card}>
          <div style={styles.cardBar} />
          <h3 style={styles.cardTitle}>All-World ETFs</h3>
          <p style={styles.cardText}>
            Ein ETF für die ganze Welt – Unterschiede zu MSCI World & Co. auf
            einen Blick.
          </p>
          <span style={styles.cta}>Zum Artikel</span>
        </Link>
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
    margin: "0 auto 40px",
    textAlign: "center",
  },
  back: {
    display: "inline-block",
    marginBottom: "16px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 600,
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
    lineHeight: 1.6,
  },

  /* Einführung */
  intro: {
    maxWidth: "900px",
    margin: "0 auto 50px",
    background: "rgba(2, 6, 23, 0.55)",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "26px",
  },
  introTitle: {
    fontSize: "1.4rem",
    marginBottom: "14px",
    color: "#ffffff",
  },
  steps: {
    paddingLeft: "18px",
    lineHeight: 1.8,
    color: "#cbd5f5",
  },

  /* Karten */
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
  cardTitle: {
    fontSize: "1.25rem",
    marginBottom: "8px",
    color: "#ffffff",
  },
  cardText: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    opacity: 0.9,
  },
  cta: {
    display: "inline-block",
    marginTop: "14px",
    color: "#2dd4bf",
    fontWeight: 600,
  },
};
