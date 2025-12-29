import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Finanzportal für Investieren & Vermögensaufbau</title>
        <meta
          name="description"
          content="FinanzFreedom ist dein unabhängiges Finanzportal für Investieren, ETFs, Versicherungen, Sparen und Vermögensaufbau – verständlich, ehrlich und langfristig."
        />
      </Head>

      <main style={styles.container}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.h1}>FinanzFreedom</h1>
          <p style={styles.subtitle}>
            Dein unabhängiges Finanzportal für Investieren, Vermögensaufbau
            und finanzielle Freiheit.
          </p>
        </section>

        {/* PORTAL NAVIGATION */}
        <section style={styles.grid}>
          <PortalCard
            title="Investieren"
            text="ETFs, Aktien, Sparpläne & Strategien für langfristigen Vermögensaufbau."
            href="/investieren"
          />

          <PortalCard
            title="Versicherungen"
            text="Welche Versicherungen wirklich sinnvoll sind – klar & unabhängig erklärt."
            href="/versicherungen"
          />

          <PortalCard
            title="Sparen & Haushalt"
            text="Mehr Geld behalten, Ausgaben optimieren und finanzielle Kontrolle gewinnen."
            href="/sparen"
          />

          <PortalCard
            title="Wissen"
            text="Finanzgrundlagen, Begriffe und Zusammenhänge einfach erklärt."
            href="/wissen"
          />
        </section>

        {/* BLOG HINWEIS (SEKUNDÄR) */}
        <section style={styles.blogHint}>
          <p>
            Du willst tiefer einsteigen?
            <br />
            <Link href="/blog">→ Zum Blog</Link>
          </p>
        </section>
      </main>
    </>
  );
}

/* ---------- KOMPONENTEN ---------- */

function PortalCard({ title, text, href }) {
  return (
    <Link href={href} style={styles.card}>
      <h2>{title}</h2>
      <p>{text}</p>
    </Link>
  );
}

/* ---------- STYLES (INLINE, STABIL) ---------- */

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
  },
  hero: {
    textAlign: "center",
    marginBottom: "60px",
  },
  h1: {
    fontSize: "42px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    opacity: 0.8,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },
  card: {
    display: "block",
    padding: "24px",
    borderRadius: "12px",
    background: "#0f172a",
    color: "#ffffff",
    textDecoration: "none",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  blogHint: {
    marginTop: "60px",
    textAlign: "center",
    opacity: 0.7,
  },
};
