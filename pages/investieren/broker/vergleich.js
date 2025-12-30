// pages/investieren/broker/vergleich.js
import Head from "next/head";
import Link from "next/link";

export default function BrokerVergleich() {
  const styles = {
    page: {
      minHeight: "100vh",
      padding: "70px 20px 60px",
      background: "radial-gradient(circle at top, #0f172a, #020617)",
      color: "#e5e7eb",
    },
    container: {
      maxWidth: "980px",
      margin: "0 auto",
    },
    breadcrumb: {
      fontSize: "0.9rem",
      opacity: 0.75,
      marginBottom: "18px",
    },
    title: {
      fontSize: "2.2rem",
      fontWeight: 800,
      margin: "10px 0 10px",
      letterSpacing: "-0.02em",
    },
    subtitle: {
      fontSize: "1.05rem",
      opacity: 0.85,
      lineHeight: 1.6,
      marginBottom: "26px",
      maxWidth: "820px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "16px",
      margin: "24px 0 22px",
    },
    card: {
      background: "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(2,6,23,0.85))",
      border: "1px solid rgba(148,163,184,0.18)",
      borderRadius: "16px",
      padding: "18px 18px",
      boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
    },
    cardTitle: {
      fontSize: "1.05rem",
      fontWeight: 800,
      marginBottom: "8px",
    },
    cardText: {
      fontSize: "0.95rem",
      opacity: 0.9,
      lineHeight: 1.55,
      margin: 0,
    },
    section: {
      marginTop: "26px",
      paddingTop: "18px",
      borderTop: "1px solid rgba(148,163,184,0.16)",
    },
    h2: {
      fontSize: "1.35rem",
      fontWeight: 800,
      margin: "0 0 10px",
    },
    p: {
      fontSize: "1rem",
      lineHeight: 1.7,
      opacity: 0.92,
      margin: "0 0 12px",
      maxWidth: "900px",
    },
    list: {
      margin: "8px 0 14px 18px",
      padding: 0,
      lineHeight: 1.8,
      opacity: 0.92,
    },
    noteBox: {
      marginTop: "14px",
      padding: "14px 14px",
      borderRadius: "14px",
      border: "1px solid rgba(34,197,94,0.25)",
      background: "rgba(34,197,94,0.06)",
      color: "#d1fae5",
    },
    mini: {
      fontSize: "0.92rem",
      opacity: 0.9,
      margin: 0,
      lineHeight: 1.6,
    },
    ctaRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "14px",
    },
    button: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 14px",
      borderRadius: "12px",
      border: "1px solid rgba(148,163,184,0.22)",
      background: "rgba(15,23,42,0.55)",
      color: "#e5e7eb",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: "0.95rem",
    },
    buttonPrimary: {
      border: "1px solid rgba(45,212,191,0.35)",
      background: "rgba(45,212,191,0.12)",
      color: "#d1faf5",
    },
    disclaimer: {
      marginTop: "18px",
      fontSize: "0.9rem",
      opacity: 0.75,
      lineHeight: 1.6,
    },
  };

  return (
    <>
      <Head>
        <title>Broker Vergleich: Trade Republic vs. Scalable Capital | FinanzFreedom</title>
        <meta
          name="description"
          content="Broker Vergleich für Einsteiger: Trade Republic vs. Scalable Capital – Unterschiede bei Kosten, Sparplänen, ETFs, App und für wen welcher Broker sinnvoll ist."
        />
      </Head>

      <main style={styles.page}>
        <div style={styles.container}>
          <div style={styles.breadcrumb}>
            <Link href="/investieren">Investieren</Link> {" / "}
            <Link href="/investieren/broker">Broker</Link> {" / "} Vergleich
          </div>

          <h1 style={styles.title}>Broker Vergleich: Trade Republic vs. Scalable Capital</h1>
          <p style={styles.subtitle}>
            Du willst starten – aber nicht ewig recherchieren? Hier bekommst du einen klaren,
            unabhängigen Überblick über die wichtigsten Unterschiede. Ohne Fachchinesisch, ohne
            Verkaufsdruck.
          </p>

          {/* Quick Cards */}
          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>✅ Für Einsteiger</div>
              <p style={styles.cardText}>
                Wenn du schnell loslegen willst, sind niedrige Kosten, eine einfache App und klare
                Sparplan-Funktionen entscheidend.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.cardTitle}>💰 Kosten & Gebühren</div>
              <p style={styles.cardText}>
                Nicht nur „0 €“ zählt: Achte auf Sparplan-Kosten, Handelsgebühren, Spread und mögliche
                Zusatzkosten.
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.cardTitle}>📈 ETF-Sparpläne</div>
              <p style={styles.cardText}>
                Wie viele ETFs gibt es? Sind Sparpläne flexibel? Gibt es kostenlose Ausführungen und
                gute Auswahl?
              </p>
            </div>
            <div style={styles.card}>
              <div style={styles.cardTitle}>🔒 Sicherheit</div>
              <p style={styles.cardText}>
                Regulierung, Einlagensicherung und Depotverwahrung sind die Basis. Dazu kommt:
                Transparenz & Vertrauen.
              </p>
            </div>
          </div>

          {/* Section: Kurzfazit */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Kurzfazit (wenn du es eilig hast)</h2>
            <p style={styles.p}>
              <strong>Trade Republic</strong> ist oft ideal, wenn du <strong>sehr simpel starten</strong>{" "}
              möchtest und eine <strong>minimalistische</strong> App bevorzugst.
            </p>
            <p style={styles.p}>
              <strong>Scalable Capital</strong> passt häufig besser, wenn du <strong>mehr Auswahl</strong>{" "}
              willst und dein Setup langfristig <strong>breiter</strong> aufstellen möchtest.
            </p>

            <div style={styles.noteBox}>
              <p style={styles.mini}>
                Hinweis: Dieser Vergleich ist bewusst neutral gehalten. Konkrete Affiliate-Links
                setzen wir erst, wenn alle Seiten inhaltlich rund sind (rechtssicher & sauber).
              </p>
            </div>
          </section>

          {/* Section: Vergleich im Detail */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Vergleich im Detail</h2>

            <p style={styles.p}>
              Damit du wirklich die richtige Entscheidung triffst, gehen wir die wichtigsten Punkte
              durch. Du brauchst nicht jeden Punkt perfekt – aber 2–3 Kernkriterien sollten zu dir passen.
            </p>

            <ul style={styles.list}>
              <li>
                <strong>Kosten & Gebühren:</strong> Sparpläne, Kauf/Verkauf, mögliche Grundgebühren,
                typische Kostenfallen.
              </li>
              <li>
                <strong>ETF- & Aktien-Auswahl:</strong> Wie viele Produkte sind verfügbar? Sind deine
                Lieblings-ETFs dabei?
              </li>
              <li>
                <strong>Sparpläne:</strong> Mindestbetrag, Ausführungstage, Pausieren, Einmalzahlungen.
              </li>
              <li>
                <strong>App & Bedienung:</strong> Einfachheit, Übersicht, Stabilität, Nutzerführung.
              </li>
              <li>
                <strong>Steuern & Dokumente:</strong> Gute Abrechnungen, übersichtliche Reports,
                Steuerbescheinigungen.
              </li>
              <li>
                <strong>Sicherheit:</strong> Regulierung, Einlagensicherung, Depotverwahrung,
                Transparenz.
              </li>
            </ul>

            <p style={styles.p}>
              Wichtig: Der „beste Broker“ ist der, den du <strong>langfristig wirklich nutzt</strong>.
              Ein guter Sparplan, den du durchziehst, schlägt die perfekte Theorie.
            </p>
          </section>

          {/* Section: Für wen welcher Broker */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Für wen passt welcher Broker?</h2>

            <div style={styles.grid}>
              <div style={styles.card}>
                <div style={styles.cardTitle}>👤 Du bist Einsteiger</div>
                <p style={styles.cardText}>
                  Nimm den Broker, der sich <strong>am einfachsten</strong> anfühlt. Hauptsache:
                  Sparplan einrichten und laufen lassen.
                </p>
              </div>
              <div style={styles.card}>
                <div style={styles.cardTitle}>🧱 Du willst langfristig ETFs</div>
                <p style={styles.cardText}>
                  Fokus: <strong>ETF-Auswahl</strong>, stabile Sparpläne, gute Reports.
                  Design ist zweitrangig – Funktion zählt.
                </p>
              </div>
              <div style={styles.card}>
                <div style={styles.cardTitle}>⚡ Du willst aktiv handeln</div>
                <p style={styles.cardText}>
                  Achte auf Handelskosten, Spread, Orderarten und stabile App. Hier sind die Details
                  besonders wichtig.
                </p>
              </div>
              <div style={styles.card}>
                <div style={styles.cardTitle}>✅ Du willst einfach starten</div>
                <p style={styles.cardText}>
                  Entscheide dich heute – und optimiere später. Der größte Fehler ist: Monate warten
                  und gar nicht investieren.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Weiterführende Links */}
          <section style={styles.section}>
            <h2 style={styles.h2}>Weiterführende Artikel</h2>
            <p style={styles.p}>
              Wenn du tiefer einsteigen willst, geh über die Detail-Seiten. Dort bauen wir Schritt für
              Schritt die Inhalte aus (inkl. rechtssicherer Monetarisierung).
            </p>

            <div style={styles.ctaRow}>
              <Link href="/investieren/broker/trade-republic" style={{ ...styles.button, ...styles.buttonPrimary }}>
                → Trade Republic im Detail
              </Link>
              <Link href="/investieren/broker/scalable-capital" style={styles.button}>
                → Scalable Capital im Detail
              </Link>
              <Link href="/investieren/broker" style={styles.button}>
                → Zur Broker-Übersicht
              </Link>
            </div>

            <p style={styles.disclaimer}>
              Transparenz: Sobald Affiliate-Links eingebaut werden, kennzeichnen wir diese klar und
              halten uns an alle Vorgaben (u. a. Werbekennzeichnung/Transparenz, Datenschutz).
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
