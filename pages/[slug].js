import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/ArticlePage.module.css";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function getStaticPaths() {
  const files = fs.readdirSync(CONTENT_DIR);

  const paths = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      params: {
        slug: file.replace(".md", ""),
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(CONTENT_DIR, `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data: frontmatter, content } = matter(fileContent);

  return {
    props: {
      frontmatter,
      content,
      slug: params.slug,
    },
  };
}

export default function ArticlePage({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} – FinanzFreedom</title>
        <meta
          name="description"
          content={
            frontmatter.description ||
            "Finanzwissen einfach & verständlich erklärt."
          }
        />
      </Head>

      <main className={styles.articleContainer}>
        <div className={styles.breadcrumb}>
          <Link href="/blog">← Zurück zum Blog</Link>
        </div>

        <h1 className={styles.title}>{frontmatter.title}</h1>

        {frontmatter.category && (
          <div className={styles.meta}>
            Kategorie: {frontmatter.category}
          </div>
        )}

        <article
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3>📊 ETF-Rechner nutzen</h3>
          <p>
            Berechne, wie viel Vermögen du mit regelmäßigen Sparraten aufbauen
            kannst.
          </p>
          <Link href="/rechner/etf" className={styles.ctaButton}>
            Jetzt starten →
          </Link>
        </div>
      </main>
    </>
  );
}
