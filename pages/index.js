import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein unabhängiges Finanzportal</title>
        <meta
          name="description"
          content="FinanzFreedom ist dein unabhängiges Finanzportal für Investieren, ETFs, Versicherungen und Vermögensaufbau."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <h1 style={styles.title}>FinanzFreedom</h1>
          <p style={styles.subtitle}>
            Klar. Unabhängig. Strukturiert.  
            Dein Portal für finanzielle Freiheit.
          </p>
        </section>

        <section style={styles.grid}>
          <PortalCard title="Investieren" text="Strategien, Grundlagen und langfristiger Vermögensaufbau." href="/investieren" />
          <PortalCard title="ETFs" text="ETF-Wissen, Sparpläne und verständliche Erklärungen." href="/etfs" />
          <PortalCard title="Broker" text="Broker-Vergleiche und Empfehlungen." href="/broker" />
          <PortalCard title="Versicherungen" text="Sinnvolle Versicherungen klar erklärt." href="/versicherungen" />
          <PortalCard title="Sparen" text="Ausgaben optimieren und Geld zurückholen." href="/sparen" />
          <PortalCard title="Wissen" text="Finanzgrundlagen einfach verstehen." href="/wissen" />
        </section>
      </main>
    </>
  );
}

function PortalCard({ title, text, href }) {
  return (
    <Link href={href} style={styles.card}>
      <h2>{title}</h2>
      <p>{text}</p>
    </Link>
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
    fontSize: "1.1rem",
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
};
