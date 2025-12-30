import Head from "next/head";
import Link from "next/link";

export default function ScalableCapitalInfo() {
  return (
    <main style={styles.page}>
      <Head>
        <title>Scalable Capital Erfahrungen 2025: Kosten, Sparpläne, Sicherheit | FinanzFreedom</title>
        <meta
          name="description"
          content="Scalable Capital verständlich erklärt: Kosten & Gebühren, ETF-Sparpläne, Sicherheit, für wen es sich lohnt – plus klare Empfehlung."
        />
      </Head>

      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <Link href="/" style={styles.breadcrumbLink}>Startseite</Link>
        <span style={styles.breadcrumbSep}>›</span>
        <Link href="/investieren" style={styles.breadcrumbLink}>Investieren</Link>
        <span style={styles.breadcrumbSep}>›</span>
        <Link href="/investieren/broker/broker" style={styles.breadcrumbLink}>Broker</Link>
        <span style={styles.breadcrumbSep}>›</span>
        <Link href="/investieren/broker/scalable-capital" style={styles.breadcrumbLink}>Scalable Capital</Link>
        <span style={styles.breadcrumbSep}>›</span>
        <span style={styles.breadcrumbCurrent}>Info</span>
      </div>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.h1}>Scalable Capital: Kosten, Sparpläne & Sicherheit</h1>
        <p style={styles.lead}>
          Du willst investieren, aber ohne kompliziertes Fachchinesisch?
          Hier bekommst du Scalable Capital in klaren Worten: Gebühren, ETF-Sparpläne,
          Sicherheit – und ob es für dich passt.
        </p>

        <div style={styles.heroCtas}>
          <Link href="/investieren/broker/scalable-capital" style={styles.primaryBtn}>
            Zur Übersicht →
          </Link>
          <Link href="/investieren/broker/vergleich" style={styles.secondaryBtn}>
            Broker vergleichen →
          </Link>
        </div>
      </section>

      {/* Content */}
      <section style={styles.card}>
        <h2 style={styles.h2}>Kurzfazit</h2>
        <p style={styles.p}>
          Scalable Capital ist besonders stark für Einsteiger, die günstig per ETF-Sparplan starten
          wollen – und für alle, die eine übersichtliche App mit modernem Look mögen.
          Wenn du sehr aktiv tradest oder spezielle Börsenplätze brauchst, gibt es Alternativen.
        </p>
      </section>

      <section style={styles.grid}>
        <div style={styles.card}>
          <h2 style={styles.h2}>1) Was ist Scalable Capital?</h2>
          <p style={styles.p}>
            Scalable Capital ist ein Online-Broker, mit dem du Aktien, ETFs und Sparpläne
            einfach verwalten kannst. Der Fokus liegt auf einem günstigen Einstieg, klarer Bedienung
            und planbarem Vermögensaufbau.
          </p>
          <p style={styles.p}>
            Für viele Nutzer ist Scalable interessant, weil ETF-Sparpläne bequem laufen können –
            du stellst einmal ein, und der Rest passiert automatisch.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.h2}>2) Kosten & Gebühren (einfach erklärt)</h2>
          <p style={styles.p}>
            Bei Brokern zählen zwei Dinge: <strong>Kosten pro Trade</strong> und <strong>Kosten für Sparpläne</strong>.
            Scalable bietet Modelle, die besonders bei Sparplänen und regelmäßigen Investments stark sind.
          </p>

          <ul style={styles.ul}>
            <li style={styles.li}><strong>ETF-Sparpläne:</strong> häufig sehr günstig / je nach Aktion sogar kostenlos</li>
            <li style={styles.li}><strong>Einmalkäufe:</strong> Kosten hängen vom Modell ab</li>
            <li style={styles.li}><strong>Depotführung:</strong> in vielen Fällen kostenlos, abhängig vom Tarif</li>
          </ul>

          <p style={styles.note}>
            Hinweis: Gebühren können sich ändern (Aktionen/Tarife). Wir halten die Inhalte Schritt für Schritt aktuell.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.h2}>3) ETF-Sparpläne: Warum das der Gamechanger ist</h2>
          <p style={styles.p}>
            Ein ETF-Sparplan ist für die meisten der einfachste Weg, langfristig Vermögen aufzubauen.
            Du investierst monatlich (z. B. 50–300 €), nutzt den Cost-Average-Effekt und bleibst entspannt.
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}>Automatisiert: einmal einstellen, dann läuft’s</li>
            <li style={styles.li}>Langfristig: passt perfekt zu „finanzieller Freiheit“</li>
            <li style={styles.li}>Flexibel: jederzeit pausieren/ändern</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h2 style={styles.h2}>4) Sicherheit: Ist Scalable Capital seriös?</h2>
          <p style={styles.p}>
            Die wichtigste Frage. Grundsätzlich gilt: Ein Broker ist dann „seriös“, wenn
            Regulierung, Verwahrung und Einlagensicherung sauber sind.
          </p>
          <ul style={styles.ul}>
            <li style={styles.li}><strong>Regulierung:</strong> Broker unterliegt in der Regel europäischen Aufsichten</li>
            <li style={styles.li}><strong>Vermögenswerte:</strong> Wertpapiere gehören dir (nicht dem Broker)</li>
            <li style={styles.li}><strong>Cash-Einlagen:</strong> üblicherweise durch Einlagensicherung bis zu Limits geschützt</li>
          </ul>
          <p style={styles.p}>
            Wichtig: Investitionen am Kapitalmarkt schwanken. Sicherheit heißt hier „seriöse Plattform“ –
            nicht „garantierter Gewinn“.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.h2}>5) Für wen lohnt es sich – und für wen nicht?</h2>

          <div style={styles.split}>
            <div style={styles.subCard}>
              <h3 style={styles.h3}>✅ Lohnt sich, wenn du …</h3>
              <ul style={styles.ul}>
                <li style={styles.li}>mit ETF-Sparplänen starten willst</li>
                <li style={styles.li}>eine einfache App & Übersicht willst</li>
                <li style={styles.li}>langfristig Vermögen aufbauen möchtest</li>
              </ul>
            </div>

            <div style={styles.subCard}>
              <h3 style={styles.h3}>⚠️ Eher nicht, wenn du …</h3>
              <ul style={styles.ul}>
                <li style={styles.li}>sehr aktiv/trading-lastig bist</li>
                <li style={styles.li}>sehr spezielle Märkte/Börsenplätze brauchst</li>
                <li style={styles.li}>maximale Profi-Tools erwartest</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={styles.h2}>6) Empfehlung (kurz & klar)</h2>
          <p style={styles.p}>
            Wenn du 2025 ernsthaft Vermögen aufbauen willst, ist ein einfacher ETF-Sparplan fast immer
            der beste Start. Scalable kann dafür eine sehr solide Wahl sein – besonders, wenn du
            es einfach halten willst.
          </p>

          <div style={styles.ctaBox}>
            <p style={styles.ctaText}>
              Nächster Schritt: Schau dir den Vergleich an – dann siehst du in 60 Sekunden,
              ob Scalable oder Trade Republic besser zu dir passt.
            </p>
            <Link href="/investieren/broker/vergleich" style={styles.primaryBtn}>
              Broker-Vergleich öffnen →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <section style={styles.footerNav}>
        <Link href="/investieren/broker/scalable-capital" style={styles.secondaryBtn}>
          ← Zur Scalable-Übersicht
        </Link>
        <Link href="/investieren/broker/broker" style={styles.secondaryBtn}>
          Zur Broker-Übersicht →
        </Link>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "64px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
    fontFamily:
      'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
  },
  breadcrumb: {
    maxWidth: "980px",
    margin: "0 auto 22px",
    fontSize: "0.9rem",
    opacity: 0.85,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
  },
  breadcrumbLink: {
    color: "#5eead4",
    textDecoration: "none",
  },
  breadcrumbSep: { opacity: 0.6 },
  breadcrumbCurrent: { opacity: 0.9 },

  hero: {
    maxWidth: "980px",
    margin: "0 auto 22px",
    padding: "28px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(255,255,255,0.03)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  h1: { margin: 0, fontSize: "2rem", letterSpacing: "-0.02em" },
  lead: { marginTop: "10px", marginBottom: 0, opacity: 0.9, lineHeight: 1.6 },
  heroCtas: { display: "flex", gap: "12px", marginTop: "18px", flexWrap: "wrap" },

  grid: { maxWidth: "980px", margin: "0 auto", display: "grid", gap: "16px" },

  card: {
    padding: "22px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(255,255,255,0.03)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.30)",
  },
  h2: { margin: "0 0 10px", fontSize: "1.25rem" },
  h3: { margin: "0 0 10px", fontSize: "1.05rem" },
  p: { margin: "10px 0", lineHeight: 1.7, opacity: 0.95 },
  ul: { margin: "10px 0 0", paddingLeft: "18px", lineHeight: 1.7, opacity: 0.95 },
  li: { marginBottom: "6px" },
  note: { marginTop: "12px", fontSize: "0.92rem", opacity: 0.75 },

  split: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" },
  subCard: {
    padding: "16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(2,6,23,0.25)",
  },

  ctaBox: {
    marginTop: "14px",
    padding: "16px",
    borderRadius: "14px",
    border: "1px solid rgba(94,234,212,0.22)",
    background: "rgba(94,234,212,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
  },
  ctaText: { margin: 0, opacity: 0.95, lineHeight: 1.6 },

  primaryBtn: {
    display: "inline-block",
    padding: "12px 14px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 700,
    color: "#001b18",
    background: "linear-gradient(90deg, #5eead4, #22d3ee)",
    boxShadow: "0 8px 20px rgba(34,211,238,0.18)",
    whiteSpace: "nowrap",
  },
  secondaryBtn: {
    display: "inline-block",
    padding: "12px 14px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 650,
    color: "#e5e7eb",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    whiteSpace: "nowrap",
  },

  footerNav: {
    maxWidth: "980px",
    margin: "20px auto 0",
    display: "flex",
    gap: "12px",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
};
