import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Head from 'next/head';
import Link from 'next/link';

export default function PostPage({ frontmatter, html }) {
  if (!frontmatter) {
    return (
      <div style={{ color: 'white', textAlign: 'center', padding: '4rem' }}>
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
      <main style={{ maxWidth: '800px', margin: '2rem auto', color: 'white' }}>
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <p style={{ marginTop: '2rem' }}>
          <Link href="/">← Zurück zur Startseite</Link>
        </p>
      </main>
    </>
  );
}

// 🔍 Alle Markdown-Dateien in content/ rekursiv finden
function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

// 🔧 Pfade für alle Artikel erzeugen
export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = getAllMarkdownFiles(contentDir);

  const paths = files.map((file) => {
    const relativePath = path.relative(contentDir, file);
    const slugArray = relativePath.replace(/\.md$/, '').split(path.sep);
    return { params: { slug: slugArray } };
  });

  return { paths, fallback: false };
}

// 🔧 Daten eines Artikels laden
export async function getStaticProps({ params }) {
  try {
    const slugPath = Array.isArray(params.slug)
      ? params.slug.join('/')
      : params.slug;

    const fullPath = path.join(process.cwd(), 'content', `${slugPath}.md`);
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const { data: frontmatter, content } = matter(raw);
    const html = marked.parse(content);

    return {
      props: {
        frontmatter,
        html,
      },
    };
  } catch (error) {
    console.error('❌ Fehler beim Laden:', error);
    return { notFound: true };
  }
}
