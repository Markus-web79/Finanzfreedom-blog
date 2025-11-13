import Link from "next/link";

export default function InvestierenPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
      <h1>💸 Investieren – Dein Weg zum Vermögensaufbau</h1>

      <p>
        Willkommen im Bereich <strong>Investieren</strong>!  
        Hier findest du alle wichtigen Artikel rund um ETFs, Aktien, 
        Sparpläne und moderne Investment-Strategien.
      </p>

      <p>
        Unser Ziel: Dir einfach verständlich zu zeigen,  
        wie du langfristig Vermögen aufbaust – ohne Stress und ohne 
        unnötige Risiken.
      </p>

      <h2>🚀 Starte jetzt</h2>
      <ul>
        <li>
          <Link href="/etfs">📘 ETF-Grundlagen</Link>
        </li>
        <li>
          <Link href="/geld-anlegen">💡 Geld sinnvoll anlegen</Link>
        </li>
        <li>
          <Link href="/geld-vermehren">📈 Geld vermehren</Link>
        </li>
      </ul>

      <p style={{ marginTop: "40px" }}>
        Falls du Fragen hast oder dir bestimmte Themen fehlen –  
        schreib mir jederzeit über die <Link href="/kontakt">Kontaktseite</Link>.
      </p>
    </main>
  );
}
