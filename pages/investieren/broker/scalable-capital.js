import Head from "next/head";
import Link from "next/link";

export default function ScalableCapital() {
  return (
    <>
      <Head>
        <title>
          Scalable Capital Erfahrungen 2025 – Kosten, ETFs & Fazit | FinanzFreedom
        </title>
        <meta
          name="description"
          content="Scalable Capital im Test 2025: Kosten, ETF-Sparpläne, Vorteile, Nachteile und für wen sich der Broker wirklich lohnt."
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
            Große ETF-Auswahl, flexible Gebührenmodelle und ideal für langfristige
            Anleger – hier erfährst du ehrlich, ob Scalable Capital zu dir passt.
          </p>
        </header>

        {/* TL;DR */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Kurzfazit (30 Sekunden)</h2>
          <p>
            <strong>Scalable Capital</strong> ist besonders geeignet für Anleger,
            die langfristig investieren möchten und Wert auf eine große
            ETF-Auswahl legen. Im Vergleich zu Trade Republic bietet Scalable oft
            mehr Flexibilität – ist aber minimal komplexer.
          </p>

          <div style={styles.quickBox}>
            <div style={styles.quickItem}>
              <div style={styles.quickTitle}>Geeignet für</div>
              <div style={styles.quickText}>
                ETF-Sparer, langfristige Anleger, größere Portfolios
              </div>
            </div>
            <div style={styles.quickItem}>
              <div style={styles.quickTitle}>Weniger geeignet für</div>
              <div style={styles.quickText}>
                Absolute Anfänger ohne Grundwissen
              </div>
            </div>
          </div>

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
          <p>
            Scalable Capital ist ein moderner Online-Broker mit Fokus auf
            langfristigen Vermögensaufbau. Besonders bekannt ist der Anbieter für
            seine große Auswahl an ETFs und die Möglichkeit, zwischen
            Einzelabrechnung und Flatrate-Modellen zu wählen.
          </p>
        </section>

        {/* Kosten */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Kosten & Gebühren</h2>
          <ul style={styles.list}>
            <li>
              <strong>Depotführung:</strong> kostenlos
            </li>
            <li>
              <strong>ETF-Sparpläne:</strong> häufig kostenlos
            </li>
            <li>
              <strong>Trades:</strong> je nach Modell (Einzelpreis oder Flatrate)
            </li>
          </ul>
          <p style={styles.small}>
            Tipp: Wer regelmäßig handelt oder größere Beträge investiert,
            profitiert oft vom Flatrate-Modell.
          </p>
        </section>

        {/* Vorteile / Nachteile */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.h2}>Vorteile</h2>
            <ul style={styles.list}>
              <li>Sehr große ETF-Auswahl</li>
              <li>Web & App nutzbar</li>
              <li>Flatrate-Option für Vielnutzer</li>
              <li>Ideal für langfristige Strategien</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.h2}>Nachteile</h2>
            <ul style={styles.list}>
              <li>Etwas komplexer als Trade Republic</li>
              <li>Für absolute Anfänger minimal höhere Einstiegshürde</li>
            </ul>
          </div>
        </section>

        {/* Für wen geeignet */}
        <section style={styles.card}>
          <h2 style={styles.h2}>
            Für wen ist Scalable Capital die richtige Wahl?
          </h2>
          <p>
            Wenn du bereits weißt, was ETFs sind, und langfristig Vermögen
            aufbauen möchtest, ist Scalable Capital eine sehr starke Option –
            besonders bei größeren Sparraten oder mehreren ETFs.
          </p>
        </section>

        {/* Vergleich */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Scalable Capital vs. Trade Republic</h2>
          <p>
            Beide Broker sind gut – der Unterschied liegt im Detail:
            <strong> Scalable</strong> bietet mehr Auswahl und Flexibilität,
            <strong> Trade Republic</strong> punktet mit maximaler Einfachheit.
          </p>

          <Link
            href="/investieren/broker/vergleich"
            style={styles.link}
          >
            Zum direkten Vergleich →
          </Link>
        </section>

        {/* FAQ */}
        <section style={styles.card}>
          <h2 style={styles.h2}>FAQ</h2>

          <h3 style={styles.h3}>Ist Scalable Capital sicher?</h3>
          <p>
            Scalable Capital ist reguliert und arbeitet mit bekannten
            Partnerbanken. Dennoch gilt: Marktrisiken bestehen immer – unabhängig
            vom Broker.
          </p>

          <h3 style={styles.h3}>
            Ist Scalable Capital besser als Trade Republic?
          </h3>
          <p>
            Nicht besser oder schlechter – sondern anders. Für größere Portfolios
            und mehr Auswahl ist Scalable oft sinnvoller.
          </p>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <h2 style={styles.h2}>Nächster Schritt</h2>
          <p>
            Wenn du langfristig investieren möchtest und etwas mehr Flexibilität
            suchst, ist Scalable Capital eine sehr gute Wahl.
          </p>

          <Link
            href="/investieren/broker/scalable-capital/info"
            style={styles.ctaButton}
          >
            Jetzt informieren →
          </Link>

          <p style={styles.note}>
            * Später wird dieser Link transparent als Affiliate-Link gekennzeichnet.
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
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    maxWidth: "980px",
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
    fontSize: "2.6rem",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.85,
  },
  card: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "24px",
    marginBottom: "24px",
  },
  h2: {
    marginBottom: "10px",
  },
  h3: {
    marginTop: "18px",
    marginBottom: "8px",
    fontSize: "1.05rem",
  },
  list: {
    lineHeight: 1.9,
    marginTop: "10px",
  },
  small: {
    marginTop: "10px",
    fontSize: "0.9rem",
    opacity: 0.7,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
    marginBottom: "24px",
  },
  quickBox: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "14px",
    marginTop: "14px",
    marginBottom: "18px",
  },
  quickItem: {
    background: "rgba(15, 23, 42, 0.7)",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "14px",
  },
  quickTitle: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "6px",
  },
  quickText: {
    fontWeight: 600,
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 700,
  },
  cta: {
    background: "rgba(45, 212, 191, 0.08)",
    border: "1px solid rgba(45, 212, 191, 0.25)",
    borderRadius: "14px",
    padding: "24px",
  },
  ctaLink: {
    display: "inline-block",
    marginTop: "14px",
    padding: "12px 18px",
    borderRadius: "10px",
    background: "#14b8a6",
    color: "#020617",
    fontWeight: 800,
    textDecoration: "none",
  },
  ctaButton: {
    display: "inline-block",
    marginTop: "14px",
    padding: "12px 18px",
    borderRadius: "10px",
    background: "#14b8a6",
    color: "#020617",
    fontWeight: 800,
    textDecoration: "none",
  },
  note: {
    marginTop: "10px",
    fontSize: "0.82rem",
    opacity: 0.65,
  },
  back: {
    marginTop: "34px",
    textAlign: "center",
    opacity: 0.85,
  },
};
