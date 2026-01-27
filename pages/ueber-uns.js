import Link from "next/link";

export default function UeberUns() {
  return (
    <main style={styles.page}>
      {/* Zurück */}
      <Link href="/" style={styles.back}>
        ← Zur Startseite
      </Link>

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Über FinanzFreedom</h1>
        <p style={styles.subtitle}>
          Ehrliche Finanzbildung für Menschen, die ihr Geld selbst verstehen
          und verantwortungsvoll aufbauen wollen.
        </p>
      </header>

      {/* Inhalt */}
      <section style={styles.content}>
        <h2>Warum es FinanzFreedom gibt</h2>
        <p>
          FinanzFreedom ist entstanden, weil viele Menschen mit Finanzen
          überfordert sind – nicht, weil sie unfähig sind, sondern weil
          Finanzthemen oft unnötig kompliziert, verkaufsorientiert oder
          intransparent erklärt werden.
        </p>
        <p>
          Unser Ziel ist es, Finanzwissen so aufzubereiten, dass du fundierte
          Entscheidungen treffen kannst – ohne Druck, ohne Angst und ohne
          versteckte Interessen.
        </p>

        <h2>Wer hinter FinanzFreedom steht</h2>
        <p>
          Hinter FinanzFreedom steht kein Konzern, kein Vertrieb und kein
          Callcenter. Sondern eine private Initiative mit dem klaren Anspruch,
          Finanzen verständlich, ehrlich und realistisch zu erklären.
        </p>
        <p>
          Wir wissen aus eigener Erfahrung, wie schwierig der Einstieg in ETFs,
          Sparpläne, Versicherungen und Broker sein kann – gerade dann, wenn man
          kein Vorwissen hat.
        </p>

        <h2>Was uns von anderen Seiten unterscheidet</h2>
        <ul>
          <li>Keine Verkaufsberater, keine Telefonakquise</li>
          <li>Klare Trennung zwischen Information und Werbung</li>
          <li>Transparenter Umgang mit Affiliate-Links</li>
          <li>Fokus auf langfristige, nachvollziehbare Strategien</li>
        </ul>

        <h2>Wie wir Geld verdienen</h2>
        <p>
          FinanzFreedom enthält sogenannte Affiliate-Links. Wenn du über einen
          solchen Link ein Produkt oder eine Dienstleistung nutzt, erhalten wir
          möglicherweise eine Provision.
        </p>
        <p>
          Für dich entstehen dadurch **keine zusätzlichen Kosten**. Unsere
          Inhalte bleiben unabhängig von einzelnen Anbietern – Empfehlungen
          basieren auf sachlichen Kriterien, nicht auf Provisionshöhe.
        </p>

        <h2>Unser Anspruch</h2>
        <p>
          FinanzFreedom soll wachsen – aber nicht um jeden Preis. Vertrauen,
          Transparenz und Verständlichkeit stehen für uns über kurzfristigen
          Einnahmen.
        </p>
        <p>
          Wenn du Fragen, Anmerkungen oder Kritik hast, freuen wir uns über
          ehrliches Feedback.
        </p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  back: {
    display: "inline-block",
    marginBottom: "20px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 600,
  },
  header: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
    lineHeight: 1.6,
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
};
