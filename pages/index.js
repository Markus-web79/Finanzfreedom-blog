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
          content="Lerne, wie du dein Geld strukturiert investierst und langfristig Vermögen aufbaust – ohne Fachchinesisch und Verkaufsdruck."
        />
      </Head>

      <main className={styles.main}>

        {/* HERO-BEREICH */}
        <section className={styles.hero}>
          <p className={styles.subheadline}>FINANZFREEDOM</p>

          <h1>
            Behalte deine Finanzen <span className={styles.highlight}>im Griff.</span>
          </h1>

          <p className={styles.description}>
            Lerne Schritt für Schritt, wie du dein Geld investierst und langfristig Vermögen aufbaust.
          </p>

          <div className={styles.buttons}>
            <Link href="/blog" className={styles.primaryBtn}>Jetzt starten</Link>
            <Link href="/ueber-uns" className={styles.secondaryBtn}>Mehr erfahren</Link>
          </div>
        </section>


        {/* NEUESTE ARTIKEL */}
        <section className={styles.latestArticles}>
          <h2>Neueste Artikel</h2>

          <div className={styles.grid}>
            {posts.slice(0, 6).map((post) => (
              <Link href={`/${post.slug}`} key={post.slug} className={styles.card}>
                
                {/* Kategorie */}
                <span className={styles.category}>
                  {post.category || "Allgemein"}
                </span>

                {/* Titel */}
                <h2>{post.title}</h2>

                {/* Short Description */}
                <p>{post.description?.slice(0, 120)}...</p>

                {/* Weiterlesen */}
                <span className={styles.readMore}>Weiterlesen →</span>

              </Link>
            ))}
          </div>
        </section>

      </main>
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
