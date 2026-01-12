import Link from "next/link";

export default function EtfsIndex() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      {/* Back Button */}
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/investieren">← Zur Investieren-Übersicht</Link>
      </div>

      <h1>ETFs – einfach & langfristig investieren</h1>

      <p style={{ marginTop: "1rem", maxWidth: "800px" }}>
        ETFs (Exchange Traded Funds) sind das Fundament für langfristigen
        Vermögensaufbau. Sie ermöglichen kostengünstiges, breit gestreutes
        Investieren – ideal für Einsteiger und ETF-Sparpläne.
      </p>

      <ul style={{ marginTop: "1.5rem" }}>
        <li>✔ Breite Streuung mit nur einem Produkt</li>
        <li>✔ Sehr geringe laufende Kosten</li>
        <li>✔ Ideal für langfristigen Vermögensaufbau</li>
      </ul>

      <section style={{ marginTop: "3rem" }}>
        <h2>MSCI World ETF</h2>
        <p>
          Der bekannteste ETF der Welt – Chancen, Risiken und warum er für viele
          Anleger der Einstieg ist.
        </p>
        <Link href="/investieren/etfs/msci-world">Zum Artikel →</Link>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2>ETF-Sparplan starten</h2>
        <p>
          Schritt für Schritt erklärt: So investierst du monatlich,
          automatisiert und stressfrei.
        </p>
        <Link href="/investieren/etfs/sparplan">Zur Anleitung →</Link>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2>Broker vergleichen</h2>
        <p>
          Finde den passenden Broker für ETFs, Sparpläne und langfristige
          Strategien.
        </p>
        <Link href="/broker">Zum Vergleich →</Link>
      </section>
    </main>
  );
}
