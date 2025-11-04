import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/page.module.css';
import { mdToHtml } from '../lib/markdownToHtml';

// ---------- React-Komponente (Pflicht für Next.js)
export default function PostPage({ frontmatter, html }) {
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
        <meta name="description" content={frontmatter.description || ''} />
      </Head>

      <main className={styles.articleContainer}>
        <h1 className={styles.articleTitle}>{frontmatter.title}</h1>

        <article
          className={styles.articleContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </>
  );
}

// ---------- Hilfsfunktion: rekursiv alle .md-Dateien finden
function getAllMarkdownFiles(dir, bag = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) getAllMarkdownFiles(p, bag);
    else if (e.isFile() && e.name.endsWith('.md')) bag.push(p);
  }
  return bag;
}

// ---------- Slug-Generierung für alle Inhalte
export async function getStaticPaths() {
  const files = getAllMarkdownFiles(path.join('content'));
  const paths = files.map((file) => {
    const relative = file.replace(/^content[\\/]/, '').replace(/\.md$/, '');
    const segments = relative.split(/[\\/]/).filter(Boolean);
    return { params: { slug: segments } };
  });

  return { paths, fallback: false };
}

// ---------- Artikel-Daten lesen & Markdown in HTML umwandeln
export async function getStaticProps({ params }) {
  try {
    const slugPath = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
    const all = getAllMarkdownFiles(path.join('content'));
    const match = all.find((f) => f.endsWith(`${slugPath}.md`));
    if (!match) return { notFound: true };

    const raw = fs.readFileSync(match, 'utf-8');
    const { data: frontmatter, content } = matter(raw);
    const html = await mdToHtml(content);

    return { props: { frontmatter: frontmatter || null, html } };
  } catch (err) {
    console.error('Fehler beim Laden des Artikels:', err);
    return { notFound: true };
  }
}
