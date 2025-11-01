import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/page.module.css';

// ---------- Hauptkomponente ----------
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

// ---------- Hilfsfunktion ----------
function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach((entry) => {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      getAllMarkdownFiles(entryPath, arrayOfFiles);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      arrayOfFiles.push(entryPath);
    }
  });

  return arrayOfFiles;
}

// ---------- getStaticPaths ----------
export async function getStaticPaths() {
  const files = getAllMarkdownFiles(path.join('content'));
  const paths = [];

  files.forEach((filePath) => {
    try {
      const relative = filePath
        .replace(/^content[\\/]/, '')
        .replace(/\.md$/, '');
      const segments = relative.split(/[\\/]/).filter(Boolean);

      if (segments.length > 0) {
        paths.push({ params: { slug: segments } });
      }
    } catch (err) {
      console.error('⚠️ Fehlerhafte Datei in getStaticPaths:', filePath, err);
    }
  });

  return {
    paths,
    fallback: false,
  };
}

// ---------- getStaticProps ----------
export async function getStaticProps({ params }) {
  try {
    const slugPath = Array.isArray(params.slug)
      ? params.slug.join('/')
      : params.slug;

    const allFiles = getAllMarkdownFiles(path.join('content'));
    const match = allFiles.find((file) => file.endsWith(`${slugPath}.md`));

    if (!match) return { notFound: true };

    const markdownWithMeta = fs.readFileSync(match, 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return { props: { frontmatter, content } };
  } catch (error) {
    console.error('Fehler beim Laden des Artikels:', error);
    return { notFound: true };
  }
}
