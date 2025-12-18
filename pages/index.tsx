import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = getAllPosts().slice(0, 6);

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <main className={styles.container}>
      <section className={styles.header}>
        <h1>Finanzielle Freiheit aufbauen – Schritt für Schritt</h1>
        <p>
          Verstehe Geld, Investieren & Versicherungen – einfach erklärt,
          unabhängig und ohne Bullshit.
        </p>
      </section>

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
                <span className={styles.readmore}>
                  Kategorie: {post.category}
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
