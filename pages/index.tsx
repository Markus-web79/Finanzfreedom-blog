import Link from "next/link";
import { getAllPosts } from "../lib/posts";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const posts = getAllPosts().filter(
    (post) => post.slug && post.slug !== "README"
  );

  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <main className={styles.container}>
      <section className={styles.grid}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            legacyBehavior
          >
            <a className={styles.card}>
              <h2 className={styles.title}>{post.title}</h2>

              {post.excerpt && (
                <p className={styles.description}>{post.excerpt}</p>
              )}

              {post.category && (
                <small className={styles.readmore}>
                  Kategorie: {post.category}
                </small>
              )}
            </a>
          </Link>
        ))}
      </section>
    </main>
  );
}
