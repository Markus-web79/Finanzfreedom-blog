import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/getAllPosts";
import styles from "../styles/Home.module.css"; // gleiche Karten wie Startseite

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>Blog – FinanzFreedom</title>
        <meta
          name="description"
          content="Alle FinanzFreedom-Artikel an einem Ort: klare Erklärungen, einfache Strategien und hilfreiche Tipps für den Aufbau deines Vermögens."
        />
      </Head>

      <main style={{ maxWidth: "1100px", margin: "3rem auto", padding: "0 1rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#00a3f5" }}>
          FinanzFreedom Blog
        </h1>

        {posts.length === 0 ? (
          <p style={{ textAlign: "center", color: "white" }}>
            Noch keine Artikel vorhanden.
          </p>
        ) : (
          <div className={styles.articleGrid}>
            {posts.map((post) => (
              <div className={styles.articleCard} key={post.slug}>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.metaDescription?.slice(0, 130) || post.description?.slice(0, 130)}…</p>
                </div>

                <Link href={`/${post.slug}`} style={{ marginTop: "1rem" }}>
                  Weiterlesen →
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(); // alles automatisch
  return { props: { posts } };
}
