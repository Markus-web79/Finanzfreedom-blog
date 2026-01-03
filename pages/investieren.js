import Head from "next/head";

export default function Investieren() {
  return (
    <>
      <Head>
        <title>Investieren – FinanzFreedom</title>
        <meta
          name="description"
          content="Lerne investieren mit ETFs, Sparplänen und einfachen Strategien für langfristigen Vermögensaufbau."
        />
      </Head>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        <h1>Investieren leicht erklärt</h1>
        <p>
          Investieren ist der wichtigste Schritt auf dem Weg zur finanziellen
          Freiheit. Hier findest du verständliche Guides, Vergleiche und Tools.
        </p>

        {/* Rechner CTA */}
        <div
          style={{
            marginTop: "48px",
            padding: "32px",
            border: "1px solid #2dd4bf",
            borderRadius: "14px",
            background: "rgba(45,212,191,0.06)",
          }}
        >
          <h2>ETF-Sparplan berechnen</h2>
          <p>
            Berechne in wenigen Sekunden, wie viel Vermögen du mit einem
            ETF-Sparplan langfristig aufbauen kannst.
          </p>

          <a
            href="/tools/etf-sparplan-rechner"
            style={{
              display: "inline-block",
              marginTop: "16px",
              padding: "14px 24px",
              background: "#2dd4bf",
              color: "#0f172a",
              borderRadius: "10px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Zum ETF-Sparplan-Rechner →
          </a>
        </div>
      </main>
    </>
  );
}
