import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts.slice(0, 6), // neueste 6 Artikel
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Finanzielle Freiheit aufbauen</title>
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <h1>Finanzielle Freiheit aufbauen – Schritt für Schritt</h1>
          <p>
            Verstehe Geld, Investieren & Versicherungen – einfach erklärt,
            unabhängig und ohne Bullshit.
          </p>
        </header>

        <section>
          <h2>Neueste Artikel</h2>

          <div className={styles.grid}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.card}
              >
                <h3 className={styles.title}>{post.title}</h3>

                {post.excerpt && (
                  <p className={styles.description}>{post.excerpt}</p>
                )}

                {post.category && (
                  <small className={styles.category}>
                    Kategorie: {post.category}
                  </small>
                )}

                <span className={styles.readmore}>
                  Artikel lesen →
                </span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Link href="/blog" className={styles.readmore}>
              → Alle Artikel ansehen
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
