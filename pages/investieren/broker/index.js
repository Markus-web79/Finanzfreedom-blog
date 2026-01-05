import Head from "next/head";
import Link from "next/link";

export default function BrokerHub() {
  return (
    <>
      <Head>
        <title>ETF Broker Übersicht | FinanzFreedom</title>
        <meta
          name="description"
          content="ETF Broker Übersicht: Vergleiche die besten Broker für Sparpläne & Investments – unabhängig, transparent & verständlich."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>ETF Broker</h1>
          <p style={styles.subtitle}>
            Finde den passenden Broker für ETF-Sparpläne & langfristigen
            Vermögensaufbau.
          </p>
        </section>

        {/* GRID */}
        <section style={styles.grid}>
          <Link href="/investieren/broker/vergleich" style={styles.cardHighlight}>
            <h2>Broker vergleichen</h2>
            <p>
              Kosten, Sparpläne, Sicherheit & Funktionen – der große Vergleich
              ohne Werbung.
            </p>
          </Link>

          <Link
            href="/investieren/broker/trade-republic"
            style={styles.card}
          >
            <h2>Trade Republic</h2>
            <p>
              Sehr günstiger Broker mit einfacher App und kostenlosen
              ETF-Sparplänen.
            </p>
          </Link>

          <Link
            href="/investieren/broker/scalable-capital"
            style={styles.card}
          >
            <h2>Scalable Capital</h2>
            <p>
              Großer ETF-Broker mit Prime-Modell, Analysen & breiter Auswahl.
            </p>
          </Link>
        </section>

        {/* INFO */}
        <section style={styles.info}>
          <p>
            Wir bewerten Broker transparent nach Kosten, Angebot und
            Benutzerfreundlichkeit. Langfristig kommen weitere Anbieter und
            Vergleichstabellen hinzu.
          </p>
        </section>

        {/* BACK */}
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
    maxWidth: "900px",
    margin: "0 auto 50px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.6rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#9ca3af",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto 50px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
    transition: "all 0.2s ease",
  },
  cardHighlight: {
    background: "linear-gradient(145deg, #020617, #022c22)",
    border: "1px solid #2dd4bf",
    borderRadius: "16px",
    padding: "28px",
    textDecoration: "none",
    color: "#e5e7eb",
  },
  info: {
    maxWidth: "800px",
    margin: "0 auto 40px",
    textAlign: "center",
    color: "#9ca3af",
  },
  back: {
    textAlign: "center",
  },
  backLink: {
    color: "#9ca3af",
    textDecoration: "none",
  },
};
