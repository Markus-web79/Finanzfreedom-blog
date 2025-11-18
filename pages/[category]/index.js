import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CATEGORY_CONFIG } from "../../config/categoriesConfig";
import styles from "../../styles/CategoryPage.module.css";
import Link from "next/link";

export default function CategoryPage({ categoryData, articles }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <h1>{categoryData.heroTitle}</h1>
        <p>{categoryData.heroSubtitle}</p>
      </header>

      <section className={styles.list}>
        {articles.length === 0 && <p>Keine Artikel in dieser Kategorie gefunden.</p>}

        {articles.map((article) => (
          <Link
            href={`/${categoryData.slug}/${article.slug}`}
            key={article.slug}
            className={styles.card}
          >
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <span className={styles.read}>Weiterlesen →</span>
          </Link>
        ))}
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const categories = Object.keys(CATEGORY_CONFIG);

  const paths = categories.map((cat) => ({
    params: { category: cat },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = params.category;

  const folderPath = path.join(process.cwd(), "content", category);

  const files = fs.readdirSync(folderPath);

  const articles = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fileContent = fs.readFileSync(path.join(folderPath, file), "utf8");
      const { data: frontmatter } = matter(file);
      const slug = file.replace(".md", "");

      return {
        slug,
        title: frontmatter.title || "Ohne Titel",
        description: frontmatter.description || "",
        date: frontmatter.date || null,
      };
    });

  return {
    props: {
      categoryData: CATEGORY_CONFIG[category],
      articles,
    },
  };
}
