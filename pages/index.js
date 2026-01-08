import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Das unabhängige Finanzportal</title>
        <meta
          name="description"
          content="FinanzFreedom ist dein unabhängiges Finanzportal für ETFs, Broker, Versicherungen, Sparen und Finanzwissen."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>FinanzFreedom</h1>
          <p style={styles.subtitle}>
            Das unabhängige Finanzportal für Vermögensaufbau, Investieren und finanzielle Freiheit.
          </p>
        </section>

        {/* PORTAL GRID */}
        <section style={styles.grid}>
          <Link href="/investieren" style={styles.card}>
            <h2>Investieren</h2>
            <p>ETFs, Aktien & Strategien für langfristigen Vermögensaufbau.</p>
          </Link>

          <Link href="/etfs" style={styles.card}>
            <h2>ETFs</h2>
            <p>ETF-Grundlagen, Vergleiche & Sparplan-Wissen.</p>
          </Link>

          <Link href="/broker" style={styles.card}>
            <h2>Broker</h2>
            <p>Broker-Vergleiche & Depotanbieter im Überblick.</p>
          </Link>

          <Link href="/versicherungen" style={styles.card}>
            <h2>Versicherungen</h2>
            <p>Welche Versicherungen sinnvoll sind – unabhängig erklärt.</p>
          </Link>

          <Link href="/sparen" style={styles.card}>
            <h2>Sparen</h2>
            <p>Haushalt, Sparen & finanzielle Kontrolle.</p>
          </Link>

          <Link href="/wissen" style={styles.card}>
            <h2>Wissen</h2>
            <p>Finanzgrundlagen einfach & verständlich erklärt.</p>
          </Link>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <Link href="/ueber-uns">Über uns</Link>
          <span>•</span>
          <Link href="/kontakt">Kontakt</Link>
          <span>•</span>
          <Link href="/transparenz">Transparenz</Link>
          <span>•</span>
          <Link href="/datenschutz">Datenschutz</Link>
          <span>•</span>
          <Link href="/impressum">Impressum</Link>
        </footer>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    padding: "60px 20px",
  },
  hero: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 60px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#9ca3af",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    display: "block",
    padding: "28px",
    borderRadius: "14px",
    background: "#020617",
    border: "1px solid #1e293b",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.2s ease",
  },
  footer: {
    marginTop: "80px",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#9ca3af",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};
