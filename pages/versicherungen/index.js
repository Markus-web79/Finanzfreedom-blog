import Link from "next/link";
import BackLink from "../../components/BackLink";
import styles from "../../styles/CategoryPage.module.css";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";

export default function VersicherungenIndex() {
  return (
    <PageLayout title="Versicherungen">
      <p className="intro">
        Versicherungen sind kein Verkaufsprodukt, sondern ein Schutz vor
        existenziellen Risiken. Hier findest du unabhängige Erklärungen zu den
        wichtigsten Versicherungen – verständlich, ehrlich und ohne Verkaufsdruck.
      </p>

      <div className="cardGrid">
        <Link href="/versicherungen/privathaftpflicht" className="card">
          <h3>Privathaftpflichtversicherung</h3>
          <p>
            Die wichtigste Versicherung überhaupt. Schützt dich vor hohen
            Schadensersatzforderungen im Alltag.
          </p>
        </Link>

        <Link href="/versicherungen/hausrat" className="card">
          <h3>Hausratversicherung</h3>
          <p>
            Absicherung für alles, was du in deiner Wohnung besitzt – sinnvoll
            oder überflüssig? Klar erklärt.
          </p>
        </Link>

        <Link href="/versicherungen/krankenversicherung" className="card">
          <h3>Krankenversicherung</h3>
          <p>
            Gesetzlich oder privat? Unterschiede, Vor- und Nachteile verständlich
            erklärt.
          </p>
        </Link>

        <Link href="/versicherungen/berufsunfaehigkeit" className="card">
          <h3>Berufsunfähigkeitsversicherung</h3>
          <p>
            Einkommensabsicherung, wenn Arbeiten nicht mehr möglich ist – für wen
            sie wirklich wichtig ist.
          </p>
        </Link>
      </div>

      <div className="transparency">
        <p>
          <strong>Transparenz-Hinweis:</strong> FinanzFreedom empfiehlt
          Versicherungen unabhängig. Zukünftig können Vergleiche oder Empfehlungen
          Affiliate-Links enthalten – für dich entstehen dadurch keine Mehrkosten.
        </p>
      </div>

      <style jsx>{`
        .intro {
          max-width: 800px;
          margin-bottom: 2.5rem;
          line-height: 1.6;
          color: #cfd8dc;
        }

        .cardGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .card {
          display: block;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 14px;
          padding: 1.6rem;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .card:hover {
          transform: translateY(-3px);
          border-color: #19c6b6;
        }

        .card h3 {
          margin: 0 0 0.6rem 0;
          color: #ffffff;
        }

        .card p {
          margin: 0;
          color: #b0bec5;
          line-height: 1.5;
        }

        .transparency {
          max-width: 900px;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #9fb3bd;
          font-size: 0.95rem;
        }
      `}</style>
    </PageLayout>
  );
}
export default function Versicherungen() {
  return (
    <div className={styles.page}>
      <BackLink href="/" label="Zur Startseite" />

      <h1>Versicherungen – sinnvoll & verständlich</h1>
      <p className={styles.intro}>
        Welche Versicherungen brauchst du wirklich – und welche nicht?
      </p>

      <div className={styles.grid}>
        <Link href="/versicherungen/privathaftpflicht" className={styles.card}>
          <h3>Privathaftpflicht</h3>
          <p>Die wichtigste Versicherung überhaupt.</p>
        </Link>

        <div className={styles.card}><h3>Hausrat</h3></div>
        <div className={styles.card}><h3>Berufsunfähigkeit</h3></div>
        <div className={styles.card}><h3>Krankenversicherung</h3></div>
      </div>
    </div>
  );
}
