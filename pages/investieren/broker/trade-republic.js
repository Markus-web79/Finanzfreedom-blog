import Link from "next/link";
import Head from "next/head";

export default function TradeRepublic() {
  return (
    <>
      <Head>
        <title>Trade Republic Test & Erfahrungen | FinanzFreedom</title>
        <meta
          name="description"
          content="Trade Republic im Test: Erfahrungen, Vorteile, Nachteile und für wen sich der Broker wirklich lohnt."
        />
      </Head>

      <div style={styles.page}>
        {/* Breadcrumb */}
        <div style={styles.breadcrumb}>
          <Link href="/">Startseite</Link> →{" "}
          <Link href="/investieren">Investieren</Link> →{" "}
          <Link href="/investieren/broker">Broker</Link> → Trade Republic
        </div>

        {/* Hero */}
        <section style={styles.hero}>
          <h1 style={styles.title}>Trade Republic</h1>
          <p style={styles.subtitle}>
            Einer der beliebtesten Neobroker in Deutschland – besonders für
            ETF-Sparpläne & Einsteiger.
          </p>
        </section>

        {/* Content */}
        <section style={styles.card}>
          <p>
            <strong>Empfehlung:</strong> Sehr gut geeignet für ETF-Sparpläne,
            Buy-&-Hold-Investoren und alle, die günstig investieren möchten.
          </p>

          <Link
            href="/investieren/broker/trade-republic/info"
            style={styles.button}
          >
            Jetzt informieren →
          </Link>

          <p style={styles.note}>
            * Externer Anbieter – Informationen unabhängig & transparent
          </p>
        </section>

        {/* Back */}
        <div style={styles.back}>
          <Link href="/investieren/broker">← Zurück zur Broker-Übersicht</Link>
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background:
      "radial-gradient(circle at top, #0f172a, #020617)",
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
    background: "rgba(30,41,59,0.55)",
    borderRadius: "14px",
    padding: "28px",
    marginBottom: "40px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 22px",
    borderRadius: "10px",
    background: "#14b8a6",
    color: "#020617",
    fontWeight: "600",
    textDecoration: "none",
  },
  note: {
    fontSize: "0.8rem",
    opacity: 0.6,
    marginTop: "12px",
  },
  back: {
    marginTop: "30px",
    fontSize: "0.9rem",
  },
};
