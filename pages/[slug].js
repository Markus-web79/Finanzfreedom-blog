import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/page.module.css';

// 🔹 Hauptkomponente – Pflicht für Next.js
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

// 🔹 Hilfsfunktion: liest alle Markdown-Dateien (auch in Unterordnern)
function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllMarkdownFiles(filePath, arrayOfFiles);
    } else if (filePath.endsWith('.md')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// 🔹 Generiert alle Pfade wie /etfs/was-ist-ein-etf...
export async function getStaticPaths() {
  const files = getAllMarkdownFiles(path.join('content'));

  const paths = files.map((filePath) => {
    const relativePath = filePath
      .replace(/^content\//, '')
      .replace(/\.md$/, '');
    const segments = relativePath.split('/');
    return { params: { slug: segments } };
  });

  return {
    paths,
    fallback: false, // 404 wenn Artikel fehlt
  };
}

// 🔹 Liest den Inhalt basierend auf verschachteltem Slug
export async function getStaticProps({ params }) {
  try {
    const slugPath = Array.isArray(params.slug)
      ? params.slug.join('/')
      : params.slug;

    const allFiles = getAllMarkdownFiles(path.join('content'));
    const match = allFiles.find((file) => file.endsWith(`${slugPath}.md`));

    if (!match) {
      return { notFound: true };
    }

    const markdownWithMeta = fs.readFileSync(match, 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      props: { frontmatter, content },
    };
  } catch (error) {
    console.error('Fehler beim Laden des Artikels:', error);
    return { notFound: true };
  }
}
