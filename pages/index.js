import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Finanzwissen, das dich wirklich weiterbringt</title>
        <meta
          name="description"
          content="Moderne Strategien für Vermögensaufbau, ETFs, Versicherungen & finanziellen Erfolg – verständlich erklärt."
        />
      </Head>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Finanzwissen, das dich wirklich weiterbringt</h1>
        <p>
          Moderne Strategien für Vermögensaufbau, ETFs, Versicherungen &
          finanziellen Erfolg – verständlich erklärt.
        </p>
        <Link href="#artikel" className={styles.cta}>
          Jetzt starten →
        </Link>
      </section>

      {/* ARTIKEL */}
      <section id="artikel" className={styles.articles}>
        <h2>Aktuelle Artikel</h2>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}   {/* ✅ FIX */}
              className={styles.card}
            >
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className={styles.readMore}>Weiterlesen →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
