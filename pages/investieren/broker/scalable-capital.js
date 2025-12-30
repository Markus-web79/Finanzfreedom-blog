import Link from "next/link";

export default function ScalableCapital() {
  return (
    <main style={styles.page}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <Link href="/">Startseite</Link> →{" "}
        <Link href="/investieren">Investieren</Link> →{" "}
        <Link href="/investieren/broker">Broker</Link> → Scalable Capital
      </div>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Scalable Capital</h1>
        <p style={styles.subtitle}>
          Einer der beliebtesten Online-Broker für ETF-Sparpläne & langfristigen
          Vermögensaufbau in Deutschland.
        </p>
      </section>

      {/* Empfehlung */}
      <section style={styles.card}>
        <h2>Unsere Empfehlung</h2>
        <p>
          <strong>Scalable Capital</strong> eignet sich besonders für
          Einsteiger, die einfach, günstig und langfristig in ETFs investieren
          möchten.
        </p>
      </section>

      {/* Vorteile */}
      <section style={styles.card}>
        <h2>Vorteile</h2>
        <ul>
          <li>✔️ Sehr günstige Gebühren</li>
          <li>✔️ Große Auswahl an ETF-Sparplänen</li>
          <li>✔️ Einfache & moderne App</li>
          <li>✔️ Ideal für langfristigen Vermögensaufbau</li>
        </ul>
      </section>

      {/* Nachteile */}
      <section style={styles.card}>
        <h2>Nachteile</h2>
        <ul>
          <li>❌ Kein klassischer Filial-Broker</li>
          <li>❌ Weniger geeignet für Daytrader</li>
        </ul>
      </section>

      {/* Für wen geeignet */}
      <section style={styles.card}>
        <h2>Für wen ist Scalable Capital geeignet?</h2>
        <p>
          Für alle, die regelmäßig sparen möchten, wenig Zeit investieren wollen
          und langfristig Vermögen aufbauen möchten – besonders mit ETFs.
        </p>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <a
          href="#"
          style={styles.button}
          rel="nofollow noopener"
        >
          Jetzt informieren →
        </a>
        <p style={styles.note}>
          * Transparenter Hinweis: Dieser Link kann zukünftig ein Affiliate-Link
          sein.
        </p>
      </section>

      {/* Back */}
      <div style={styles.back}>
        <Link href="/investieren/broker">← Zurück zur Broker-Übersicht</Link>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    maxWidth: "900px",
    margin: "0 auto",
  },
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "24px",
  },
  hero: {
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.85,
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "24px",
  },
  cta: {
    textAlign: "center",
    marginTop: "40px",
  },
  button: {
    display: "inline-block",
    padding: "14px 28px",
    background: "#14b8a6",
    color: "#020617",
    borderRadius: "8px",
    fontWeight: "600",
    textDecoration: "none",
  },
  note: {
    fontSize: "0.8rem",
    opacity: 0.6,
    marginTop: "12px",
  },
  back: {
    marginTop: "48px",
    opacity: 0.8,
  },
};
