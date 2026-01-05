import Head from "next/head";
import Link from "next/link";

export default function BrokerVergleich() {
  return (
    <>
      <Head>
        <title>ETF Broker Vergleich 2026 | FinanzFreedom</title>
        <meta
          name="description"
          content="Großer ETF Broker Vergleich 2026: verständlich erklärt für Einsteiger & Fortgeschrittene. Kosten, Sparpläne, Sicherheit."
        />
      </Head>

      <main style={styles.page}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.title}>ETF Broker Vergleich</h1>
          <p style={styles.subtitle}>
            Welcher Broker passt zu dir? Wir erklären die Unterschiede einfach
            und zeigen dir klare Empfehlungen.
          </p>
        </section>

        {/* EINORDNUNG */}
        <section style={styles.info}>
          <p>
            Ein Broker ist dein Zugang zur Börse. Die wichtigsten Unterschiede
            liegen in <strong>Kosten</strong>, <strong>ETF-Sparplänen</strong>,
            <strong>Bedienung</strong> und <strong>Sicherheit</strong>.
            <br />
            Unten findest du unsere Empfehlungen – unabhängig und transparent.
          </p>
        </section>

        {/* EMPFEHLUNG EINSTEIGER */}
        <section style={styles.highlight}>
          <h2>⭐ Empfehlung für Einsteiger</h2>
          <h3>Trade Republic</h3>
          <p>
            Ideal, wenn du einfach starten willst: sehr niedrige Kosten,
            kostenlose ETF-Sparpläne und eine extrem einfache App.
          </p>

          <ul style={styles.list}>
            <li>✔ 0 € ETF-Sparpläne</li>
            <li>✔ Sehr einfache Bedienung</li>
            <li>✔ Reguliert & in Deutschland ansässig</li>
          </ul>

          <div style={styles.actions}>
            <Link href="/investieren/broker/trade-republic" style={styles.primary}>
              Details ansehen
            </Link>
            <span style={styles.note}>Affiliate-Link folgt</span>
          </div>
        </section>

        {/* ALTERNATIVE */}
        <section style={styles.card}>
          <h2>Alternative für Fortgeschrittene</h2>
          <h3>Scalable Capital</h3>
          <p>
            Mehr Funktionen, Web-Plattform und flexible Tarife – gut, wenn du
            neben Sparplänen auch aktiv investieren willst.
          </p>

          <ul style={styles.list}>
            <li>✔ Große ETF-Auswahl</li>
            <li>✔ Flat-Fee möglich</li>
            <li>✔ App & Web</li>
          </ul>

          <div style={styles.actions}>
            <Link href="/investieren/broker/scalable-capital" style={styles.secondary}>
              Details ansehen
            </Link>
          </div>
        </section>

        {/* FAZIT */}
        <section style={styles.fazit}>
          <h2>Unser Fazit</h2>
          <p>
            Für die meisten Anleger zählt: niedrige Kosten, einfache Bedienung
            und Sicherheit. Wer mehr Funktionen möchte, greift zu einem
            umfassenderen Broker. Wichtig ist, langfristig zu denken und
            regelmäßig zu investieren.
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
  highlight: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    padding: "28px",
    borderRadius: "16px",
    background: "linear-gradient(145deg, #020617, #022c22)",
    border: "1px solid #2dd4bf",
  },
  card: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    padding: "28px",
    borderRadius: "16px",
    background: "#020617",
    border: "1px solid #1e293b",
  },
  list: {
    marginTop: "12px",
    marginBottom: "16px",
    paddingLeft: "18px",
    color: "#9ca3af",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  primary: {
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    background: "#22d3ee",
    color: "#020617",
    fontWeight: 600,
    textDecoration: "none",
  },
  secondary: {
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    background: "#1e293b",
    color: "#e5e7eb",
    fontWeight: 600,
    textDecoration: "none",
  },
  note: {
    fontSize: "0.8rem",
    opacity: 0.7,
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
