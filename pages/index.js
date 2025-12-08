import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/getAllPosts";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="Lerne, wie du dein Geld strukturiert investierst und langfristig Vermögen aufbaust – ohne Fachchinesisch."
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>FinanzFreedom</h1>
        <p className={styles.subtitle}>
          Finanzwissen einfach erklärt. Starte jetzt.
        </p>

        <div className={styles.grid}>
          {posts.map((post) => (
            <div key={post.slug} className={styles.card}>
              <h2>{post.title}</h2>
              <p>{post.description?.slice(0, 120) || ""}...</p>
              <Link href={`/${post.slug}`} className={styles.readmore}>
                Weiterlesen →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
