import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          FinanzFreedom
        </h1>
        <p style={{ maxWidth: "700px", opacity: 0.9 }}>
          Das unabhängige Finanzportal für Vermögensaufbau, Investieren und
          finanzielle Freiheit.
        </p>
      </section>

      {/* KARTEN */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {/* ETFs (ersetzt Investieren) */}
        <Link href="/investieren/etfs" style={cardStyle}>
          <h3>ETFs</h3>
          <p>
            ETF-Grundlagen, Sparpläne und langfristiger Vermögensaufbau –
            verständlich erklärt.
          </p>
        </Link>

        {/* Versicherungen */}
        <Link href="/versicherungen" style={cardStyle}>
          <h3>Versicherungen</h3>
          <p>
            Welche Versicherungen sinnvoll sind – unabhängig & ohne
            Verkaufsdruck.
          </p>
        </Link>

        {/* Sparen */}
        <Link href="/sparen" style={cardStyle}>
          <h3>Sparen</h3>
          <p>
            Ausgaben optimieren, Rücklagen bilden und Kontrolle über dein Geld
            gewinnen.
          </p>
        </Link>

        {/* Wissen */}
        <Link href="/wissen" style={cardStyle}>
          <h3>Wissen</h3>
          <p>Finanzgrundlagen einfach & verständlich erklärt.</p>
        </Link>

        {/* Broker */}
        <Link href="/investieren/broker" style={cardStyle}>
          <h3>Broker</h3>
          <p>Broker-Vergleiche & Empfehlungen für ETFs und Sparpläne.</p>
        </Link>
      </section>
    </main>
  );
}

const cardStyle = {
  display: "block",
  padding: "1.5rem",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  textDecoration: "none",
  color: "inherit",
};
