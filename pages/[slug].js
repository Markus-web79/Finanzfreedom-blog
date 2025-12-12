import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import styles from "../styles/ArticlePage.module.css";

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(dir);

  const paths = files.map((file) => ({
    params: { slug: file.replace(".md", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    props: {
      title: data.title || params.slug,
      description: data.description || "",
      content,
    },
  };
}

export default function Article({ title, description, content }) {
  return (
    <>
      <Head>
        <title>{title} – FinanzFreedom</title>
        <meta name="description" content={description} />
      </Head>

      <article className={styles.article}>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </>
  );
}
