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
          content="Unabhängiger Broker Vergleich: Kosten, Sparpläne, Sicherheit & Bedienung."
        />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Broker Vergleich</h1>
          <p>
            Finde den passenden Broker für ETFs & Aktien – unabhängig,
            verständlich und seriös.
          </p>
        </section>

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

        <section className={styles.cta}>
          <p>* Affiliate-Links folgen transparent & rechtssicher.</p>
        </section>

        <section style={{ textAlign: "center", marginTop: "50px" }}>
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
      <ul>
        <li><strong>Kosten:</strong> {costs}</li>
        <li><strong>Sparplan:</strong> {sparplan}</li>
        <li><strong>Sicherheit:</strong> {security}</li>
        <li><strong>Geeignet für:</strong> {suitable}</li>
      </ul>
    </div>
  );
}
