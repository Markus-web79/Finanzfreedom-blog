import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="Lerne, wie du deine Finanzen optimierst, investierst und Vermögen aufbaust – klar, verständlich und ohne Bullshit."
        />
      </Head>

      {/* HERO SECTION */}
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
              Jetzt loslegen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
