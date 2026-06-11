import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function SparplanRechner() {
  const [sparrate, setSparrate] = useState("100");
  const [jahre, setJahre] = useState("20");

  const eingezahlt =
    Number(sparrate || 0) * 12 * Number(jahre || 0);

  const formatEuro = (value) =>
    value.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    });

  return (
    <>
      <Head>
        <title>Sparplan-Rechner | FinanzFreedom</title>
        <meta
          name="description"
          content="Berechne einfach, wie viel Geld du mit einem Sparplan über die Jahre ansparen kannst."
        />
      </Head>

      <main style={styles.page}>
        <Link href="/rechner" style={styles.back}>
          ← Zurück zu Rechner & Tools
        </Link>

        <h1 style={styles.title}>Sparplan-Rechner</h1>

        <p style={styles.intro}>
          Berechne schnell, wie viel Kapital du durch regelmäßiges Sparen
          aufbauen kannst.
        </p>

        <section style={styles.box}>
          <label style={styles.label}>
            Monatliche Sparrate (€)
            <input
              style={styles.input}
              type="number"
              value={sparrate}
              onChange={(e) => setSparrate(e.target.value)}
            />
          </label>

          <label style={styles.label}>
            Laufzeit (Jahre)
            <input
              style={styles.input}
              type="number"
              value={jahre}
              onChange={(e) => setJahre(e.target.value)}
            />
          </label>
        </section>

        <section style={styles.result}>
          <p style={styles.resultLabel}>Gesamte Sparleistung</p>

          <h2 style={styles.resultValue}>
            {formatEuro(eingezahlt)}
          </h2>

          <p>
            Bei einer monatlichen Sparrate von {sparrate || 0} € über{" "}
            {jahre || 0} Jahre.
          </p>
        </section>

        <section style={styles.note}>
          <h2>Hinweis</h2>
          <p>
            Dieser Rechner berücksichtigt keine Rendite. Wenn du zusätzlich
            den Effekt von Zinsen und Rendite berechnen möchtest, nutze unseren
            Zinseszins-Rechner.
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
    marginBottom: "16px",
  },
  note: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "28px",
    lineHeight: 1.7,
  },
};
