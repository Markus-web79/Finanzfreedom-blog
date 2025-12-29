import Head from "next/head";
import Link from "next/link";

export default function Investieren() {
  return (
    <>
      <Head>
        <title>Investieren – FinanzFreedom</title>
        <meta
          name="description"
          content="Investieren leicht erklärt: ETFs, Aktien, Sparpläne & Broker-Vergleiche bei FinanzFreedom."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Investieren</h1>
          <p style={styles.subtitle}>
            Baue langfristig Vermögen auf – mit ETFs, Aktien, Sparplänen und der
            richtigen Strategie.
          </p>
        </section>

        <section style={styles.grid}>
          <div style={styles.card}>
            <h2>ETF-Sparpläne</h2>
            <p>
              Die einfachste Art zu investieren. Ideal für Einsteiger &
              langfristigen Vermögensaufbau.
            </p>
            <Link href="/blog/etf-sparplan" style={styles.link}>
              Mehr erfahren →
            </Link>
          </div>

          <div style={styles.card}>
            <h2>Aktien & Strategien</h2>
            <p>
              Einzelaktien, Dividenden, Buy & Hold – verständlich erklärt ohne
              Hype.
            </p>
            <Link href="/blog/aktien-grundlagen" style={styles.link}>
              Mehr erfahren →
            </Link>
          </div>

          <div style={styles.card}>
            <h2>Broker vergleichen</h2>
            <p>
              Welcher Broker passt zu dir? Kosten, Funktionen & Vorteile im
              Überblick.
            </p>
            <Link href="/investieren/broker" style={styles.link}>
              Broker ansehen →
            </Link>
          </div>

          <div style={styles.card}>
            <h2>Einsteiger-Guide</h2>
            <p>
              Schritt für Schritt starten – auch ohne Vorkenntnisse oder großes
              Kapital.
            </p>
            <Link href="/blog/investieren-fuer-anfaenger" style={styles.link}>
              Guide lesen →
            </Link>
          </div>
        </section>

        <section style={styles.back}>
          <Link href="/" style={styles.backLink}>
            ← Zur Startseite
          </Link>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  hero: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 60px",
  },
  title: {
    fontSize: "2.6rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.15rem",
    color: "#9ca3af",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "28px",
  },
  link: {
    display: "inline-block",
    marginTop: "12px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: "600",
  },
  back: {
    marginTop: "60px",
    textAlign: "center",
  },
  backLink: {
    color: "#9ca3af",
    textDecoration: "none",
  },
};
