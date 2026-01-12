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
        <h1 style={{ color: "#ffffff", fontSize: "3rem", marginBottom: "1rem" }}>
          FinanzFreedom
        </h1>
        <p style={{ color: "#ecfeff", fontSize: "1.2rem" }}>
          Das unabhängige Finanzportal für Vermögensaufbau, Investieren und
          finanzielle Freiheit.
        </p>
      </section>

      {/* KARTEN */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {[
          {
            title: "ETFs",
            text:
              "ETF-Grundlagen, Sparpläne und langfristiger Vermögensaufbau – verständlich erklärt.",
            link: "/etfs",
          },
          {
            title: "Versicherungen",
            text:
              "Welche Versicherungen sinnvoll sind – unabhängig & ohne Verkaufsdruck.",
            link: "/versicherungen",
          },
          {
            title: "Sparen",
            text:
              "Ausgaben optimieren, Rücklagen bilden und Kontrolle über dein Geld gewinnen.",
            link: "/sparen",
          },
          {
            title: "Wissen",
            text:
              "Finanzgrundlagen einfach & verständlich erklärt.",
            link: "/wissen",
          },
          {
            title: "Broker",
            text:
              "Broker-Vergleiche & Empfehlungen für ETFs und Sparpläne.",
            link: "/broker",
          },
        ].map((card) => (
          <Link key={card.title} href={card.link}>
            <div
              style={{
                background: "#020617",
                borderRadius: "14px",
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid #0f172a",
              }}
            >
              {/* TÜRKISER KARTENBALKEN */}
              <div
                style={{
                  background: "linear-gradient(135deg, #2dd4bf, #14b8a6)",
                  padding: "0.75rem 1rem",
                  fontWeight: "600",
                  color: "#042f2e",
                }}
              >
                {card.title}
              </div>

              {/* KARTENINHALT */}
              <div style={{ padding: "1.25rem", color: "#cbd5f5" }}>
                <p>{card.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
