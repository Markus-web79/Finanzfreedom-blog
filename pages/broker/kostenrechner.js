import { useState, useMemo } from "react";
import Link from "next/link";

export default function Kostenrechner() {
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [years, setYears] = useState(10);

  const recommendation = useMemo(() => {
    if (monthlyContribution >= 500 || years >= 20) {
      return "scalable_prime";
    }
    return "trade_republic";
  }, [monthlyContribution, years]);

  const brokers = [
    {
      key: "trade_republic",
      name: "Trade Republic",
      desc: "Sehr einfache App, ideal für Einsteiger. ETF-Sparpläne kostenlos.",
      cost: 0,
      link: "/broker/trade-republic",
    },
    {
      key: "scalable_free",
      name: "Scalable Capital Free",
      desc: "Große ETF-Auswahl, günstige Orders, gut für langfristige Anleger.",
      cost: 0,
      link: "/broker/scalable-capital",
    },
    {
      key: "scalable_prime",
      name: "Scalable Capital Prime",
      desc: "Flatrate-Modell für aktive Anleger mit größerem Depot.",
      cost: 0,
      link: "/broker/scalable-capital",
    },
  ];

  return (
    <main style={styles.page}>
      <section style={styles.header}>
        <Link href="/" style={styles.back}>← Zur Startseite</Link>
        <h1 style={styles.title}>Welcher Broker passt wirklich zu dir?</h1>
        <p style={styles.subtitle}>
          Basierend auf Sparrate & Anlagehorizont – ehrlich & verständlich.
        </p>
      </section>

      <section style={styles.inputs}>
        <Input
          label="Monatliche Sparrate (€)"
          value={monthlyContribution}
          setValue={setMonthlyContribution}
        />
        <Input
          label="Anlagedauer (Jahre)"
          value={years}
          setValue={setYears}
        />
      </section>

      <section style={styles.grid}>
        {brokers.map((b) => {
          const isRecommended = b.key === recommendation;

          return (
            <div
              key={b.key}
              style={{
                ...styles.card,
                ...(isRecommended ? styles.cardHighlight : {}),
              }}
            >
              {isRecommended && <div style={styles.badge}>Empfehlung</div>}

              <h3 style={styles.cardTitle}>{b.name}</h3>
              <p style={styles.cardText}>{b.desc}</p>

              <p style={styles.cost}>
                Gesamtkosten: <strong>{b.cost.toFixed(2)} €</strong>
              </p>

              <Link href={b.link} style={styles.cta}>
                Jetzt vergleichen →
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
}

function Input({ label, value, setValue }) {
  return (
    <div style={styles.inputBox}>
      <label style={styles.label}>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          const v = e.target.value.replace(/^0+(?!$)/, "");
          setValue(v === "" ? 0 : Number(v));
        }}
        style={styles.input}
      />
    </div>
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
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 600,
  },
  title: { fontSize: "2.4rem", margin: "12px 0" },
  subtitle: { color: "#9ca3af" },

  inputs: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  inputBox: { display: "flex", flexDirection: "column" },
  label: { marginBottom: "6px", color: "#9ca3af" },
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
    padding: "6px 12px",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: 700,
  },
  cardTitle: { fontSize: "1.3rem", marginBottom: "6px" },
  cardText: { fontSize: "0.95rem", opacity: 0.9 },
  cost: { marginTop: "12px", fontSize: "1.05rem" },
  cta: {
    display: "inline-block",
    marginTop: "16px",
    color: "#2dd4bf",
    fontWeight: 700,
    textDecoration: "none",
  },
};
