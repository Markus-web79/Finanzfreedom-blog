import React, { useMemo, useState } from "react";
import Link from "next/link";

type BrokerKey = "trade_republic" | "scalable_free" | "scalable_prime";

type Inputs = {
  monthlyContribution: number; // €
  years: number; // 1..30
  extraBuysPerYear: number; // number of additional buys per year
  extraBuyAmount: number; // € amount per extra buy
  sellOnceAtEnd: boolean; // optional: one sell at the end
};

type BrokerConfig = {
  key: BrokerKey;
  name: string;
  note: string;
  /** per-execution fee for extra buys (non-savings-plan) */
  extraBuyFee: (inp: Inputs) => number;
  /** savings plan execution fee per month */
  savingsPlanFeePerMonth: (inp: Inputs) => number;
  /** optional: monthly subscription */
  subscriptionPerMonth: (inp: Inputs) => number;
  /** sell fee once at end (if enabled) */
  sellFeeOnce: (inp: Inputs) => number;
};

type ResultRow = {
  key: BrokerKey;
  name: string;
  totalCost: number;
  breakdown: {
    subscription: number;
    savingsPlan: number;
    extraBuys: number;
    sell: number;
  };
  note: string;
};

const eur = (v: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    Math.round(v * 100) / 100
  );

/**
 * DISCLAIMER:
 * These fee models are simplified. Replace with your verified fee table.
 * The structure is the important part (money page, table, conversion hooks).
 */
