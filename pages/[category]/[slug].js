import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";
import Link from "next/link";
import styles from "../../styles/ArticlePage.module.css";  // ← FIX HIER

export default function ArticlePage({ article, category }) {
  return (
    <>
      <Head>
        <title>{article.title} – FinanzFreedom</title>
        <meta name="description" content={article.description} />
      </Head>

      <main className={styles.container}>
        <Link href={`/${category}`} className={styles.backBtn}>
          ← Zurück zur Übersicht
        </Link>

        <h1 className={styles.title}>{article.title}</h1>

        <p className={styles.meta}>
          {article.date && (
            <span>{new Date(article.date).toLocaleDateString("de-DE")}</span>
          )}
          {article.readingTime} Min. Lesezeit
        </p>

        <article
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const categories = fs
    .readdirSync("content")
    .filter((item) => fs.statSync(path.join("content", item)).isDirectory());

  let paths = [];

  categories.forEach((category) => {
    const folder = path.join("content", category);
    const files = fs.readdirSync(folder).filter((f) => f.endsWith(".md"));

    files.forEach((file) => {
      const filePath = path.join(folder, file);
      const data = matter(fs.readFileSync(filePath, "utf8"));
      const slug = data.data.slug || file.replace(".md", "");

      paths.push({
        params: { category, slug },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category, slug } = params;
  const filePath = path.join("content", category, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);
  const html = marked.parse(content);
  const readingTime = Math.ceil(content.split(" ").length / 200);

  return {
    props: {
      category,
      article: {
        ...data,
        html,
        readingTime,
      },
    },
  };
}
