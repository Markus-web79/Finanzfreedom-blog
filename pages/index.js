import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../lib/getAllPosts";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="Lerne intelligent zu investieren, Geld strategisch zu nutzen und Vermögen aufzubauen – klar, verständlich und unabhängig erklärt."
        />
      </Head>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Finanzwissen, das dich wirklich weiterbringt
          </h1>
          <p className={styles.heroSubtitle}>
            Moderne Strategien für Vermögensaufbau, ETFs, Versicherungen &
            finanziellen Erfolg – verständlich erklärt.
          </p>

          <Link href="#articles" className={styles.heroButton}>
            Jetzt starten →
          </Link>
        </div>
      </section>

      {/* ARTIKEL-BEREICH */}
      <main id="articles" className={styles.container}>
        <h2 className={styles.sectionTitle}>Aktuelle Artikel</h2>

        <div className={styles.grid}>
          {posts.map((post) => (
            <div key={post.slug} className={styles.card}>
              <h3>{post.title}</h3>
              <p>{post.description?.slice(0, 130) || "Spannender neuer Artikel."}</p>

              <Link href={`/${post.category}/${post.slug}`} className={styles.readMore}>
                Weiterlesen →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
