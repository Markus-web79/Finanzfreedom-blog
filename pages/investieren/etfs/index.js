import Head from "next/head";
import Link from "next/link";

export default function EtfsHub() {
  return (
    <>
      <Head>
        <title>ETFs – einfach investieren | FinanzFreedom</title>
        <meta
          name="description"
          content="ETFs sind das Fundament für langfristigen Vermögensaufbau. Rechner, Vergleiche & klare Erklärungen – unabhängig und verständlich."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>ETFs – einfach investieren</h1>
          <p style={styles.subtitle}>
            ETFs sind das Fundament für langfristigen Vermögensaufbau.
            Hier findest du Rechner, Vergleiche und klare Erklärungen –
            unabhängig & verständlich.
          </p>
        </section>

        {/* PRIMARY ACTION */}
        <section style={styles.primary}>
          <Link href="/tools/etf-sparplan-rechner" style={styles.primaryCard}>
            <h2>ETF-Sparplan berechnen</h2>
            <p>
              In wenigen Sekunden sehen, wie viel Vermögen du langfristig
              mit einem ETF-Sparplan aufbauen kannst.
            </p>
            <span style={styles.primaryButton}>Zum Rechner →</span>
          </Link>
        </section>

        {/* HUB CARDS */}
        <section style={styles.grid}>
          <Link href="/investieren/etfs/msci-world" style={styles.card}>
            <h3>MSCI World ETF</h3>
            <p>
              Der weltweit beliebteste ETF. Chancen, Risiken und
              Einsatzmöglichkeiten kompakt erklärt.
            </p>
          </Link>

          <Link href="/investieren/etfs/sparplan" style={styles.card}>
            <h3>ETF-Sparplan starten</h3>
            <p>
              Schritt für Schritt erklärt: So startest du einfach und
              automatisiert mit ETFs.
            </p>
          </Link>

          <Link href="/investieren/broker" style={styles.card}>
            <h3>Broker vergleichen</h3>
            <p>
              Kosten, Sparpläne und Sicherheit – finde den passenden
              Broker für deine Strategie.
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

  primary: {
    maxWidth: "900px",
    margin: "0 auto 60px",
  },

  primaryCard: {
    display: "block",
    padding: "32px",
    borderRadius: "18px",
    background: "linear-gradient(145deg, #0f172a, #020617)",
    border: "1px solid #22d3ee",
    textDecoration: "none",
    color: "#e5e7eb",
  },

  primaryButton: {
    display: "inline-block",
    marginTop: "16px",
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
