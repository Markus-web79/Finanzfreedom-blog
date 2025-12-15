import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

type Props = {
  title: string;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Baut NUR Blog-Slugs unter /blog/*
 * Keine Kollision mit /impressum, /kontakt etc.
 */
export async function getStaticPaths() {
  const slugs: string[] = [];

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.isFile() && e.name.endsWith(".md")) {
        slugs.push(e.name.replace(/\.md$/, ""));
      }
    }
  }

  walk(CONTENT_DIR);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  let found: string | null = null;

  function find(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) find(full);
      else if (e.isFile() && e.name === `${params.slug}.md`) {
        found = full;
      }
    }
  }

  find(CONTENT_DIR);

  if (!found) return { notFound: true };

  const raw = fs.readFileSync(found, "utf8");
  const { data, content } = matter(raw);

  return {
    props: {
      title: data.title || params.slug,
      content,
    },
  };
}

export default function BlogArticle({ title, content }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main style={{ maxWidth: 860, margin: "0 auto", padding: "32px 16px" }}>
        <h1>{title}</h1>
        {/* Robust & build-sicher: erst Text, Markdown kommt später */}
        <pre style={{ whiteSpace: "pre-wrap", lineHeight: 1.7 }}>
          {content}
        </pre>
      </main>
    </>
  );
}
