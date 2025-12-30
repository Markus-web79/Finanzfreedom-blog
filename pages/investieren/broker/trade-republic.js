import Head from "next/head";
import Link from "next/link";

export default function TradeRepublic() {
  return (
    <>
      <Head>
        <title>Trade Republic Erfahrungen 2025 – Test, Kosten & Fazit | FinanzFreedom</title>
        <meta
          name="description"
          content="Trade Republic im Test 2025: Kosten, ETF-Sparpläne, Vorteile, Nachteile und für wen sich der Broker lohnt. Unabhängig & verständlich."
        />
      </Head>

      <main style={styles.page}>
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <Link href="/">Startseite</Link> →{" "}
          <Link href="/investieren">Investieren</Link> →{" "}
          <Link href="/investieren/broker">Broker</Link> → Trade Republic
        </nav>

        {/* Hero */}
        <header style={styles.hero}>
          <h1 style={styles.title}>Trade Republic Erfahrungen 2025</h1>
          <p style={styles.subtitle}>
            Günstig investieren, ETF-Sparpläne nutzen und langfristig Vermögen aufbauen – hier
            bekommst du den ehrlichen Überblick, ob Trade Republic zu dir passt.
          </p>
        </header>

        {/* TL;DR */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Kurzfazit (30 Sekunden)</h2>
          <p>
            <strong>Trade Republic</strong> ist besonders stark für{" "}
            <strong>Einsteiger</strong> und <strong>ETF-Sparer</strong>, die günstig und
            einfach starten wollen. Wenn du hauptsächlich langfristig investierst und eine
            intuitive App willst, ist das oft eine sehr gute Wahl.
          </p>

          <div style={styles.quickBox}>
            <div style={styles.quickItem}>
              <div style={styles.quickTitle}>Geeignet für</div>
              <div style={styles.quickText}>Einsteiger, ETF-Sparpläne, langfristige Anleger</div>
            </div>
            <div style={styles.quickItem}>
              <div style={styles.quickTitle}>Weniger geeignet für</div>
              <div style={styles.quickText}>Daytrading, viele Analyse-Tools, „Pro“-Charts</div>
            </div>
          </div>

          <Link href="/investieren/broker/trade-republic/info" style={styles.ctaLink}>
            Jetzt informieren →
          </Link>

          <p style={styles.note}>
            * Externer Anbieter – Informationen unabhängig & transparent.
          </p>
        </section>

        {/* Was ist TR */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Was ist Trade Republic?</h2>
          <p>
            Trade Republic ist ein in Deutschland regulierter Online-Broker, der vor allem durch
            niedrige Gebühren und eine sehr einfache Bedienung bekannt wurde. Für viele ist das
            der Einstieg in ETFs und Sparpläne – ohne komplizierte Menüs oder teure Depotkosten.
          </p>
        </section>

        {/* Kosten */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Kosten & Gebühren (einfach erklärt)</h2>
          <ul style={styles.list}>
            <li><strong>Depotführung:</strong> in der Regel kostenlos</li>
            <li><strong>ETF-Sparpläne:</strong> häufig kostenlos</li>
            <li><strong>Einmalanlage / Trades:</strong> sehr günstig (modellabhängig)</li>
          </ul>
          <p style={styles.small}>
            Hinweis: Gebührenmodelle können sich ändern. Wir halten die Seite aktuell, sobald wir
            die Vergleichstabelle finalisieren.
          </p>
        </section>

        {/* Vorteile/Nachteile */}
        <section style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.h2}>Vorteile</h2>
            <ul style={styles.list}>
              <li>Sehr einfache App – ideal zum Start</li>
              <li>Günstige Gebühren, keine unnötigen Kosten</li>
              <li>ETF-Sparpläne für langfristigen Vermögensaufbau</li>
              <li>Gute Lösung, wenn du „weniger klicken, mehr investieren“ willst</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.h2}>Nachteile</h2>
            <ul style={styles.list}>
              <li>Weniger Analyse-Tools als bei klassischen Brokern</li>
              <li>Für sehr aktives Trading nicht die erste Wahl</li>
              <li>Wenn du unbedingt eine Desktop-Profi-Plattform willst, kann es „zu simpel“ wirken</li>
            </ul>
          </div>
        </section>

        {/* Für wen geeignet */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Für wen ist Trade Republic wirklich geeignet?</h2>
          <p>
            Wenn dein Ziel ist, <strong>konsequent Vermögen aufzubauen</strong> – z. B. mit einem
            ETF-Sparplan – dann ist Trade Republic oft genau richtig. Du brauchst keine 100 Charts,
            sondern ein System, das du durchziehst. Genau das ist der Punkt.
          </p>

          <h3 style={styles.h3}>Nicht ideal, wenn …</h3>
          <ul style={styles.list}>
            <li>du täglich aktiv traden willst</li>
            <li>du Profi-Tools/Indikatoren/Charting erwartest</li>
            <li>du alles am Desktop wie bei „Pro Trader“-Plattformen machen willst</li>
          </ul>
        </section>

        {/* Vergleich */}
        <section style={styles.card}>
          <h2 style={styles.h2}>Trade Republic vs. Scalable Capital</h2>
          <p>
            Beide sind für viele Einsteiger sinnvoll. Der Unterschied liegt oft im Stil:
            <strong>Trade Republic</strong> ist extrem simpel und app-fokussiert.{" "}
            <strong>Scalable</strong> punktet häufig mit größerer Auswahl und Flatrate-Modellen.
          </p>

          <div style={styles.compare}>
            <div style={styles.compareCol}>
              <div style={styles.compareHead}>Trade Republic</div>
              <ul style={styles.list}>
                <li>Sehr einfach</li>
                <li>Starker Einstieg</li>
                <li>Perfekt für Sparpläne</li>
              </ul>
              <Link href="/investieren/broker/vergleich" style={styles.link}>
                Zum Vergleich →
              </Link>
            </div>

            <div style={styles.compareCol}>
              <div style={styles.compareHead}>Scalable Capital</div>
              <ul style={styles.list}>
                <li>Mehr Auswahl</li>
                <li>Flatrate möglich</li>
                <li>Web + App</li>
              </ul>
              <Link href="/investieren/broker/scalable-capital" style={styles.link}>
                Zum Scalable Test →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={styles.card}>
          <h2 style={styles.h2}>FAQ</h2>

          <h3 style={styles.h3}>Ist Trade Republic sicher?</h3>
          <p>
            Trade Republic ist ein regulierter Broker. Wichtig ist trotzdem: Investieren hat immer
            Risiken (Marktschwankungen). Das Broker-Risiko und das Marktrisiko sind zwei
            unterschiedliche Dinge.
          </p>

          <h3 style={styles.h3}>Kann ich mit 25 € im Monat starten?</h3>
          <p>
            Ja – genau dafür sind ETF-Sparpläne da. Das Wichtigste ist die Regelmäßigkeit, nicht
            der perfekte Zeitpunkt.
          </p>

          <h3 style={styles.h3}>Was ist der beste erste Schritt?</h3>
          <p>
            Starte simpel: 1 Welt-ETF, feste Sparrate, langfristiger Plan. Keine Hektik, keine
            Zockerei – Kontinuität gewinnt.
          </p>
        </section>

        {/* CTA */}
        <section style={styles.cta}>
          <h2 style={styles.h2}>Nächster Schritt</h2>
          <p style={{ opacity: 0.9 }}>
            Wenn du ernsthaft Vermögen aufbauen willst, brauchst du kein Chaos – du brauchst ein
            System. Trade Republic kann ein guter Einstieg sein.
          </p>

          <Link href="/investieren/broker/trade-republic/info" style={styles.ctaButton}>
            Jetzt informieren →
          </Link>

          <p style={styles.note}>
            * Externer Anbieter – später wird dieser Link transparent als Affiliate-Link gekennzeichnet.
          </p>
        </section>

        {/* Back */}
        <div style={styles.back}>
          <Link href="/investieren/broker">← Zurück zur Broker-Übersicht</Link>
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
    maxWidth: "860px",
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
  compare: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px",
    marginTop: "14px",
  },
  compareCol: {
    background: "rgba(15, 23, 42, 0.7)",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    padding: "16px",
  },
  compareHead: {
    fontWeight: 800,
    marginBottom: "10px",
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
    marginTop: "10px",
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
