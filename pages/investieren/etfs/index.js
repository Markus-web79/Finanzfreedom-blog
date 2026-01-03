import Head from "next/head";
import Link from "next/link";

export default function EtfHub() {
  return (
    <>
      <Head>
        <title>ETFs – Strategien & Grundlagen | FinanzFreedom</title>
        <meta
          name="description"
          content="ETFs verständlich erklärt: Strategien, MSCI World, Sparpläne & langfristiger Vermögensaufbau."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <h1>ETFs verstehen & richtig investieren</h1>
          <p>
            ETFs sind das Fundament für langfristigen Vermögensaufbau.
            Hier findest du Strategien, Vergleiche & klare Empfehlungen.
          </p>
        </section>

        <section style={styles.grid}>
          <Link href="/blog/msci-world-kaufen" style={styles.card}>
            <h3>MSCI World</h3>
            <p>Aufbau, Chancen, Risiken & wie du investierst.</p>
          </Link>

          <Link href="/blog/etf-sparplan" style={styles.card}>
            <h3>ETF-Sparpläne</h3>
            <p>Monatlich investieren – einfach & automatisiert.</p>
          </Link>

          <Link href="/blog/etf-vs-einzelaktien" style={styles.card}>
            <h3>ETF vs. Aktien</h3>
            <p>Was lohnt sich für Einsteiger wirklich?</p>
          </Link>
        </section>

        <section style={styles.cta}>
          <h3>ETF-Sparplan direkt berechnen</h3>
          <Link href="/tools/etf-sparplan-rechner" style={styles.button}>
            Zum Rechner →
          </Link>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "80px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  hero: {
    maxWidth: "800px",
    margin: "0 auto 60px",
    textAlign: "center",
  },
  grid: {
    maxWidth: "1000px",
    margin: "0 auto 60px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    padding: "26px",
    borderRadius: "16px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#e5e7eb",
    textDecoration: "none",
  },
  cta: {
    textAlign: "center",
  },
  button: {
    display: "inline-block",
    marginTop: "16px",
    padding: "14px 26px",
    borderRadius: "12px",
    background: "#2dd4bf",
    color: "#020617",
    fontWeight: "700",
    textDecoration: "none",
  },
};
