import Link from "next/link";

function Card({ href, icon, title, text, disabled }) {
  const style = {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "24px",
    color: "#e5e7eb",
    textDecoration: "none",
    transition: "transform 0.15s ease, border-color 0.15s ease",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  };

  const content = (
    <>
      <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{icon}</div>
      <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>{title}</h3>
      <p style={{ fontSize: "0.95rem", lineHeight: 1.6, opacity: 0.9 }}>
        {text}
      </p>
      {!disabled && (
        <p
          style={{
            marginTop: "16px",
            color: "#14b8a6",
            fontSize: "0.9rem",
          }}
        >
          → Zum Artikel
        </p>
      )}
    </>
  );

  if (disabled) {
    return <div style={style}>{content}</div>;
  }

  return (
    <Link href={href} style={style}>
      {content}
    </Link>
  );
}

export default function VersicherungenIndex() {
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
          Versicherungen verstehen
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, opacity: 0.9 }}>
          Welche Versicherungen brauchst du wirklich – und welche nicht?
          Hier findest du klare, einfache Erklärungen ohne Verkaufsblabla.
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
          href="/versicherungen/haftpflicht"
          icon="🛡️"
          title="Haftpflichtversicherung"
          text="Die wichtigste Versicherung überhaupt – schützt dich vor existenzbedrohenden Schäden."
        />

        <Card
          href="/versicherungen/hausrat"
          icon="🏠"
          title="Hausratversicherung"
          text="Sichert dein Hab und Gut bei Diebstahl, Feuer oder Wasserschäden ab."
        />

        <Card
          href="/versicherungen/berufsunfaehigkeit"
          icon="💼"
          title="Berufsunfähigkeitsversicherung"
          text="Schützt dein Einkommen, wenn du aus gesundheitlichen Gründen nicht mehr arbeiten kannst."
        />

        <Card
          icon="🚗"
          title="Kfz-Versicherung"
          text="Haftpflicht, Teilkasko oder Vollkasko – Erklärung folgt."
          disabled
        />

        <Card
          icon="🏥"
          title="Krankenversicherung"
          text="Gesetzlich oder privat? Einfach erklärt – folgt."
          disabled
        />
      </section>
    </main>
  );
}
