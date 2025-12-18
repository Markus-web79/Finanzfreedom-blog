import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../lib/posts";

type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
};

type Props = {
  posts: Post[];
};

export async function getStaticProps() {
  const posts = getAllPosts()
    .filter((post) => post.slug && post.slug !== "README")
    .slice(0, 6);

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: Props) {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <header className={styles.header}>
        <h1>Finanzielle Freiheit aufbauen – Schritt für Schritt</h1>
        <p>
          Verstehe Geld, Investieren & Versicherungen – einfach erklärt,
          unabhängig und ohne Bullshit.
        </p>
      </header>

      {/* ARTIKEL */}
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
                <span className={styles.category}>
                  Kategorie: {post.category}
                </span>
              )}
            </Link>
          ))}
        </div>

        <Link href="/blog" className={styles.allArticles}>
          → Alle Artikel ansehen
        </Link>
      </section>
    </main>
  );
}
