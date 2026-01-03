import Head from "next/head";
import Link from "next/link";

export default function InvestierenHub() {
  return (
    <>
      <Head>
        <title>Investieren leicht erklärt | FinanzFreedom</title>
        <meta
          name="description"
          content="ETF-Sparpläne, Broker-Vergleiche, Strategien & Tools – alles rund ums Investieren einfach erklärt bei FinanzFreedom."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>Investieren leicht erklärt</h1>
          <p style={styles.subtitle}>
            ETFs, Sparpläne, Broker & Strategien – verständlich, unabhängig und
            portalartig aufgebaut.
          </p>
        </section>

        {/* TOOLS CTA */}
        <section style={styles.toolBox}>
          <h2 style={styles.toolTitle}>ETF-Sparplan berechnen</h2>
          <p style={styles.toolText}>
            Berechne in Sekunden, wie viel Vermögen du mit einem ETF-Sparplan
            langfristig aufbauen kannst.
          </p>
          <Link href="/tools/etf-sparplan-rechner" style={styles.toolButton}>
            Zum ETF-Sparplan-Rechner →
          </Link>
        </section>

        {/* HUB GRID */}
        <section style={styles.grid}>
          <Link href="/investieren/etfs" style={styles.card}>
            <h3>ETFs & Sparpläne</h3>
            <p>
              Grundlagen, Strategien, MSCI World, Einsteiger-Guides &
              langfristiger Vermögensaufbau.
            </p>
          </Link>

          <Link href="/investieren/broker" style={styles.card}>
            <h3>Broker & Vergleiche</h3>
            <p>
              ETF-Broker vergleichen, Kosten verstehen und den passenden Broker
              finden.
            </p>
          </Link>

          <Link href="/blog" style={styles.card}>
            <h3>Guides & Analysen</h3>
            <p>
              Praxisnahe Artikel, Marktanalysen und klare Entscheidungen für
              Einsteiger & Fortgeschrittene.
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
    transition: "all 0.25s ease",
  },
};
