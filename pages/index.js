import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein unabhängiges Finanzportal</title>
        <meta
          name="description"
          content="FinanzFreedom: Investieren, Versicherungen, Sparen & Wissen – unabhängig, verständlich und portalartig aufgebaut."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO / BANNER */}
        <section style={styles.hero}>
          <h1 style={styles.title}>FinanzFreedom</h1>
          <p style={styles.subtitle}>
            Dein unabhängiges Finanzportal für ETFs, Vermögensaufbau und
            finanzielle Freiheit.
          </p>
        </section>

        {/* KARTEN */}
        <section style={styles.grid}>
          {/* NUR HIER GEÄNDERT: Investieren → ETFs */}
          <Link href="/investieren" style={styles.card}>
            <h2>ETFs</h2>
            <p>
              ETF-Grundlagen, MSCI World, Sparpläne & langfristiger
              Vermögensaufbau.
            </p>
          </Link>

          <Link href="/versicherungen" style={styles.card}>
            <h2>Versicherungen</h2>
            <p>
              Welche Versicherungen wirklich sinnvoll sind – klar &
              unabhängig erklärt.
            </p>
          </Link>

          <Link href="/sparen" style={styles.card}>
            <h2>Sparen</h2>
            <p>
              Mehr Geld behalten, Ausgaben optimieren und finanzielle Kontrolle
              gewinnen.
            </p>
          </Link>

          <Link href="/wissen" style={styles.card}>
            <h2>Wissen</h2>
            <p>
              Finanzgrundlagen, Begriffe und Zusammenhänge einfach erklärt.
            </p>
          </Link>

          <Link href="/broker" style={styles.card}>
            <h2>Broker</h2>
            <p>
              Broker-Vergleiche, Erfahrungen & Entscheidungs­hilfen.
            </p>
          </Link>
        </section>
      </main>
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    padding: "0 20px 80px",
    background: "#020617",
    color: "#e5e7eb",
  },

  hero: {
    background: "linear-gradient(135deg, #14b8a6, #0f766e)",
    padding: "60px 20px",
    textAlign: "center",
    marginBottom: "60px",
  },

  title: {
    fontSize: "3rem",
    marginBottom: "12px",
    color: "#ffffff",
  },

  subtitle: {
    fontSize: "1.2rem",
    color: "#ecfeff",
    maxWidth: "720px",
    margin: "0 auto",
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
    borderRadius: "14px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "transform 0.15s ease, border-color 0.15s ease",
  },
};
