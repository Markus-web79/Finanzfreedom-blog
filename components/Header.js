export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#f9fafb",
        borderBottom: "1px solid #e5e7eb",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
   import Link from "next/link";

<h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
  <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
    FinanzFreedom Blog
  </Link>
</h1>

      <p
        style={{
          color: "#4b5563",
          fontSize: "1.1rem",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.5",
        }}
      >
        Dein Weg zu finanzieller Freiheit – Strategien, Ideen & echte Tipps.
      </p>

      {/* 🧭 Navigation (Platzhalter für spätere Erweiterung) */}
      <nav
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <a href="/" style={{ color: "#0070f3", textDecoration: "none" }}>
          Startseite
        </a>
        <a href="/about" style={{ color: "#0070f3", textDecoration: "none" }}>
          Über uns
        </a>
        <a href="/kontakt" style={{ color: "#0070f3", textDecoration: "none" }}>
          Kontakt
        </a>
      </nav>
    </header>
  );
}
