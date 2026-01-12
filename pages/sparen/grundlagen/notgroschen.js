import Link from "next/link";

export default function Notgroschen() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
        lineHeight: "1.7",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/sparen">← Zur Sparen-Übersicht</Link>
      </div>

      <h1>Notgroschen aufbauen – deine finanzielle Sicherheit</h1>

      <p style={{ marginTop: "1rem" }}>
        Ein Notgroschen ist die wichtigste Grundlage für finanzielle Stabilität.
        Bevor du investierst oder Risiken eingehst, solltest du einen
        ausreichenden finanziellen Puffer haben.
      </p>

      <h2 style={{ marginTop: "2.5rem" }}>Was ist ein Notgroschen?</h2>

      <p>
        Der Notgroschen ist eine Geldreserve für unerwartete Ausgaben. Dazu
        zählen zum Beispiel:
      </p>

      <ul>
        <li>Autoreparaturen</li>
        <li>kaputte Haushaltsgeräte</li>
        <li>plötzliche medizinische Kosten</li>
        <li>Jobverlust oder Einkommensausfälle</li>
      </ul>

      <p>
        Ziel ist es, in solchen Situationen nicht auf Kredite oder Dispo
        angewiesen zu sein.
      </p>

      <h2 style={{ marginTop: "2.5rem" }}>
        Wie hoch sollte der Notgroschen sein?
      </h2>

      <p>
        Als Faustregel gilt:
      </p>

      <ul>
        <li>
          <strong>Angestellte:</strong> 3 Monatsausgaben
        </li>
        <li>
          <strong>Selbstständige:</strong> 6 Monatsausgaben
        </li>
      </ul>

      <p>
        Wichtig: Es geht um deine <strong>Ausgaben</strong>, nicht um dein
        Einkommen.
      </p>

      <h2 style={{ marginTop: "2.5rem" }}>
        Wo sollte der Notgroschen liegen?
      </h2>

      <p>
        Dein Notgroschen sollte:
      </p>

      <ul>
        <li>jederzeit verfügbar sein</li>
        <li>keinem Risiko ausgesetzt sein</li>
        <li>nicht für Konsumzwecke genutzt werden</li>
      </ul>

      <p>
        Am besten eignet sich ein separates Tagesgeldkonto. Dort ist das Geld
        sicher, flexibel verfügbar und klar vom Alltag getrennt.
      </p>

      <h2 style={{ marginTop: "2.5rem" }}>
        Wie baust du den Notgroschen auf?
      </h2>

      <ol>
        <li>Verschaffe dir einen Überblick über deine monatlichen Ausgaben</li>
        <li>Lege ein fixes Sparziel fest</li>
        <li>Richte einen Dauerauftrag ein</li>
        <li>Behandle den Notgroschen wie eine feste Rechnung</li>
      </ol>

      <p>
        Schon kleine Beträge reichen aus. Wichtig ist die Regelmäßigkeit, nicht
        die Geschwindigkeit.
      </p>

      <h2 style={{ marginTop: "2.5rem" }}>
        Erst Notgroschen, dann investieren
      </h2>

      <p>
        Viele Anfänger machen den Fehler, direkt zu investieren, ohne Rücklagen
        zu haben. Das führt bei unerwarteten Ausgaben oft zu Panikverkäufen oder
        Schulden.
      </p>

      <p>
        Ein solider Notgroschen gibt dir Sicherheit, Ruhe und die Freiheit,
        langfristige Entscheidungen zu treffen.
      </p>
    </main>
  );
}
