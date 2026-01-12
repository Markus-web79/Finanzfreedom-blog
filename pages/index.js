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
      <div
        style={{
          background: "linear-gradient(135deg, #2dd4bf, #14b8a6)",
          borderRadius: "18px",
          padding: "56px 48px",
          marginBottom: "56px",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          FinanzFreedom
        </h1>

        <p
          style={{
            color: "#ffffff",
            fontSize: "17px",
            maxWidth: "720px",
            lineHeight: "1.6",
            opacity: 0.95,
          }}
        >
          Das unabhängige Finanzportal für Vermögensaufbau, Investieren und
          finanzielle Freiheit.
        </p>
      </div>

      {/* KATEGORIE-KARTEN */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        <CategoryCard
          title="ETFs"
          text="ETF-Grundlagen, Sparpläne und langfristiger Vermögensaufbau – verständlich erklärt."
          href="/investieren/etfs"
        />

        <CategoryCard
          title="Versicherungen"
          text="Welche Versicherungen sinnvoll sind – unabhängig & ohne Verkaufsdruck."
          href="/versicherungen"
        />

        <CategoryCard
          title="Sparen"
          text="Ausgaben optimieren, Rücklagen bilden und Kontrolle über dein Geld gewinnen."
          href="/sparen"
        />

        <CategoryCard
          title="Wissen"
          text="Finanzgrundlagen einfach & verständlich erklärt."
          href="/wissen"
        />

        <CategoryCard
          title="Broker"
          text="Broker-Vergleiche & Empfehlungen für ETFs und Sparpläne."
          href="/investieren/broker"
        />
      </div>
    </main>
  );
}

/* -----------------------------
   KARTEN-KOMPONENTE
----------------------------- */

function CategoryCard({ title, text, href }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          padding: "24px",
          height: "100%",
          transition: "all 0.2s ease",
        }}
      >
        <h3
          style={{
            color: "#ffffff",
            fontSize: "18px",
            marginBottom: "10px",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          {text}
        </p>
      </div>
    </Link>
  );
}
