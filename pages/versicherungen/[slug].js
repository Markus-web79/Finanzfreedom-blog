import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import { marked } from "marked";
import styles from "../../styles/Article.module.css";

export default function VersicherungArticle({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | FinanzFreedom</title>
        <meta
          name="description"
          content={frontmatter.description || frontmatter.title}
        />
      </Head>

      <main className={styles.wrapper}>
        {/* Back */}
        <Link href="/versicherungen" className={styles.back}>
          ← Zurück zu Versicherungen
        </Link>

        {/* Header */}
        <h1>{frontmatter.title}</h1>

        {frontmatter.intro && (
          <p className={styles.intro}>{frontmatter.intro}</p>
        )}

        {/* Content */}
        <article
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* CTA Box */}
        <div className={styles.cta}>
          <h3>👉 Nächster Schritt</h3>
          <p>
            In den nächsten Schritten zeigen wir dir konkrete Tarifvergleiche,
            Empfehlungen und worauf du beim Abschluss achten solltest.
          </p>
          <p style={{ opacity: 0.8 }}>
            (Affiliate-Links & Vergleiche folgen)
          </p>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content/versicherungen");
  const files = fs.readdirSync(dir);

  const paths = files.map((file) => ({
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
  const filePath = path.join(
    process.cwd(),
    "content/versicherungen",
    `${params.slug}.md`
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    props: {
      frontmatter: data,
      content: marked.parse(content),
    },
  };
}