const BROKERS: BrokerConfig[] = [
  {
    key: "trade_republic",
    name: "Trade Republic",
    note: "Sehr einfach für Einsteiger. Gut, wenn du wenig manuell handelst.",
    extraBuyFee: () => 1, // example: 1€ pro Order
    savingsPlanFeePerMonth: () => 0, // example: 0€ Sparplan-Ausführung
    subscriptionPerMonth: () => 0,
    sellFeeOnce: () => 1, // example: 1€ Verkauf (vereinfachtes Modell)
  },
  {
    key: "scalable_free",
    name: "Scalable Capital (Free)",
    note: "Gut bei größerer Auswahl. Einzelorders i.d.R. teurer als TR.",
    extraBuyFee: () => 0.99, // example value (placeholder)
    savingsPlanFeePerMonth: () => 0, // often free for many ETFs; placeholder
    subscriptionPerMonth: () => 0,
    sellFeeOnce: () => 0.99,
  },
  {
    key: "scalable_prime",
    name: "Scalable Capital (Prime)",
    note: "Für Viel-Trader/mehr Orders: Abo kann sich rechnen.",
    extraBuyFee: () => 0, // orders included (placeholder)
    savingsPlanFeePerMonth: () => 0,
    subscriptionPerMonth: () => 4.99, // example: monthly subscription
    sellFeeOnce: () => 0,
  },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function BrokerKostenrechner() {
  const [inputs, setInputs] = useState<Inputs>({
    monthlyContribution: 300,
    years: 5,
    extraBuysPerYear: 6,
    extraBuyAmount: 200,
    sellOnceAtEnd: false,
  });

  const months = inputs.years * 12;

  const results: ResultRow[] = useMemo(() => {
    return BROKERS.map((b) => {
      const subscription = b.subscriptionPerMonth(inputs) * months;

      const savingsPlan = b.savingsPlanFeePerMonth(inputs) * months;

      const extraBuys =
        inputs.extraBuysPerYear *
        inputs.years *
        b.extraBuyFee(inputs);

      const sell = inputs.sellOnceAtEnd ? b.sellFeeOnce(inputs) : 0;

      const totalCost = subscription + savingsPlan + extraBuys + sell;

      return {
        key: b.key,
        name: b.name,
        totalCost,
        breakdown: { subscription, savingsPlan, extraBuys, sell },
        note: b.note,
      };
    }).sort((a, b) => a.totalCost - b.totalCost);
  }, [inputs, months]);

  const winner = results[0];

  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/broker" style={styles.back}>
          ← Zur Broker-Übersicht
        </Link>

        <h1 style={styles.title}>Broker-Kosten-Rechner</h1>

        <p style={styles.subtitle}>
          Vergleiche grob, welcher Broker bei deinem Spar- und Kaufverhalten die
          niedrigsten Gebühren verursacht. (Vereinfachtes Modell – Werte bitte
          später mit echten Gebühren verifizieren.)
        </p>
      </section>

      <section style={styles.layout}>
        {/* Inputs */}
        <div style={styles.card}>
          <h2 style={styles.h2}>Deine Eingaben</h2>

          <Field
            label="Monatliche Sparrate (€)"
            value={inputs.monthlyContribution}
            onChange={(v) =>
              setInputs((s) => ({ ...s, monthlyContribution: clamp(v, 0, 10000) }))
            }
            help="Dein ETF-Sparplan pro Monat."
          />

          <Field
            label="Anlagezeitraum (Jahre)"
            value={inputs.years}
            onChange={(v) => setInputs((s) => ({ ...s, years: clamp(v, 1, 30) }))}
            help="Für die Kostenrechnung."
          />

          <Field
            label="Zusätzliche Käufe pro Jahr (z. B. Einzelorders)"
            value={inputs.extraBuysPerYear}
            onChange={(v) =>
              setInputs((s) => ({ ...s, extraBuysPerYear: clamp(v, 0, 365) }))
            }
            help="Wie oft kaufst du außerhalb des Sparplans?"
          />

          <Field
            label="Betrag pro zusätzlichem Kauf (€)"
            value={inputs.extraBuyAmount}
            onChange={(v) =>
              setInputs((s) => ({ ...s, extraBuyAmount: clamp(v, 0, 50000) }))
            }
            help="Wird hier noch nicht in Gebühren umgerechnet – später möglich."
          />

          <label style={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={inputs.sellOnceAtEnd}
              onChange={(e) =>
                setInputs((s) => ({ ...s, sellOnceAtEnd: e.target.checked }))
              }
            />
            <span style={{ marginLeft: 10 }}>
              Einmaliger Verkauf am Ende berücksichtigen
            </span>
          </label>

          <div style={styles.tip}>
            <strong>Pro-Tipp:</strong> Für die ersten 5k-Monate reicht dieser
            Rechner „gut genug“. Wir ersetzen die Gebühren später durch echte,
            gepflegte Parameter + Tabelle.
          </div>
        </div>

        {/* Results */}
        <div style={styles.card}>
          <h2 style={styles.h2}>Ergebnis</h2>

          <div style={styles.winnerBox}>
            <div style={{ fontWeight: 800, marginBottom: 6 }}>
              Günstigster Broker (nach Kosten):
            </div>
            <div style={{ fontSize: "1.1rem" }}>{winner?.name}</div>
            <div style={{ color: "#9ca3af", marginTop: 6 }}>
              Gesamtkosten ({inputs.years} Jahre):{" "}
              <strong style={{ color: "#e5e7eb" }}>{eur(winner?.totalCost ?? 0)}</strong>
            </div>

            <div style={{ marginTop: 10, color: "#9ca3af" }}>
              {winner?.note}
            </div>

            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/broker/trade-republic" style={styles.ctaBtn}>
                Trade Republic ansehen →
              </Link>
              <Link href="/broker/scalable-capital" style={styles.ctaBtnGhost}>
                Scalable ansehen →
              </Link>
              <Link href="/broker/vergleich" style={styles.ctaBtnGhost}>
                Direktvergleich →
              </Link>
            </div>
          </div>

          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Broker</th>
                  <th style={styles.thRight}>Gesamtkosten</th>
                  <th style={styles.thRight}>Abo</th>
                  <th style={styles.thRight}>Sparplan</th>
                  <th style={styles.thRight}>Extra-Käufe</th>
                  <th style={styles.thRight}>Verkauf</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, idx) => (
                  <tr key={r.key} style={idx === 0 ? styles.trWinner : styles.tr}>
                    <td style={styles.td}>
                      <div style={{ fontWeight: 700 }}>{r.name}</div>
                      <div style={styles.note}>{r.note}</div>
                    </td>
                    <td style={styles.tdRight}>{eur(r.totalCost)}</td>
                    <td style={styles.tdRight}>{eur(r.breakdown.subscription)}</td>
                    <td style={styles.tdRight}>{eur(r.breakdown.savingsPlan)}</td>
                    <td style={styles.tdRight}>{eur(r.breakdown.extraBuys)}</td>
                    <td style={styles.tdRight}>{eur(r.breakdown.sell)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={styles.disclaimer}>
            <strong>Hinweis:</strong> Gebührenmodelle unterscheiden sich je nach
            Handelsplatz, Produkt, Aktion, etc. Diese Seite ist als Entscheidungshilfe
            gedacht. Wir pflegen als nächstes echte Gebührenwerte + Quellen.
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  help,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  help?: string;
}) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={styles.labelRow}>
        <label style={styles.label}>{label}</label>
      </div>
      <input
        type="number"
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Number(e.target.value))}
        style={styles.input}
      />
      {help ? <div style={styles.help}>{help}</div> : null}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  header: {
    maxWidth: 980,
    margin: "0 auto 26px",
    textAlign: "center",
  },
  back: {
    display: "inline-block",
    marginBottom: 14,
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 700,
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: 10,
    color: "#fff",
  },
  subtitle: {
    maxWidth: 860,
    margin: "0 auto",
    fontSize: "1.05rem",
    color: "#9ca3af",
    lineHeight: 1.6,
  },
  layout: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: 20,
  },
  card: {
    background: "rgba(2, 6, 23, 0.55)",
    border: "1px solid #1e293b",
    borderRadius: 18,
    padding: 18,
  },
  h2: {
    fontSize: "1.25rem",
    marginBottom: 14,
    color: "#fff",
  },
  labelRow: { display: "flex", alignItems: "center", justifyContent: "space-between" },
  label: { fontWeight: 700, marginBottom: 6, display: "block" },
  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid #334155",
    background: "#020617",
    color: "#e5e7eb",
    outline: "none",
  },
  help: { fontSize: 12, color: "#9ca3af", marginTop: 6, lineHeight: 1.4 },
  checkboxRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
    marginBottom: 14,
    color: "#e5e7eb",
  },
  tip: {
    marginTop: 10,
    padding: 12,
    borderRadius: 14,
    border: "1px solid #1e293b",
    background: "rgba(45, 212, 191, 0.08)",
    color: "#d1fae5",
    lineHeight: 1.5,
  },
  winnerBox: {
    padding: 14,
    borderRadius: 16,
    border: "1px solid #1e293b",
    background: "rgba(2, 6, 23, 0.35)",
    marginBottom: 14,
  },
  ctaBtn: {
    display: "inline-block",
    padding: "10px 12px",
    borderRadius: 12,
    background: "#2dd4bf",
    color: "#001018",
    textDecoration: "none",
    fontWeight: 800,
  },
  ctaBtnGhost: {
    display: "inline-block",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid #2dd4bf",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 800,
    background: "transparent",
  },
  tableWrap: {
    overflowX: "auto",
    border: "1px solid #1e293b",
    borderRadius: 16,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: 780,
    background: "#020617",
  },
  th: {
    textAlign: "left",
    padding: 12,
    borderBottom: "1px solid #1e293b",
    color: "#cbd5e1",
    fontWeight: 800,
    fontSize: 13,
  },
  thRight: {
    textAlign: "right",
    padding: 12,
    borderBottom: "1px solid #1e293b",
    color: "#cbd5e1",
    fontWeight: 800,
    fontSize: 13,
  },
  tr: {},
  trWinner: { background: "rgba(45, 212, 191, 0.06)" },
  td: { padding: 12, borderBottom: "1px solid #0b1220", verticalAlign: "top" },
  tdRight: {
    padding: 12,
    borderBottom: "1px solid #0b1220",
    textAlign: "right",
    whiteSpace: "nowrap",
    verticalAlign: "top",
  },
  note: { fontSize: 12, color: "#9ca3af", marginTop: 6, lineHeight: 1.35 },
  disclaimer: { marginTop: 12, color: "#9ca3af", lineHeight: 1.5, fontSize: 13 },
};
