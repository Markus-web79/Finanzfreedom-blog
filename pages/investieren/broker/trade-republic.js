import Head from "next/head";
import Link from "next/link";

export default function TradeRepublic() {
  return (
    <>
      <Head>
        <title>Trade Republic – Broker im Vergleich | FinanzFreedom</title>
        <meta
          name="description"
          content="Trade Republic im Überblick: Kosten, Funktionen, Vorteile und Alternativen. Neutral & verständlich erklärt auf FinanzFreedom."
        />
      </Head>

      <main style={styles.page}>
        {/* HEADER */}
        <section style={styles.header}>
          <span style={styles.badge}>Broker</span>
          <h1 style={styles.title}>Trade Republic</h1>
          <p style={styles.subtitle}>
            Mobiler Neobroker für ETFs, Aktien und Sparpläne – einfach & günstig.
          </p>
        </section>

        {/* INFO KACHELN */}
        <section style={styles.cards}>
          <div style={styles.card}>
            <h3>Kosten</h3>
            <p>0 € Depotführung<br />1 € pro Trade</p>
          </div>

          <div style={styles.card}>
            <h3>Geeignet für</h3>
            <p>Einsteiger & langfristige Anleger</p>
          </div>

          <div style={styles.card}>
            <h3>Besonderheiten</h3>
            <p>ETF-Sparpläne, App-Fokus, einfache Bedienung</p>
          </div>

          <div style={styles.card}>
            <h3>Hinweis</h3>
            <p>Kein klassischer Desktop-Broker</p>
          </div>
        </section>

        {/* HAUPTINHALT */}
        <section style={styles.content}>
          <h2>Was ist Trade Republic?</h2>
          <p>
            Trade Republic ist ein deutscher Neobroker, der den Handel mit ETFs,
            Aktien und Derivaten stark vereinfacht. Der Fokus liegt auf einer
            mobilen App und niedrigen Kosten.
          </p>

          <h2>Für wen ist Trade Republic sinnvoll?</h2>
          <p>
            Besonders geeignet ist Trade Republic für Anleger, die langfristig
            investieren möchten und Wert auf einfache Bedienung sowie günstige
            ETF-Sparpläne legen.
          </p>

          <h2>Stärken & Grenzen</h2>
          <p>
            Stärken sind die sehr niedrigen Kosten und die einfache Struktur.
            Einschränkungen gibt es bei Analyse-Tools und klassischen
            Order-Funktionen.
          </p>
        </section>

        {/* VERGLEICH */}
        <section style={styles.compare}>
          <h2>Alternativen zu Trade Republic</h2>
          <p>
            Je nach Anspruch können andere Broker besser geeignet sein.
          </p>
          <Link href="/investieren/broker-vergleich" style={styles.compareLink}>
            → Zum Broker-Vergleich
          </Link>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <p>Du willst Anbieter vergleichen?</p>
          <Link href="/investieren/broker-vergleich" style={styles.ctaButton}>
            Broker vergleichen
          </Link>
        </section>

        {/* BACK */}
        <div style={styles.back}>
          <Link href="/investieren">← Zur Investieren-Übersicht</Link>
        </div>
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "3rem 1.5rem",
    color: "#e5e7eb",
  },
  header: {
    marginBottom: "2.5rem",
  },
  badge: {
    display: "inline-block",
    fontSize: "0.75rem",
    color: "#22d3ee",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "0.5rem",
  },
  subtitle: {
    opacity: 0.85,
    maxWidth: "600px",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    marginBottom: "3rem",
  },
  card: {
    padding: "1.2rem",
    borderRadius: "12px",
    background: "#0f172a",
    border: "1px solid #1e293b",
  },
  content: {
    lineHeight: 1.7,
    marginBottom: "3rem",
  },
  compare: {
    marginBottom: "3rem",
  },
  compareLink: {
    color: "#22d3ee",
    textDecoration: "none",
    fontWeight: 600,
  },
  cta: {
    padding: "2rem",
    borderRadius: "16px",
    background: "#020617",
    border: "1px solid #1e293b",
    textAlign: "center",
    marginBottom: "3rem",
  },
  ctaButton: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.7rem 1.4rem",
    borderRadius: "10px",
    background: "#22d3ee",
    color: "#020617",
    fontWeight: 700,
    textDecoration: "none",
  },
  back: {
    fontSize: "0.9rem",
  },
};
