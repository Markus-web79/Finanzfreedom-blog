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
      {/* HERO BANNER */}
      <section
        style={{
          background: "linear-gradient(135deg, #2dd4bf, #14b8a6)",
          borderRadius: "18px",
          padding: "3.5rem 3rem",
          marginBottom: "4rem",
          color: "#0f172a",
        }}
      >
        <h1 style={{ fontSize: "2.4rem", marginBottom: "1rem" }}>
          FinanzFreedom
        </h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "720px" }}>
          Das unabhängige Finanzportal für Vermögensaufbau, Investieren und
          finanzielle Freiheit.
        </p>
      </section>

      {/* KARTEN GRID */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
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
          href="/investieren/broker"
        />
      </section>
    </main>
  );
}

function Card({ title, text, href }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#020617",
          border: "1px solid #1e293b",
          borderRadius: "14px",
          padding: "1.8rem",
          height: "100%",
          color: "#e5e7eb",
          transition: "border 0.2s ease",
        }}
      >
        <h3 style={{ marginBottom: "0.6rem" }}>{title}</h3>
        <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>{text}</p>
      </div>
    </Link>
  );
}
