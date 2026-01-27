import React, { useMemo, useState } from "react";
import Link from "next/link";

const BROKERS = {
  trade_republic: {
    key: "trade_republic",
    name: "Trade Republic",
    orderFee: 1,
    savingsPlanFee: 0,
    description:
      "Sehr einfache App, ideal für Einsteiger. ETF-Sparpläne kostenlos.",
  },
  scalable_free: {
    key: "scalable_free",
    name: "Scalable Capital Free",
    orderFee: 0.99,
    savingsPlanFee: 0,
    description:
      "Große ETF-Auswahl, günstige Orders, gut für langfristige Anleger.",
  },
  scalable_prime: {
    key: "scalable_prime",
    name: "Scalable Capital Prime",
    orderFee: 0,
    savingsPlanFee: 0,
    description:
      "Flatrate-Modell für aktive Anleger mit größerem Depot.",
  },
};

export default function Kostenrechner() {
  const [monthlyContribution, setMonthlyContribution] = useState(200);
  const [years, setYears] = useState(20);

  const results = useMemo(() => {
    const months = years * 12;

    return Object.values(BROKERS).map((broker) => {
      const savingsPlanCosts =
        months * broker.savingsPlanFee;

      const orderCosts =
        months * broker.orderFee;

      const totalCosts = savingsPlanCosts + orderCosts;

      return {
        ...broker,
        totalCosts,
      };
    });
  }, [monthlyContribution, years]);

  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/broker" style={styles.back}>
          ← Zur Broker-Übersicht
        </Link>

        <h1 style={styles.title}>Broker-Kosten-Rechner</h1>
        <p style={styles.subtitle}>
          Vergleiche transparent, welcher Broker dich langfristig am wenigsten kostet.
        </p>
      </section>

      <section style={styles.controls}>
        <div style={styles.inputGroup}>
          <label>Monatliche Sparrate (€)</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Anlagedauer (Jahre)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </div>
      </section>

      <section style={styles.grid}>
        {results.map((broker) => (
          <div key={broker.key} style={styles.card}>
            <div style={styles.cardBar} />
            <h3>{broker.name}</h3>
            <p style={styles.desc}>{broker.description}</p>
            <p style={styles.cost}>
              Gesamtkosten:{" "}
              <strong>{broker.totalCosts.toFixed(2)} €</strong>
            </p>
          </div>
        ))}
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
  header: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    textAlign: "center",
  },
  back: {
    display: "inline-block",
    marginBottom: "16px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 600,
  },
  title: {
    fontSize: "2.3rem",
    marginBottom: "10px",
    color: "#ffffff",
  },
  subtitle: {
    color: "#9ca3af",
  },
  controls: {
    maxWidth: "700px",
    margin: "0 auto 40px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    position: "relative",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",
  },
  cardBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "#2dd4bf",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  },
  desc: {
    fontSize: "0.95rem",
    color: "#cbd5f5",
    marginBottom: "12px",
  },
  cost: {
    fontSize: "1.05rem",
  },
};
