import Link from "next/link";

export default function FixkostenSenken() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      {/* Back */}
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/sparen">← Zur Sparen-Übersicht</Link>
      </div>

      <h1>Fixkosten senken – Monatlich mehr Geld übrig</h1>

      <p style={{ marginTop: "1rem", maxWidth: "750px" }}>
        Fixkosten sind einer der größten Hebel, um langfristig Vermögen
        aufzubauen. Jeder Euro, den du hier sparst, steht dir Monat für Monat
        dauerhaft zur Verfügung – ganz ohne Verzicht im Alltag.
      </p>

      <h2 style={{ marginTop: "3rem" }}>Warum Fixkosten so entscheidend sind</h2>

      <ul style={{ marginTop: "1.5rem" }}>
        <li>✔ Ersparnis wirkt jeden Monat automatisch</li>
        <li>✔ Mehr Sparrate ohne zusätzliches Einkommen</li>
        <li>✔ Grundlage für Notgroschen & Investments</li>
      </ul>

      <h2 style={{ marginTop: "3rem" }}>
        Die wichtigsten Fixkosten-Posten prüfen
      </h2>

      <ul style={{ marginTop: "1.5rem" }}>
        <li>Miete & Nebenkosten</li>
        <li>Strom, Gas & Internet</li>
        <li>Handy- & Streaming-Verträge</li>
        <li>Versicherungen</li>
        <li>Abos & Mitgliedschaften</li>
      </ul>

      <h2 style={{ marginTop: "3rem" }}>So gehst du konkret vor</h2>

      <ol style={{ marginTop: "1.5rem" }}>
        <li>Alle Fixkosten auflisten</li>
        <li>Verträge vergleichen & Alternativen prüfen</li>
        <li>Unnötige Abos kündigen</li>
        <li>Jährlich neu verhandeln</li>
      </ol>

      <div
        style={{
          marginTop: "4rem",
          padding: "1.5rem",
          background: "rgba(45,212,191,0.08)",
          borderRadius: "10px",
        }}
      >
        <strong>Tipp:</strong> Schon 100 € weniger Fixkosten pro Monat ergeben
        1.200 € pro Jahr – ohne zusätzliche Arbeit.
      </div>

      {/* Navigation */}
      <div style={{ marginTop: "4rem" }}>
        <Link href="/sparen/grundlagen/notgroschen">
          ← Zum Notgroschen
        </Link>
      </div>
    </main>
  );
}
