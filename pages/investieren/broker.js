import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Portal.module.css";

export default function BrokerVergleich() {
  return (
    <>
      <Head>
        <title>Broker Vergleich 2025 – FinanzFreedom</title>
        <meta
          name="description"
          content="Unabhängiger Broker Vergleich: Kosten, Sparpläne, Sicherheit & Bedienung – finde den passenden Broker für dich."
        />
      </Head>

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <h1>Broker Vergleich</h1>
          <p>
            Finde den passenden Broker für ETFs & Aktien – unabhängig,
            verständlich und ohne versteckte Verkaufsmaschen.
          </p>
        </section>

        {/* EINLEITUNG */}
        <section>
          <p style={{ maxWidth: "820px", margin: "0 auto 40px", opacity: 0.85 }}>
            Ein guter Broker ist die Grundlage für erfolgreiches Investieren.
            Unterschiede gibt es bei Kosten, Sparplänen, Bedienung und Sicherheit.
            Hier bekommst du einen ehrlichen Überblick.
          </p>
        </section>

        {/* VERGLEICH */}
        <section className={styles.grid}>
          <BrokerCard
            name="Trade Republic"
            costs="0 € pro Trade"
            sparplan="Kostenlos"
            security="Deutscher Broker"
            suitable="Einsteiger & Sparpläne"
          />

          <BrokerCard
            name="Scalable Capital"
            costs="0 € / 0,99 €"
            sparplan="Kostenlos"
            security="Deutscher Broker"
            suitable="ETF-Fokus"
          />

          <BrokerCard
            name="ING"
            costs="4,90 € + 0,25 %"
            sparplan="Kostenlos"
            security="Großbank"
            suitable="Langfristige Anleger"
          />
        </section>

        {/* HINWEIS */}
        <section className={styles.cta}>
          <p style={{ maxWidth: "720px", margin: "0 auto" }}>
            * Die Auswahl basiert auf Kosten, Angebot und Nutzerfreundlichkeit.
            Später werden hier ausführliche Tests & Vergleiche ergänzt.
          </p>
        </section>

        {/* BACK */}
        <section style={{ textAlign: "center", marginTop: "60px" }}>
          <Link href="/investieren">← Zurück zu Investieren</Link>
        </section>
      </main>
    </>
  );
}

function BrokerCard({ name, costs, sparplan, security, suitable }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <ul style={{ lineHeight: 1.9, opacity: 0.9 }}>
        <li><strong>Kosten:</strong> {costs}</li>
        <li><strong>Sparplan:</strong> {sparplan}</li>
        <li><strong>Sicherheit:</strong> {security}</li>
        <li><strong>Geeignet für:</strong> {suitable}</li>
      </ul>

      {/* Affiliate-Link kommt SPÄTER */}
      <p style={{ marginTop: "14px", opacity: 0.6 }}>
        Details & Erfahrungsbericht folgen
      </p>
    </div>
  );
}
