import Head from "next/head";
import Link from "next/link";

export default function BrokerHub() {
  return (
    <>
      <Head>
        <title>ETF-Broker Vergleich 2025 | FinanzFreedom</title>
        <meta
          name="description"
          content="Vergleiche die besten ETF-Broker 2025: Kosten, Sparpläne, Vorteile & Empfehlungen für Einsteiger."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <h1>ETF-Broker vergleichen</h1>
          <p>
            Der richtige Broker entscheidet über Kosten, Komfort und Rendite.
            Hier findest du klare Empfehlungen statt Werbung.
          </p>
        </section>

        <section style={styles.grid}>
          <div style={styles.card}>
            <h3>Trade Republic</h3>
            <p>Sehr günstige ETF-Sparpläne, einfache App.</p>
            <Link href="/blog/bester-broker-fuer-etf-sparplaene">
              ➜ Details ansehen
            </Link>
          </div>

          <div style={styles.card}>
            <h3>Scalable Capital</h3>
            <p>Große ETF-Auswahl, kostenlose Sparpläne.</p>
            <Link href="/blog/bester-broker-fuer-etf-sparplaene">
              ➜ Details ansehen
            </Link>
          </div>

          <div style={styles.card}>
            <h3>ING</h3>
            <p>Stabile Bank, gut für langfristige Anleger.</p>
            <Link href="/blog/bester-broker-fuer-etf-sparplaene">
              ➜ Details ansehen
            </Link>
          </div>
        </section>

        <section style={styles.cta}>
          <h3>Broker passend zu deinem Sparplan finden</h3>
          <Link href="/tools/etf-sparplan-rechner" style={styles.button}>
            Sparplan berechnen →
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
    background: "radial-gradient(circle at top, #020617, #020617)",
    color: "#e5e7eb",
  },
  hero: {
    maxWidth: "820px",
    margin: "0 auto 60px",
    textAlign: "center",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto 60px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    padding: "26px",
    borderRadius: "16px",
    border: "1px solid #1e293b",
    background: "#020617",
  },
  cta: {
    textAlign: "center",
  },
  button: {
    display: "inline-block",
    marginTop: "18px",
    padding: "14px 28px",
    borderRadius: "14px",
    background: "#2dd4bf",
    color: "#020617",
    fontWeight: "700",
    textDecoration: "none",
  },
};
