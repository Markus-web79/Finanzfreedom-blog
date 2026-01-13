import Head from "next/head";
import Link from "next/link";

export default function MSCIWorld() {
  return (
    <>
      <Head>
        <title>MSCI World ETF – Einfach erklärt | FinanzFreedom</title>
        <meta
          name="description"
          content="MSCI World ETF einfach erklärt: Aufbau, Chancen, Risiken und ob sich ein Investment lohnt."
        />
      </Head>

      <main style={styles.page}>
        {/* Back Navigation */}
        <div style={styles.backNav}>
          <Link href="/etf">← Zur ETF-Übersicht</Link>
        </div>

        {/* Header */}
        <section style={styles.header}>
          <h1>MSCI World ETF</h1>
          <p>
            Der MSCI World ist einer der bekanntesten Aktienindizes weltweit.
            Hier erfährst du verständlich, wie er funktioniert und ob er für
            dich geeignet ist.
          </p>
        </section>

        {/* Content */}
        <section style={styles.content}>
          <h2>Was ist der MSCI World?</h2>
          <p>
            Der MSCI World Index bildet die Wertentwicklung von über 1.500
            großen und mittelgroßen Unternehmen aus 23 Industrieländern ab.
            Dazu gehören Unternehmen wie Apple, Microsoft, Nestlé oder Johnson
            & Johnson.
          </p>

          <h2>Wie ist der Index aufgebaut?</h2>
          <p>
            Der Index ist nach Marktkapitalisierung gewichtet. Das bedeutet:
            Große Unternehmen haben einen stärkeren Einfluss als kleinere.
            Aktuell stammt ein großer Teil der Unternehmen aus den USA.
          </p>

          <h2>Vorteile eines MSCI World ETFs</h2>
          <ul>
            <li>✔ Sehr breite Diversifikation</li>
            <li>✔ Geringe Kosten im Vergleich zu Fonds</li>
            <li>✔ Ideal für langfristigen Vermögensaufbau</li>
            <li>✔ Einfach per Sparplan besparbar</li>
          </ul>

          <h2>Risiken & Nachteile</h2>
          <ul>
            <li>✖ Hoher USA-Anteil</li>
            <li>✖ Keine Schwellenländer enthalten</li>
            <li>✖ Kursschwankungen bei Krisen</li>
          </ul>

          <h2>Für wen ist der MSCI World geeignet?</h2>
          <p>
            Der MSCI World eignet sich besonders für Einsteiger, die langfristig
            Vermögen aufbauen möchten und keine Lust auf komplizierte
            Einzelaktien-Auswahl haben.
          </p>

          <div style={styles.ctaBox}>
            <h3>👉 Nächster Schritt</h3>
            <p>
              Vergleiche jetzt Broker und finde heraus, wo du den MSCI World ETF
              am günstigsten besparen kannst.
            </p>
            <Link href="/brokervergleich" style={styles.ctaButton}>
              Zum Brokervergleich
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 20px",
    background: "#020617",
    color: "#e5e7eb",
  },
  backNav: {
    maxWidth: "900px",
    margin: "0 auto 20px",
    fontSize: "0.9rem",
  },
  header: {
    maxWidth: "900px",
    margin: "0 auto 40px",
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
rel: {
  background: "#020617",
  border: "1px solid #1e293b",
  borderRadius: "12px",
  padding: "24px",
  marginTop: "40px",
},
  ctaButton: {
    display: "inline-block",
    marginTop: "12px",
    padding: "10px 16px",
    background: "#14b8a6",
    color: "#020617",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
  },
};
