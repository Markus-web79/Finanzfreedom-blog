import Head from "next/head";
import Link from "next/link";

export default function Broker() {
  return (
    <>
      <Head>
        <title>Broker vergleichen – FinanzFreedom</title>
        <meta
          name="description"
          content="Broker-Vergleich bei FinanzFreedom: Kosten, Vorteile & welcher Broker wirklich zu dir passt."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Broker vergleichen</h1>
          <p style={styles.subtitle}>
            Der richtige Broker entscheidet über Kosten, Komfort und Rendite.
            Hier findest du eine ehrliche Übersicht.
          </p>
        </section>

        <section style={styles.grid}>
          <div style={styles.card}>
            <h2>Trade Republic</h2>
            <p>
              Sehr günstiger Neobroker. Ideal für ETF-Sparpläne &
              Einsteiger. App-basiert, einfach & beliebt.
            </p>
            <span style={styles.badge}>Beliebt</span>
          </div>

          <div style={styles.card}>
            <h2>Scalable Capital</h2>
            <p>
              Große ETF-Auswahl, Sparpläne & Prime-Modell. Gut für
              regelmäßige Investoren.
            </p>
          </div>

          <div style={styles.card}>
            <h2>ING</h2>
            <p>
              Klassische Direktbank mit Depot. Sehr solide, etwas höhere
              Kosten.
            </p>
          </div>

          <div style={styles.card}>
            <h2>Welcher Broker passt zu dir?</h2>
            <p>
              Die Wahl hängt von Sparrate, Strategie und Komfort ab. Wir
              helfen dir bei der Entscheidung.
            </p>
            <Link href="/blog/broker-vergleich" style={styles.link}>
              Entscheidungshilfe →
            </Link>
          </div>
        </section>

        <section style={styles.back}>
          <Link href="/investieren" style={styles.backLink}>
            ← Zurück zu Investieren
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
    fontSize: "2.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.1rem",
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
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "#2dd4bf",
    color: "#020617",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: "700",
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
