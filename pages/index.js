import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Finanzen einfach erklärt</title>
        <meta
          name="description"
          content="Lerne, wie du dein Geld für dich arbeiten lässt – mit Strategien, die wirklich funktionieren."
        />
      </Head>

      <main className={styles.main}>
        <section>
          <h2 className={styles.sectionTitle}>Neueste Artikel</h2>

          <div className={styles.cardsContainer}>
            {Object.entries(posts)
              .flatMap(([category, articles]) => articles.slice(0, 3))
              .map((article) => (
                <div className={styles.card} key={article.slug}>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt || "Finanzwissen einfach erklärt."}</p>
                  <Link
                    href={`/${article.category}/${article.slug}`}
                    className={styles.readMore}
                  >
                    Weiterlesen →
                  </Link>
                </div>
              ))}
          </div>
        </section>

        {Object.entries(posts).map(([category, articles]) => (
          <section key={category}>
            <h2 className={styles.sectionTitle}>{category.toUpperCase()}</h2>
            <div className={styles.cardsContainer}>
              {articles.map((post) => (
                <div className={styles.card} key={post.slug}>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt || "Finanzwissen einfach erklärt."}</p>
                  <Link
                    href={`/${category}/${post.slug}`}
                    className={styles.readMore}
                  >
                    Weiterlesen →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
