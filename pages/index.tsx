import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Finanzielle Freiheit Schritt für Schritt</title>
        <meta
          name="description"
          content="Verstehe Geld, Investieren & Versicherungen – einfach erklärt, unabhängig und ohne Bullshit."
        />
      </Head>

      <main className={styles.container}>
        <h1>Neueste Artikel</h1>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.card}
            >
              <div className={styles.title}>{post.title}</div>

              {post.excerpt && (
                <div className={styles.excerpt}>{post.excerpt}</div>
              )}

              {post.category && (
                <div className={styles.category}>
                  Kategorie: {post.category}
                </div>
              )}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

/* ===== STATIC DATA ===== */
export async function getStaticProps() {
  const posts = getAllPosts().filter(
    (post) => post.slug && post.slug !== "README"
  );

  return {
    props: {
      posts,
    },
  };
}
