import Head from "next/head";
import Link from "next/link";

export default function InvestierenHub() {
  return (
    <>
      <Head>
        <title>Investieren – Vermögen aufbauen | FinanzFreedom</title>
        <meta
          name="description"
          content="Investieren leicht gemacht: ETFs, Sparpläne, Broker & Tools für langfristigen Vermögensaufbau – unabhängig & verständlich."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>Investieren & Vermögen aufbauen</h1>
          <p style={styles.subtitle}>
            Langfristig investieren statt spekulieren.
            Hier findest du klare Strategien, Tools und Vergleiche
            für nachhaltigen Vermögensaufbau.
          </p>
        </section>

        {/* PRIMARY ACTIONS */}
        <section style={styles.primaryGrid}>
          <Link href="/investieren/etfs" style={styles.primaryCard}>
            <h2>ETFs verstehen & nutzen</h2>
            <p>
              Der einfachste Weg für langfristigen Vermögensaufbau –
              mit Rechnern, Erklärungen und Strategien.
            </p>
            <span style={styles.cta}>Zu den ETFs →</span>
          </Link>

          <Link href="/investieren/broker" style={styles.primaryCard}>
            <h2>Broker vergleichen</h2>
            <p>
              Kosten, Sparpläne, Sicherheit & Funktionen –
              finde den passenden Broker für deine Strategie.
            </p>
            <span style={styles.cta}>Zum Broker-Vergleich →</span>
          </Link>
        </section>

        {/* SECONDARY GRID */}
        <section style={styles.grid}>
          <Link
            href="/tools/etf-sparplan-rechner"
            style={styles.card}
          >
            <h3>ETF-Sparplan-Rechner</h3>
            <p>
              Berechne in Sekunden, wie viel Vermögen du langfristig
              mit einem ETF-Sparplan aufbauen kannst.
            </p>
          </Link>

          <Link
            href="/investieren/etfs/msci-world"
            style={styles.card}
          >
            <h3>MSCI World</h3>
            <p>
              Der Klassiker unter den ETFs – Chancen, Risiken
              und Einsatzmöglichkeiten kompakt erklärt.
            </p>
          </Link>

          <Link
            href="/investieren/etfs/sparplan"
            style={styles.card}
          >
            <h3>ETF-Sparplan starten</h3>
            <p>
              Schritt für Schritt erklärt, wie du automatisiert
              und stressfrei investierst.
            </p>
          </Link>
        </section>
      </main>
    </>
  );
}

/* STYLES */

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },

  hero: {
    maxWidth: "900px",
    margin: "0 auto 60px",
    textAlign: "center",
  },

  title: {
    fontSize: "2.6rem",
    marginBottom: "16px",
    color: "#ffffff",
  },

  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
  },

  primaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    maxWidth: "1000px",
    margin: "0 auto 60px",
  },

  primaryCard: {
    padding: "32px",
    borderRadius: "18px",
    background: "linear-gradient(145deg, #0f172a, #020617)",
    border: "1px solid #22d3ee",
    textDecoration: "none",
    color: "#e5e7eb",
  },

  cta: {
    display: "inline-block",
    marginTop: "14px",
    color: "#22d3ee",
    fontWeight: "600",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  card: {
    padding: "28px",
    borderRadius: "16px",
    background: "#020617",
    border: "1px solid #1e293b",
    textDecoration: "none",
    color: "#e5e7eb",
  },
};
