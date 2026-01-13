import ArticleLayout from "@/components/ArticleLayout";

export default function Haushaltsbudget() {
  return (
    <ArticleLayout
      title="Haushaltsbudget erstellen (50-30-20 Regel)"
      intro="Ein Haushaltsbudget ist das Fundament für finanziellen Überblick. Mit der 50-30-20 Regel bringst du Ordnung in dein Geld – ohne dich kaputt zu sparen."
      backLink={{ href: "/sparen", label: "Zur Sparen-Übersicht" }}
    >
      <h2>Warum ein Haushaltsbudget so wichtig ist</h2>
      <ul>
        <li>Du weißt jederzeit, wohin dein Geld fließt</li>
        <li>Sparen passiert automatisch – nicht zufällig</li>
        <li>Finanzielle Ziele werden planbar</li>
        <li>Weniger Stress, mehr Kontrolle</li>
      </ul>

      <h2>Die 50-30-20 Regel einfach erklärt</h2>
      <p>Teile dein Nettoeinkommen grob so auf:</p>
      <ul>
        <li>
          <strong>50 % Fixkosten</strong> – Miete, Strom, Versicherungen,
          Lebensmittel
        </li>
        <li>
          <strong>30 % Lebensstil</strong> – Freizeit, Reisen, Hobbys, Shopping
        </li>
        <li>
          <strong>20 % Sparen</strong> – Notgroschen, Investitionen, Rücklagen
        </li>
      </ul>

      <h2>So setzt du dein Budget Schritt für Schritt um</h2>
      <ol>
        <li>Nettoeinkommen notieren</li>
        <li>Fixkosten erfassen</li>
        <li>Variable Ausgaben realistisch schätzen</li>
        <li>Sparbetrag zuerst festlegen</li>
        <li>Monatlich prüfen und anpassen</li>
      </ol>

      <h2>Typische Fehler vermeiden</h2>
      <ul>
        <li>
          <strong>Sparen nur vom „Rest“</strong> → zuerst sparen, dann ausgeben
        </li>
        <li>
          <strong>Fixkosten unterschätzen</strong> → Verträge regelmäßig prüfen
        </li>
        <li>
          <strong>Kein regelmäßiger Check</strong> → 10 Minuten pro Monat reichen
        </li>
        <li>
          <strong>Zu komplizierte Systeme</strong> → einfach starten
        </li>
      </ul>

      <h2>Fazit</h2>
      <p>
        Ein Haushaltsbudget ist kein Korsett, sondern ein Werkzeug. Es gibt dir
        Freiheit, weil du die Kontrolle über dein Geld zurückholst.
      </p>
    </ArticleLayout>
  );
}
