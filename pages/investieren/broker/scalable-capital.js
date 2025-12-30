import Head from "next/head";
import Link from "next/link";

export default function ScalableCapital() {
  return (
    <>
      <Head>
        <title>
          Scalable Capital Erfahrungen 2025 – Test, ETFs & Kosten | FinanzFreedom
        </title>
        <meta
          name="description"
          content="Scalable Capital im Test 2025: Kosten, ETFs, Sparpläne, Vorteile, Nachteile und für wen der Broker geeignet ist."
        />
      </Head>

      <main style={styles.page}>
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <Link href="/">Startseite</Link> →{" "}
          <Link href="/investieren">Investieren</Link> →{" "}
          <Link href="/investieren/broker">Broker</Link> → Scalable Capital
        </nav>

        {/* Hero */}
        <header style={styles.hero}>
          <h1 style={styles.title}>Scalable Capital Erfahrungen 2025</h1>
          <p style={styles.subtitle}>
            Große ETF-Auswahl, attraktive Sparpläne und flexible Gebührenmodelle –
            hier bekommst du den ehrlichen Überblick über Scalable Capital.
          </p>
        </header>

        {/* Kurzfazit */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Kurzfazit (wenn du es eilig hast)</h2>
          <p style={styles.p}>
            <strong>Scalable Capital</strong> ist eine hervorragende Wahl für
            Anleger, die langfristig Vermögen aufbauen und eine breite ETF- und
            Aktienauswahl wünschen – mit Möglichkeit zur Flatrate-Gebühr.
          </p>

          <Link
            href="/investieren/broker/scalable-capital/info"
            style={styles.ctaLink}
          >
            Jetzt informieren →
          </Link>

          <p style={styles.note}>
            * Externer Anbieter – Informationen unabhängig & transparent.
          </p>
        </section>

        {/* Was ist Scalable */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Was ist Scalable Capital?</h2>
          <p style={styles.p}>
            Scalable Capital ist ein Online-Broker, der sich durch eine große
            Auswahl an ETFs, Aktien und Sparplänen auszeichnet und gleichzeitig
            flexible Preismodelle bietet. Besonders beliebt ist die Option einer
            Flatrate für Vieltrader.
          </p>
        </section>

        {/* Kosten */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Kosten & Gebühren</h2>
          <ul style={styles.list}>
            <li>
              <strong>Depotführung:</strong> meist kostenlos
            </li>
            <li>
              <strong>ETF-Sparpläne:</strong> häufig kostenlos
            </li>
            <li>
              <strong>Aktien & ETFs:</strong> je nach Modell (Einzelpreis oder Flatrate)
            </li>
          </ul>
          <p style={styles.small}>
            Tipp: Das Flatrate-Modell kann besonders bei häufigem Traden Vorteile
            bieten.
          </p>
        </section>

        {/* Vorteile & Nachteile */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.h2}>Vorteile</h2>
            <ul style={styles.list}>
              <li>Sehr große Auswahl an ETFs und Aktien</li>
              <li>Flatrate-Option möglich</li>
              <li>Web + App nutzbar</li>
              <li>Gut für langfristige Anleger</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.h2}>Nachteile</h2>
            <ul style={styles.list}>
              <li>Etwas komplexer als andere Broker</li>
              <li>Für absolute Anfänger leichte Einstiegshürde</li>
            </ul>
          </div>
        </section>

        {/* Für wen */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Für wen ist Scalable Capital geeignet?</h2>
          <p style={styles.p}>
            Wenn du Wert auf große Produktvielfalt, späteres Wachstum und
            langfristige Strategien legst, ist Scalable Capital eine sehr solide
            Option.
          </p>
        </section>

        {/* Vergleich */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Scalable Capital vs. Trade Republic</h2>
          <p style={styles.p}>
            Beide Broker sind starke Optionen. <strong>Trade Republic</strong>{" "}
            ist oft einfacher und direkter für Einsteiger, während{" "}
            <strong>Scalable Capital</strong> mehr Auswahl und Flexibilität
            bietet – besonders bei größeren Portfolios.
          </p>

          <Link href="/investieren/broker/vergleich" style={styles.link}>
            → Zum Broker-Vergleich
          </Link>
        </section>

        {/* FAQ */}
        <section style={styles.card}>
          <h2 style={styles.h2}>FAQ</h2>

          <h3 style={styles.h3}>Ist Scalable Capital sicher?</h3>
          <p style={styles.p}>
            Scalable Capital ist ein regulierter Broker; dennoch gilt: Jede
            Investition birgt Marktrisiken. Sicherheit bedeutet hier vor allem:
            Regulierung, Einlagensicherung und transparente Kosten.
          </p>

          <h3 style={styles.h3}>Brauche ich Erfahrung?</h3>
          <p style={styles.p}>
            Grundsätzlich ist Scalable auch für Einsteiger nutzbar, aber
            teilweise etwas komplexer als sehr einfache Broker.
          </p>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <h2 style={styles.h2}>Dein nächster Schritt</h2>
          <p style={styles.p}>
            Wenn du langfristig und flexibel investieren willst, kann Scalable
            Capital sehr lohnend sein.
          </p>

          <Link
            href="/investieren/broker/scalable-capital/info"
            style={styles.ctaButton}
          >
            Jetzt informieren →
          </Link>

          <p style={styles.note}>
            * Später wird dieser Link transparent als Affiliate-Link
            gekennzeichnet.
          </p>
        </section>

        {/* Back */}
        <div style={styles.back}>
          <Link href="/investieren/broker">
            ← Zurück zur Broker-Übersicht
          </Link>
        </div>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "70px 20px 60px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    margin: "0 auto",
  },
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "22px",
  },
  hero: {
    marginBottom: "38px",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "1.05rem",
    opacity: 0.85,
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "20px",
    marginBottom: "24px",
  },
  h2: {
    fontSize: "1.3rem",
    marginBottom: "10px",
  },
  h3: {
    fontSize: "1.05rem",
    marginTop: "18px",
    marginBottom: "8px",
  },
  p: {
    fontSize: "1rem",
    lineHeight: 1.7,
    opacity: 0.9,
  },
  list: {
    marginLeft: "18px",
    lineHeight: 1.8,
    marginTop: "8px",
    opacity: 0.9,
  },
  small: {
    fontSize: "0.88rem",
    opacity: 0.75,
    marginTop: "8px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px",
    marginBottom: "24px",
  },
  link: {
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 700,
  },
  cta: {
    marginTop: "32px",
    padding: "20px 14px",
    background: "rgba(45,212,191,0.08)",
    border: "1px solid rgba(45,212,191,0.25)",
    borderRadius: "14px",
  },
  ctaLink: {
    display: "inline-block",
    marginTop: "14px",
    padding: "12px 18px",
    borderRadius: "10px",
    background: "#14b8a6",
    color: "#020617",
    fontWeight: 700,
    textDecoration: "none",
  },
  ctaButton: {
    display: "inline-block",
    marginTop: "14px",
    padding: "12px 18px",
    borderRadius: "10px",
    background: "#14b8a6",
    color: "#020617",
    fontWeight: 700,
    textDecoration: "none",
  },
  note: {
    marginTop: "10px",
    fontSize: "0.9rem",
    opacity: 0.7,
  },
  back: {
    marginTop: "30px",
    opacity: 0.85,
  },
};
