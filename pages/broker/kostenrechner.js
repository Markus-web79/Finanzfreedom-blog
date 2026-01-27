import { useState, useMemo } from "react";
import Link from "next/link";

export default function Kostenrechner() {
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [years, setYears] = useState(10);

  const brokers = useMemo(() => {
    const months = years * 12;

    return [
      {
        key: "trade_republic",
        name: "Trade Republic",
        desc: "Sehr einfache App, ideal für Einsteiger. ETF-Sparpläne kostenlos.",
        cost: 0,
        highlight: true,
      },
      {
        key: "scalable_free",
        name: "Scalable Capital Free",
        desc: "Große ETF-Auswahl, günstige Orders, gut für langfristige Anleger.",
        cost: 0,
      },
      {
        key: "scalable_prime",
        name: "Scalable Capital Prime",
        desc: "Flatrate-Modell für aktive Anleger mit größerem Depot.",
        cost: 0,
      },
    ];
  }, [monthlyContribution, years]);

  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>
          Welcher Broker kostet dich langfristig am wenigsten?
        </h1>

        <p style={styles.subtitle}>
          Vergleiche transparent, welcher Broker sich für deinen ETF-Sparplan
          wirklich lohnt.
        </p>
      </section>

      {/* Inputs */}
      <section style={styles.inputs}>
        <div style={styles.inputBox}>
          <label style={styles.label}>Monatliche Sparrate (€)</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => {
              const value = e.target.value.replace(/^0+(?!$)/, "");
              setMonthlyContribution(value === "" ? 0 : Number(value));
            }}
            style={styles.input}
          />
        </div>

        <div style={styles.inputBox}>
          <label style={styles.label}>Anlagedauer (Jahre)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => {
              const value = e.target.value.replace(/^0+(?!$)/, "");
              setYears(value === "" ? 0 : Number(value));
            }}
            style={styles.input}
          />
        </div>
      </section>

      {/* Karten */}
      <section style={styles.grid}>
        {brokers.map((broker) => (
          <div
            key={broker.key}
            style={{
              ...styles.card,
              ...(broker.highlight ? styles.cardHighlight : {}),
            }}
          >
            {broker.highlight && (
              <div style={styles.badge}>Beste Wahl</div>
            )}

            <h3 style={styles.cardTitle}>{broker.name}</h3>
            <p style={styles.cardText}>{broker.desc}</p>

            <p style={styles.cost}>
              Gesamtkosten: <strong>{broker.cost.toFixed(2)} €</strong>
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
    fontSize: "2.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#9ca3af",
  },
  inputs: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "6px",
    fontSize: "0.9rem",
    color: "#9ca3af",
  },
  input: {
    padding: "14px",
    fontSize: "1.1rem",
    borderRadius: "10px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#e5e7eb",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
  },
  card: {
    position: "relative",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "28px",
    fontSize: "1.05rem",
  },
  cardHighlight: {
    border: "1px solid #2dd4bf",
    boxShadow: "0 0 0 1px rgba(45,212,191,0.25)",
  },
  badge: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "#2dd4bf",
    color: "#020617",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: 700,
  },
  cardTitle: {
    fontSize: "1.3rem",
    marginBottom: "8px",
    color: "#ffffff",
  },
  cardText: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    opacity: 0.9,
    marginBottom: "14px",
  },
  cost: {
    fontSize: "1.1rem",
  },
};
