import ArticleLayout from "../../components/ArticleLayout";

export default function Haushaltsbudget() {
  return (
    <ArticleLayout
      title="Haushaltsbudget erstellen (50-30-20 Regel)"
      intro="Ein Haushaltsbudget ist das Fundament für finanziellen Überblick. Es hilft dir, bewusst mit deinem Geld umzugehen, Sparpotenziale zu erkennen und langfristig Vermögen aufzubauen – ohne Verzicht auf Lebensqualität."
      image={{
        src: "/images/sparen/haushaltsbudget.jpg",
        alt: "Haushaltsbudget planen und Ausgaben strukturieren",
      }}
      backLink={{
        href: "/sparen",
        label: "Zur Sparen-Übersicht",
      }}
    >
      <section>
        <h2>Warum ein Haushaltsbudget so wichtig ist</h2>
        <ul>
          <li>Du weißt jederzeit, wohin dein Geld fließt</li>
          <li>Sparen passiert automatisch, nicht zufällig</li>
          <li>Finanzielle Ziele werden planbar</li>
          <li>Weniger Stress, mehr Kontrolle</li>
        </ul>
      </section>

      <section>
        <h2>Die 50-30-20 Regel einfach erklärt</h2>
        <ul>
          <li><strong>50 % Fixkosten</strong> – Miete, Strom, Versicherungen, Lebensmittel</li>
          <li><strong>30 % Lebensstil</strong> – Freizeit, Reisen, Hobbys, Shopping</li>
          <li><strong>20 % Sparen</strong> – Notgroschen, Investitionen, Rücklagen</li>
        </ul>
      </section>

      <section>
        <h2>So setzt du dein Budget Schritt für Schritt um</h2>
        <ol>
          <li>Nettoeinkommen aufschreiben</li>
          <li>Alle Fixkosten erfassen</li>
          <li>Variable Ausgaben realistisch schätzen</li>
          <li>Sparbetrag zuerst festlegen</li>
          <li>Monatlich überprüfen und anpassen</li>
        </ol>
      </section>

      <section>
        <h2>Typische Fehler vermeiden</h2>
        <ul>
          <li>❌ Sparen nur vom „Rest“</li>
          <li>❌ Fixkosten unterschätzen</li>
          <li>❌ Kein regelmäßiger Check</li>
          <li>❌ Zu komplizierte Systeme</li>
        </ul>
      </section>

      <section>
        <h2>Fazit</h2>
        <p>
          Ein Haushaltsbudget ist kein Korsett, sondern ein Werkzeug.
          Es gibt dir Freiheit, weil du Kontrolle über dein Geld hast.
        </p>
      </section>
    </ArticleLayout>
  );
}
