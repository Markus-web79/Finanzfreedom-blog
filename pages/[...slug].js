// pages/[slug].js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";

export default function Post({ frontmatter, content }) {
  if (!frontmatter) return <h1>404 – Artikel nicht gefunden</h1>;

  return (
    <>
      <Head>
        <title>{frontmatter.title} | FinanzFreedom</title>
        <meta name="description" content={frontmatter.description || ""} />
      </Head>
      <main className="article-container">
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const categories = fs.readdirSync(contentDir);

  const paths = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const files = fs.readdirSync(categoryPath);
    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      const filePath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data: frontmatter } = matter(fileContent);
      if (frontmatter.slug) {
        paths.push({ params: { slug: frontmatter.slug } });
      }
    }
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const contentDir = path.join(process.cwd(), "content");
  const categories = fs.readdirSync(contentDir);

  for (const category of categories) {
    const categoryPath = path.join(contentDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const files = fs.readdirSync(categoryPath);
    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      const filePath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data: frontmatter, content } = matter(fileContent);
      if (frontmatter.slug === params.slug) {
        return { props: { frontmatter, content } };
      }
    }
  }

  return { notFound: true };
}
