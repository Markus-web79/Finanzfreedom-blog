import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/getAllPosts";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen dein weg zur  Freiheit</title>
        <meta
          name="description"
          content="Lerne, wie du dein Geld strukturiert investierst und langfristig Vermögen aufbaust – ohne Fachchinesisch. FinanzFreedom macht Finanzwissen einfach."
        />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>Aktuelle Artikel</h1>

        <div className={styles.grid}>
          {posts.map((post) => (
            <div key={post.slug} className={styles.card}>
              <h2>{post.title}</h2>

              <p className={styles.description}>
                {post.description?.slice(0, 120) || "Spannender neuer Artikel."}
              </p>

              <Link
                href={`/${post.category}/${post.slug}`}
                className={styles.readmore}
              >
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
