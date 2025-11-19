import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import CATEGORY_CONFIG from "../../config/categoriesConfig";
import styles from "../../styles/page.module.css";   // <- FIXED

export default function ArticlePage({ frontmatter, content, categoryData }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>{frontmatter.title}</h1>
        <p className={styles.meta}>
          {frontmatter.date} · {frontmatter.readingTime} Min. Lesezeit
        </p>
      </header>

      <article
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />

      <a className={styles.backlink} href={`/${categoryData.slug}`}>
        ← Zurück zu {categoryData.label}
      </a>
    </div>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const categories = fs.readdirSync(contentDir);

  let paths = [];

  categories.forEach((categoryFolder) => {
    const categoryPath = path.join(contentDir, categoryFolder);
    const files = fs.readdirSync(categoryPath);

    files.forEach((fileName) => {
      if (fileName.endsWith(".md")) {
        const slug = fileName.replace(".md", "");
        paths.push({
          params: {
            category: categoryFolder,
            slug: slug,
          },
        });
      }
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(
    process.cwd(),
    "content",
    params.category,
    `${params.slug}.md`
  );

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);

  const categoryData = CATEGORY_CONFIG[params.category] || {
    label: params.category,
    slug: params.category,
  };

  return {
    props: {
      frontmatter,
      content,
      categoryData,
    },
  };
}
