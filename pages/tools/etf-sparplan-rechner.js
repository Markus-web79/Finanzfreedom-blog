import { useState } from "react";
import Head from "next/head";

export default function EtfSparplanRechner() {
  const [rate, setRate] = useState(200);
  const [years, setYears] = useState(30);
  const [returnRate, setReturnRate] = useState(7);
  const [result, setResult] = useState(null);

  function calculate() {
    const monthlyRate = returnRate / 100 / 12;
    const months = years * 12;

    let total = 0;
    for (let i = 0; i < months; i++) {
      total = total * (1 + monthlyRate) + rate;
    }

    setResult(Math.round(total));
  }

  return (
    <>
      <Head>
        <title>ETF Sparplan Rechner – FinanzFreedom</title>
        <meta
          name="description"
          content="Berechne einfach, wie viel dein ETF Sparplan langfristig wert sein kann."
        />
      </Head>

      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h1>ETF Sparplan Rechner</h1>
        <p style={{ opacity: 0.85 }}>
          Berechne, wie viel Vermögen du mit einem ETF-Sparplan langfristig
          aufbauen kannst.
        </p>

        {/* Eingaben */}
        <div style={{ marginTop: "2rem" }}>
          <label>Monatliche Sparrate (€)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            style={{ width: "100%", marginBottom: "1rem" }}
          />

          <label>Laufzeit (Jahre)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            style={{ width: "100%", marginBottom: "1rem" }}
          />

          <label>Erwartete Rendite (% p.a.)</label>
          <input
            type="number"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            style={{ width: "100%", marginBottom: "1.5rem" }}
          />

          <button onClick={calculate}>Berechnen</button>
        </div>

        {/* Ergebnis */}
        {result && (
          <>
            <div
              style={{
                marginTop: "2.5rem",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid #22d3ee",
                background: "#020617",
              }}
            >
              <h2>Ergebnis</h2>
              <p>
                Nach <strong>{years} Jahren</strong> hättest du ca.
              </p>
              <p style={{ fontSize: "1.6rem", fontWeight: 700 }}>
                {result.toLocaleString("de-DE")} €
              </p>

              {/* 🔥 Conversion CTA */}
              <div style={{ marginTop: "1.5rem" }}>
                <h3>Passender ETF-Broker für deinen Sparplan</h3>
                <p style={{ opacity: 0.85 }}>
                  Für langfristige ETF-Sparpläne sind niedrige Gebühren und
                  kostenlose Sparplanausführungen entscheidend.
                </p>
                <a
                  href="/investieren/bester-broker-fuer-etf-sparplaene"
                  style={{
                    display: "inline-block",
                    marginTop: "0.75rem",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    background: "#22d3ee",
                    color: "#020617",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  ➜ Geeigneten Broker vergleichen
                </a>
              </div>
            </div>
          </>
        )}

        {/* Abschluss CTA */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            borderRadius: "16px",
            background: "#0f172a",
            border: "1px solid #1e293b",
          }}
        >
          <h3>ETF Sparplan umsetzen</h3>
          <p style={{ opacity: 0.8 }}>
            Du weißt jetzt, was dein Sparplan bringen kann. Der nächste Schritt
            ist ein günstiger und zuverlässiger Broker.
          </p>
          <a
            href="/investieren/bester-broker-fuer-etf-sparplaene"
            style={{ fontWeight: 600 }}
          >
            ➜ Broker für ETF-Sparpläne ansehen
          </a>
        </div>
      </main>
    </>
  );
}
