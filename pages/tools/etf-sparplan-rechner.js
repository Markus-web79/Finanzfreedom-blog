import Head from "next/head";
import { useState } from "react";

export default function EtfSparplanRechner() {
  const [rate, setRate] = useState(200);
  const [jahre, setJahre] = useState(20);
  const [rendite, setRendite] = useState(6);

  const monate = jahre * 12;
  const monatlicheRendite = rendite / 100 / 12;

  const endvermoegen =
    monatlicheRendite === 0
      ? rate * monate
      : rate *
        ((Math.pow(1 + monatlicheRendite, monate) - 1) /
          monatlicheRendite);

  return (
    <>
      <Head>
        <title>ETF Sparplan Rechner – Rendite & Vermögen berechnen</title>
        <meta
          name="description"
          content="Kostenloser ETF Sparplan Rechner: Berechne Rendite, Laufzeit, Sparrate und dein mögliches Endvermögen einfach online."
        />
      </Head>

      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 20px" }}>
        <h1>ETF Sparplan Rechner</h1>
        <p>
          Berechne in wenigen Sekunden, wie viel Vermögen du mit einem ETF-Sparplan
          aufbauen kannst.
        </p>

        <div style={{ marginTop: "32px" }}>
          <label>Monatliche Sparrate (€)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
          />

          <label>Laufzeit (Jahre)</label>
          <input
            type="number"
            value={jahre}
            onChange={(e) => setJahre(Number(e.target.value))}
            style={{ width: "100%", padding: "10px", marginBottom: "16px" }}
          />

          <label>Ø Rendite pro Jahr (%)</label>
          <input
            type="number"
            value={rendite}
            onChange={(e) => setRendite(Number(e.target.value))}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <div
          style={{
            marginTop: "32px",
            padding: "20px",
            border: "1px solid #2dd4bf",
            borderRadius: "12px",
          }}
        >
          <h2>Ergebnis</h2>
          <p>
            <strong>Endvermögen:</strong>{" "}
            {endvermoegen.toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
            })}
          </p>
        </div>

        <div
          style={{
            marginTop: "48px",
            padding: "24px",
            border: "1px solid #0ea5e9",
            borderRadius: "12px",
          }}
        >
          <h3>Jetzt passenden ETF-Broker finden</h3>
          <p>
            Vergleiche die besten Broker für ETF-Sparpläne mit niedrigen Gebühren
            & kostenlosen Sparplänen.
          </p>
          <a
            href="/investieren/bester-broker-fuer-etf-sparplaene"
            style={{ color: "#0ea5e9", fontWeight: "bold" }}
          >
            → Broker vergleichen
          </a>
        </div>
      </main>
    </>
  );
}
