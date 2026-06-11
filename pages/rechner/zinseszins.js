import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function ZinseszinsRechner() {
  const [startkapital, setStartkapital] = useState(1000);
  const [monatlich, setMonatlich] = useState(100);
  const [jahre, setJahre] = useState(20);
  const [rendite, setRendite] = useState(6);

  const monate = jahre * 12;
  const monatszins = rendite / 100 / 12;

  let endkapital = startkapital;

  for (let i = 0; i < monate; i++) {
    endkapital = endkapital * (1 + monatszins) + monatlich;
  }

  const eingezahlt = startkapital + monatlich * monate;
  const gewinn = endkapital - eingezahlt;

  const formatEuro = (value) =>
    value.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    });

  return (
    <>
      <Head>
        <title>Zinseszins-Rechner | FinanzFreedom</title>
        <meta
          name="description"
          content="Berechne mit dem Zinseszins-Rechner von FinanzFreedom, wie sich dein Vermögen langfristig entwickeln kann."
        />
      </Head>

      <main style={styles.page}>
        <Link href="/rechner" style={styles.back}>
          ← Zurück zu Rechner & Tools
        </Link>

        <h1 style={styles.title}>Zinseszins-Rechner</h1>
        <p style={styles.intro}>
          Berechne, wie stark dein Geld durch regelmäßiges Sparen und
          langfristige Rendite wachsen kann.
        </p>

        <section style={styles.box}>
          <label style={styles.label}>
            Startkapital (€)
            <input
              style={styles.input}
              type="number"
              value={startkapital}
              onChange={(e) => setStartkapital(Number(e.target.value))}
            />
          </label>

          <label style={styles.label}>
            Monatliche Sparrate (€)
            <input
              style={styles.input}
              type="number"
              value={monatlich}
              onChange={(e) => setMonatlich(Number(e.target.value))}
            />
          </label>

          <label style={styles.label}>
            Laufzeit (Jahre)
            <input
              style={styles.input}
              type="number"
              value={jahre}
              onChange={(e) => setJahre(Number(e.target.value))}
            />
          </label>

          <label style={styles.label}>
            Erwartete Rendite pro Jahr (%)
            <input
              style={styles.input}
              type="number"
              value={rendite}
              onChange={(e) => setRendite(Number(e.target.value))}
            />
          </label>
        </section>

        <section style={styles.result}>
          <p style={styles.resultLabel}>Voraussichtliches Endkapital</p>
          <h2 style={styles.resultValue}>{formatEuro(endkapital)}</h2>

          <div style={styles.resultGrid}>
            <div>
              <p style={styles.smallLabel}>Eingezahlt</p>
              <strong>{formatEuro(eingezahlt)}</strong>
            </div>
            <div>
              <p style={styles.smallLabel}>Zins-/Renditeeffekt</p>
              <strong>{formatEuro(gewinn)}</strong>
            </div>
          </div>
        </section>

        <section style={styles.note}>
          <h2>Warum ist Zinseszins so mächtig?</h2>
          <p>
            Beim Zinseszins wächst nicht nur dein eingezahltes Geld, sondern
            auch die bereits erzielte Rendite arbeitet weiter für dich. Je länger
            dein Anlagezeitraum ist, desto stärker kann dieser Effekt werden.
          </p>
          <p>
            Die Berechnung ist eine vereinfachte Simulation und keine Garantie
            für zukünftige Erträge.
          </p>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px",
    color: "#e5e7eb",
  },
  back: {
    color: "#2dd4bf",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "28px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "16px",
  },
  intro: {
    color: "#9ca3af",
    marginBottom: "36px",
    lineHeight: 1.7,
  },
  box: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "28px",
    display: "grid",
    gap: "20px",
    marginBottom: "28px",
  },
  label: {
    display: "grid",
    gap: "8px",
    color: "#cbd5e1",
    fontWeight: 600,
  },
  input: {
    background: "#0f172a",
    border: "1px solid #334155",
    borderRadius: "12px",
    padding: "14px 16px",
    color: "#e5e7eb",
    fontSize: "1rem",
  },
  result: {
    background: "#022c22",
    border: "1px solid #14b8a6",
    borderRadius: "18px",
    padding: "28px",
    marginBottom: "36px",
  },
  resultLabel: {
    color: "#99f6e4",
    marginBottom: "8px",
  },
  resultValue: {
    fontSize: "2.3rem",
    marginBottom: "24px",
  },
  resultGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },
  smallLabel: {
    color: "#99f6e4",
    marginBottom: "6px",
  },
  note: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "28px",
    lineHeight: 1.7,
  },
};
