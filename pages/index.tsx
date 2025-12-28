import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        FinanzFreedom
      </h1>

      <p style={{ fontSize: "1.1rem", opacity: 0.85, maxWidth: "700px" }}>
        Dein unabhängiges Finanzportal für Investieren, ETFs, Versicherungen
        und den Weg aus dem Hamsterrad – verständlich, ehrlich, langfristig.
      </p>

      <div style={{ marginTop: "3rem", display: "grid", gap: "1.5rem" }}>
        <section style={cardStyle}>
          <h2>📈 Investieren</h2>
          <p>ETFs, Aktien, langfristiger Vermögensaufbau.</p>
        </section>

        <section style={cardStyle}>
          <h2>🛡️ Versicherungen</h2>
          <p>Was du wirklich brauchst – und was nicht.</p>
        </section>

        <section style={cardStyle}>
          <h2>💡 Passives Einkommen</h2>
          <p>Digitale Produkte, Sparpläne & Systeme.</p>
        </section>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <Link href="/blog">→ Zum Blog</Link>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  padding: "1.5rem",
  borderRadius: "12px",
  background: "#0f172a",
  border: "1px solid #1e293b",
};
