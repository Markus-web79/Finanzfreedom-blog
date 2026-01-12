import Link from "next/link";

export default function VariableKostenSenken() {
  return (
    <main style={{ padding: "3rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
      
      {/* Zurück */}
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/sparen">
          ← Zur Sparen-Übersicht
        </Link>
      </div>

      {/* Headline */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Variable Kosten senken
      </h1>

      <p style={{ fontSize: "1.1rem", opacity: 0.85, marginBottom: "2.5rem" }}>
        Variable Kosten sind Ausgaben, die du flexibel beeinflussen kannst – 
        Lebensmittel, Freizeit, Abos oder spontane Käufe. 
        Wer sie kontrolliert, spart oft mehrere hundert Euro im Monat, 
        ohne an Lebensqualität zu verlieren.
      </p>

      {/* Abschnitt 1 */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Was sind variable Kosten?</h2>
        <p>
          Variable Kosten sind alle Ausgaben, die nicht fest vertraglich gebunden sind.
          Dazu zählen z. B. Essen gehen, Streaming-Dienste, Shopping, Lieferdienste,
          Freizeitaktivitäten oder Impulskäufe.
        </p>
      </section>

      {/* Abschnitt 2 */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Warum sie so gefährlich sind</h2>
        <ul>
          <li>Sie fallen oft unbemerkt an</li>
          <li>Kleine Beträge summieren sich massiv</li>
          <li>Sie sabotieren Spar- und Investitionsziele</li>
        </ul>
      </section>

      {/* Abschnitt 3 */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Die 5 effektivsten Hebel</h2>
        <ol>
          <li>Monatliches Freizeit- & Konsumbudget festlegen</li>
          <li>Abos regelmäßig prüfen & kündigen</li>
          <li>Essen planen statt spontan kaufen</li>
          <li>24-Stunden-Regel bei größeren Käufen</li>
          <li>Cash- oder Extra-Konto für variable Ausgaben nutzen</li>
        </ol>
      </section>

      {/* Abschnitt 4 */}
      <section style={{ marginBottom: "3rem" }}>
        <h2>Was du realistisch sparen kannst</h2>
        <p>
          Die meisten Menschen sparen allein durch Kontrolle variabler Kosten
          zwischen <strong>150 € und 500 € pro Monat</strong>.
          Dieses Geld ist die perfekte Basis für Rücklagen, ETFs oder Schuldenabbau.
        </p>
      </section>

      {/* Call to Action */}
      <div
        style={{
          padding: "1.5rem",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #1fd1b9, #1bbfa7)",
          color: "#002b2b"
        }}
      >
        <h3>Nächster sinnvoller Schritt</h3>
        <p>
          Bevor du investierst, solltest du deine Ausgaben im Griff haben.
          Kombiniere variable Kostenkontrolle mit einem stabilen Notgroschen.
        </p>
        <Link href="/sparen/grundlagen/notgroschen">
          Zum Notgroschen →
        </Link>
      </div>

    </main>
  );
}
