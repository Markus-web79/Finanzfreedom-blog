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
          padding: "4rem 2rem",
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          FinanzFreedom
        </h1>
        <p
          style={{
            color: "#ffffff",
            fontSize: "1.1rem",
            opacity: 0.95,
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Das unabhängige Finanzportal für Vermögensaufbau, Investieren und
          finanzielle Freiheit.
        </p>
      </section>

      {/* KARTEN */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
        }}
      >
        <Card
          title="ETFs"
          text="ETF-Grundlagen, Sparpläne und langfristiger Vermögensaufbau – verständlich erklärt."
          href="/etfs"
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

/* =========================
   CARD KOMPONENTE
========================= */

function Card({ title, text, href }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#0f172a",
          borderRadius: "14px",
          padding: "2rem",
          height: "100%",
          position: "relative",
          transition: "all 0.25s ease",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow =
            "0 20px 40px rgba(0,0,0,0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
        }}
      >
        {/* Türkiser Balken */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            borderTopLeftRadius: "14px",
            borderTopRightRadius: "14px",
            background: "linear-gradient(135deg, #2dd4bf, #14b8a6)",
          }}
        />

        <h3
          style={{
            color: "#ffffff",
            fontSize: "1.3rem",
            fontWeight: "600",
            marginBottom: "0.75rem",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "#cbd5f5",
            fontSize: "0.95rem",
            lineHeight: 1.6,
          }}
        >
          {text}
        </p>
      </div>
    </Link>
  );
}
