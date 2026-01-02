import { useMemo, useState } from "react";
import Link from "next/link";

function formatEUR(value) {
  try {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `${Math.round(value)} €`;
  }
}

function clampNumber(n, min, max) {
  const x = Number.isFinite(n) ? n : min;
  return Math.min(max, Math.max(min, x));
}

export default function EtfSparplanRechner() {
  const [startkapital, setStartkapital] = useState(1000);
  const [monatlich, setMonatlich] = useState(200);
  const [jahre, setJahre] = useState(20);
  const [rendite, setRendite] = useState(7); // % p.a.
  const [ter, setTer] = useState(0.2); // % p.a.

  const result = useMemo(() => {
    const S = clampNumber(Number(startkapital), 0, 10_000_000);
    const M = clampNumber(Number(monatlich), 0, 1_000_000);
    const Y = clampNumber(Number(jahre), 1, 60);
    const r = clampNumber(Number(rendite), 0, 30) / 100;
    const t = clampNumber(Number(ter), 0, 2) / 100;

    // Nettorendite nach TER (vereinfachtes Modell)
    const netAnnual = Math.max(0, r - t);
    const monthlyRate = Math.pow(1 + netAnnual, 1 / 12) - 1;

    let depot = S;
    let eingezahlt = S;
    const yearly = [];

    for (let month = 1; month <= Y * 12; month++) {
      depot = depot * (1 + monthlyRate) + M;
      eingezahlt += M;

      if (month % 12 === 0) {
        const yearIndex = month / 12;
        yearly.push({
          jahr: yearIndex,
          depot,
          eingezahlt,
          gewinn: depot - eingezahlt,
        });
      }
    }

    const endwert = depot;
    const gewinn = endwert - eingezahlt;

    return {
      endwert,
      eingezahlt,
      gewinn,
      yearly,
      netAnnual,
    };
  }, [startkapital, monatlich, jahre, rendite, ter]);

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <div style={styles.breadcrumb}>
          <Link href="/">Start</Link> {"› "}
          <Link href="/investieren">Investieren</Link> {"› "}
          <span>ETF-Sparplan-Rechner</span>
        </div>

        <header style={styles.hero}>
          <h1 style={styles.h1}>ETF-Sparplan-Rechner</h1>
          <p style={styles.sub}>
            Berechne schnell, wie sich dein Sparplan langfristig entwickeln kann
            (vereinfacht, ohne Garantie).
          </p>
        </header>

        <section style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.h2}>Eingaben</h2>

            <div style={styles.field}>
              <label style={styles.label}>Startkapital (einmalig)</label>
              <input
                style={styles.input}
                type="number"
                min="0"
                step="100"
                value={startkapital}
                onChange={(e) => setStartkapital(e.target.value)}
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Monatliche Sparrate</label>
              <input
                style={styles.input}
                type="number"
                min="0"
                step="10"
                value={monatlich}
                onChange={(e) => setMonatlich(e.target.value)}
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Laufzeit (Jahre)</label>
              <input
                style={styles.input}
                type="number"
                min="1"
                max="60"
                step="1"
                value={jahre}
                onChange={(e) => setJahre(e.target.value)}
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Erwartete Rendite p.a. (%)</label>
              <input
                style={styles.input}
                type="number"
                min="0"
                max="30"
                step="0.1"
                value={rendite}
                onChange={(e) => setRendite(e.target.value)}
              />
              <p style={styles.hint}>
                Hinweis: Rendite ist nie sicher. Das ist nur eine Simulation.
              </p>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>TER / Kosten p.a. (%)</label>
              <input
                style={styles.input}
                type="number"
                min="0"
                max="2"
                step="0.01"
                value={ter}
                onChange={(e) => setTer(e.target.value)}
              />
              <p style={styles.hint}>
                Wir ziehen die TER vereinfacht von der Rendite ab.
              </p>
            </div>

            <div style={styles.smallInfo}>
              Effektive Nettorendite:{" "}
              <strong>{(result.netAnnual * 100).toFixed(2)}%</strong> p.a.
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.h2}>Ergebnis</h2>

            <div style={styles.kpis}>
              <div style={styles.kpi}>
                <div style={styles.kpiLabel}>Endwert</div>
                <div style={styles.kpiValue}>{formatEUR(result.endwert)}</div>
              </div>
              <div style={styles.kpi}>
                <div style={styles.kpiLabel}>Eingezahlt</div>
                <div style={styles.kpiValue}>{formatEUR(result.eingezahlt)}</div>
              </div>
              <div style={styles.kpi}>
                <div style={styles.kpiLabel}>Gewinn (vereinfachte Differenz)</div>
                <div style={styles.kpiValue}>{formatEUR(result.gewinn)}</div>
              </div>
            </div>

            <h3 style={styles.h3}>Jahresübersicht</h3>
            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Jahr</th>
                    <th style={styles.th}>Depot</th>
                    <th style={styles.th}>Eingezahlt</th>
                    <th style={styles.th}>Gewinn</th>
                  </tr>
                </thead>
                <tbody>
                  {result.yearly.map((row) => (
                    <tr key={row.jahr}>
                      <td style={styles.td}>{row.jahr}</td>
                      <td style={styles.td}>{formatEUR(row.depot)}</td>
                      <td style={styles.td}>{formatEUR(row.eingezahlt)}</td>
                      <td style={styles.td}>{formatEUR(row.gewinn)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={styles.noteBox}>
              <strong>Disclaimer:</strong> Das ist ein vereinfachtes Modell zur
              Orientierung. Steuern, Spreads, Orderkosten, echte TER-Berechnung,
              Ausschüttungen etc. sind nicht enthalten.
            </div>

            <div style={styles.backRow}>
              <Link href="/investieren">← Zurück zu Investieren</Link>
            </div>
          </div>
        </section>
      </div>
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
  container: { maxWidth: 1100, margin: "0 auto" },
  breadcrumb: { fontSize: 13, opacity: 0.75, marginBottom: 18 },
  hero: { marginBottom: 24 },
  h1: { fontSize: 44, margin: "0 0 10px 0" },
  sub: { margin: 0, opacity: 0.8, lineHeight: 1.6 },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
  },
  card: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 18,
    background: "rgba(255,255,255,0.04)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  h2: { fontSize: 18, margin: "0 0 12px 0" },
  h3: { fontSize: 16, margin: "18px 0 10px 0", opacity: 0.9 },

  field: { marginBottom: 12 },
  label: { display: "block", marginBottom: 6, opacity: 0.85 },
  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(2,6,23,0.6)",
    color: "#e5e7eb",
    outline: "none",
  },
  hint: { margin: "6px 0 0 0", fontSize: 12, opacity: 0.7, lineHeight: 1.5 },
  smallInfo: {
    marginTop: 10,
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(2,6,23,0.35)",
  },

  kpis: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 10,
    marginBottom: 12,
  },
  kpi: {
    padding: "12px 14px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(2,6,23,0.35)",
  },
  kpiLabel: { fontSize: 12, opacity: 0.75, marginBottom: 4 },
  kpiValue: { fontSize: 22, fontWeight: 700 },

  tableWrap: {
    overflowX: "auto",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.08)",
  },
  table: { width: "100%", borderCollapse: "collapse" },
  th: {
    textAlign: "left",
    fontSize: 12,
    opacity: 0.8,
    padding: "10px 12px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    whiteSpace: "nowrap",
  },
  td: {
    padding: "10px 12px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    whiteSpace: "nowrap",
  },

  noteBox: {
    marginTop: 14,
    padding: "12px 14px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(2,6,23,0.35)",
    fontSize: 13,
    lineHeight: 1.6,
    opacity: 0.9,
  },
  backRow: { marginTop: 14, opacity: 0.85 },

  // Mobile
  "@media (max-width: 900px)": {
    grid: { gridTemplateColumns: "1fr" },
  },
};
