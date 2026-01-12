import Link from "next/link";

export default function Notgroschen() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      {/* Back */}
      <Link href="/sparen" style={{ color: "#2dd4bf", textDecoration: "none" }}>
        ← Zur Sparen-Übersicht
      </Link>

      {/* Header */}
      <h1 style={{ marginTop: "1.5rem" }}>Notgroschen aufbauen</h1>
      <p style={{ maxWidth: "750px", marginTop: "1rem", color: "#cbd5e1" }}>
        Ein Notgroschen ist das Fundament jeder soliden Finanzstrategie. Er
        schützt dich vor Schulden, Stress und schlechten Entscheidungen, wenn
        unerwartete Ausgaben auftreten.
      </p>

      {/* Section */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Warum ist ein Notgroschen so wichtig?</h2>
        <ul style={{ marginTop: "1rem", lineHeight: "1.7" }}>
          <li>✔ schützt vor Konsumkrediten</li>
          <li>✔ gibt finanzielle Sicherheit im Alltag</li>
          <li>✔ verhindert, dass Investments verkauft werden müssen</li>
          <li>✔ reduziert Stress bei Jobverlust oder Reparaturen</li>
        </ul>
      </section>

      {/* Section */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Wie hoch sollte der Notgroschen sein?</h2>
        <p style={{ marginTop: "1rem" }}>
          Bewährt haben sich folgende Richtwerte:
        </p>
        <ul style={{ marginTop: "1rem", lineHeight: "1.7" }}>
          <li>
            🔹 <strong>3 Monatsausgaben</strong> bei sicherem Job & geringem
            Risiko
          </li>
          <li>
            🔹 <strong>6 Monatsausgaben</strong> bei Familie oder variablen
            Einnahmen
          </li>
          <li>
            🔹 <strong>9–12 Monatsausgaben</strong> bei Selbstständigkeit
          </li>
        </ul>
      </section>

      {/* Section */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Wo sollte der Notgroschen liegen?</h2>
        <p style={{ marginTop: "1rem" }}>
          Sicherheit und Verfügbarkeit stehen über Rendite:
        </p>
        <ul style={{ marginTop: "1rem", lineHeight: "1.7" }}>
          <li>✔ Tagesgeldkonto</li>
          <li>✔ separates Sparkonto</li>
          <li>✖ keine ETFs</li>
          <li>✖ keine Aktien</li>
          <li>✖ kein Krypto</li>
        </ul>
      </section>

      {/* Section */}
      <section style={{ marginTop: "3rem" }}>
        <h2>So baust du deinen Notgroschen stressfrei auf</h2>
        <ol style={{ marginTop: "1rem", lineHeight: "1.8" }}>
          <li>Monatliche Sparrate festlegen</li>
          <li>Dauerauftrag direkt nach Gehaltseingang</li>
          <li>Bonuszahlungen anteilig nutzen</li>
          <li>Erst Notgroschen, dann investieren</li>
        </ol>
      </section>

      {/* Info Box */}
      <div
        style={{
          marginTop: "3.5rem",
          padding: "1.5rem",
          background: "#0b1220",
          borderRadius: "12px",
          borderLeft: "4px solid #2dd4bf",
        }}
      >
        <strong>Merke:</strong>  
        Ein Notgroschen ist kein Geld, das „arbeitet“.  
        Er ist Geld, das **dich schützt**.
      </div>

      {/* Next */}
      <div style={{ marginTop: "4rem" }}>
        <Link
          href="/s
