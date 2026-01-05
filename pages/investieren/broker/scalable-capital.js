import Head from "next/head";
import Link from "next/link";

export default function ScalableCapital() {
  return (
    <>
      <Head>
        <title>Scalable Capital – Broker Vergleich | FinanzFreedom</title>
        <meta
          name="description"
          content="Scalable Capital im Überblick: Kosten, Funktionen, Vorteile und für wen sich der Broker eignet."
        />
      </Head>

      <main style={styles.page}>
        {/* Header */}
        <header style={styles.header}>
          <span style={styles.badge}>Broker</span>
          <h1 style={styles.title}>Scalable Capital</h1>
          <p style={styles.subtitle}>
            ETF- & Aktienbroker für langfristigen Vermögensaufbau
          </p>
        </header>

        {/* Kacheln */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.line} />
            <h3>Kosten</h3>
            <p>
              ETF-Sparpläne kostenlos, günstige Handelsgebühren je nach Modell.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.line} />
            <h3>Geeignet für</h3>
            <p>
              Anleger, die langfristig mit ETFs und Aktien Vermögen aufbauen
              möchten.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.line} />
            <h3>Besonderheiten</h3>
            <p>
              Große ETF-Auswahl, Prime Broker Modell, flexible Sparpläne.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.line} />
            <h3>Hinweis</h3>
            <p>
              Handelskosten abhängig vom gewählten Preismodell.
            </p>
          </div>
        </section>

        {/* Erklärung */}
        <section style={styles.content}>
          <h2>Was ist Scalable Capital?</h2>
          <p>
            Scalable Capital ist ein moderner Online-Broker mit Fokus auf ETFs
            und langfristige Geldanlage. Nutzer können zwischen verschiedenen
            Preismodellen wählen und aus einer großen Auswahl an ETFs und Aktien
            investieren.
          </p>

          <h2>Für wen eignet sich Scalable Capital?</h2>
          <p>
            Besonders geeignet für Anleger, die regelmäßig investieren und
            Wert auf niedrige Kosten sowie eine einfache Bedienung legen.
          </p>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <Link href="/investieren/broker/vergleich" style={styles.ctaButton}>
            Zum Broker-Vergleich →
          </Link>
        </section>

        {/* Back */}
        <div style={styles.back}>
          <Link href="/investieren/broker">← Zur Broker-Übersicht</Link>
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
    marginBottom: "3rem",
  },
  badge: {
    display: "inline-block",
    fontSize: "0.75rem",
    color: "#22d3ee",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "#9ca3af",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
    marginBottom: "3rem",
  },
  card: {
    position: "relative",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "1.5rem",
  },
  line: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "#22d3ee",
    borderTopLeftRadius: "14px",
    borderTopRightRadius: "14px",
  },
  content: {
    lineHeight: 1.7,
    marginBottom: "3rem",
  },
  cta: {
    marginBottom: "2rem",
  },
  ctaButton: {
    display: "inline-block",
    padding: "0.8rem 1.4rem",
    borderRadius: "10px",
    background: "#22d3ee",
    color: "#020617",
    fontWeight: "600",
    textDecoration: "none",
  },
  back: {
    marginTop: "2rem",
  },
};
