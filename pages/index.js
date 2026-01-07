import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein unabhängiges Finanzportal</title>
        <meta
          name="description"
          content="FinanzFreedom ist ein unabhängiges Finanzportal für Investieren, Vergleiche, Tools und Finanzwissen."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>FinanzFreedom</h1>
          <p style={styles.subtitle}>
            Das unabhängige Finanzportal für Investieren, Vergleiche & fundierte
            Entscheidungen.
          </p>
        </section>

        {/* PORTAL GRID */}
        <section style={styles.grid}>
          <Link href="/investieren" style={styles.card}>
            <h2>Investieren</h2>
            <p>ETFs, Aktien, Strategien & langfristiger Vermögensaufbau.</p>
          </Link>

          <Link href="/broker" style={styles.card}>
            <h2>Broker & Vergleiche</h2>
            <p>Neutrale Vergleiche von Brokern & Finanzprodukten.</p>
          </Link>

          <Link href="/rechner" style={styles.card}>
            <h2>Rechner & Tools</h2>
            <p>ETF-Rechner, Sparplan-Tools & Finanzhilfen.</p>
          </Link>

          <Link href="/wissen" style={styles.card}>
            <h2>Finanzwissen</h2>
            <p>Grundlagen, Zusammenhänge & Orientierung.</p>
          </Link>
        </section>

        {/* VERTRAUEN */}
        <section style={styles.trust}>
          <h3>Warum FinanzFreedom?</h3>
          <p>
            Keine Bank, kein Produktverkauf.  
            Nur unabhängige Inhalte, klare Vergleiche und echte Orientierung.
          </p>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <p>Neu hier?</p>
          <Link href="/wissen">→ Jetzt Finanzwissen entdecken</Link>
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
    margin: "0 auto 70px",
  },

  title: {
    fontSize: "3rem",
    marginBottom: "12px",
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
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "border 0.2s ease",
  },

  trust: {
    marginTop: "80px",
    textAlign: "center",
    color: "#9ca3af",
  },

  cta: {
    marginTop: "50px",
    textAlign: "center",
  },
};
