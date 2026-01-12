import Link from "next/link";

export default function Notgroschen() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1.5rem" }}>
      <Link href="/sparen">
        <span style={{ color: "#2dd4bf", cursor: "pointer" }}>
          ← Zur Sparen-Übersicht
        </span>
      </Link>

      <h1 style={{ marginTop: "2rem" }}>Notgroschen aufbauen</h1>

      <p style={{ marginTop: "1rem", lineHeight: "1.7" }}>
        Ein Notgroschen ist die finanzielle Basis für Sicherheit und Ruhe.
        Bevor du investierst oder Risiken eingehst, solltest du jederzeit auf
        einen Geldpuffer zugreifen können.
      </p>

      <h2 style={{ marginTop: "2.5rem" }}>Warum ein Notgroschen wichtig ist</h2>
      <ul style={{ marginTop: "1rem", lineHeight: "1.7" }}>
        <li>Schützt vor ungeplanten Ausgaben (Auto, Waschmaschine, Arzt)</li>
        <li>Verhindert teure Kredite oder Dispo-Zinsen</li>
        <li>Gibt mentale Sicherheit</li>
      </ul>

      <h2 style={{ marginTop: "2.5rem" }}>Wie hoch sollte er sein?</h2>
      <p style={{ marginTop: "1rem", lineHeight: "1.7" }}>
        Faustregel: <strong>3–6 Monatsausgaben</strong>.  
        Bei unsicherem Einkommen eher Richtung 6 Monate.
      </p>

      <h2 style={{ marginTop: "2.5rem" }}>Wo solltest du den Notgroschen parken?</h2>
      <ul style={{ marginTop: "1rem", lineHeight: "1.7" }}>
        <li>Tagesgeldkonto</li>
        <li>Sofort verfügbar</li>
        <li>Kein Risiko, kein ETF</li>
      </ul>

      <div style={{ marginTop: "3rem" }}>
        <Link href="/sparen">
          <span style={{ color: "#2dd4bf", cursor: "pointer" }}>
            ← Zurück zu Sparen
          </span>
        </Link>
      </div>
    </main>
  );
}
