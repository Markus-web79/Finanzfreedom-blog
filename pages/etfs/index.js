import Link from "next/link";

/* Card-Komponente */
function Card({ href, icon, title, text, disabled }) {
  const baseStyle = {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "24px",
    color: "#e5e7eb",
    textDecoration: "none",
    transition: "all 0.2s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "200px",
  };

  const disabledStyle = {
    opacity: 0.5,
    cursor: "not-allowed",
  };

  const content = (
    <div style={{ height: "100%" }}>
      <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{icon}</div>
      <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>{title}</h3>
      <p style={{ fontSize: "0.95rem", lineHeight: 1.6, opacity: 0.9 }}>
        {text}
      </p>

      {!disabled && (
        <p
          style={{
            marginTop: "16px",
            fontSize: "0.9rem",
            color: "#14b8a6",
          }}
        >
          Weiter zum Artikel →
        </p>
      )}
    </div>
  );

  if (disabled) {
    return <div style={{ ...baseStyle, ...disabledStyle }}>{content}</div>;
  }

  return (
    <Link href={href} style={baseStyle}>
      {content}
    </Link>
  );
}

export default function EtfsIndex() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      {/* Zurück */}
      <div style={{ marginBottom: "24px" }}>
        <Link href="/" style={{ color: "#14b8a6", textDecoration: "none" }}>
          ← Zur Startseite
        </Link>
      </div>

      {/* Header */}
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "12px" }}>
          ETFs verstehen & investieren
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, opacity: 0.9 }}>
          ETFs (Exchange Traded Funds) gehören zu den einfachsten und
          kostengünstigsten Möglichkeiten, langfristig Vermögen aufzubauen.
          Hier findest du einen strukturierten Einstieg – verständlich,
          unabhängig und praxisnah.
        </p>
      </header>

      {/* Karten */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        <Card
          href="/etfs/msci-world"
          icon="🌍"
          title="MSCI World"
          text="Der Klassiker unter den ETFs – weltweit investieren mit nur einem Produkt."
        />

        <Card
          icon="📈"
          title="MSCI Emerging Markets"
          text="Schwellenländer-ETF – folgt demnächst, einfach erklärt."
          disabled
        />

        <Card
          icon="🌐"
          title="MSCI ACWI"
          text="Industrie- & Schwellenländer kombiniert – folgt demnächst."
          disabled
        />
      </section>
    </main>
  );
}
