import Link from "next/link";

export default function EtfsIndex() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      {/* Back */}
      <Link href="/" style={{ color: "#2dd4bf" }}>
        ← Zur Startseite
      </Link>

      {/* Headline */}
      <h1 style={{ marginTop: "1.5rem" }}>ETFs & Investieren</h1>

      {/* Intro */}
      <p
        style={{
          maxWidth: "720px",
          marginTop: "1rem",
          opacity: 0.85,
        }}
      >
        ETFs sind der einfachste Weg, langfristig Vermögen aufzubauen.
        Hier lernst du die Grundlagen, vermeidest typische Fehler
        und baust dir Schritt für Schritt eine solide Investment-Strategie auf.
      </p>

      {/* Section */}
      <h2 style={{ marginTop: "3rem" }}>Grundlagen</h2>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {/* ETF Grundlagen */}
        <div className="card">
          <h3>ETF-Grundlagen</h3>
          <p>
            Was ETFs sind, wie sie funktionieren und warum sie für
            langfristigen Vermögensaufbau so beliebt sind.
          </p>
          <Link href="/etfs/grundlagen/etf-grundlagen">
            Zum Artikel →
          </Link>
        </div>

        {/* ETF Sparplan */}
        <div className="card">
          <h3>ETF-Sparplan starten</h3>
          <p>
            Schritt für Schritt erklärt: So richtest du einen ETF-Sparplan ein
            und investierst automatisiert und stressfrei.
          </p>
          <Link href="/etfs/grundlagen/etf-sparplan">
            Zum Artikel →
          </Link>
        </div>

        {/* Risiken */}
        <div className="card">
          <h3>Risiken & typische Fehler</h3>
          <p>
            Marktschwankungen, Panikverkäufe und falsche Erwartungen –
            diese Fehler solltest du unbedingt vermeiden.
          </p>
          <Link href="/etfs/grundlagen/etf-fehler">
            Zum Artikel →
          </Link>
        </div>
      </div>

      {/* Next Section */}
      <h2 style={{ marginTop: "4rem" }}>Strategie & Vertiefung</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {/* ETF Auswahl */}
        <div className="card">
          <h3>ETF-Auswahl & Kriterien</h3>
          <p>
            Welche ETFs sinnvoll sind, worauf du bei Kosten,
            Index und Replikation achten solltest.
          </p>
          <Link href="/etfs/strategie/etf-auswahl">
            Zum Artikel →
          </Link>
        </div>

        {/* Welt-ETF */}
        <div className="card">
          <h3>Welt-ETF oder mehrere ETFs?</h3>
          <p>
            Reicht ein einzelner Welt-ETF oder ist eine Aufteilung besser?
            Die Vor- und Nachteile verständlich erklärt.
          </p>
          <Link href="/etfs/strategie/welt-etf">
            Zum Artikel →
          </Link>
        </div>

        {/* Rebalancing */}
        <div className="card">
          <h3>Rebalancing & langfristige Strategie</h3>
          <p>
            Wie du dein Portfolio langfristig stabil hältst
            und warum Geduld wichtiger ist als Timing.
          </p>
          <Link href="/etfs/strategie/rebalancing">
            Zum Artikel →
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: "4rem",
          padding: "2rem",
          borderRadius: "16px",
          background: "linear-gradient(180deg, #0f172a, #020617)",
          borderTop: "3px solid #2dd4bf",
          textAlign: "center",
        }}
      >
        <h3>Bereit zu investieren?</h3>
        <p style={{ opacity: 0.85 }}>
          Vergleiche Broker, richte deinen Sparplan ein
          und starte langfristig mit System.
        </p>
        <Link href="/broker" style={{ color: "#2dd4bf", fontWeight: 500 }}>
          → Broker vergleichen
        </Link>
      </div>
    </main>
  );
}
