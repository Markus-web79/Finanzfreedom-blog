import Head from "next/head";
import Link from "next/link";

export default function ETFsHub() {
  return (
    <>
      <Head>
        <title>ETFs & Sparpläne | FinanzFreedom</title>
        <meta
          name="description"
          content="ETF-Sparpläne, MSCI World, Strategien & Vergleiche – einfach erklärt und portalartig aufgebaut."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>ETFs & Sparpläne</h1>
          <p style={styles.subtitle}>
            Der einfachste Weg zum langfristigen Vermögensaufbau – klar,
            unabhängig und verständlich erklärt.
          </p>
        </section>

        {/* QUICK ACTION */}
        <section style={styles.toolBox}>
          <h2 style={styles.toolTitle}>ETF-Sparplan berechnen</h2>
          <p style={styles.toolText}>
            Finde heraus, wie viel Vermögen du mit einem ETF-Sparplan aufbauen
            kannst.
          </p>
          <Link href="/tools/etf-sparplan-rechner" style={styles.toolButton}>
            Sparplan berechnen →
          </Link>
        </section>

        {/* HUB GRID */}
        <section style={styles.grid}>
          <Link href="/blog/etf-sparplan-fuer-einsteiger" style={styles.card}>
            <h3>ETF-Sparplan für Einsteiger</h3>
            <p>
              Grundlagen, erste Schritte, typische Fehler und klare Empfehlungen
              für den Start.
            </p>
          </Link>

          <Link href="/blog/msci-world-etf-kaufen" style={styles.card}>
            <h3>MSCI World & Welt-ETFs</h3>
            <p>
              Was steckt wirklich drin? Chancen, Risiken und Alternativen im
              Vergleich.
            </p>
          </Link>

          <Link href="/blog/etf-strategien-2025" style={styles.card}>
            <h3>ETF-Strategien</h3>
            <p>
              Ein-ETF-Lösung, Core-Satellite, Dividenden-Strategien & mehr.
            </p>
          </Link>

          <Link
            href="/investieren/broker"
            style={{ ...styles.card, borderColor: "#2dd4bf" }}
          >
            <h3>Passenden Broker finden</h3>
            <p>
              Vergleiche ETF-Broker nach Kosten, Sparplänen und Benutzerfreundlichkeit.
            </p>
          </Link>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "70px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },

  hero: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 60px",
  },

  title: {
    fontSize: "3rem",
    marginBottom: "14px",
    color: "#ffffff",
  },

  subtitle: {
    fontSize: "1.2rem",
    color: "#9ca3af",
  },

  toolBox: {
    maxWidth: "900px",
    margin: "0 auto 70px",
    padding: "32px",
    borderRadius: "16px",
    border: "1px solid #1e293b",
    background: "linear-gradient(145deg, #020617, #020617)",
  },

  toolTitle: {
    fontSize: "1.6rem",
    marginBottom: "10px",
    color: "#ffffff",
  },

  toolText: {
    color: "#9ca3af",
    marginBottom: "18px",
  },

  toolButton: {
    display: "inline-block",
    padding: "12px 22px",
    borderRadius: "10px",
    background: "#2dd4bf",
    color: "#020617",
    fontWeight: "600",
    textDecoration: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  card: {
    background: "linear-gradient(145deg, #020617, #020617)",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
  },
};
