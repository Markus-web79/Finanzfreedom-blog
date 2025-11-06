import Head from "next/head";
import Link from "next/link";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="Lerne, wie dein Geld für dich arbeiten lässt – einfach, ehrlich und unabhängig. Finanzielle Freiheit beginnt mit Wissen."
        />
      </Head>

      {/* Hero-Bereich */}
      <Hero />

      {/* Hauptinhalt */}
      <main className={styles.main}>
        {Object.keys(posts).map((category) => (
          <section key={category} className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {category.replace("-", " ").toUpperCase()}
            </h2>

            <div className={styles.grid}>
              {posts[category].map((post) => (
                <div key={post.slug} className={styles.card}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  {/* ✅ Korrigierter Link */}
                  <Link href={`/${post.category}/${post.slug}/`} className={styles.readMore}>
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
