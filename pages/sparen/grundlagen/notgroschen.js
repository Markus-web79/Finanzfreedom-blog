import Link from "next/link";

export default function Notgroschen() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      {/* Back */}
      <Link
        href="/sparen"
        style={{
          color: "#2dd4bf",
          textDecoration: "none",
          fontSize: "0.9rem",
        }}
      >
        ← Zur Sparen-Übersicht
      </Link>

      {/* Headline */}
      <h1
        style={{
          color: "#ffffff",
          fontSize: "2.4rem",
          marginTop: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        Notgroschen aufbauen
      </h1>

      <p
        style={{
          color: "#cbd5f5",
          fontSize: "1.05rem",
          lineHeight: 1.7,
          marginBottom: "2.5rem",
        }}
      >
        Ein Notgroschen ist die Grundlage jeder finanziellen Freiheit. Er schützt
        dich vor Schulden, Stress und unüberlegten Entscheidungen, wenn
        unerwartete Ausgaben auftreten.
      </p>

      {/* SECTION */}
      <Section title="Was ist ein Notgroschen?">
        <p>
          Ein Notgroschen ist eine jederzeit verfügbare Geldreserve für
          ungeplante Ereignisse wie Autoreparaturen, kaputte Haushaltsgeräte,
          Jobverlust oder unerwartete Rechnungen.
        </p>
        <p>
          Er liegt **nicht investiert**, sondern sicher auf einem Tagesgeldkonto
          oder Girokonto – jederzeit verfügbar.
        </p>
      </Section>

      <Section title="Warum ist ein Notgroschen so wichtig?">
        <ul>
          <li>✔ verhindert Konsumschulden</li>
          <li>✔ schützt vor Panikverkäufen von ETFs</li>
          <li>✔ gibt dir finanzielle Sicherheit</li>
          <li>✔ ist die Basis für langfristiges Investieren</li>
        </ul>
      </Section>

      <Section title="Wie hoch sollte dein Notgroschen sein?">
        <p>
          Die klassische Empfehlung lautet:
        </p>
        <ul>
          <li>
            🔹 <strong>3 Monatsausgaben</strong> bei sicherem Einkommen
          </li>
          <li>
            🔹 <strong>6 Monatsausgaben</strong> bei Selbstständigen oder
            unsicherem Job
          </li>
        </ul>
        <p>
          Wichtig: Das ist eine Orientierung – wichtiger ist, dass du dich damit
          **sicher fühlst**.
        </p>
      </Section>

      <Section title="Wo solltest du den Notgroschen parken?">
        <ul>
          <li>✔ Tagesgeldkonto</li>
          <li>✔ separates Sparkonto</li>
          <li>✘ Aktien</li>
          <li>✘ ETFs</li>
          <li>✘ Kryptowährungen</li>
        </ul>
      </Section>

      <Section title="Wie baust du ihn stressfrei auf?">
        <ol>
          <li>Starte mit einem Ziel (z. B. 1.000 €)</li>
          <li>Lege einen festen Sparbetrag fest</li>
          <li>Automatisiere die Überweisung</li>
          <li>Erhöhe den Betrag schrittweise</li>
        </ol>
      </Section>

      <div
        style={{
          marginTop: "4rem",
          padding: "2rem",
          borderRadius: "12px",
          background: "#020617",
          border: "1px solid #1e293b",
        }}
      >
        <h3 style={{ color: "#ffffff", marginBottom: "0.5rem" }}>
          Merke dir:
        </h3>
        <p style={{ color: "#cbd5f5" }}>
          Erst Notgroschen. Dann investieren. Wer diese Reihenfolge einhält,
          bleibt langfristig ruhig – auch in Krisen.
        </p>
      </div>
    </main>
  );
}

/* ========================= */

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          color: "#ffffff",
          fontSize: "1.5rem",
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          color: "#cbd5f5",
          lineHeight: 1.7,
          fontSize: "1rem",
        }}
      >
        {children}
      </div>
    </section>
  );
}
