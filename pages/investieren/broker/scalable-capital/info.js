import Head from "next/head";
import Link from "next/link";

export default function ScalableCapitalInfo() {
  return (
    <>
      <Head>
        <title>
          Scalable Capital – Infos, Gebühren & Sicherheit | FinanzFreedom
        </title>
        <meta
          name="description"
          content="Scalable Capital im Überblick: Gebühren, Sicherheit, Regulierung und für wen der Broker geeignet ist. Transparente Infos ohne Verkaufsdruck."
        />
      </Head>

      <main style={styles.page}>
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <Link href="/">Start</Link> →{" "}
          <Link href="/investieren">Investieren</Link> →{" "}
          <Link href="/investieren/broker">Broker</Link> →{" "}
          <Link href="/investieren/broker/scalable-capital">
            Scalable Capital
          </Link>{" "}
          → Info
        </nav>

        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>Scalable Capital – Alle Infos im Überblick</h1>
          <p style={styles.subtitle}>
            Hier findest du transparente Informationen zu Scalable Capital:
            Gebühren, Sicherheit, Regulierung und für wen der Broker sinnvoll ist.
          </p>
        </header>

        {/* Was ist Scalable */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Was ist Scalable Capital?</h2>
          <p style={styles.p}>
            Scalable Capital ist ein deutscher Online-Broker mit Fokus auf
            langfristigem Vermögensaufbau. Besonders bekannt ist die Plattform
            für ihre große ETF-Auswahl, flexible Sparpläne und optionale
            Flatrate-Modelle für Vieltrader.
          </p>
        </section>

        {/* Gebühren */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Gebühren & Kosten</h2>
          <ul style={styles.list}>
            <li>Depotführung: in der Regel kostenlos</li>
            <li>ETF-Sparpläne: häufig kostenlos</li>
            <li>
              Einzelkäufe: je nach Tarifmodell (Einzelpreis oder Flatrate)
            </li>
          </ul>
          <p style={styles.small}>
            Wichtig: Die Kosten hängen vom gewählten Tarif ab. Für viele
            Anleger lohnt sich der Vergleich der Modelle vorab.
          </p>
        </section>

        {/* Sicherheit */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Sicherheit & Regulierung</h2>
          <p style={styles.p}>
            Scalable Capital wird in Deutschland reguliert. Kundengelder werden
            getrennt vom Unternehmensvermögen verwahrt. Zusätzlich greift die
            gesetzliche Einlagensicherung gemäß den geltenden Vorschriften.
          </p>
          <p style={styles.p}>
            Trotzdem gilt: Kapitalmarktanlagen unterliegen immer Marktrisiken.
            Gewinne sind nicht garantiert.
          </p>
        </section>

        {/* Für wen geeignet */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Für wen ist Scalable Capital geeignet?</h2>
          <ul style={styles.list}>
            <li>Langfristige ETF-Sparer</li>
            <li>Anleger mit größerer Produktauswahl</li>
            <li>Investoren, die flexibel handeln möchten</li>
          </ul>
        </section>

        {/* Affiliate Hinweis */}
        <section style={styles.notice}>
          <h2 style={styles.h2}>Hinweis zur Monetarisierung</h2>
          <p style={styles.p}>
            Diese Seite enthält derzeit <strong>keine Affiliate-Links</strong>.
            Sobald wir mit Partnerprogrammen zusammenarbeiten, werden
            entsprechende Verweise klar und transparent als Werbung
            gekennzeichnet.
          </p>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <h2 style={styles.h2}>Mehr erfahren</h2>
          <p style={styles.p}>
            Lies jetzt den ausführlichen Erfahrungsbericht oder vergleiche
            Scalable Capital mit anderen Brokern.
          </p>

          <div style={styles.ctaRow}>
            <Link
              href="/investieren/broker/scalable-capital"
              style={styles.buttonPrimary}
            >
              → Erfahrungsbericht
            </Link>

            <Link
              href="/investieren/broker/vergleich"
              style={styles.button}
            >
              → Broker vergleichen
            </Link>
          </div>
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
  },
  breadcrumb: {
    fontSize: "0.85rem",
    opacity: 0.7,
    marginBottom: "22px",
  },
  header: {
    marginBottom: "32px",
  },
  title: {
    fontSize: "2.3rem",
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
  p: {
    fontSize: "1rem",
    lineHeight: 1.7,
    opacity: 0.9,
  },
  list: {
    marginLeft: "18px",
    lineHeight: 1.8,
    opacity: 0.9,
  },
  small: {
    fontSize: "0.88rem",
    opacity: 0.75,
    marginTop: "8px",
  },
  notice: {
    background: "rgba(234,179,8,0.08)",
    border: "1px solid rgba(234,179,8,0.35)",
    borderRadius: "14px",
    padding: "20px",
    marginBottom: "28px",
  },
  cta: {
    marginTop: "32px",
    padding: "20px",
    background: "rgba(45,212,191,0.08)",
    border: "1px solid rgba(45,212,191,0.25)",
    borderRadius: "14px",
  },
  ctaRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "14px",
  },
  button: {
    padding: "12px 18px",
    borderRadius: "10px",
    background: "rgba(15,23,42,0.7)",
    border: "1px solid #1e293b",
    color: "#e5e7eb",
    textDecoration: "none",
    fontWeight: 700,
  },
  buttonPrimary: {
    padding: "12px 18px",
    borderRadius: "10px",
    background: "#14b8a6",
    color: "#020617",
    textDecoration: "none",
    fontWeight: 700,
  },
  back: {
    marginTop: "30px",
    opacity: 0.85,
  },
};
