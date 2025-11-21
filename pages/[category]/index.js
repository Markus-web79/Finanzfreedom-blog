import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import CATEGORY_CONFIG from "../../config/categoryConfig";
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
    params: { category: cat }
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryKey = params.category;
  const categoryInfo = CATEGORY_CONFIG[categoryKey];

  const contentDir = path.join(process.cwd(), "content", categoryKey);

  let articles = [];

  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir);

    articles = files.map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data: frontmatter } = matter(fileContent);

      return {
        title: frontmatter.title || filename.replace(".md", ""),
        slug: filename.replace(".md", "")
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
