import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getAllPosts } from "../lib/getAllPosts";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="FinanzFreedom: Lerne, wie du dein Geld strukturiert investierst und langfristig Vermögen aufbaust – ohne Fachchinesisch und Verkaufsdruck."
        />
      </Head>

      {/* HERO-BEREICH */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.subheadline}>FINANZFREEDOM</p>
          <h1>
            Behalte deine Finanzen <span className={styles.highlight}>im Griff.</span>
          </h1>
          <p className={styles.description}>
            Lerne Schritt für Schritt, wie du dein Geld strukturierst, investierst
            und langfristig Vermögen aufbaust – ohne Fachchinesisch und Verkaufsdruck.
          </p>

          <div className={styles.buttons}>
            <Link href="/blog" className={styles.primaryBtn}>Jetzt starten</Link>
            <Link href="/ueber-uns" className={styles.secondaryBtn}>Mehr erfahren</Link>
          </div>
        </div>

        <div className={styles.dashboard}>
          <h3>Dein Finanz-Dashboard</h3>
          <div className={styles.statBoard}>
            <div className={styles.stat}>
              <h3>27.276 €</h3>
              <p>Vermögen (Beispiel)</p>
            </div>
            <div className={styles.stat}>
              <h3>450 €/Monat</h3>
              <p>Sparrate</p>
            </div>
            <div className={styles.stat}>
              <h3>2040</h3>
              <p>Ziel: Finanzielle Freiheit</p>
            </div>
          </div>
          <p className={styles.note}>Demo-Ansicht – später ergänzt mit echten Tools und Auswertungen.</p>
        </div>
      </section>

      {/* THEMENWELTEN */}
      <section className={styles.topics}>
        <h2>Themenwelten</h2>

        <div className={styles.topicGrid}>
          <div className={styles.topicCard}>
            <h3>Investieren</h3>
            <p>Alles über ETFs, Aktien und langfristigen Vermögensaufbau.</p>
            <Link href="/etfs">Weiterlesen →</Link>
          </div>

          <div className={styles.topicCard}>
            <h3>Versicherung</h3>
            <p>Welche Versicherungen wirklich wichtig sind – einfach erklärt.</p>
            <Link href="/versicherungen">Weiterlesen →</Link>
          </div>

          <div className={styles.topicCard}>
            <h3>Geld vermehren</h3>
            <p>Strategien, Tipps & Tools für mehr Wachstum deines Geldes.</p>
            <Link href="/geld-anlegen">Weiterlesen →</Link>
          </div>
        </div>
      </section>

      {/* NEUE ARTIKEL – AUTOMATISCH */}
      <section className={styles.latestArticles}>
        <h2>Neueste Artikel</h2>

        <div className={styles.articleGrid}>
          {posts.slice(0, 6).map((post) => (
            <div key={post.slug} className={styles.articleCard}>
              <h3>{post.title}</h3>
              <p>{post.description.slice(0, 120)}...</p>
              <Link href={`/${post.slug}`}>Weiterlesen →</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* DATEN LADEN – AUTOMATISCH */
export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
