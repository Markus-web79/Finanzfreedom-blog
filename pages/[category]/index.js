import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import categoryConfig from '../../config/categoryConfig';

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
      <Link href="/">Zurück zur Startseite</Link>
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
  const categoryInfo = CATEGORY_CONFIG[category];

  const contentDir = path.join(process.cwd(), "content", category);
  let articles = [];

  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir);

    articles = files.map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(".md", ""),
        title: data.title || "Unbenannt",
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
