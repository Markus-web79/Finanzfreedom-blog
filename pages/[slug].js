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

export async function getStaticPaths() {
  const fs = require("fs");
  const path = require("path");

  const blocked = ["datenschutz", "impressum", "kontakt"];
  const files = fs.readdirSync(path.join(process.cwd(), "content"));

  const paths = files
    .map(f => f.replace(".md", ""))
    .filter(slug => !blocked.includes(slug))
    .map(slug => ({
      params: { slug }
    }));

  return {
    paths,
    fallback: false
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
