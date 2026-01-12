import Link from "next/link";

export default function FixkostenSenken() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1.5rem" }}>
      
      {/* Zurück */}
      <Link href="/sparen" style={{ color: "#2dd4bf", textDecoration: "none" }}>
        ← Zurück zu Sparen
      </Link>

      {/* Überschrift */}
      <h1 style={{ marginTop: "1.5rem" }}>
        Fixkosten senken – dauerhaft mehr Geld zur Verfügung haben
      </h1>

      <p style={{ fontSize: "1.05rem", opacity: 0.9 }}>
        Fixkosten sind der größte Hebel, um dauerhaft Geld zu sparen – ohne
        Verzicht im Alltag. Wer hier optimiert, hat jeden Monat automatisch
        mehr Geld übrig, das investiert oder gespart werden kann.
      </p>

      <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

      {/* Abschnitt 1 */}
      <h2>Warum Fixkosten so entscheidend sind</h2>
      <p>
        Während variable Ausgaben (Essen gehen, Shopping, Freizeit) oft stark
        schwanken, laufen Fixkosten jeden Monat konstant weiter – häufig über
        Jahre. Genau hier liegt das Problem: Viele Verträge werden einmal
        abgeschlossen und danach nie wieder hinterfragt.
      </p>

      <p>
        Schon kleine Optimierungen können enorme Auswirkungen haben:
      </p>

      <ul>
        <li>50 € weniger Fixkosten = 600 € pro Jahr</li>
        <li>100 € weniger Fixkosten = 1.200 € pro Jahr</li>
        <li>Investiert über Jahrzehnte → fünfstellige Beträge</li>
      </ul>

      <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

      {/* Abschnitt 2 */}
      <h2>Diese Fixkosten solltest du zuerst prüfen</h2>

      <h3>1. Wohnen (Miete & Nebenkosten)</h3>
      <p>
        Wohnen ist meist der größte Kostenblock. Prüfe:
      </p>
      <ul>
        <li>Ist die Miete marktüblich?</li>
        <li>Stimmen die Nebenkostenabrechnungen?</li>
        <li>Gibt es günstigere Alternativen bei Strom & Gas?</li>
      </ul>

      <h3>2. Versicherungen</h3>
      <p>
        Viele Menschen sind über- oder falsch versichert. Besonders häufig:
      </p>
      <ul>
        <li>Zu teure Haftpflicht- oder Hausratversicherungen</li>
        <li>Unnötige Zusatzversicherungen</li>
        <li>Alte Verträge mit schlechten Konditionen</li>
      </ul>

      <p>
        Ein regelmäßiger Vergleich spart hier oft mehrere hundert Euro pro Jahr.
      </p>

      <h3>3. Mobilfunk & Internet</h3>
      <p>
        Viele zahlen noch Tarife, die längst überholt sind:
      </p>
      <ul>
        <li>Zu hohes Datenvolumen</li>
        <li>Alte Vertragslaufzeiten</li>
        <li>Teure Kombipakete</li>
      </ul>

      <h3>4. Abos & Mitgliedschaften</h3>
      <p>
        Streaming, Fitnessstudio, Apps, Software – oft laufen Abos weiter,
        obwohl sie kaum genutzt werden.
      </p>

      <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

      {/* Abschnitt 3 */}
      <h2>So gehst du systematisch vor</h2>

      <ol>
        <li>
          <strong>Alle Fixkosten auflisten</strong><br />
          Miete, Strom, Internet, Handy, Versicherungen, Abos
        </li>
        <li>
          <strong>Vergleichen & Alternativen prüfen</strong><br />
          Mindestens einmal pro Jahr
        </li>
        <li>
          <strong>Verträge kündigen oder wechseln</strong><br />
          Oft dauert das nur wenige Minuten
        </li>
        <li>
          <strong>Ersparnis nicht „verpulvern“</strong><br />
          Direkt sparen oder investieren
        </li>
      </ol>

      <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

      {/* Abschnitt 4 */}
      <h2>Fixkosten senken = finanzieller Hebel</h2>
      <p>
        Wer seine Fixkosten im Griff hat, braucht weniger Einkommen, um
        finanziell frei zu werden. Genau deshalb ist dieser Schritt so
        entscheidend – noch vor dem Investieren.
      </p>

      <p>
        Fixkosten senken bedeutet nicht Verzicht, sondern bewusste Entscheidungen
        und bessere Verträge.
      </p>

      <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

      {/* Weiterführend */}
      <h2>Wie geht es jetzt weiter?</h2>
      <p>
        Der nächste logische Schritt nach optimierten Fixkosten ist der Aufbau
        eines finanziellen Puffers.
      </p>

      <Link
        href="/sparen/grundlagen/notgroschen"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          color: "#2dd4bf",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        → Zum Artikel: Notgroschen aufbauen
      </Link>

    </main>
  );
}
