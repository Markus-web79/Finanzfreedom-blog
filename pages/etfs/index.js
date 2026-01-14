import Link from "next/link";

export default function EtfsIndex() {
  return (
    <main style={{ padding: "40px 20px" }}>
      {/* Zurück */}
      <div style={{ maxWidth: "900px", margin: "0 auto 20px" }}>
        <Link href="/" style={{ color: "#14b8a6", textDecoration: "none" }}>
          ← Zur Startseite
        </Link>
      </div>

      {/* Header */}
      <header style={{ maxWidth: "900px", margin: "0 auto 40px" }}>
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
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {/* MSCI World */}
        <Link href="/etfs/msci-world" style={cardStyle}>
          <div style={iconStyle}>🌍</div>
          <h3 style={titleStyle}>MSCI World</h3>
          <p style={textStyle}>
            Der Klassiker unter den ETFs – weltweit investieren mit nur einem
            Produkt.
          </p>
        </Link>

        {/* Emerging Markets */}
        <div style={{ ...cardStyle, opacity: 0.5, cursor: "not-allowed" }}>
          <div style={iconStyle}>📈</div>
          <h3 style={titleStyle}>MSCI Emerging Markets</h3>
          <p style={textStyle}>
            Schwellenländer-ETF – folgt demnächst, einfach erklärt.
          </p>
        </div>

        {/* ACWI */}
        <div style={{ ...cardStyle, opacity: 0.5, cursor: "not-allowed" }}>
          <div style={iconStyle}>🌐</div>
          <h3 style={titleStyle}>MSCI ACWI</h3>
          <p style={textStyle}>
            Industrie- & Schwellenländer kombiniert – folgt demnächst.
          </p>
        </div>
      </section>
    </main>
  );
}

/* Styles */
const cardStyle = {
  background: "#020617",
  border: "1px solid #1e293b",
  borderRadius: "14px",
  padding: "24px",
  textDecoration: "none",
  color: "#e5e7eb",
  transition: "transform 0.15s ease, border-color 0.15s ease",
};

const iconStyle = {
  fontSize: "2rem",
  marginBottom: "12px",
};

const titleStyle = {
  fontSize: "1.25rem",
  marginBottom: "8px",
};

const textStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  opacity: 0.9,
};
