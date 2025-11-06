import Head from 'next/head';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getAllPosts } from '../lib/getAllPosts';

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function Home({ posts }) {
  // Nach Kategorie gruppieren
  const grouped = posts.reduce((acc, post) => {
    if (!acc[post.category]) acc[post.category] = [];
    acc[post.category].push(post);
    return acc;
  }, {});

  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="Lerne, wie du dein Geld für dich arbeiten lässt – einfach, ehrlich und unabhängig. Finanzielle Freiheit beginnt mit Wissen."
        />
      </Head>

      {/* Hero-Bereich */}
      <Hero />

      {/* Hauptinhalt */}
      <main className={styles.main}>
        {Object.keys(grouped).map((category) => (
          <section key={category} className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {category.replace('-', ' ').toUpperCase()}
            </h2>

            <div className={styles.grid}>
              {grouped[category].map((post) => (
                <div key={post.slug} className={styles.card}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                 <Link href={`/${post.category}/${post.slug}/`}>
  Weiterlesen →
</Link>
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
