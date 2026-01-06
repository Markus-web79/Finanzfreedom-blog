import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Unabhängiges Finanzportal</title>
        <meta
          name="description"
          content="FinanzFreedom – Dein unabhängiges Finanzportal für Investieren, ETFs und Vermögensaufbau."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>FinanzFreedom</h1>
          <p style={styles.subtitle}>
            Dein unabhängiges Finanzportal für Investieren, ETFs und
            Vermögensaufbau.
          </p>
          <p style={styles.tagline}>
            Vergleiche. Verstehen. Besser entscheiden.
          </p>
        </section>

        {/* PORTAL KACHELN */}
        <section style={styles.grid}>
          <Link href="/investieren" style={styles.card}>
            <h2>Investieren lernen</h2>
            <p>
              Grundlagen, Strategien und einfache Erklärungen für langfristigen
              Vermögensaufbau.
            </p>
            <span style={styles.link}>→ Investieren entdecken</span>
          </Link>

          <Link href="/broker" style={styles.card}>
            <h2>Broker vergleichen</h2>
            <p>
              Welcher Broker passt zu dir? Kosten, Funktionen und Unterschiede
              klar erklärt.
            </p>
            <span style={styles.link}>→ Broker vergleichen</span>
          </Link>

          <Link href="/etfs" style={styles.card}>
            <h2>ETFs verstehen</h2>
            <p>
              Was sind ETFs, welche gibt es und wie startest du sinnvoll mit
              einem ETF-Sparplan?
            </p>
            <span style={styles.link}>→ ETFs entdecken</span>
          </Link>
        </section>

        {/* VERTRAUEN */}
        <section style={styles.trust}>
          <h3>Warum FinanzFreedom?</h3>
          <p>
            Weil finanzielle Entscheidungen einfach, transparent und unabhängig
            sein sollten – ohne Verkaufsdruck und ohne Finanz-Blabla.
          </p>
          <small style={styles.disclaimer}>
            FinanzFreedom finanziert sich teilweise über Affiliate-Links.
            Für dich entstehen keine Mehrkosten.
          </small>
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
    fontSize: "3rem",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "1.3rem",
    color: "#9ca3af",
  },
  tagline: {
    marginTop: "12px",
    fontSize: "1.1rem",
    color: "#2dd4bf",
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
    borderRadius: "16px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
  },
  link: {
    display: "inline-block",
    marginTop: "12px",
    color: "#2dd4bf",
    fontWeight: 600,
  },
  trust: {
    maxWidth: "800px",
    margin: "80px auto 0",
    textAlign: "center",
    color: "#9ca3af",
  },
  disclaimer: {
    display: "block",
    marginTop: "12px",
    fontSize: "0.8rem",
    opacity: 0.7,
  },
};
