import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/page.module.css';

export default function PostPage({ frontmatter, content }) {
  if (!frontmatter) {
    return (
      <div className={styles.notFound}>
        <h1>404 – Artikel nicht gefunden</h1>
        <Link href="/">Zurück zur Startseite</Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{frontmatter.title} | FinanzFreedom</title>
        <meta name="description" content={frontmatter.description} />
      </Head>

      <main className={styles.articleContainer}>
        <h1 className={styles.articleTitle}>{frontmatter.title}</h1>
        <div
          className={styles.articleContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </>
  );
}

// Generiert alle verfügbaren Slugs aus /content
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false, // Wenn Artikel fehlt → 404
  };
}

// Liest den Inhalt des Artikels
export async function getStaticProps({ params: { slug } }) {
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join('content', slug + '.md'),
      'utf-8'
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      props: {
        frontmatter,
        content,
      },
    };
  } catch (error) {
    console.error('Fehler beim Laden des Artikels:', slug, error);
    return {
      notFound: true,
    };
  }
}
