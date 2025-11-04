import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import { marked } from 'marked';

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
      </main>
    </>
  );
}

function getAllMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = getAllMarkdownFiles(contentDir);

  const paths = files.map((file) => {
    const slug = file
      .replace(contentDir + '/', '')
      .replace(/\.md$/, '')
      .split(path.sep);
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false, // <- wichtig: kein dynamischer Fallback bei static export
  };
}

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
        frontmatter: frontmatter || null,
        html,
      },
    };
  } catch (err) {
    console.error('Fehler beim Laden:', err);
    return {
      notFound: true,
    };
  }
}
