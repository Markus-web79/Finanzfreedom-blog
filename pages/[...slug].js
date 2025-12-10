import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/ArticlePage.module.css";

export default function ArticlePage({ frontmatter, html, category }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} – FinanzFreedom</title>
        <meta
          name="description"
          content={frontmatter.description || "Finanzwissen einfach erklärt."}
        />
      </Head>

      <main className={styles.container}>
        <Link href={`/${category}`} className={styles.backLink}>
          ← Zur Kategorie
        </Link>

        <h1 className={styles.title}>{frontmatter.title}</h1>

        <p className={styles.meta}>
          Kategorie: {category.charAt(0).toUpperCase() + category.slice(1)}
        </p>

        <article
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const categories = fs.readdirSync(contentDir).filter((d) =>
    fs.statSync(path.join(contentDir, d)).isDirectory()
  );

  let paths = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDir, category);
    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      if (!file.endsWith(".md")) continue;

      const slug = file.replace(".md", "");
      paths.push({ params: { category, slug } });
    }
  }

return (
  <>
    <Head>
      <title>{frontmatter.title} – FinanzFreedom</title>
      <meta name="description" content={frontmatter.description || "Finanzwissen einfach erklärt"} />
    </Head>

    <main className={styles.articleContainer}>
      
      <div className={styles.breadcrumb}>
        <Link href={`/${category}`}>← Zurück zu {category}</Link>
      </div>

      <h1 className={styles.title}>{frontmatter.title}</h1>

      <div className={styles.meta}>
        Kategorie: {category}  
      </div>

      <article
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* CTA Box */}
      <div className={styles.ctaBox}>
        <h3>💡 Tipp: Nutze unseren ETF-Rechner</h3>
        <p>Berechne, wie viel Vermögen du mit regelmäßigen Sparraten aufbauen kannst.</p>
        <a href="/rechner/etf" className={styles.ctaButton}>Jetzt starten →</a>
      </div>

    </main>
  </>
);
