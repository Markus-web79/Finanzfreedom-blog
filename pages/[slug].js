import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/page.module.css';

// 🔹 React-Komponente: Pflicht für Next.js
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

// 🔹 Hilfsfunktion: sucht rekursiv nach allen Markdown-Dateien
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

// 🔹 Generiert alle Slugs aus /content (inkl. Unterordner)
export async function getStaticPaths() {
  const files = getAllMarkdownFiles(path.join('content'));

  const paths = files.map((filePath) => {
    const slug = path.basename(filePath, '.md');
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

// 🔹 Liest den Markdown-Inhalt
export async function getStaticProps({ params: { slug } }) {
  try {
    const allFiles = getAllMarkdownFiles(path.join('content'));
    const match = allFiles.find((file) => file.endsWith(`${slug}.md`));

    if (!match) {
      return { notFound: true };
    }

    const markdownWithMeta = fs.readFileSync(match, 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      props: { frontmatter, content },
    };
  } catch (error) {
    console.error('Fehler beim Laden des Artikels:', slug, error);
    return { notFound: true };
  }
}
