import Head from "next/head";
import Link from "next/link";

export default function TradeRepublicInfo() {
  return (
    <>
      <Head>
        <title>Trade Republic – Infos & Empfehlung | FinanzFreedom</title>
        <meta
          name="description"
          content="Trade Republic: Für wen der Broker geeignet ist, worauf du achten solltest und wie du sicher startest."
        />
      </Head>

      <main style={styles.page}>
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <Link href="/">Start</Link> ›{" "}
          <Link href="/investieren">Investieren</Link> ›{" "}
          <Link href="/investieren/broker">Broker</Link> ›{" "}
          <Link href="/investieren/broker/trade-republic">Trade Republic</Link> ›
          Info
        </nav>

        {/* HERO */}
        <header style={styles.hero}>
          <h1 style={styles.title}>Trade Republic – passt der Broker zu dir?</h1>
          <p style={styles.subtitle}>
            Kurz & ehrlich: Für wen Trade Republic sinnvoll ist – und wann eher
            nicht.
          </p>
        </header>

        {/* CONTENT */}
        <section style={styles.card}>
          <h2>Für wen Trade Republic geeignet ist</h2>
          <ul style={styles.list}>
            <li>Einsteiger ohne große Vorerfahrung</li>
            <li>ETF-Sparer mit monatlichem Sparplan</li>
            <li>Kostenbewusste Anleger</li>
            <li>Mobile-first Nutzer (App statt Desktop)</li>
          </ul>
        </section>

        <section style={styles.card}>
          <h2>Wann ein anderer Broker besser sein kann</h2>
          <ul style={styles.list}>
            <li>Wenn du viele Analyse-Tools brauchst</li>
            <li>Wenn du aktiv traden willst</li>
            <li>Wenn du eine klassische Web-Plattform bevorzugst</li>
          </ul>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <p>
            Wenn du langfristig und günstig investieren willst, ist Trade
            Republic für viele der einfachste Einstieg.
          </p>

          {/* Externer Link – später Affiliate */}
          <a
            href="https://www.traderepublic.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Zur offiziellen Trade-Republic-Seite →
          </a>

          <p style={styles.note}>
            * Hinweis: Externer Link. Später wird dieser transparent als
            Affiliate-Link gekennzeichnet.
          </p>
        </section>

        {/* BACK */}
        <div style={styles.back}>
          <Link href="/investieren/broker/trade-republic">
            ← Zurück zum Trade-Republic-Test
          </Link>
        </div>
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
    maxWidth: "900px",
    margin: "0 auto",
  },
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "24px",
  },
  hero: {
    marginBottom: "36px",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.05rem",
    color: "#9ca3af",
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "24px",
    marginBottom: "24px",
  },
  list: {
    lineHeight: 1.9,
    marginTop: "10px",
  },
  cta: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "28px",
    textAlign: "center",
    marginTop: "32px",
  },
  button: {
    display: "inline-block",
    marginTop: "14px",
    padding: "12px 26px",
    borderRadius: "999px",
    background: "#2dd4bf",
    color: "#020617",
    fontWeight: "700",
    textDecoration: "none",
  },
  note: {
    marginTop: "10px",
    fontSize: "0.8rem",
    opacity: 0.6,
  },
  back: {
    marginTop: "40px",
    textAlign: "center",
  },
};
