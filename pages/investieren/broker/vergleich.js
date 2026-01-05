import Head from "next/head";
import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <>
      <Head>
        <title>ETF Broker Vergleich 2026 | FinanzFreedom</title>
        <meta
          name="description"
          content="Großer ETF Broker Vergleich 2026: Trade Republic, Scalable Capital & mehr. Kosten, Sparpläne, Sicherheit – unabhängig erklärt."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>ETF Broker Vergleich 2026</h1>
          <p style={styles.subtitle}>
            Vergleiche die besten ETF-Broker in Deutschland – transparent,
            unabhängig und ohne Werbung.
          </p>
        </section>

        {/* INFO */}
        <section style={styles.info}>
          <p>
            Der richtige Broker entscheidet über Kosten, Komfort und langfristigen
            Erfolg beim Investieren. Hier findest du einen klaren Vergleich der
            beliebtesten ETF-Broker für Sparpläne und Einmalinvestments.
          </p>
        </section>

        {/* BROKER GRID */}
        <section style={styles.grid}>
          <div style={styles.cardHighlight}>
            <h2>Trade Republic</h2>
            <p>
              Sehr günstiger Broker mit einfacher App, kostenlosen ETF-Sparplänen
              und niedrigen Ordergebühren.
            </p>
            <ul style={styles.list}>
              <li>✔ 0 € Sparpläne</li>
              <li>✔ Sehr einfache Bedienung</li>
              <li>✔ Ideal für Einsteiger</li>
            </ul>
            <Link href="/investieren/broker/trade-republic" style={styles.link}>
              Details ansehen →
            </Link>
          </div>

          <div style={styles.card}>
            <h2>Scalable Capital</h2>
            <p>
              Starker Allround-Broker mit vielen ETFs, Prime-Modell und
              umfangreichen Analyse-Funktionen.
            </p>
            <ul style={styles.list}>
              <li>✔ Große ETF-Auswahl</li>
              <li>✔ Flat-Fee möglich</li>
              <li>✔ Für Fortgeschrittene</li>
            </ul>
            <Link href="/investieren/broker/scalable-capital" style={styles.link}>
              Details ansehen →
            </Link>
          </div>
        </section>

        {/* FAZIT */}
        <section style={styles.fazit}>
          <h2>Unser Fazit</h2>
          <p>
            Für die meisten Anleger reicht ein günstiger und einfacher Broker.
            Wer mehr Funktionen möchte, greift zu einem umfassenderen Anbieter.
            Wichtig ist: niedrige Kosten, Sicherheit und ein langfristiger Ansatz.
          </p>
        </section>

        {/* BACK */}
        <section style={styles.back}>
          <Link href="/investieren/broker" style={styles.backLink}>
            ← Zurück zur Broker-Übersicht
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
    margin: "0 auto 40px",
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
  info: {
    maxWidth: "800px",
    margin: "0 auto 50px",
    textAlign: "center",
    color: "#9ca3af",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
  },
  cardHighlight: {
    background: "linear-gradient(145deg, #020617, #022c22)",
    border: "1px solid #2dd4bf",
    borderRadius: "16px",
    padding: "28px",
  },
  list: {
    marginTop: "12px",
    marginBottom: "16px",
    paddingLeft: "18px",
    color: "#9ca3af",
  },
  link: {
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: "600",
  },
  fazit: {
    maxWidth: "800px",
    margin: "60px auto",
    textAlign: "center",
  },
  back: {
    textAlign: "center",
  },
  backLink: {
    color: "#9ca3af",
    textDecoration: "none",
  },
};
