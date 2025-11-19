import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import CATEGORY_CONFIG from "../../config/categoriesConfig";

export default function CategoryPage({ categoryInfo, articles }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{categoryInfo.label}</h1>
      <p>{categoryInfo.heroSubtitle}</p>

      <h2>Artikel</h2>
      {articles.length === 0 && <p>Keine Artikel in dieser Kategorie.</p>}

      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/${categoryInfo.slug}/${article.slug}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>

      <br />
      <Link href="/">← Zurück zur Startseite</Link>
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

  const categoryInfo =
    CATEGORY_CONFIG[category] || { label: "Unbekannte Kategorie", slug: category };

  const categoryPath = path.join(process.cwd(), "content", category);
  let articles = [];

  if (fs.existsSync(categoryPath)) {
    const files = fs.readdirSync(categoryPath);

    articles = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const fileContent = fs.readFileSync(
          path.join(categoryPath, file),
          "utf8"
        );

        const { data } = matter(fileContent);

        return {
          slug: file.replace(".md", ""),
          title: data.title || file.replace(".md", ""),
        };
      });
  }

  return {
    props: {
      categoryInfo,
      articles,
    },
  };
}
