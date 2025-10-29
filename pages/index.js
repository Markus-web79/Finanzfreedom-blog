import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta
          name="description"
          content="Lerne, dein Geld sinnvoll anzulegen und finanzielle Freiheit zu erreichen. Einfach erklärt, ehrlich und seriös."
        />
      </Head>

      <Header />
      <Hero />

      <main className={styles.container} id="artikel">
        <h2 className={styles.sectionTitle}>Aktuelle Artikel</h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/${post.slug}`} className={styles.card}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className={styles.link}>Mehr lesen →</span>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} FinanzFreedom – Alle Rechte vorbehalten.
      </footer>
    </>
  );
}

// 🔍 Artikel aus dem Content-Ordner laden
export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(contentDir);

  const posts = filenames
    .filter((file) => file.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace('.md', ''),
        title: data.title || 'Unbenannter Artikel',
        excerpt: data.excerpt || 'Ein spannender Artikel rund um Finanzen.',
      };
    });

  return {
    props: {
      posts,
    },
  };
}
