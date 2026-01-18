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
    <>
      <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{icon}</div>

      <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>
        {title}
      </h3>

      <p style={{ fontSize: "0.95rem", lineHeight: 1.6, opacity: 0.9 }}>
        {text}
      </p>

      {!disabled && (
        <span
          style={{
            marginTop: "auto",
            color: "#14b8a6",
            fontWeight: 500,
            marginTop: "16px",
          }}
        >
          → Zum Artikel
        </span>
      )}
    </>
  );

  if (disabled) {
    return (
      <div style={{ ...baseStyle, ...disabledStyle }}>
        {content}
      </div>
    );
  }

  return (
    <Link href={href} style={baseStyle}>
      {content}
    </Link>
  );
}

export default function EtfsIndex() {
  return (
    <main style={{ padding: "40px 20px" }}>
      {/* Zur Startseite */}
      <div style={{ maxWidth: "900px", margin: "0 auto 24px" }}>
        <Link
          href="/"
          style={{
            color: "#14b8a6",
            textDecoration: "none",
            fontSize: "0.95rem",
            fontWeight: 500,
          }}
        >
          ← Zur Startseite
        </Link>
      </div>

      {/* Header */}
      <header style={{ maxWidth: "900px", margin: "0 auto 40px" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "12px" }}>
          ETFs verstehen & investieren
        </h1>

        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, opacity: 0.9 }}>
          ETFs gehören zu den einfachsten und effektivsten Möglichkeiten,
          langfristig Vermögen aufzubauen.
        </p>
      </header>

      {/* Karten */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
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
