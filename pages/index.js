import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import CategoryNav from "../components/CategoryNav";

export default function HomePage({ posts = {} }) {
  // Sicherheitsprüfung
  const safePosts = posts && typeof posts === "object" ? posts : {};

  return (
    <>
      <Head>
        <title>FinanzFreedom – Finanzielle Freiheit beginnt heute</title>
        <meta
          name="description"
          content="Lerne, wie du dein Geld für dich arbeiten lässt – mit Strategien, die wirklich funktionieren."
        />
      </Head>

      <Hero />
      <CategoryNav /> {/* 👈 Kategorie-Leiste hier */}

      <main className={styles.main}>
        {Object.keys(safePosts).map((category) => (
          <section key={category}>
            <h2 className={styles.sectionTitle}>
              {category.replace("-", " ").toUpperCase()}
            </h2>
            <div className={styles.cardsContainer}>
              {safePosts[category].map((post) => (
                <div key={post.slug} className={styles.card}>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <Link href={`/${post.category}/${post.slug}`} className={styles.readMore}>
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
