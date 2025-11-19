import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import CATEGORY_CONFIG from "../config/categoriesConfig";

export default function Home() {
  const categories = Object.values(CATEGORY_CONFIG);

  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="Lerne, wie du deine Finanzen optimierst, investierst und Vermögen aufbaust – klar, verständlich und ohne Bullshit."
        />
      </Head>

      {/* ================= HERO SECTION ================= */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.subheadline}>FINANZFREEDOM</p>

          <h1>
            Behalte deine Finanzen{" "}
            <span className={styles.highlight}>im Griff.</span>
          </h1>

          <p className={styles.description}>
            Lerne Schritt für Schritt, wie du dein Geld strukturierst,
            investierst und langfristig Vermögen aufbaust – ohne Fachchinesisch
            und ohne Verkaufsdruck.
          </p>

          <div className={styles.buttons}>
            <Link href="/investieren" className={styles.primaryBtn}>
              Jetzt starten
            </Link>
            <Link href="/ueber-uns" className={styles.secondaryBtn}>
              Mehr erfahren
            </Link>
          </div>
        </div>

        {/* ================= DASHBOARD PREVIEW ================= */}
        <div className={styles.dashboard}>
          <h3>Dein Finanz-Dashboard</h3>

          <div className={styles.card}>
            <div className={styles.stat}>
              <p>Vermögen</p>
              <h2>27.450 €</h2>
            </div>

            <div className={styles.stat}>
              <p>Sparrate</p>
              <h2>450 €/Monat</h2>
            </div>

            <div className={styles.stat}>
              <p>Ziel: Finanzielle Freiheit</p>
              <h2>2040</h2>
            </div>
          </div>

          <p className={styles.note}>
            Demo-Vorschau – später echtes Dashboard mit Tools, Analysen &
            Auswertungen.
          </p>
        </div>
      </section>

      {/* ================= THEMENWELTEN ================= */}
      <section className={styles.topics}>
        <h2>Themenwelten</h2>

        <div className={styles.topicGrid}>
          {categories.map((cat) => (
            <div key={cat.slug} className={styles.topicCard}>
              <h3>{cat.label}</h3>
              <p>{cat.heroSubtitle}</p>
              <Link href={`/${cat.slug}`}>Weiterlesen →</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
