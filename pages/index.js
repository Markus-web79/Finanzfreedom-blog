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
          padding: "3rem 1.5rem",
          marginBottom: "4rem",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              fontWeight: "800",
              marginBottom: "0.75rem",
            }}
          >
            FinanzFreedom
          </h1>

          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.35rem, 3.2vw, 2rem)",
              fontWeight: "700",
              lineHeight: "1.25",
              marginBottom: "1rem",
              opacity: 0.95,
            }}
          >
            Finanzielle Freiheit ist kein Moment.
            <br />
            Sie ist das Ergebnis guter Entscheidungen.
          </h2>

          <p
            style={{
              color: "#ffffff",
              fontSize: "1.1rem",
              opacity: 0.9,
            }}
          >
            Das unabhängige Finanzportal für Vermögensaufbau, Investieren und
            finanzielle Klarheit.
          </p>

          <div style={{ marginTop: "2rem" }}>
            <Link href="/start">
              <span
                style={{
                  display: "inline-block",
                  background: "#ffffff",
                  color: "#0f172a",
                  padding: "0.9rem 1.6rem",
                  borderRadius: "10px",
                  fontWeight: "700",
                  fontSize: "1rem",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                }}
              >
                Jetzt starten →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* HAUPTBEREICHE */}
      <SectionTitle
        title="Finanzwissen & Vergleiche"
        text="Starte mit den wichtigsten Bereichen rund um Vermögensaufbau, Versicherungen und finanzielle Entscheidungen."
      />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
          marginBottom: "4rem",
        }}
      >
        <Card
          title="ETFs"
          text="ETF-Grundlagen, Sparpläne und langfristiger Vermögensaufbau – verständlich erklärt."
          href="/etfs"
        />

        <Card
          title="Investieren"
          text="Strategien, Einstieg und Struktur für langfristigen Vermögensaufbau – Schritt für Schritt erklärt."
          href="/investieren"
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

      {/* VERGLEICHE & RECHNER */}
      <SectionTitle
        title="Vergleiche & Rechner"
        text="Nutze direkte Vergleiche und einfache Rechner, um bessere finanzielle Entscheidungen zu treffen."
      />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
        }}
      >
        <Card
          title="⚡ Stromvergleich"
          text="Stromtarife vergleichen, Kosten senken und passende Anbieter finden."
          href="/strom"
        />

        <Card
          title="🔥 Gasvergleich"
          text="Gastarife vergleichen und Heizkosten für deinen Haushalt optimieren."
          href="/gas"
        />

        <Card
          title="🌐 DSL Vergleich"
          text="Internetanbieter vergleichen, Kosten senken und passende Tarife finden."
          href="/dsl"
        />

        <Card
          title="📱 Mobilfunk"
          text="Handytarife vergleichen, bessere Konditionen finden und monatlich sparen."
          href="/mobilfunk"
        />

        <Card
          title="💳 Kreditvergleich"
          text="Kredite vergleichen, Zinsen prüfen und passende Finanzierung finden."
          href="/kredit"
        />

        <Card
          title="🏦 Tagesgeld"
          text="Aktuelle Tagesgeldzinsen vergleichen und flexible Rücklagen sinnvoll verzinsen."
          href="/tagesgeld"
        />

        <Card
          title="🔒 Festgeld"
          text="Festgeldzinsen vergleichen, Geld sicher anlegen und feste Renditen für deine Laufzeit sichern."
          href="/festgeld"
        />

        <Card
          title="🏧 Girokonto"
          text="Girokonten vergleichen, Gebühren sparen und das passende Konto für deinen Alltag finden."
          href="/girokonto"
        />

            <Card
  title="💳 Kreditkarte"
  text="Kreditkarten vergleichen, Gebühren prüfen und die passende Karte für Alltag und Reisen finden."
  href="/kreditkarte"
/>
        <Card
          title="🧮 Rechner & Tools"
          text="Finanzrechner für ETF-Sparpläne, Zinseszins, Sparpläne und Vermögensaufbau."
          href="/rechner"
        />

        <Card
          title="📈 ETF-Rechner"
          text="Berechne, wie sich ein ETF-Sparplan über Jahre entwickeln kann."
          href="/tools/etf-sparplan-rechner"
        />
      </section>
    </main>
  );
}

/* =========================
   SECTION TITLE
========================= */

function SectionTitle({ title, text }) {
  return (
    <div
      style={{
        marginBottom: "1.5rem",
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          fontSize: "1.8rem",
          fontWeight: "800",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "1rem",
          lineHeight: 1.6,
          maxWidth: "760px",
        }}
      >
        {text}
      </p>
    </div>
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
          minHeight: "190px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
