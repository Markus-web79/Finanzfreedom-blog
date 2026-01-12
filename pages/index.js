import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      {/* HERO / BANNER */}
      <section
        style={{
          background: "linear-gradient(135deg, #2dd4bf, #14b8a6)",
          borderRadius: "16px",
          padding: "3.5rem 2rem",
          marginBottom: "4rem",
          color: "#042f2e",
        }}
      >
        <h1 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>
          FinanzFreedom
        </h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "700px" }}>
          Das unabhängige Finanzportal für Vermögensaufbau, Investieren
          und finanzielle Freiheit.
        </p>
      </section>

      {/* KATEGORIE-KARTEN */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <Card
          title="ETFs"
          text="ETF-Grundlagen, Sparpläne und langfristiger Vermögensaufbau – verständlich erklärt."
          href="/investieren/etfs"
        />

        <Card
          title="Versicherungen"
          text="Welche Versicherungen sinnvoll sind – unabhängig & ohne Verkaufsdruck."
          href="/versicherungen"
        />

        <Card
          title="Sparen"
          text="Ausgaben optimieren, Rücklagen bilden und Kontrolle über dein Geld gewinnen."
          href="/sparen"
        />

        <Card
          title="Wissen"
          text="Finanzgrundlagen einfach & verständlich erklärt."
          href="/wissen"
        />

        <Card
          title="Broker"
          text="Broker-Vergleiche & Empfehlungen für ETFs und Sparpläne."
          href="/broker"
        />
      </section>
    </main>
  );
}

/* CARD KOMPONENTE */
function Card({ title, text, href }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#020617",
          border: "1px solid #0f172a",
          borderRadius: "14px",
          padding: "1.6rem",
          height: "100%",
          transition: "all 0.2s ease",
        }}
      >
        <h3 style={{ marginBottom: "0.6rem", color: "#e5e7eb" }}>
          {title}
        </h3>
        <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
          {text}
        </p>
      </div>
    </Link>
  );
}
