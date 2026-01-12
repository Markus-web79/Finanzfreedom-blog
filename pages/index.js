import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "3rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>

      {/* HERO BANNER */}
      <section
        style={{
          background: "linear-gradient(135deg, #2dd4bf, #14b8a6)",
          borderRadius: "16px",
          padding: "4rem 2rem",
          textAlign: "center",
          marginBottom: "3.5rem",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "3rem",
            marginBottom: "1rem",
          }}
        >
          FinanzFreedom
        </h1>

        <p
          style={{
            color: "#ffffff",
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto",
            opacity: 0.95,
          }}
        >
          Das unabhängige Finanzportal für Vermögensaufbau, Investieren und
          finanzielle Freiheit.
        </p>
      </section>

      {/* KATEGORIEN */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <Category
          title="ETFs"
          text="ETF-Grundlagen, Sparpläne und langfristiger Vermögensaufbau – verständlich erklärt."
          href="/investieren/etfs"
        />

        <Category
          title="Versicherungen"
          text="Welche Versicherungen sinnvoll sind – unabhängig & ohne Verkaufsdruck."
          href="/versicherungen"
        />

        <Category
          title="Sparen"
          text="Ausgaben optimieren, Rücklagen bilden und Kontrolle über dein Geld gewinnen."
          href="/sparen"
        />

        <Category
          title="Wissen"
          text="Finanzgrundlagen einfach & verständlich erklärt."
          href="/wissen"
        />

        <Category
          title="Broker"
          text="Broker-Vergleiche & Empfehlungen für ETFs und Sparpläne."
          href="/investieren/broker"
        />
      </section>
    </main>
  );
}

/* CARD KOMPONENTE */
function Category({ title, text, href }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#0b1220",
          borderRadius: "14px",
          padding: "1.8rem",
          height: "100%",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <h3 style={{ color: "#ffffff", marginBottom: "0.6rem" }}>{title}</h3>
        <p style={{ color: "#9ca3af", fontSize: "0.95rem" }}>{text}</p>
      </div>
    </Link>
  );
}
