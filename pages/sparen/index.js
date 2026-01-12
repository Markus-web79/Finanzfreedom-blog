import Link from "next/link";

export default function SparenIndex() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      {/* Back Button */}
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/">← Zur Startseite</Link>
      </div>

      <h1>Sparen – Geld behalten & Kontrolle gewinnen</h1>

      <p style={{ marginTop: "1rem", maxWidth: "800px" }}>
        Sparen ist die Basis jeder finanziellen Freiheit. Bevor investiert wird,
        müssen Ausgaben im Griff sein, Rücklagen aufgebaut und unnötige Kosten
        vermieden werden.
      </p>

      <ul style={{ marginTop: "1.5rem" }}>
        <li>✔ Fixkosten senken & Verträge optimieren</li>
        <li>✔ Notgroschen & Rücklagen aufbauen</li>
        <li>✔ Sparziele realistisch planen</li>
        <li>✔ Mehr Geld fürs Investieren freimachen</li>
      </ul>

      {/* Inhalte */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Beliebte Spar-Themen</h2>

        <div style={{ marginTop: "1.5rem" }}>
          <h3>Notgroschen aufbauen</h3>
          <p>
            Wie viel Rücklage ist sinnvoll, wo sollte das Geld liegen und warum
            ein Notgroschen wichtiger ist als jedes Investment.
          </p>
          <p style={{ opacity: 0.6 }}>(Artikel folgt)</p>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <h3>Fixkosten senken</h3>
          <p>
            Strom, Internet, Handy, Abos – so findest du versteckte
            Einsparpotenziale ohne Verzicht.
          </p>
          <p style={{ opacity: 0.6 }}>(Artikel folgt)</p>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <h3>Sparen vs. Investieren</h3>
          <p>
            Wann Sparen sinnvoll ist – und ab welchem Punkt Investieren die
            bessere Wahl wird.
          </p>
          <p style={{ opacity: 0.6 }}>(Artikel folgt)</p>
        </div>
      </section>

      {/* Monetarisierung */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Tools & Empfehlungen</h2>
        <p>
          In Zukunft findest du hier:
        </p>
        <ul>
          <li>✔ Haushaltsbuch-Tools</li>
          <li>✔ Vergleichsrechner für Strom & Versicherungen</li>
          <li>✔ Partnerangebote (Cashback, Konten, Apps)</li>
        </ul>
      </section>
    </main>
  );
}
