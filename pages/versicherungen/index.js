import Link from "next/link";

/* ======================
   CARD COMPONENT
====================== */
function Card({ href, icon, title, text, disabled = false }) {
  const baseStyle = {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "24px",

    display: "flex",
    flexDirection: "column",

    color: "#e5e7eb",
    textDecoration: "none",

    transition: "transform 0.15s ease, border-color 0.15s ease",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.5 : 1,

    boxSizing: "border-box",
    overflow: "hidden",
  };

  const hoverStyle = !disabled
    ? {
        transform: "translateY(-4px)",
        borderColor: "#14b8a6",
      }
    : {};

  const content = (
    <>
      {/* Icon */}
      <div style={{ fontSize: "2rem", marginBottom: "14px" }}>
        {icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.35,
          marginBottom: "10px",
          color: "#ffffff",
          wordBreak: "break-word",
          overflowWrap: "anywhere",
          hyphens: "auto",
        }}
      >
        {title}
      </h3>

      {/* Text */}
      <p
        style={{
          fontSize: "0.95rem",
          lineHeight: 1.6,
          opacity: 0.85,
          wordBreak: "break-word",
          overflowWrap: "anywhere",
        }}
      >
        {text}
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "16px",
          color: "#14b8a6",
          fontWeight: 500,
          fontSize: "0.95rem",
        }}
      >
        {disabled ? "Demnächst" : "→ Zum Artikel"}
      </div>
    </>
  );

  if (disabled) {
    return <div style={baseStyle}>{content}</div>;
  }

  return (
    <Link
      href={href}
      style={baseStyle}
      onMouseEnter={(e) =>
        Object.assign(e.currentTarget.style, hoverStyle)
      }
      onMouseLeave={(e) =>
        Object.assign(e.currentTarget.style, baseStyle)
      }
    >
      {content}
    </Link>
  );
}

/* ======================
   PAGE
====================== */
export default function VersicherungenIndex() {
  return (
    <main style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>Versicherungen verstehen</h1>
        <p style={styles.subtitle}>
          Welche Versicherungen brauchst du wirklich – und welche kannst du dir
          sparen? Hier findest du klare, einfache Erklärungen ohne Verkaufsblabla.
        </p>
      </section>

      {/* Guide */}
      <section style={styles.guide}>
        <h2 style={styles.guideTitle}>So gehst du bei Versicherungen vor</h2>
        <p style={styles.guideText}>
          Nicht jede Versicherung ist sinnvoll. Manche sind absolut notwendig,
          andere optional – und einige eher unnötig.
        </p>
        <ul style={styles.guideList}>
          <li>1️⃣ Starte mit den existenziell wichtigen Versicherungen</li>
          <li>2️⃣ Prüfe, welche Risiken du wirklich absichern musst</li>
          <li>3️⃣ Vermeide unnötige oder doppelte Policen</li>
        </ul>
      </section>

      {/* Cards */}
      <section style={styles.grid}>
        <Card
          href="/versicherungen/privathaftpflicht"
          icon="🛡️"
          title="Haftpflichtversicherung"
          text="Die wichtigste Versicherung überhaupt – schützt dich vor existenzbedrohenden Schäden."
        />

        <Card
          href="/versicherungen/rechtsschutz"
          icon="⚖️"
          title="Rechtsschutzversicherung"
          text="Schützt dich vor hohen Kosten bei rechtlichen Streitigkeiten, z. B. im Arbeits- oder Mietrecht."
        />

        <Card
          href="/versicherungen/hausrat"
          icon="🏠"
          title="Hausratversicherung"
          text="Sichert dein Hab und Gut bei Diebstahl, Feuer, Leitungswasser und Sturm ab."
        />

        <Card
          href="/versicherungen/berufsunfaehigkeit"
          icon="💼"
          title="Berufsunfähigkeitsversicherung"
          text="Schützt dein Einkommen, wenn du aus gesundheitlichen Gründen nicht mehr arbeiten kannst."
        />

        <Card
          href="/versicherungen/kfz"
          icon="🚗"
          title="Kfz-Versicherung"
          text="Haftpflicht, Teilkasko oder Vollkasko – Unterschiede, Kosten und Tipps."
        />

        <Card
          href="/versicherungen/krankenversicherung"
          icon="🏥"
          title="Krankenversicherung"
          text="Gesetzlich oder privat? Unterschiede, Vor- und Nachteile einfach erklärt."
        />
      </section>
    </main>
  );
}

/* ======================
   STYLES
====================== */
const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 22px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  header: {
    maxWidth: "900px",
    margin: "0 auto 36px",
    textAlign: "center",
  },
  back: {
    display: "inline-block",
    marginBottom: "16px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 600,
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "1.05rem",
    lineHeight: 1.7,
    color: "#9ca3af",
  },
  guide: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    padding: "24px",
    borderRadius: "18px",
    background: "rgba(2,6,23,0.5)",
    border: "1px solid #1e293b",
  },
  guideTitle: {
    fontSize: "1.4rem",
    marginBottom: "12px",
    color: "#ffffff",
  },
  guideText: {
    marginBottom: "12px",
    lineHeight: 1.6,
    color: "#cbd5f5",
  },
  guideList: {
    paddingLeft: "18px",
    lineHeight: 1.7,
  },
  grid: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
};
